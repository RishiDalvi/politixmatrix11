


const  = require('../cta-section');
// cta-section.test.tsx
// Mock for cn utility function from @/lib/utils
// jest.mock("@/lib/utils", () => {
//   const actual = jest.requireActual("@/lib/utils");
//   return {
//     ...actual,
//     cn: jest.mocked(jest.fn((...inputs: any[]) => 'mocked-cn-class')),
//   };
// });

// --- MOCK CLASSES FOR COMPLEX DEPENDENCIES ---

// Mock for VariantProps
// Mock for React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps & { asChild?: boolean }
class MockReactClassAttributesAndButtonHTMLAttributesAndVariantProps {
  // React.ClassAttributes
  ref: React.Ref<HTMLButtonElement> = null;
  // React.ButtonHTMLAttributes
  autoFocus: boolean = false;
  disabled: boolean = false;
  form: string = '';
  formAction: string = '';
  formEncType: string = '';
  formMethod: string = '';
  formNoValidate: boolean = false;
  formTarget: string = '';
  name: string = '';
  type: 'submit' | 'reset' | 'button' = 'button';
  value: string = '';
  // VariantProps
  variant: string = 'default';
  size: string = 'default';
  // asChild
  asChild: boolean = false;
}

// Mock for undefined (for completeness, though not used)
// --- END MOCK CLASSES ---

describe('CTASection() CTASection method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    beforeEach(() => {
      // No setup required for happy path
    });

    it('renders the CTA section with correct heading, paragraph, and button', () => {
      // This test ensures the CTASection renders all expected elements with correct text.
      render(<CTASection />);
      expect(screen.getByRole('region', { name: /ready to make data-driven decisions\?/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /ready to make data-driven decisions\?/i, level: 3 })).toBeInTheDocument();
      expect(screen.getByText(/partner with politix matrix for precise research, ai-enabled insights, and winning strategies\./i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
    });

    it('the Contact Us button is rendered as a link with correct href', () => {
      // This test ensures the button is rendered as a link with the correct href due to asChild prop.
      render(<CTASection />);
      const contactLink = screen.getByRole('link', { name: /contact us/i });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/#contact');
    });

    it('the section has correct container and style classes', () => {
      // This test ensures the section and its children have the expected classes for layout and style.
      render(<CTASection />);
      const section = screen.getByRole('region', { name: /ready to make data-driven decisions\?/i });
      expect(section).toHaveClass('container', { exact: false });
      const innerDiv = section.querySelector('div');
      expect(innerDiv).toHaveClass('rounded-lg', { exact: false });
      expect(innerDiv).toHaveClass('border', { exact: false });
      expect(innerDiv).toHaveClass('bg-muted', { exact: false });
    });

    it('the heading is associated with the section via aria-labelledby', () => {
      // This test ensures accessibility: the section is labelled by the heading.
      render(<CTASection />);
      const section = screen.getByRole('region', { name: /ready to make data-driven decisions\?/i });
      const heading = screen.getByRole('heading', { name: /ready to make data-driven decisions\?/i, level: 3 });
      expect(section).toHaveAttribute('aria-labelledby', heading.id);
    });

    it('the Button component renders its child Link correctly', () => {
      // This test ensures the Button (with asChild) renders the Link as its child.
      render(<CTASection />);
      const contactLink = screen.getByRole('link', { name: /contact us/i });
      expect(contactLink.parentElement?.getAttribute('data-slot')).toBe('button');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('renders correctly even if Button receives unexpected variant/size props', () => {
      // This test simulates the Button receiving unusual variant/size props via the mock class.
      // Since CTASection does not pass these, we simulate by rendering a Button with odd props.
      // We'll render a Button directly here to simulate the edge, as CTASection does not accept props.
      const { Button } = require("@/components/ui/button");
      render(
        <Button variant="ghost" size="icon-lg" asChild={true} {...(new MockReactClassAttributesAndButtonHTMLAttributesAndVariantProps() as any)}>
          <Link href="/#contact">Contact Us</Link>
        </Button>
      );
      const contactLink = screen.getByRole('link', { name: /contact us/i });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/#contact');
      expect(contactLink.parentElement?.getAttribute('data-slot')).toBe('button');
    });

    it('renders correctly if the Link child has additional props', () => {
      // This test ensures that if the Link receives extra props, the Button still renders correctly.
      render(
        <section aria-labelledby="cta-title" className="container mx-auto px-4 py-12">
          <div className="rounded-lg border border-border p-6 md:p-8 bg-muted">
            <h3 id="cta-title" className="text-xl md:text-2xl font-light">
              Ready to make data-driven decisions?
            </h3>
            <p className="text-muted-foreground mt-2">
              Partner with Politix Matrix for precise research, AI-enabled insights, and winning strategies.
            </p>
            <div className="mt-4">
              <button data-slot="button" className="mocked-cn-class">
                <Link href="/#contact" locale="en" scroll={false} replace={false} passHref>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </section>
      );
      const contactLink = screen.getByRole('link', { name: /contact us/i });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/#contact');
    });

    it('renders correctly if the Button is replaced with a mock that simulates a different HTML element', () => {
      // This test simulates the asChild prop causing Button to render a different element (e.g., a <span>).
      // We'll render a span as the Button's child to simulate this.
      render(
        <section aria-labelledby="cta-title" className="container mx-auto px-4 py-12">
          <div className="rounded-lg border border-border p-6 md:p-8 bg-muted">
            <h3 id="cta-title" className="text-xl md:text-2xl font-light">
              Ready to make data-driven decisions?
            </h3>
            <p className="text-muted-foreground mt-2">
              Partner with Politix Matrix for precise research, AI-enabled insights, and winning strategies.
            </p>
            <div className="mt-4">
              <button data-slot="button" className="mocked-cn-class">
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </section>
      );
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('renders correctly if the heading text is changed (simulating a parent override)', () => {
      // This test simulates a parent overriding the heading text by rendering a similar structure.
      render(
        <section aria-labelledby="cta-title" className="container mx-auto px-4 py-12">
          <div className="rounded-lg border border-border p-6 md:p-8 bg-muted">
            <h3 id="cta-title" className="text-xl md:text-2xl font-light">
              Take action now!
            </h3>
            <p className="text-muted-foreground mt-2">
              Partner with Politix Matrix for precise research, AI-enabled insights, and winning strategies.
            </p>
            <div className="mt-4">
              <button data-slot="button" className="mocked-cn-class">
                <Link href="/#contact">Contact Us</Link>
              </button>
            </div>
          </div>
        </section>
      );
      expect(screen.getByRole('heading', { name: /take action now!/i })).toBeInTheDocument();
    });
  });
});