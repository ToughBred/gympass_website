import { Shield } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { privacyPolicyHtml } from "@/content/privacy_policy";

export function PrivacyPolicyPage() {
  return (
    <>
      <main>
        <section
          className="w-full py-16"
          style={{ backgroundColor: "var(--light-silver-gray)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: "var(--primary-red-light)" }}
            >
              <Shield
                className="w-8 h-8"
                style={{ color: "var(--primary-red)" }}
              />
            </div>
            <h1
              className="text-4xl md:text-5xl font-semibold mb-4"
              style={{ color: "var(--primary-black)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-base" style={{ color: "var(--dark-gray)" }}>
              Last Updated: March 23, 2026
            </p>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="max-w-[900px] mx-auto px-6">
            <article
              className="legal-page-content"
              dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
