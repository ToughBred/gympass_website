import GympassLogo from "@/assets/logo_full.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-[var(--light-silver-gray)]">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-80 transition-opacity shrink-0"
        >
          <img
            src={GympassLogo}
            alt="Gympass Logo"
            height="40"
            width="120"
            className="block"
          />
        </Link>

        {/* RIGHT: Navigation */}
        <nav className="hidden md:flex items-center gap-8 whitespace-nowrap">
          <Link to="/#features" className="hover:opacity-70 transition-opacity">
            Features
          </Link>
          <Link to="/pricing" className="hover:opacity-70 transition-opacity">
            Plans and Pricing
          </Link>
          <Link to="/about-us" className="hover:opacity-70 transition-opacity">
            About Us
          </Link>
          <a href="/#book-demo" className="hover:opacity-70 transition-opacity">
            Book Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
