import { ImageWithFallback } from "./figma/ImageWithFallback";
import MemberAppUI from "@/assets/member.jpg";
import GymAdminMobile from "@/assets/gym_admin_mobile.jpg";
import GymAdminDesktop from "@/assets/gym_admin_desktop.png";

export function AppScreenshotsSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: "var(--primary-black)" }}>
            Powerful Apps for Everyone
          </h2>
          <p style={{ color: "var(--dark-gray)" }}>
            Seamless experience across mobile and desktop for both members and administrators.
          </p>
        </div>

        <div className="space-y-16">
          {/* Mobile Apps Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: "var(--primary-black)" }}>
              Mobile Apps
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="bg-white rounded-2xl p-8 border shadow-sm"
                style={{ borderColor: "var(--light-silver-gray)" }}
              >
                <div className="mb-4">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: "var(--primary-black)" }}>
                    Member App
                  </h4>
                  <p className="text-sm mb-6" style={{ color: "var(--dark-gray)" }}>
                    Members can book classes, track workouts, manage subscriptions, and stay connected with your gym.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--light-silver-gray)" }}>
                  <ImageWithFallback src={MemberAppUI} alt="Member mobile app dashboard" className="w-full h-auto" />
                </div>
              </div>

              <div
                className="bg-white rounded-2xl p-8 border shadow-sm"
                style={{ borderColor: "var(--light-silver-gray)" }}
              >
                <div className="mb-4">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: "var(--primary-black)" }}>
                    Admin App
                  </h4>
                  <p className="text-sm mb-6" style={{ color: "var(--dark-gray)" }}>
                    Staff can manage check-ins, view schedules, and handle member requests on the go.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--light-silver-gray)" }}>
                  <ImageWithFallback src={GymAdminMobile} alt="Admin mobile app dashboard" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Dashboard Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: "var(--primary-black)" }}>
              Desktop Dashboard
            </h3>
            <div
              className="bg-white rounded-2xl p-8 border shadow-sm"
              style={{ borderColor: "var(--light-silver-gray)" }}
            >
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2" style={{ color: "var(--primary-black)" }}>
                  Admin Desktop Dashboard
                </h4>
                <p className="text-sm mb-6" style={{ color: "var(--dark-gray)" }}>
                  Comprehensive admin panel with advanced analytics, member management, billing, and business insights
                  all in one place.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--light-silver-gray)" }}>
                <ImageWithFallback src={GymAdminDesktop} alt="Admin desktop dashboard" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
