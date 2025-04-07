
import React from "react";
import MainLayout from "@/components/MainLayout";

const Privacy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">At GDPR Cookie Consent Generator, we value your privacy and are committed to protecting your personal data. This Privacy Policy describes how we collect, use, and disclose information when you use our website.</p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect minimal information to provide our service:</p>
            <ul>
              <li><strong>Usage Data:</strong> We may collect anonymous usage data, such as the pages you visit, the time spent on our website, and the features you use.</li>
              <li><strong>Cookies:</strong> We use cookies to improve your experience on our website. You can modify your browser settings to decline cookies, but this may affect some functionality.</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our service</li>
              <li>Improve and optimize our website</li>
              <li>Analyze usage patterns and trends</li>
              <li>Detect and prevent technical issues</li>
            </ul>
            
            <h2>3. Data Security</h2>
            <p>We implement appropriate security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2>4. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.</p>
            
            <h2>5. Advertising</h2>
            <p>We display advertisements on our website through third-party advertising networks. These networks may use cookies and similar technologies to collect information about your visits to our website and other websites to provide targeted advertisements.</p>
            
            <h2>6. Children's Privacy</h2>
            <p>Our service is not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
            
            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
            
            <p className="text-sm text-gray-500 mt-8">Last updated: April 7, 2025</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
