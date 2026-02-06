import { Dumbbell, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'pricing' | 'about' | 'privacy' | 'terms') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full py-12 border-t" style={{ backgroundColor: 'var(--alt-black)', borderColor: 'var(--dark-gray)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
              <span className="font-semibold text-lg text-white">
                GYMPASS
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              The smarter way to manage your gym business.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity" style={{ backgroundColor: 'var(--primary-red)' }}>
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity" style={{ backgroundColor: 'var(--primary-red)' }}>
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity" style={{ backgroundColor: 'var(--primary-red)' }}>
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity" style={{ backgroundColor: 'var(--primary-red)' }}>
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => onNavigate?.('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-gray-400" style={{ borderColor: 'var(--dark-gray)' }}>
          <p>&copy; 2026 Gympass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
