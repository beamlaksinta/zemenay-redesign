import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-white py-14 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="text-white font-extrabold text-2xl mb-4 inline-block">
            Zemenay
          </Link>
          <p className="text-blue-100 max-w-sm leading-relaxed">
            Empowering businesses across Ethiopia and Africa with innovative software and digital
            transformation.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Pricing", href: "/pricing" },
              { name: "Products", href: "/product" },
              { name: "Contact", href: "/contact" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Services", href: "/terms-of-services" },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="hover:text-white/90">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p>Piassa, Addis Ababa, Ethiopia</p>
          <p>Phone: +251 93 220 9141</p>
          <p>
            Email:{" "}
            <a
              href="mailto:zemenaytechsolutions@gmail.com"
              className="hover:text-white/90"
            >
              zemenaytechsolutions@gmail.com
            </a>
          </p>
          <p className="mt-4 font-semibold">Business Hours</p>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 2:00 PM</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://linkedin.com/company/zemenay-tech-solutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white/90"
            >
              {/* LinkedIn SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.25h.07c.65-1.23 2.23-2.5 4.6-2.5 4.92 0 5.82 3.24 5.82 7.45V24h-5v-7.66c0-1.83-.03-4.19-2.55-4.19-2.55 0-2.94 2-2.94 4.07V24h-5V8z" />
              </svg>
            </Link>

            <Link
              href="https://instagram.com/zemnay_tech_solutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white/90"
            >
              {/* Instagram SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-blue-100 text-sm border-t border-brand-700 pt-6">
        &copy; {new Date().getFullYear()} Zemenay Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}