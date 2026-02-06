import heroImage from '@/assets/b37cc44a865e57a8cc47032dc0ae151bc45ef002.png';

export function HeroSection() {
  return (
    <section className="w-full" style={{ backgroundColor: 'var(--light-silver-gray)' }}>
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center p-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight" style={{ color: 'var(--primary-black)' }}>
                Gympass is the smarter way to manage your gym business
              </h1>
              <p className="text-base" style={{ color: 'var(--dark-gray)' }}>
                With <span style={{ color: 'var(--primary-red)' }} className="font-semibold">Gympass</span>, you can now automate how you manage members, staff, branches, membership subscription, and payments — all in one place. Save time, reduce stress, get analytics, insights and grow faster with automation built for gyms.
              </p>
              <button 
                className="px-8 py-3 rounded text-white hover:opacity-90 transition-opacity" 
                style={{ backgroundColor: 'var(--primary-red)' }}
              >
                Join Waitlist
              </button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Gym staff managing operations" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
