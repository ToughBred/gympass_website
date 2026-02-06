import { Header } from './Header';
import { Footer } from './Footer';
import { Shield, Eye, Lock, UserCheck, Database, AlertTriangle } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: 'home' | 'pricing' | 'about' | 'privacy' | 'terms') => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen w-full">
      <Header onNavigate={onNavigate} />
      
      <main>
        {/* Hero Section */}
        <section className="w-full py-16" style={{ backgroundColor: 'var(--light-silver-gray)' }}>
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
              <Shield className="w-8 h-8" style={{ color: 'var(--primary-red)' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
              Privacy Policy
            </h1>
            <p className="text-base" style={{ color: 'var(--dark-gray)' }}>
              Last Updated: February 3, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-16" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-[900px] mx-auto px-6 space-y-12">
            
            {/* Introduction */}
            <div>
              <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--dark-gray)' }}>
                GymPass ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our gym management platform and related services.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--dark-gray)' }}>
                By using GymPass, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                  <Database className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary-black)' }}>
                  1. Information We Collect
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    1.1 Information You Provide
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        <strong>Account Information:</strong> Name, email address, phone number, gym name, gym address, and payment details
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        <strong>Member Information:</strong> Information about gym members that you input into our system, including names, contact details, membership plans, and payment history
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        <strong>Communications:</strong> Messages, feedback, and support requests you send to us
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    1.2 Information Collected Automatically
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        <strong>Usage Data:</strong> Information about how you use our platform, including features accessed, time spent, and actions taken
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        <strong>Device Information:</strong> IP address, browser type, operating system, device identifiers, and mobile network information
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze platform usage
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                  <Eye className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary-black)' }}>
                  2. How We Use Your Information
                </h2>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    To provide, operate, and maintain our gym management services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    To process payments and manage subscriptions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    To send you important updates, notifications, and communications about your account
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    To provide customer support and respond to your inquiries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    To improve, personalize, and expand our services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    To analyze usage patterns and optimize platform performance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    To detect, prevent, and address technical issues or fraudulent activity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    To comply with legal obligations and enforce our terms
                  </span>
                </li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                  <UserCheck className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary-black)' }}>
                  3. Information Sharing and Disclosure
                </h2>
              </div>
              
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., payment processors, hosting providers)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>With Your Consent:</strong> When you explicitly authorize us to share your information
                  </span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                  <Lock className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary-black)' }}>
                  4. Data Security
                </h2>
              </div>
              
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Encryption of data in transit and at rest
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Regular security assessments and updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Access controls and authentication mechanisms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Secure data storage infrastructure
                  </span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 rounded-lg border-l-4 flex gap-3" style={{ backgroundColor: 'var(--primary-red-light)', borderColor: 'var(--primary-red)' }}>
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                <p className="text-sm" style={{ color: 'var(--primary-black)' }}>
                  While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                5. Data Retention
              </h2>
              <p style={{ color: 'var(--dark-gray)' }}>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                6. Your Rights and Choices
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                You have certain rights regarding your personal information:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Access:</strong> Request access to the personal information we hold about you
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time
                  </span>
                </li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                7. Children's Privacy
              </h2>
              <p style={{ color: 'var(--dark-gray)' }}>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                8. Changes to This Privacy Policy
              </h2>
              <p style={{ color: 'var(--dark-gray)' }}>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                9. Contact Us
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p style={{ color: 'var(--dark-gray)' }}>
                  <strong>Email:</strong> privacy@gympass.ng
                </p>
                <p style={{ color: 'var(--dark-gray)' }}>
                  <strong>Address:</strong> ToughBred Technologies, Lagos, Nigeria
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
