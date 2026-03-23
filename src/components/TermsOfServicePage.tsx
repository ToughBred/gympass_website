import { FileText } from 'lucide-react';
import { termsOfServiceHtml } from '@/content/terms_of_service';

export function TermsOfServicePage() {
  return (
    <main>
      <section
        className="w-full py-16"
        style={{ backgroundColor: 'var(--light-silver-gray)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: 'var(--primary-red-light)' }}
          >
            <FileText className="w-8 h-8" style={{ color: 'var(--primary-red)' }} />
          </div>

          <h1
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: 'var(--primary-black)' }}
          >
            Terms of Service
          </h1>

          <p className="text-base" style={{ color: 'var(--dark-gray)' }}>
            Last Updated: March 2026
          </p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <article
            className="legal-page-content"
            dangerouslySetInnerHTML={{ __html: termsOfServiceHtml }}
          />
        </div>
      </section>
    </main>
  );
}