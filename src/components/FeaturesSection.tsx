import { Users, Calendar, CreditCard, BarChart3, Bell, Settings } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Member Management',
    description: 'Easily track and manage member profiles, attendance, and membership status in one place.'
  },
  {
    icon: Calendar,
    title: 'Class Scheduling',
    description: 'Create and manage class schedules with automated booking and waitlist management.'
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Automated billing, subscription management, and secure payment processing.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Real-time analytics to track revenue, attendance, and member engagement.'
  },
  {
    icon: Bell,
    title: 'Automated Notifications',
    description: 'Send automated reminders, updates, and promotional messages to members.'
  },
  {
    icon: Settings,
    title: 'Multi-Branch Support',
    description: 'Manage multiple gym locations from a single dashboard with ease.'
  }
];

export function FeaturesSection() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: 'var(--primary-black)' }}>
            Access our gym management features
          </h2>
          <p style={{ color: 'var(--dark-gray)' }}>
            Everything you need to grow and manage your fitness business — without the spreadsheets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border hover:shadow-lg transition-shadow"
              style={{ borderColor: 'var(--light-silver-gray)', backgroundColor: 'var(--background)' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--primary-red-light)' }}
              >
                <feature.icon className="w-6 h-6" style={{ color: 'var(--primary-red)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--primary-black)' }}>
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--dark-gray)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
