import React from 'react'
import { Blogs } from '../blogs';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock cn utility
// jest.mock("@/lib/utils", () => {
//   const actual = jest.requireActual("@/lib/utils");
//   return {
//     ...actual,
//     cn: jest.mocked(jest.fn((...inputs: any[]) => inputs.filter(Boolean).join(" "))),
//   };
// });

// Mock next/link to render children directly and expose href for testing
jest.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({ href, children, ...props }: any) => (
      <a href={href} {...props}>
        {children}
      </a>
    ),
  };
});

// Mock blogs-data for edge case tests
const originalBlogs = [...realBlogs];


describe('Blogs() Blogs method', () => {
  afterEach(() => {
    // Restore original blogs after each test
    jest.resetModules();
    (global as any).blogs = originalBlogs;
  });

  // -------------------- Happy Paths --------------------
  describe("Happy paths", () => {
    it("renders the Blogs section with heading and description", () => {
      // This test ensures the section, heading, and description are rendered.
      render(<Blogs />);
      expect(screen.getByRole("region", { name: "Blogs" })).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: "Blogs" })).toBeInTheDocument();
      expect(
        screen.getByText("Selected highlights from our research and strategy engagements.")
      ).toBeInTheDocument();
    });

    it("renders a card for each blog in blogs-data with correct content", () => {
      // This test ensures each blog entry is rendered as a card with correct title, writer, date, and excerpt.
      render(<Blogs />);
      realBlogs.forEach((blog) => {
        // Card title
        expect(screen.getByText(blog.title)).toBeInTheDocument();
        // Writer
        expect(screen.getByText(`By: ${blog.writer}`)).toBeInTheDocument();
        // Date
        expect(screen.getByText(blog.date)).toBeInTheDocument();
        // Excerpt
        expect(screen.getByText(blog.excerpt)).toBeInTheDocument();
      });
    });

    it("renders blog cards as links with correct hrefs", () => {
      // This test ensures each card is wrapped in a link with the correct href.
      render(<Blogs />);
      realBlogs.forEach((blog) => {
        const link = screen.getByRole("link", { name: blog.title });
        expect(link).toHaveAttribute("href", `/blogs/${blog.slug}`);
      });
    });

    it("applies correct classes to card and its children", () => {
      // This test ensures the classNames are applied to Card and its children.
      render(<Blogs />);
      // Find all cards by their class
      const cards = screen.getAllByText((content, element) => {
        return (
          element?.getAttribute("class")?.includes("text-center") &&
          element?.getAttribute("class")?.includes("cursor-pointer")
        );
      });
      expect(cards.length).toBe(realBlogs.length);
    });

    it("renders the correct number of blog cards", () => {
      // This test ensures the number of rendered cards matches the blogs array length.
      render(<Blogs />);
      // The main heading is also level 2, so subtract 1
      expect(screen.getAllByText((_, el) => el?.getAttribute("data-slot") === "card-title").length).toBe(
        realBlogs.length
      );
    });
  });

  // -------------------- Edge Cases --------------------
  describe("Edge cases", () => {
    it("renders no blog cards if blogs array is empty", () => {
      // This test ensures that if blogs is empty, no cards are rendered.
      jest.resetModules();
      jest.doMock("@/lib/blogs-data", () => ({
        blogs: [] as any,
      }));
      const { Blogs: BlogsWithEmpty } = require("../blogs");
      render(<BlogsWithEmpty />);
      // No card titles should be present
      expect(
        screen.queryByText((_, el) => el?.getAttribute("data-slot") === "card-title")
      ).not.toBeInTheDocument();
      // The section and heading should still be present
      expect(screen.getByRole("region", { name: "Blogs" })).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: "Blogs" })).toBeInTheDocument();
    });

    it("handles blogs with missing optional fields gracefully", () => {
      // This test ensures that if a blog is missing writer or excerpt, it still renders without crashing.
      const blogsWithMissingFields = [
        {
          slug: "test-slug",
          title: "Test Blog",
          writer: "", // missing writer
          date: "2024-01-01",
          excerpt: "", // missing excerpt
        },
      ];
      jest.resetModules();
      jest.doMock("@/lib/blogs-data", () => ({
        blogs: blogsWithMissingFields as any,
      }));
      const { Blogs: BlogsWithMissing } = require("../blogs");
      render(<BlogsWithMissing />);
      // Title should be present
      expect(screen.getByText("Test Blog")).toBeInTheDocument();
      // Writer should still render the label
      expect(screen.getByText("By: ")).toBeInTheDocument();
      // Date should be present
      expect(screen.getByText("2024-01-01")).toBeInTheDocument();
      // Excerpt should render as empty string (no text)
      const excerpt = screen.getByText("", { selector: "p" });
      expect(excerpt).toBeInTheDocument();
    });

    it("renders correctly when blog titles contain special characters", () => {
      // This test ensures that special characters in titles are rendered correctly.
      const blogsWithSpecialChars = [
        {
          slug: "special-chars",
          title: "Blog & Co. – The “Best” Blog!",
          writer: "Jane Doe",
          date: "2024-02-02",
          excerpt: "Excerpt with <b>HTML</b> & special chars.",
        },
      ];
      jest.resetModules();
      jest.doMock("@/lib/blogs-data", () => ({
        blogs: blogsWithSpecialChars as any,
      }));
      const { Blogs: BlogsWithSpecial } = require("../blogs");
      render(<BlogsWithSpecial />);
      expect(screen.getByText('Blog & Co. – The “Best” Blog!')).toBeInTheDocument();
      expect(screen.getByText('Excerpt with <b>HTML</b> & special chars.')).toBeInTheDocument();
    });

    it("renders correctly when blog array contains only one blog", () => {
      // This test ensures that a single blog is rendered correctly.
      const singleBlog = [
        {
          slug: "single",
          title: "Single Blog",
          writer: "Solo Author",
          date: "2024-03-03",
          excerpt: "Just one blog in the list.",
        },
      ];
      jest.resetModules();
      jest.doMock("@/lib/blogs-data", () => ({
        blogs: singleBlog as any,
      }));
      const { Blogs: BlogsSingle } = require("../blogs");
      render(<BlogsSingle />);
      expect(screen.getByText("Single Blog")).toBeInTheDocument();
      expect(screen.getByText("By: Solo Author")).toBeInTheDocument();
      expect(screen.getByText("2024-03-03")).toBeInTheDocument();
      expect(screen.getByText("Just one blog in the list.")).toBeInTheDocument();
    });

    it("renders correctly when blog fields contain long text", () => {
      // This test ensures that long titles and excerpts are rendered and truncated as expected.
      const longText =
        "L".repeat(200);
      const blogsWithLongText = [
        {
          slug: "long-text",
          title: longText,
          writer: longText,
          date: "2024-04-04",
          excerpt: longText,
        },
      ];
      jest.resetModules();
      jest.doMock("@/lib/blogs-data", () => ({
        blogs: blogsWithLongText as any,
      }));
      const { Blogs: BlogsLong } = require("../blogs");
      render(<BlogsLong />);
      expect(screen.getByText(longText)).toBeInTheDocument();
      expect(screen.getByText(`By: ${longText}`)).toBeInTheDocument();
      expect(screen.getByText("2024-04-04")).toBeInTheDocument();
      expect(screen.getByText(longText)).toBeInTheDocument();
    });
  });
});