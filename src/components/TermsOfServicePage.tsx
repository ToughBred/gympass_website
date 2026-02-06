import { Header } from './Header';
import { Footer } from './Footer';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Ban } from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (page: 'home' | 'pricing' | 'about' | 'privacy' | 'terms') => void;
}

export function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  return (
    <div className="min-h-screen w-full">
      <Header onNavigate={onNavigate} />
      
      <main>
        {/* Hero Section */}
        <section className="w-full py-16" style={{ backgroundColor: 'var(--light-silver-gray)' }}>
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
              <FileText className="w-8 h-8" style={{ color: 'var(--primary-red)' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
              Terms of Service
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
                Welcome to GymPass. These Terms of Service ("Terms") govern your access to and use of the GymPass platform, including our website, mobile applications, and related services (collectively, the "Service").
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--dark-gray)' }}>
                GymPass is operated by ToughBred Technologies ("Company," "we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
              </p>
              <div className="p-4 rounded-lg border-l-4 flex gap-3" style={{ backgroundColor: 'var(--primary-red-light)', borderColor: 'var(--primary-red)' }}>
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                <p className="text-sm" style={{ color: 'var(--primary-black)' }}>
                  <strong>Important:</strong> These Terms contain provisions that limit our liability to you and require you to resolve disputes with us through arbitration on an individual basis.
                </p>
              </div>
            </div>

            {/* Acceptance of Terms */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                1. Acceptance of Terms
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                By creating an account, accessing, or using GymPass, you represent that:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    You are at least 18 years of age
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    You have the legal authority to enter into these Terms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    You will comply with all applicable laws and regulations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    All information you provide is accurate and up-to-date
                  </span>
                </li>
              </ul>
            </div>

            {/* Service Description */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                2. Service Description
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                GymPass is a gym management platform that provides tools for:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Member management and registration
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Membership plan creation and management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Payment processing and subscription management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Attendance tracking and check-in systems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Reporting and analytics
                  </span>
                </li>
              </ul>
              <p className="mt-4" style={{ color: 'var(--dark-gray)' }}>
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice.
              </p>
            </div>

            {/* Account Registration */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                3. Account Registration and Security
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                To use GymPass, you must create an account. You agree to:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Provide accurate, current, and complete information during registration
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Maintain and promptly update your account information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Maintain the security and confidentiality of your login credentials
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Notify us immediately of any unauthorized access to your account
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Accept responsibility for all activities that occur under your account
                  </span>
                </li>
              </ul>
              <p style={{ color: 'var(--dark-gray)' }}>
                You may not create multiple accounts, share your account with others, or transfer your account without our written permission.
              </p>
            </div>

            {/* Pricing and Payment */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                4. Pricing and Payment
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    4.1 Pricing Plans
                  </h3>
                  <p style={{ color: 'var(--dark-gray)' }}>
                    GymPass offers two pricing models: Pay-As-You-Go and Fixed Monthly Pricing. Current pricing is available on our Pricing page and may be updated from time to time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    4.2 Payment Terms
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        All fees are in Nigerian Naira (₦) unless otherwise specified
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        Fees for the Pay-As-You-Go plan are deducted automatically from each transaction
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        Fixed Monthly fees are billed in advance on a monthly basis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        Payment must be received by the due date to avoid service interruption
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    4.3 Refunds
                  </h3>
                  <p style={{ color: 'var(--dark-gray)' }}>
                    All fees are non-refundable except as required by law or explicitly stated otherwise. We do not provide refunds or credits for partial months of service or unused portions of your subscription.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    4.4 Price Changes
                  </h3>
                  <p style={{ color: 'var(--dark-gray)' }}>
                    We reserve the right to change our pricing at any time. We will provide you with at least 30 days' notice of any price increases. Your continued use of the Service after the price change takes effect constitutes your acceptance of the new price.
                  </p>
                </div>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                  <Ban className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary-black)' }}>
                  5. Prohibited Activities
                </h2>
              </div>
              
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                You agree not to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Use the Service for any illegal purpose or in violation of any laws
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Attempt to gain unauthorized access to our systems or networks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Interfere with or disrupt the Service or servers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Use automated systems to access the Service without permission
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Copy, modify, or create derivative works of the Service
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Reverse engineer or attempt to extract source code
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Transmit viruses, malware, or other harmful code
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Engage in fraudulent activity or money laundering
                  </span>
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                6. Intellectual Property Rights
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                The Service and its original content, features, and functionality are owned by ToughBred Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                You retain ownership of the data you input into the Service ("Your Data"). By using the Service, you grant us a license to use, store, and process Your Data solely to provide and improve the Service.
              </p>
              <p style={{ color: 'var(--dark-gray)' }}>
                Our trademarks, service marks, and logos used on the Service are our property. You may not use them without our prior written permission.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                  <Scale className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
                </div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary-black)' }}>
                  7. Disclaimer and Limitation of Liability
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    7.1 Disclaimer
                  </h3>
                  <p style={{ color: 'var(--dark-gray)' }}>
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    7.2 Limitation of Liability
                  </h3>
                  <p className="mb-3" style={{ color: 'var(--dark-gray)' }}>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TOUGHBRED TECHNOLOGIES BE LIABLE FOR:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        Indirect, incidental, special, or consequential damages
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        Loss of profits, revenue, data, or business opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                      <span style={{ color: 'var(--dark-gray)' }}>
                        Damages exceeding the amount you paid us in the 12 months preceding the claim
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                8. Termination
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                You may terminate your account at any time by contacting us. We may suspend or terminate your access to the Service at any time, with or without notice, for:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Violation of these Terms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Non-payment of fees
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Fraudulent or illegal activity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    Any reason at our sole discretion
                  </span>
                </li>
              </ul>
              <p style={{ color: 'var(--dark-gray)' }}>
                Upon termination, your right to use the Service will immediately cease. We may delete your account and data, though we may retain certain information as required by law or for legitimate business purposes.
              </p>
            </div>

            {/* Indemnification */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                9. Indemnification
              </h2>
              <p style={{ color: 'var(--dark-gray)' }}>
                You agree to indemnify, defend, and hold harmless ToughBred Technologies, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>Your use of the Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>Your violation of these Terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>Your violation of any third-party rights</span>
                </li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                10. Governing Law and Dispute Resolution
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
              </p>
              <p style={{ color: 'var(--dark-gray)' }}>
                Any disputes arising from these Terms or your use of the Service shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to the courts of Nigeria.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                11. Changes to These Terms
              </h2>
              <p style={{ color: 'var(--dark-gray)' }}>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of the Service after changes take effect constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Miscellaneous */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                12. Miscellaneous
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the Service
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Waiver:</strong> Our failure to enforce any right or provision does not constitute a waiver
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary-red)' }}></div>
                  <span style={{ color: 'var(--dark-gray)' }}>
                    <strong>Assignment:</strong> You may not assign these Terms without our written consent
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
                13. Contact Us
              </h2>
              <p className="mb-4" style={{ color: 'var(--dark-gray)' }}>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="space-y-2">
                <p style={{ color: 'var(--dark-gray)' }}>
                  <strong>Email:</strong> legal@gympass.ng
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
