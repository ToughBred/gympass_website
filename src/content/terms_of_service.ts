export const termsOfServiceHtml = `
  <h1>Terms of Service</h1>

  <p>
    Welcome to <strong>GymPortal</strong> ("GymPortal", "we", "our", or "us"). These Terms of Service
    ("Terms") govern your access to and use of our platform, including https://gymportal.app,
    mobile applications, and related services (collectively, the "Platform").
  </p>

  <p>
    By using GymPortal, you agree to these Terms. If you do not agree, you must not use the Platform.
  </p>

  <hr />

  <h2>1. Nature of the Platform</h2>

  <p>GymPortal is a <strong>technology platform</strong> that enables:</p>

  <ul>
    <li>Gym members to purchase, manage, and access gym memberships</li>
    <li>QR-based check-ins and attendance tracking</li>
    <li>Gym operators to manage members and receive payments</li>
    <li>Payment processing on behalf of gyms</li>
  </ul>

  <p><strong>GymPortal is not a gym, fitness provider, or health service provider.</strong></p>

  <p>All fitness services are provided independently by third-party gyms.</p>

  <hr />

  <h2>2. Roles and Responsibilities</h2>

  <h3>2.1 GymPortal</h3>
  <ul>
    <li>Provides infrastructure for membership management, access control, and payments</li>
    <li>Acts as a <strong>payment collection and settlement facilitator</strong> for gyms</li>
  </ul>

  <h3>2.2 Gyms</h3>
  <p>Are solely responsible for:</p>
  <ul>
    <li>Facility operations</li>
    <li>Safety and supervision</li>
    <li>Membership terms and service delivery</li>
  </ul>

  <h3>2.3 Users (Members)</h3>
  <p>Are responsible for:</p>
  <ul>
    <li>Providing accurate information</li>
    <li>Complying with gym-specific rules</li>
    <li>Using the platform lawfully</li>
  </ul>

  <hr />

  <h2>3. Eligibility</h2>

  <p>You must:</p>
  <ul>
    <li>Be at least 13 years old</li>
    <li>Have legal capacity to enter a binding agreement</li>
    <li>Provide accurate registration information</li>
  </ul>

  <hr />

  <h2>4. Account Security</h2>

  <p>You are responsible for:</p>
  <ul>
    <li>Safeguarding your credentials</li>
    <li>All activity under your account</li>
  </ul>

  <p>
    GymPortal is not liable for unauthorized access caused by your failure to secure your account.
  </p>

  <hr />

  <h2>5. Membership and QR Check-In System</h2>

  <ul>
    <li>Access to gyms is verified through <strong>QR-based check-ins</strong></li>
    <li>A successful check-in represents a valid usage event</li>
    <li>GymPortal records check-in data as <strong>authoritative system logs</strong></li>
  </ul>

  <h3>Important:</h3>
  <ul>
    <li>Attempting to bypass or manipulate check-ins may result in suspension</li>
    <li>GymPortal is not responsible for denial of access due to gym-specific policies</li>
  </ul>

  <hr />

  <h2>6. Payments, Wallets, and Transactions</h2>

  <h3>6.1 Payment Processing</h3>
  <ul>
    <li>Payments are processed via third-party payment providers</li>
    <li>
      By making a payment, you authorize GymPortal to:
      <ul>
        <li>Collect funds on behalf of the gym</li>
        <li>Deduct applicable fees</li>
        <li>Settle remaining amounts to the gym</li>
      </ul>
    </li>
  </ul>

  <h3>6.2 Wallet / Stored Value (If Applicable)</h3>
  <ul>
    <li>GymPortal may provide a <strong>wallet or balance system</strong></li>
    <li>
      Wallet balances:
      <ul>
        <li>Are <strong>not bank accounts</strong></li>
        <li>Do <strong>not earn interest</strong></li>
        <li>May be used only within the Platform</li>
      </ul>
    </li>
  </ul>

  <h3>6.3 Idempotency &amp; Duplicate Protection</h3>
  <ul>
    <li>Transactions may use <strong>idempotency keys</strong> to prevent duplicate charges</li>
    <li>
      If duplicate requests occur:
      <ul>
        <li>Only the first valid transaction will be processed</li>
        <li>Others may be ignored or safely rejected</li>
      </ul>
    </li>
  </ul>

  <h3>6.4 Fees</h3>
  <ul>
    <li>Platform and transaction fees may apply</li>
    <li>Fees are disclosed before payment</li>
    <li>Fees are <strong>non-refundable</strong> except where required by law</li>
  </ul>

  <h3>6.5 Failed and Reversed Transactions</h3>
  <p>GymPortal is not responsible for:</p>
  <ul>
    <li>Bank failures</li>
    <li>Payment gateway downtime</li>
    <li>Delayed settlements caused by third-party providers</li>
  </ul>

  <hr />

  <h2>7. Refunds and Disputes</h2>

  <h3>7.1 Gym-Controlled Refunds</h3>
  <ul>
    <li>Refunds are primarily governed by the gym’s policies</li>
  </ul>

  <h3>7.2 Platform-Level Intervention</h3>
  <p>GymPortal may intervene in disputes but:</p>
  <ul>
    <li>Does <strong>not guarantee refunds</strong></li>
    <li>
      May rely on:
      <ul>
        <li>Check-in logs</li>
        <li>Payment records</li>
        <li>Gym-provided evidence</li>
      </ul>
    </li>
  </ul>

  <h3>7.3 Chargebacks</h3>
  <p>If you initiate a chargeback:</p>
  <ul>
    <li>
      We may:
      <ul>
        <li>Suspend your account</li>
        <li>Recover disputed amounts</li>
        <li>Share relevant transaction data with payment providers</li>
      </ul>
    </li>
  </ul>

  <hr />

  <h2>8. Acceptable Use</h2>

  <p>You agree not to:</p>
  <ul>
    <li>Commit fraud or payment abuse</li>
    <li>Exploit system weaknesses (e.g., retries, race conditions)</li>
    <li>Interfere with system performance</li>
    <li>Reverse engineer or misuse the Platform</li>
    <li>Use bots or automated abuse systems</li>
  </ul>

  <hr />

  <h2>9. Data Protection and NDPR Compliance</h2>

  <p>GymPortal processes personal data in accordance with:</p>
  <ul>
    <li><strong>Nigeria Data Protection Regulation (NDPR)</strong></li>
    <li>Applicable international data protection laws</li>
  </ul>

  <p>We:</p>
  <ul>
    <li>Collect only necessary data</li>
    <li>Process data for defined purposes</li>
    <li>Implement technical and organizational safeguards</li>
  </ul>

  <p>See our Privacy Policy for full details.</p>

  <hr />

  <h2>10. Security and System Integrity</h2>

  <p>We implement safeguards including:</p>
  <ul>
    <li>Encryption in transit</li>
    <li>Access control systems</li>
    <li>Monitoring and anomaly detection</li>
  </ul>

  <p>However:</p>
  <ul>
    <li>No system is completely secure</li>
    <li>You use the Platform at your own risk</li>
  </ul>

  <hr />

  <h2>11. Third-Party Services</h2>

  <p>We rely on third-party providers (e.g., payment processors, cloud infrastructure).</p>

  <p>We are not liable for:</p>
  <ul>
    <li>Their outages or failures</li>
    <li>Their policies or terms</li>
  </ul>

  <hr />

  <h2>12. Platform Availability</h2>

  <p>GymPortal is provided <strong>"as is"</strong> and <strong>"as available"</strong>.</p>

  <p>We do not guarantee:</p>
  <ul>
    <li>Continuous uptime</li>
    <li>Error-free operation</li>
  </ul>

  <p>We may:</p>
  <ul>
    <li>Perform maintenance</li>
    <li>Modify or discontinue features</li>
  </ul>

  <hr />

  <h2>13. Health and Liability Disclaimer</h2>

  <ul>
    <li>GymPortal does <strong>not</strong> provide medical, fitness, or training advice</li>
    <li>You use gym facilities <strong>at your own risk</strong></li>
  </ul>

  <p>GymPortal is not liable for:</p>
  <ul>
    <li>Injuries</li>
    <li>Health issues</li>
    <li>Damages arising from gym usage</li>
  </ul>

  <p>These are the responsibility of the gym and/or user.</p>

  <hr />

  <h2>14. Limitation of Liability</h2>

  <p>To the fullest extent permitted by law:</p>

  <ul>
    <li>
      GymPortal is not liable for:
      <ul>
        <li>Indirect or consequential damages</li>
        <li>Loss of data, profits, or opportunities</li>
      </ul>
    </li>
    <li>
      Total liability is limited to:
      <blockquote>
        <p>The amount you paid on the Platform in the last <strong>90 days</strong></p>
      </blockquote>
    </li>
  </ul>

  <hr />

  <h2>15. Indemnification</h2>

  <p>You agree to indemnify GymPortal against claims arising from:</p>
  <ul>
    <li>Your misuse of the Platform</li>
    <li>Your violation of these Terms</li>
    <li>Disputes with gyms or other users</li>
  </ul>

  <hr />

  <h2>16. Suspension and Termination</h2>

  <p>We may suspend or terminate your account if:</p>
  <ul>
    <li>You violate these Terms</li>
    <li>You engage in fraud or abuse</li>
    <li>Required by law</li>
  </ul>

  <hr />

  <h2>17. Governing Law and Jurisdiction</h2>

  <p>
    These Terms are governed by the laws of the <strong>Federal Republic of Nigeria</strong>.
  </p>

  <p>
    Disputes shall be subject to the jurisdiction of Nigerian courts unless otherwise required by
    applicable law.
  </p>

  <hr />

  <h2>18. International Users</h2>

  <p>If you access GymPortal from outside Nigeria:</p>
  <ul>
    <li>You agree to comply with local laws</li>
    <li>You consent to cross-border data processing</li>
  </ul>

  <hr />

  <h2>19. Changes to These Terms</h2>

  <p>We may update these Terms periodically.</p>
  <ul>
    <li>Updates will be posted on this page</li>
    <li>Continued use constitutes acceptance</li>
  </ul>

  <hr />

  <h2>20. Contact Information</h2>

  <p>For questions or legal inquiries:</p>

  <p>
    <strong>Email:</strong> support@toughbred.com<br />
    <strong>Website:</strong> https://gymportal.app
  </p>

  <hr />

  <p>
    By using GymPortal, you acknowledge that you have read, understood, and agreed to these Terms.
  </p>
`;
