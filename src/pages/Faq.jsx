import React, { useState } from 'react';
import '../styles/Faq.css';

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);  // Toggle open/close
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(0)}>
          <h4>What are the visiting hours?</h4>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-body">
            &nbsp;&nbsp;&nbsp;&nbsp;Our visiting hours are from 9 AM to 6 PM, Monday through Saturday. We ask that visitors limit their stay to 30 minutes to ensure the comfort and safety of our patients.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(1)}>
          <h4>How can I book an appointment?</h4>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-body">
             &nbsp;&nbsp;&nbsp;&nbsp;You can book an appointment directly on our website via the "Book Appointment" page or by calling our customer service at 123-456-7890.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(2)}>
          <h4>Do you accept insurance?</h4>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-body">
             &nbsp;&nbsp;&nbsp;&nbsp;Yes, we accept most major insurance providers. Please contact our billing department for more details on the insurance plans we accept.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(3)}>
          <h4>What should I bring to my appointment?</h4>
        </div>
        {activeIndex === 3 && (
          <div className="accordion-body">
             &nbsp;&nbsp;&nbsp;&nbsp;Please bring a valid ID, your insurance card (if applicable), and any medical records related to your current condition. If this is your first visit, it is also helpful to bring any previous medical history.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(4)}>
          <h4>Is parking available?</h4>
        </div>
        {activeIndex === 4 && (
          <div className="accordion-body">
             &nbsp;&nbsp;&nbsp;&nbsp;Yes, we have a large parking lot available for patients and visitors. There is also a valet service for your convenience.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(5)}>
          <h4>How can I contact the hospital?</h4>
        </div>
        {activeIndex === 5 && (
          <div className="accordion-body">
             &nbsp;&nbsp;&nbsp;&nbsp;You can reach us by phone at 123-456-7890 or email at info@healthconnect.com. You can also use the contact form on our website for any inquiries.
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqPage;
