
import React from "react";
import MainLayout from "@/components/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Me</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <div className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://randomuser.me/api/portraits/men/41.jpg" 
                  alt="John" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">John</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Web Developer & GDPR Compliance Specialist</p>
                <p>
                  Hello! I'm John, a 26-year-old developer with a passion for helping website owners comply with GDPR regulations quickly and efficiently.
                </p>
              </div>
            </div>
            
            <h2>My Mission</h2>
            <p>
              I created the GDPR Cookie Consent Generator with a clear mission: to make GDPR compliance accessible to everyone, regardless of technical expertise or budget. I believe that proper data privacy practices shouldn't be complicated or expensive, and that's why I've made this tool completely free to use.
            </p>
            
            <p>
              With over 5 years of experience in web development and a specialization in privacy regulations, I've seen firsthand how challenging it can be for businesses, especially small ones, to navigate the complex landscape of data protection laws. Many website owners struggle to implement proper cookie consent mechanisms, often resorting to expensive solutions or, worse, ignoring compliance altogether.
            </p>
            
            <h2>Why I Built This Tool</h2>
            <p>
              The inspiration for this project came when I was helping a friend set up her small business website. She was concerned about GDPR compliance but had no budget for premium solutions. After searching for free alternatives and finding them either too complex or inadequate, I decided to create a solution myself.
            </p>
            
            <p>
              This tool is designed to be straightforward and effective, offering a balance between simplicity and customization. It generates code that you can implement immediately, providing a compliant cookie consent mechanism without the complexity or cost of premium services.
            </p>
            
            <h2>My Impact on the Web Development Community</h2>
            <p>
              Since launching this tool, I've received hundreds of messages from grateful users worldwide – from individual bloggers to small business owners and even developers working with larger organizations. The tool has helped thousands of websites achieve GDPR compliance quickly and efficiently.
            </p>
            
            <p>
              Beyond this tool, I actively contribute to open-source projects focused on web accessibility and privacy. I regularly write articles on web development best practices and data protection regulations on my personal blog and industry publications. I believe in democratizing technical knowledge and making the web a more accessible, privacy-respecting space for everyone.
            </p>
            
            <h2>Education and Background</h2>
            <p>
              I hold a Bachelor's degree in Computer Science with a focus on web technologies. Additionally, I've completed specialized courses in European data protection law and GDPR compliance. This combination of technical expertise and regulatory knowledge allows me to create solutions that are both technically sound and legally compliant.
            </p>
            
            <h2>Commitment to Free Resources</h2>
            <p>
              I strongly believe that basic compliance tools should be accessible to everyone. While this website is monetized through non-intrusive advertisements to cover hosting and maintenance costs, the core tool will always remain free to use, with no registration required.
            </p>
            
            <p>
              Thank you for using the GDPR Cookie Consent Generator. I hope it helps you in your journey to create a more privacy-respecting web presence. If you have any questions or feedback, please don't hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
