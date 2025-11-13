# TODO: Enhance Case Study Section with Cards and Functionalities

## Tasks to Complete

- [ ] Update `components/case-study-section.tsx`:
  - Add `slug` field to each case study object (generate from title: lowercase, replace spaces with hyphens).
  - Replace `<a href="#">` with Next.js `Link` component linking to `/case-studies/${study.slug}`.
  - Add a "Read More" button inside each card for better UX.
  - Enhance card styling using `components/ui/card.tsx` for a more polished look (e.g., use Card, CardHeader, CardContent, etc.).
  - Ensure cards are responsive and visually appealing.

- [ ] Create `app/case-studies/[slug]/page.tsx`:
  - Implement dynamic routing to display individual case study details.
  - Use `params.slug` to find the matching case study from the array.
  - Render full case study: title, writer, date, image, and full description (handle HTML content properly).
  - Add navigation back to the case studies list.
  - Handle case where slug is not found (e.g., display "Case study not found" or redirect).

- [ ] Test Navigation and Functionality:
  - Ensure clicking "Read More" or the card navigates to the detail page.
  - Verify that the detail page loads correctly and displays content.
  - Check responsiveness on different screen sizes.

- [ ] Final Enhancements:
  - Make the design "awesome": Add hover effects, better typography, and consistent spacing.
  - Ensure accessibility (e.g., alt text for images, keyboard navigation).
  - If needed, add loading states or error handling.

## Notes
- Case studies data is hardcoded in `components/case-study-section.tsx`; consider moving to a separate data file if it grows.
- Descriptions contain HTML; use `dangerouslySetInnerHTML` carefully or parse with a library if needed.
- Use Next.js Link for client-side navigation to improve performance.
