import GympassLogo from "@/assets/logo_full.png";

interface HeaderProps {
  onNavigate?: (page: "home" | "pricing" | "about" | "privacy" | "terms") => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="w-full bg-white border-b border-[var(--light-silver-gray)]">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between flex-nowrap">
        <div className="flex items-center gap-12 min-w-0">
          <button
            onClick={() => onNavigate?.("home")}
            className="flex items-center hover:opacity-80 transition-opacity shrink-0"
          >
            <img src={GympassLogo} alt="Gympass Logo" height="40" width="120" className="block" />
          </button>

          <nav className="hidden md:flex items-center gap-8 whitespace-nowrap">
            <button onClick={() => onNavigate?.("home")} className="hover:opacity-70 transition-opacity">
              Features
            </button>
            <button onClick={() => onNavigate?.("pricing")} className="hover:opacity-70 transition-opacity">
              Plans and Pricing
            </button>
            <button onClick={() => onNavigate?.("about")} className="hover:opacity-70 transition-opacity">
              About Us
            </button>
            <button className="hover:opacity-70 transition-opacity">Book Demo</button>
          </nav>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="px-6 py-2 border border-[var(--primary-black)] rounded hover:bg-gray-50 transition-colors">
            Login
          </button>
          <button
            className="px-6 py-2 rounded text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--primary-black)" }}
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
