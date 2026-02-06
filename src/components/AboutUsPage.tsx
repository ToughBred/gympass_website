import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Target, Code, Zap, Shield, TrendingUp, Users, Mail, Phone, MapPin, Send } from "lucide-react";

interface AboutUsPageProps {
  onNavigate: (page: "home" | "pricing" | "about" | "privacy" | "terms") => void;
}

export function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for reaching out! We will get back to you soon.");
    setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const philosophy = [
    { icon: Target, text: "Build for reality, not theory" },
    { icon: TrendingUp, text: "Scale responsibly" },
    { icon: Shield, text: "Charge fairly" },
    { icon: Users, text: "Earn trust through reliability" },
  ];

  return (
    <div className="min-h-screen w-full">
      <Header onNavigate={onNavigate} />

      <main>
        {/* Hero Section */}
        <section className="w-full py-16" style={{ backgroundColor: "var(--light-silver-gray)" }}>
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: "var(--primary-black)" }}>
              About Us
            </h1>
            <p className="text-lg md:text-xl" style={{ color: "var(--dark-gray)" }}>
              Built for Gyms. Backed by Strong Technology.
            </p>
          </div>
        </section>

        {/* Main About Section */}
        <section className="w-full py-16" style={{ backgroundColor: "var(--background)" }}>
          <div className="max-w-[1000px] mx-auto px-6 space-y-16">
            {/* Introduction */}
            <div>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--dark-gray)" }}>
                <strong style={{ color: "var(--primary-black)" }}>GymPass</strong> is a modern gym management platform
                designed to help fitness businesses operate efficiently, collect payments seamlessly, and grow with
                confidence.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--dark-gray)" }}>
                We understand the realities of running gyms in Nigeria and similar markets — inconsistent tools,
                fragmented systems, and software that doesn't scale with growth. GymPass exists to solve those problems
                with technology that is simple, reliable, and built for real-world operations.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--dark-gray)" }}>
                GymPass is proudly a product of{" "}
                <a href="https://toughbred.com">
                  <strong style={{ color: "var(--color-blue-600)" }}>ToughBred Technologies</strong>
                </a>
              </p>
            </div>

            {/* About ToughBred Technologies */}
            <div
              className="bg-white rounded-2xl p-8 border shadow-sm"
              style={{ borderColor: "var(--light-silver-gray)" }}
            >
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "var(--primary-black)" }}>
                About ToughBred Technologies
              </h2>
              <p className="text-lg mb-4" style={{ color: "var(--dark-gray)" }}>
                <strong style={{ color: "var(--primary-black)" }}>ToughBred Technologies</strong> is a product-focused
                software company that builds, maintains, and operates scalable digital products.
              </p>
              <h3 className="font-semibold mb-3" style={{ color: "var(--primary-black)" }}>
                What we do:
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>
                    <strong>Custom software development</strong> for businesses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>
                    <strong>In-house SaaS products</strong> solving real operational problems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>
                    <strong>Platform engineering & system design</strong> for scalable systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>
                    <strong>Long-term product maintenance and iteration</strong>
                  </span>
                </li>
              </ul>
              <p className="text-base" style={{ color: "var(--dark-gray)" }}>
                We don't just ship software — we build systems meant to last, scale, and adapt as businesses grow.
              </p>
              <p className="text-base mt-4" style={{ color: "var(--dark-gray)" }}>
                GymPass is one of our flagship SaaS products, created with the same engineering discipline and product
                thinking we apply across all our solutions.
              </p>
            </div>

            {/* Why We Built GymPass */}
            <div>
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "var(--primary-black)" }}>
                Why We Built GymPass
              </h2>
              <p className="text-lg mb-6" style={{ color: "var(--dark-gray)" }}>
                Most gym management tools were built for markets that operate very differently from ours.
              </p>
              <p className="text-lg mb-4" style={{ color: "var(--dark-gray)" }}>
                GymPass was built from the ground up to support:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>Flexible membership plans (daily, weekly, monthly)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>Local payment realities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>
                    Growing gyms transitioning from manual to digital systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>
                    Predictable scaling without expensive upfront commitments
                  </span>
                </li>
              </ul>
              <div
                className="bg-white rounded-xl p-6 border-l-4"
                style={{ borderColor: "var(--primary-red)", backgroundColor: "var(--primary-red-light)" }}
              >
                <p className="text-lg font-semibold" style={{ color: "var(--primary-black)" }}>
                  Our goal is simple: help gym owners focus on running their gyms — not fighting software.
                </p>
              </div>
            </div>

            {/* Leadership Section */}
            <div>
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "var(--primary-black)" }}>
                Leadership
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Technical Co-Founder */}
                <div
                  className="bg-white rounded-2xl p-8 border shadow-sm"
                  style={{ borderColor: "var(--light-silver-gray)" }}
                >
                  <div className="mb-4">
                    <div
                      className="w-20 h-20 rounded-full mb-4 flex items-center justify-center"
                      style={{ backgroundColor: "var(--primary-red-light)" }}
                    >
                      <Code className="w-10 h-10" style={{ color: "var(--primary-red)" }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: "var(--primary-black)" }}>
                      Tobi Odeyemi
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--primary-red)" }}>
                      Technical Co-Founder & Chief Technology Officer (CTO)
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--dark-gray)" }}>
                    Tobi leads the technical vision and architecture behind GymPass. He is responsible for system
                    design, platform reliability, security, and long-term scalability.
                  </p>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--dark-gray)" }}>
                    With a strong background in backend systems, distributed systems, and product engineering, he
                    ensures GymPass is built on solid foundations that can support gyms today — and at much larger scale
                    tomorrow.
                  </p>
                </div>

                {/* Business Development Co-Founder */}
                <div
                  className="bg-white rounded-2xl p-8 border shadow-sm"
                  style={{ borderColor: "var(--light-silver-gray)" }}
                >
                  <div className="mb-4">
                    <div
                      className="w-20 h-20 rounded-full mb-4 flex items-center justify-center"
                      style={{ backgroundColor: "var(--primary-red-light)" }}
                    >
                      <Users className="w-10 h-10" style={{ color: "var(--primary-red)" }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: "var(--primary-black)" }}>
                      Damilare Odeyemi
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--primary-red)" }}>
                      Co-Founder & Head of Business Development
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--dark-gray)" }}>
                    Damilare leads business strategy, partnerships, customer growth, and market expansion. He focuses on
                    aligning GymPass with the real needs of gym owners, fitness entrepreneurs, and multi-branch
                    operators.
                  </p>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--dark-gray)" }}>
                    His role ensures GymPass is not just technically strong, but commercially viable, sustainable, and
                    continuously improving based on customer feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* More Than One Product */}
            <div
              className="bg-white rounded-2xl p-8 border shadow-sm"
              style={{ borderColor: "var(--light-silver-gray)" }}
            >
              <h2 className="text-3xl font-semibold mb-6" style={{ color: "var(--primary-black)" }}>
                More Than One Product
              </h2>
              <p className="text-lg mb-4" style={{ color: "var(--dark-gray)" }}>
                GymPass is part of a growing ecosystem of SaaS products built by ToughBred Technologies.
              </p>
              <p className="text-lg mb-4" style={{ color: "var(--dark-gray)" }}>
                We actively build tools that help businesses:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>Operate more efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>Improve security and reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-red)" }}
                  ></div>
                  <span style={{ color: "var(--dark-gray)" }}>Scale without unnecessary complexity</span>
                </li>
              </ul>
              <p className="text-base" style={{ color: "var(--dark-gray)" }}>
                You can explore our other products and solutions on our main website, where you'll find platforms that
                may also support your business beyond gym management.
              </p>
            </div>

            {/* Our Philosophy */}
            <div>
              <h2 className="text-3xl font-semibold mb-8" style={{ color: "var(--primary-black)" }}>
                Our Philosophy
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {philosophy.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-6 bg-white rounded-xl border"
                    style={{ borderColor: "var(--light-silver-gray)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--primary-red-light)" }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: "var(--primary-red)" }} />
                    </div>
                    <span className="font-semibold" style={{ color: "var(--primary-black)" }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-center italic" style={{ color: "var(--dark-gray)" }}>
                We believe good software should feel invisible — quietly doing its job while your business grows.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Form Section */}
        <section className="w-full py-20" style={{ backgroundColor: "var(--primary-red-light)" }}>
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: "var(--primary-black)" }}>
                Contact Us
              </h2>
              <p style={{ color: "var(--dark-gray)" }}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-red-light)" }}
                >
                  <Mail className="w-6 h-6" style={{ color: "var(--primary-red)" }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--primary-black)" }}>
                  Email Us
                </h3>
                <p className="text-sm" style={{ color: "var(--dark-gray)" }}>
                  support@gympass.ng
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-red-light)" }}
                >
                  <Phone className="w-6 h-6" style={{ color: "var(--primary-red)" }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--primary-black)" }}>
                  Call Us
                </h3>
                <p className="text-sm" style={{ color: "var(--dark-gray)" }}>
                  +234 (0) 800 000 0000
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-red-light)" }}
                >
                  <MapPin className="w-6 h-6" style={{ color: "var(--primary-red)" }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--primary-black)" }}>
                  Location
                </h3>
                <p className="text-sm" style={{ color: "var(--dark-gray)" }}>
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2" style={{ color: "var(--primary-black)" }}>
                      Full Name <span style={{ color: "var(--primary-red)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "var(--light-silver-gray)",
                        color: "var(--primary-black)",
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2" style={{ color: "var(--primary-black)" }}>
                      Email Address <span style={{ color: "var(--primary-red)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "var(--light-silver-gray)",
                        color: "var(--primary-black)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2" style={{ color: "var(--primary-black)" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "var(--light-silver-gray)",
                        color: "var(--primary-black)",
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2" style={{ color: "var(--primary-black)" }}>
                      Subject <span style={{ color: "var(--primary-red)" }}>*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 appearance-none bg-white"
                      style={{
                        borderColor: "var(--light-silver-gray)",
                        color: "var(--primary-black)",
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2" style={{ color: "var(--primary-black)" }}>
                    Message <span style={{ color: "var(--primary-red)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none"
                    style={{
                      borderColor: "var(--light-silver-gray)",
                      color: "var(--primary-black)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  style={{ backgroundColor: "var(--primary-red)" }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
