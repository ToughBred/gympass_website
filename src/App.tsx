import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { BookDemoSection } from "./components/BookDemoSection";
import { AppScreenshotsSection } from "./components/AppScreenshotsSection";
import { Footer } from "./components/Footer";
import { PricingPage } from "./components/PricingPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsOfServicePage } from "./components/TermsOfServicePage";
import { DeleteAccountPage } from "./components/DeleteAccountPage";
import { Routes, Route } from "react-router-dom";
import { ContactUsPage } from "./components/ContactUsPage";

function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppScreenshotsSection />
        <BookDemoSection />
      </main>
      <Footer />
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/pricing"
        element={
          <Layout>
            <PricingPage />
          </Layout>
        }
      />
      <Route
        path="/delete-account"
        element={
          <Layout>
            <DeleteAccountPage />
          </Layout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Layout>
            <ContactUsPage />
          </Layout>
        }
      />
      <Route
        path="/about-us"
        element={
          <Layout>
            <AboutUsPage />
          </Layout>
        }
      />
      <Route
        path="/privacy"
        element={
          <Layout>
            <PrivacyPolicyPage />
          </Layout>
        }
      />
      <Route
        path="/terms"
        element={
          <Layout>
            <TermsOfServicePage />
          </Layout>
        }
      />
    </Routes>
  );
}
