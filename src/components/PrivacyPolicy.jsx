import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center text-success">Privacy Policy</h2>
        <p>
          At <strong>HealthConnect</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data.
        </p>

        <h4 className="mt-4">1. Information We Collect</h4>
        <p>We may collect the following types of personal information:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name, email address, phone number</li>
          <li className="list-group-item">Medical history and health-related data</li>
          <li className="list-group-item">Login credentials and usage activity</li>
        </ul>

        <h4 className="mt-4">2. How We Use Your Information</h4>
        <p>Your data is used to:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Provide medical and appointment services</li>
          <li className="list-group-item">Improve our platform’s performance and security</li>
          <li className="list-group-item">Send service-related notifications and updates</li>
        </ul>

        <h4 className="mt-4">3. Sharing of Information</h4>
        <p>
          We do not sell your personal data. Your information may be shared only with:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Authorized medical professionals</li>
          <li className="list-group-item">Legal authorities, if required by law</li>
          <li className="list-group-item">Third-party services with strict confidentiality agreements</li>
        </ul>

        <h4 className="mt-4">4. Data Security</h4>
        <p>
          We implement strong security measures including encryption and secure servers to protect your personal data.
        </p>

        <h4 className="mt-4">5. Your Rights</h4>
        <p>You have the right to:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Access, update or delete your information</li>
          <li className="list-group-item">Withdraw consent at any time</li>
          <li className="list-group-item">Lodge a complaint with a data protection authority</li>
        </ul>

        <h4 className="mt-4">6. Cookies</h4>
        <p>
          We use cookies to improve your browsing experience. You can choose to disable cookies through your browser settings.
        </p>

        <h4 className="mt-4">7. Changes to This Policy</h4>
        <p>
          We may update this policy from time to time. Changes will be posted on this page with a revised effective date.
        </p>

        <p className="mt-5 text-muted text-center">
          Last updated: May 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
