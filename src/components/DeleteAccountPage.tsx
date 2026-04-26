import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import "./DeleteAccountPage.css";

type Step = "email" | "otp" | "success";
type MessageType = "error" | "success" | "";

type ApiResponse = {
  message?: string;
  data?: unknown;
  error?: {
    code?: string;
    message?: string;
  };
  timestamp?: string;
};

async function readApiResponse(response: Response): Promise<ApiResponse> {
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return {};
  }

  return response.json();
}

function getApiMessage(payload: ApiResponse, fallback: string) {
  return payload.error?.message || payload.message || fallback;
}

export function DeleteAccountPage() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<MessageType>("");

  const navigate = useNavigate();

  // STEP 1 -> Request OTP
  async function requestOtp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await fetch(
        "https://prod.api.gympass.fitness/api/v1/user/account/deletion/otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );
      const payload = await readApiResponse(response);

      if (!response.ok) {
        throw new Error(getApiMessage(payload, "Failed to send OTP."));
      }

      setStep("otp");
      setMessage(
        getApiMessage(
          payload,
          "A verification code has been sent to your email.",
        ),
      );
      setMessageType("success");
    } catch (err) {
      console.error(err);
      setMessage(
        err instanceof Error
          ? err.message
          : "Unable to send OTP. Please try again.",
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  }

  // STEP 2 -> Verify OTP + Delete
  async function verifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await fetch(
        "https://prod.api.gympass.fitness/api/v1/user/account/deletion/confirmation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        },
      );
      const payload = await readApiResponse(response);

      if (!response.ok) {
        throw new Error(
          getApiMessage(payload, "Invalid OTP or request failed."),
        );
      }

      setStep("success");
      setMessage(
        getApiMessage(
          payload,
          "Your account deletion request has been verified.",
        ),
      );
      setMessageType("success");

      setTimeout(() => {
        navigate("/");
      }, 7000);
    } catch (err) {
      console.error(err);
      setMessage(
        err instanceof Error
          ? err.message
          : "Unable to verify OTP. Please try again.",
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  }

  function resetEmailStep() {
    setStep("email");
    setOtp("");
    setMessage("");
    setMessageType("");
  }

  return (
    <section className="delete-account-page">
      <div className="delete-account-shell">
        <div className="delete-account-intro">
          <div className="delete-account-kicker">
            <ShieldCheck size={18} aria-hidden="true" />
            Secure account verification
          </div>

          <h1>Request Account Deletion</h1>
          <p>
            Verify the email connected to your Gympass account before submitting
            a permanent deletion request.
          </p>

          <div className="delete-account-info-grid" aria-label="Deletion steps">
            <div className="delete-account-info-card">
              <span>
                <Mail size={18} aria-hidden="true" />
              </span>
              <p>Receive a one-time verification code by email.</p>
            </div>
            <div className="delete-account-info-card">
              <span>
                <LockKeyhole size={18} aria-hidden="true" />
              </span>
              <p>Confirm the code to submit the deletion request.</p>
            </div>
          </div>
        </div>

        <div className="delete-account-panel">
          <div className="delete-account-steps" aria-label="Deletion progress">
            <div
              className={`delete-account-step ${step === "email" ? "active" : "done"}`}
            >
              <span>{step === "email" ? "1" : <CheckCircle2 size={16} />}</span>
              Email
            </div>
            <div
              className={`delete-account-step ${
                step === "otp" ? "active" : step === "success" ? "done" : ""
              }`}
            >
              <span>
                {step === "success" ? <CheckCircle2 size={16} /> : "2"}
              </span>
              Verify
            </div>
            <div
              className={`delete-account-step ${step === "success" ? "active done" : ""}`}
            >
              <span>
                {step === "success" ? <CheckCircle2 size={16} /> : "3"}
              </span>
              Submitted
            </div>
          </div>

          <div className="delete-account-form-card">
            {message && (
              <div
                className={`delete-account-message ${messageType}`}
                role={messageType === "error" ? "alert" : "status"}
              >
                {messageType === "success" ? (
                  <CheckCircle2 size={18} aria-hidden="true" />
                ) : (
                  <AlertTriangle size={18} aria-hidden="true" />
                )}
                <span>{message}</span>
              </div>
            )}

            {step === "email" && (
              <form onSubmit={requestOtp} className="delete-account-form">
                <div className="delete-account-field">
                  <label htmlFor="delete-account-email">Email Address</label>
                  <input
                    id="delete-account-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small>
                    Use the email address linked to your Gympass account.
                  </small>
                </div>

                <button
                  type="submit"
                  className="delete-account-primary-button"
                  disabled={loading}
                >
                  {loading ? "Sending OTP..." : "Send Verification Code"}
                </button>
              </form>
            )}

            {step === "otp" && (
              <form onSubmit={verifyOtp} className="delete-account-form">
                <div className="delete-account-field">
                  <label htmlFor="delete-account-otp">Enter OTP</label>
                  <input
                    id="delete-account-otp"
                    type="text"
                    required
                    inputMode="numeric"
                    placeholder="Enter 6-digit code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="delete-account-otp-input"
                  />
                  <small>We sent the verification code to {email}.</small>
                </div>

                <button
                  type="submit"
                  className="delete-account-dark-button"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Confirm & Delete Account"}
                </button>

                <button
                  type="button"
                  onClick={resetEmailStep}
                  className="delete-account-back-button"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  Change email
                </button>
              </form>
            )}

            {step === "success" && (
              <div className="delete-account-success">
                <div className="delete-account-success-icon">
                  <CheckCircle2 size={36} aria-hidden="true" />
                </div>
                <h2>Account Deletion Requested</h2>
                <p>
                  Your request has been verified and submitted. You will be
                  redirected shortly.
                </p>
              </div>
            )}
          </div>

          <div className="delete-account-warning">
            <AlertTriangle size={20} aria-hidden="true" />
            <div>
              <strong>Important</strong>
              <ul>
                <li>
                  You must have access to the email linked to your account.
                </li>
                <li>
                  Your account and associated data will be permanently deleted.
                </li>
                <li>This action cannot be undone.</li>
                <li>Some records may be retained where required by law.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
