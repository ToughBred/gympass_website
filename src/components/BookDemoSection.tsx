import { useState } from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

export function BookDemoSection() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    gymAddress: '',
    gymSize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Thank you! We will contact you soon to schedule your demo.');
    setFormData({ email: '', phone: '', gymAddress: '', gymSize: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full py-20" style={{ backgroundColor: 'var(--primary-red-light)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
              Book a Demo
            </h2>
            <p style={{ color: 'var(--dark-gray)' }}>
              See how Gympass can transform your gym management. Schedule a personalized demo today.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2" style={{ color: 'var(--primary-black)' }}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--dark-gray)' }} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: 'var(--light-silver-gray)',
                      color: 'var(--primary-black)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2" style={{ color: 'var(--primary-black)' }}>
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--dark-gray)' }} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: 'var(--light-silver-gray)',
                      color: 'var(--primary-black)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gymAddress" className="block mb-2" style={{ color: 'var(--primary-black)' }}>
                  Gym Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--dark-gray)' }} />
                  <input
                    type="text"
                    id="gymAddress"
                    name="gymAddress"
                    value={formData.gymAddress}
                    onChange={handleChange}
                    required
                    placeholder="123 Main Street, City, State"
                    className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: 'var(--light-silver-gray)',
                      color: 'var(--primary-black)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gymSize" className="block mb-2" style={{ color: 'var(--primary-black)' }}>
                  Gym Size
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--dark-gray)' }} />
                  <select
                    id="gymSize"
                    name="gymSize"
                    value={formData.gymSize}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 appearance-none bg-white"
                    style={{ 
                      borderColor: 'var(--light-silver-gray)',
                      color: 'var(--primary-black)'
                    }}
                  >
                    <option value="">Select gym size</option>
                    <option value="1-50">1-50 members</option>
                    <option value="51-200">51-200 members</option>
                    <option value="201-500">201-500 members</option>
                    <option value="501-1000">501-1000 members</option>
                    <option value="1000+">1000+ members</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--primary-red)' }}
              >
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
