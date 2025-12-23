import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center text-primary">Terms and Conditions</h2>
        <p>
          Welcome to <strong>HealthConnect</strong>. These terms and conditions outline the rules and regulations for the use of our website.
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use HealthConnect if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h4 className="mt-4">1. License</h4>
        <p>
          Unless otherwise stated, HealthConnect and/or its licensors own the intellectual property rights for all material on this site.
        </p>

        <h4 className="mt-4">2. User Restrictions</h4>
        <p>
          You must not:
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Republish material from HealthConnect</li>
            <li className="list-group-item">Sell, rent or sub-license material</li>
            <li className="list-group-item">Reproduce, duplicate or copy material</li>
            <li className="list-group-item">Redistribute content without permission</li>
          </ul>
        </p>

        <h4 className="mt-4">3. Content Liability</h4>
        <p>
          We shall not be hold responsible for any content that appears on your website that links to us. You agree to protect and defend us against all claims.
        </p>

        <h4 className="mt-4">4. Your Privacy</h4>
        <p>
          Please read our <a href="/privacy-policy">Privacy Policy</a>.
        </p>

        <h4 className="mt-4">5. Reservation of Rights</h4>
        <p>
          We reserve the right to request that you remove all links or any particular link to our website.
        </p>

        <p className="mt-5 text-muted text-center">
          Last updated: May 2025
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
