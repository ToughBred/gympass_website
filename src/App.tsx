import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BookDemoSection } from './components/BookDemoSection';
import { AppScreenshotsSection } from './components/AppScreenshotsSection';
import { Footer } from './components/Footer';
import { PricingPage } from './components/PricingPage';
import { AboutUsPage } from './components/AboutUsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | 'about' | 'privacy' | 'terms'>('home');

  if (currentPage === 'pricing') {
    return <PricingPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'about') {
    return <AboutUsPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicyPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfServicePage onNavigate={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen w-full">
      <Header onNavigate={setCurrentPage} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BookDemoSection />
        <AppScreenshotsSection />
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
