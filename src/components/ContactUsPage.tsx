import { useState } from "react";
import {
  Target,
  Shield,
  TrendingUp,
  Users,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export function ContactUsPage() {
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
    setContactForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleContactChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
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
      <main>
        {/* Hero Section */}
        <section
          className="w-full py-16"
          style={{ backgroundColor: "var(--light-silver-gray)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h1
              className="text-4xl md:text-5xl font-semibold mb-4"
              style={{ color: "var(--primary-black)" }}
            >
              Contact Us
            </h1>
            <p
              className="text-lg md:text-xl"
              style={{ color: "var(--dark-gray)" }}
            >
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </section>

        <section
          className="w-full py-20"
          style={{ backgroundColor: "var(--primary-red-light)" }}
        >
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-red-light)" }}
                >
                  <Mail
                    className="w-6 h-6"
                    style={{ color: "var(--primary-red)" }}
                  />
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--primary-black)" }}
                >
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
                  <Phone
                    className="w-6 h-6"
                    style={{ color: "var(--primary-red)" }}
                  />
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--primary-black)" }}
                >
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
                  <MapPin
                    className="w-6 h-6"
                    style={{ color: "var(--primary-red)" }}
                  />
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--primary-black)" }}
                >
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
                    <label
                      htmlFor="name"
                      className="block mb-2"
                      style={{ color: "var(--primary-black)" }}
                    >
                      Full Name{" "}
                      <span style={{ color: "var(--primary-red)" }}>*</span>
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
                    <label
                      htmlFor="email"
                      className="block mb-2"
                      style={{ color: "var(--primary-black)" }}
                    >
                      Email Address{" "}
                      <span style={{ color: "var(--primary-red)" }}>*</span>
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
                    <label
                      htmlFor="phone"
                      className="block mb-2"
                      style={{ color: "var(--primary-black)" }}
                    >
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
                    <label
                      htmlFor="subject"
                      className="block mb-2"
                      style={{ color: "var(--primary-black)" }}
                    >
                      Subject{" "}
                      <span style={{ color: "var(--primary-red)" }}>*</span>
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
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2"
                    style={{ color: "var(--primary-black)" }}
                  >
                    Message{" "}
                    <span style={{ color: "var(--primary-red)" }}>*</span>
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
    </div>
  );
}
