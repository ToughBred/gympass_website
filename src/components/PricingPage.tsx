import { Header } from './Header';
import { Footer } from './Footer';
import { Check, AlertCircle, Zap, TrendingUp, RefreshCw } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: 'home' | 'pricing' | 'about') => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const payAsYouGoFees = [
    { range: 'Below ₦5,000', fee: '7.5%' },
    { range: '₦5,000 – ₦10,000', fee: '6.5%' },
    { range: '₦10,001 – ₦15,000', fee: '5.5%' },
    { range: '₦15,001 – ₦20,000', fee: '5.0%' },
    { range: '₦20,001 – ₦30,000', fee: '4.5%' },
    { range: '₦30,000 and above', fee: '4.0%' }
  ];

  const fixedPricing = [
    { members: '1 – 30 members', fee: '₦17,000 / month' },
    { members: '31 – 70 members', fee: '₦20,599 / month' },
    { members: '71 – 150 members', fee: '₦25,000 / month' }
  ];

  const payAsYouGoBenefits = [
    'Works for daily, weekly, monthly, and custom plans',
    'Scales automatically as your gym grows',
    'No active-member limit'
  ];

  const fixedPricingBenefits = [
    'No transaction percentage',
    'Unlimited plans & renewals',
    'Best value at scale'
  ];

  return (
    <div className="min-h-screen w-full">
      <Header onNavigate={onNavigate} />
      
      <main>
        {/* Hero Section */}
        <section className="w-full py-16" style={{ backgroundColor: 'var(--light-silver-gray)' }}>
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: 'var(--primary-black)' }}>
              Plans & Pricing
            </h1>
            <p className="text-lg md:text-xl mb-3" style={{ color: 'var(--dark-gray)' }}>
              Flexible pricing built for Nigerian gyms — whether you want zero commitment or predictable monthly billing.
            </p>
            <p className="text-base max-w-3xl mx-auto" style={{ color: 'var(--dark-gray)' }}>
              We offer two pricing models, so you can choose what fits your gym's size and cash flow.
            </p>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="w-full py-16" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Pay-As-You-Go Plan */}
              <div className="bg-white rounded-2xl border-2 shadow-lg overflow-hidden" style={{ borderColor: 'var(--primary-red)' }}>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                      <Zap className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary-black)' }}>
                        Pay-As-You-Go
                      </h2>
                      <p className="text-sm" style={{ color: 'var(--dark-gray)' }}>
                        Zero Upfront Payment
                      </p>
                    </div>
                  </div>

                  {/* Highlighted Note */}
                  <div className="mb-6 p-4 rounded-lg border-l-4 flex gap-3" style={{ backgroundColor: 'var(--primary-red-light)', borderColor: 'var(--primary-red)' }}>
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                    <p className="text-sm" style={{ color: 'var(--primary-black)' }}>
                      <strong>Note:</strong> This only applies to online payments for membership subscription.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                      Best for:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>New gyms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>Small gyms testing software</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>Gyms with fluctuating membership</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>Anyone who prefers no fixed monthly bill</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm mb-4" style={{ color: 'var(--dark-gray)' }}>
                      You pay only when a member subscribes, based on the price of your membership plan.
                      <br />
                      <strong>No setup fees. No minimum commitment.</strong>
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                      Transaction Fees <span className="text-sm font-normal" style={{ color: 'var(--dark-gray)' }}>(paid by the gym)</span>
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border rounded-lg" style={{ borderColor: 'var(--light-silver-gray)' }}>
                        <thead>
                          <tr style={{ backgroundColor: 'var(--primary-red-light)' }}>
                            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: 'var(--primary-black)' }}>
                              Membership Price
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: 'var(--primary-black)' }}>
                              Transaction Fee
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {payAsYouGoFees.map((item, index) => (
                            <tr key={index} className="border-t" style={{ borderColor: 'var(--light-silver-gray)' }}>
                              <td className="px-4 py-3 text-sm" style={{ color: 'var(--dark-gray)' }}>
                                {item.range}
                              </td>
                              <td className="px-4 py-3 text-sm font-semibold" style={{ color: 'var(--primary-red)' }}>
                                {item.fee}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {payAsYouGoBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-red)' }} />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: 'var(--primary-red)' }}
                  >
                    Choose Pay-As-You-Go
                  </button>
                </div>
              </div>

              {/* Fixed Monthly Pricing Plan */}
              <div className="bg-white rounded-2xl border-2 shadow-lg overflow-hidden" style={{ borderColor: '#3b82f6' }}>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary-black)' }}>
                        Fixed Monthly Pricing
                      </h2>
                      <p className="text-sm" style={{ color: 'var(--dark-gray)' }}>
                        Predictable & Discounted
                      </p>
                    </div>
                  </div>

                  {/* Highlighted Note */}
                  <div className="mb-6 p-4 rounded-lg border-l-4 flex gap-3 bg-blue-50 border-blue-600">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                    <p className="text-sm" style={{ color: 'var(--primary-black)' }}>
                      <strong>Note:</strong> Online payment carries a 1.8% transaction fee while offline payments are free. Offline payments are payments made outside the app like cash, bank transfer directly to the gym account.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                      Best for:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>Established gyms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>Gyms with stable active members</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>Owners who want predictable monthly costs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm mb-4" style={{ color: 'var(--dark-gray)' }}>
                      Pricing is based on <strong>active members per month</strong>, regardless of plan prices.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                      Monthly Subscription Pricing
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border rounded-lg" style={{ borderColor: 'var(--light-silver-gray)' }}>
                        <thead>
                          <tr className="bg-blue-50">
                            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: 'var(--primary-black)' }}>
                              Active Members
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: 'var(--primary-black)' }}>
                              Monthly Fee
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {fixedPricing.map((item, index) => (
                            <tr key={index} className="border-t" style={{ borderColor: 'var(--light-silver-gray)' }}>
                              <td className="px-4 py-3 text-sm" style={{ color: 'var(--dark-gray)' }}>
                                {item.members}
                              </td>
                              <td className="px-4 py-3 text-sm font-semibold text-blue-600">
                                {item.fee}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {fixedPricingBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                        <span className="text-sm" style={{ color: 'var(--dark-gray)' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity bg-blue-600"
                  >
                    Choose Fixed Pricing
                  </button>
                </div>
              </div>
            </div>

            {/* Switch Anytime Section */}
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border shadow-sm" style={{ borderColor: 'var(--light-silver-gray)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--primary-red-light)' }}>
                  <RefreshCw className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
                    Switch Anytime
                  </h2>
                  <p className="text-base mb-3" style={{ color: 'var(--dark-gray)' }}>
                    Start with Pay-As-You-Go, and move to Fixed Pricing when it becomes cheaper for your gym.
                  </p>
                  <p className="font-semibold" style={{ color: 'var(--primary-black)' }}>
                    No lock-in. No migration stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
