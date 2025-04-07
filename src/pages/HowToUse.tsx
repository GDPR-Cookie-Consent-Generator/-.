
import React from "react";
import MainLayout from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowToUse = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">How to Use the GDPR Cookie Consent Generator</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              Follow these simple steps to create and implement a GDPR-compliant cookie consent banner on your website in less than a minute.
            </p>
            
            <div className="my-8 space-y-8">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
                  <span className="flex items-center justify-center bg-primary text-white w-8 h-8 rounded-full text-sm font-bold">1</span>
                  Start the Generator
                </h2>
                <p>
                  On the homepage, click the "Start Now" button to access the customization interface. This will take you to the section where you can personalize your cookie consent banner.
                </p>
                <div className="mt-4 text-center">
                  <Link to="/">
                    <Button className="bg-primary hover:bg-primary/90">
                      Go to Homepage <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
                  <span className="flex items-center justify-center bg-primary text-white w-8 h-8 rounded-full text-sm font-bold">2</span>
                  Customize Your Banner
                </h2>
                <p>
                  Customize your cookie consent banner using the available options:
                </p>
                <ul className="mt-2 space-y-2">
                  <li><strong>Banner Position:</strong> Choose whether your banner appears at the top or bottom of your website.</li>
                  <li><strong>Background Color:</strong> Select the background color of your banner using the color picker.</li>
                  <li><strong>Text Color:</strong> Choose the color for the text in your banner.</li>
                  <li><strong>Banner Text:</strong> Edit the message displayed to visitors.</li>
                  <li><strong>Button Text:</strong> Customize the text on the accept and reject buttons.</li>
                  <li><strong>Privacy Policy URL:</strong> Add a link to your website's privacy policy.</li>
                </ul>
                <p className="mt-4">
                  As you make changes, the live preview will update in real-time, showing you exactly how your banner will look on your website.
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
                  <span className="flex items-center justify-center bg-primary text-white w-8 h-8 rounded-full text-sm font-bold">3</span>
                  Copy the Generated Code
                </h2>
                <p>
                  After customizing your banner to your liking, click the "Copy Code" button to copy the generated HTML and JavaScript to your clipboard. The code will include:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>The cookie consent banner HTML</li>
                  <li>JavaScript functions to handle user consent</li>
                  <li>Logic to remember user preferences using localStorage</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
                  <span className="flex items-center justify-center bg-primary text-white w-8 h-8 rounded-full text-sm font-bold">4</span>
                  Implement on Your Website
                </h2>
                <p>
                  Paste the copied code into your website's HTML, right before the closing <code>&lt;/body&gt;</code> tag. This ensures that the cookie consent banner loads properly on all pages.
                </p>
                <div className="mt-4 bg-gray-200 dark:bg-gray-700 p-4 rounded">
                  <p className="text-sm font-medium mb-2">Example placement in your HTML file:</p>
                  <pre className="text-xs overflow-x-auto p-2 bg-white dark:bg-gray-900 rounded">
                    {`<!DOCTYPE html>
<html>
<head>
    <title>Your Website</title>
    <!-- Your existing head content -->
</head>
<body>
    <!-- Your website content -->
    
    <!-- Paste the GDPR Cookie Consent code here -->
    
</body>
</html>`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
                  <span className="flex items-center justify-center bg-primary text-white w-8 h-8 rounded-full text-sm font-bold">5</span>
                  Test Your Implementation
                </h2>
                <p>
                  After adding the code to your website, test it by:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>Visiting your website in an incognito/private browser window</li>
                  <li>Verifying that the banner appears as expected</li>
                  <li>Testing the accept and reject buttons to ensure they work correctly</li>
                  <li>Checking that the banner doesn't reappear after a user has made their choice</li>
                </ul>
              </div>
            </div>
            
            <h2>Additional Resources</h2>
            <p>
              To ensure your website is fully GDPR compliant, consider these additional steps:
            </p>
            <ul>
              <li><a href="#" className="text-primary hover:underline">Create a comprehensive Privacy Policy</a></li>
              <li><a href="#" className="text-primary hover:underline">Implement a data access and deletion mechanism</a></li>
              <li><a href="#" className="text-primary hover:underline">Review third-party services used on your website</a></li>
            </ul>
            
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-lg font-bold mb-2">Need Additional Help?</h3>
              <p>
                If you have any questions or need assistance implementing your cookie consent banner, feel free to reach out. I'm committed to helping website owners achieve GDPR compliance.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/">
                <Button className="bg-primary hover:bg-primary/90 text-lg px-6 py-6 h-auto">
                  Create Your Cookie Consent Banner <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowToUse;
