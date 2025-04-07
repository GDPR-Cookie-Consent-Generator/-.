
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Copy, ArrowRight } from "lucide-react";

const CookieConsentGenerator: React.FC = () => {
  const [showCodeGen, setShowCodeGen] = useState(false);
  const { toast } = useToast();
  const codeRef = useRef<HTMLPreElement>(null);
  
  // Default settings
  const [bannerPosition, setBannerPosition] = useState<"bottom" | "top">("bottom");
  const [backgroundColor, setBackgroundColor] = useState("#333333");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [acceptButtonText, setAcceptButtonText] = useState("Accept");
  const [rejectButtonText, setRejectButtonText] = useState("Reject");
  const [privacyPolicyURL, setPrivacyPolicyURL] = useState("");
  const [bannerText, setBannerText] = useState("We use cookies to enhance your experience.");

  const handleStartNow = () => {
    setShowCodeGen(true);
    
    // Scroll to customization section
    setTimeout(() => {
      const element = document.getElementById("customization");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const generateCode = () => {
    const consentCode = `<!-- GDPR Cookie Consent Banner -->
<div id="gdpr-cookie-consent" style="display:none; position:fixed; ${bannerPosition}:0; left:0; right:0; background-color:${backgroundColor}; color:${textColor}; padding:15px; text-align:center; z-index:9999; font-family:Arial, sans-serif; box-shadow:0 -2px 10px rgba(0,0,0,0.2);">
  <div style="max-width:1200px; margin:0 auto; display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:15px;">
    <p style="margin:0; padding:0;">${bannerText}</p>
    <div style="display:flex; gap:10px;">
      <button onclick="acceptCookies()" style="background-color:#0FA0CE; color:white; border:none; padding:8px 15px; border-radius:4px; cursor:pointer; font-weight:bold;">${acceptButtonText}</button>
      <button onclick="rejectCookies()" style="background-color:#f1f1f1; color:#333; border:none; padding:8px 15px; border-radius:4px; cursor:pointer; font-weight:bold;">${rejectButtonText}</button>
      ${privacyPolicyURL ? `<a href="${privacyPolicyURL}" target="_blank" style="color:${textColor}; text-decoration:underline; font-size:14px; align-self:center;">Learn more</a>` : ''}
    </div>
  </div>
</div>

<script>
  // Show the cookie consent banner if consent hasn't been given
  document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('gdprConsentGiven')) {
      document.getElementById('gdpr-cookie-consent').style.display = 'block';
    }
  });

  // Function to handle accepting cookies
  function acceptCookies() {
    localStorage.setItem('gdprConsentGiven', 'true');
    document.getElementById('gdpr-cookie-consent').style.display = 'none';
  }

  // Function to handle rejecting cookies
  function rejectCookies() {
    localStorage.setItem('gdprConsentRejected', 'true');
    document.getElementById('gdpr-cookie-consent').style.display = 'none';
    
    // You can add additional logic here to disable non-essential cookies
    // or tracking based on the user's choice
  }
</script>`;
    
    return consentCode;
  };

  const copyToClipboard = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.textContent || "";
      navigator.clipboard.writeText(codeText)
        .then(() => {
          toast({
            title: "Code copied to clipboard!",
            description: "You can now paste it into your website.",
            duration: 3000
          });
          
          // Add 'copied' class for animation
          const copyBtn = document.querySelector('.copy-btn');
          copyBtn?.classList.add('copied');
          
          // Remove class after animation
          setTimeout(() => {
            copyBtn?.classList.remove('copied');
          }, 2000);
        })
        .catch(() => {
          toast({
            title: "Failed to copy code",
            description: "Please try again or manually select and copy the code.",
            variant: "destructive",
            duration: 3000
          });
        });
    }
  };

  return (
    <div className="w-full">
      {/* Header with Ad Banner */}
      <div className="container mx-auto px-4 pt-6">
        <div className="ads-banner mb-8">
          <p className="text-sm font-medium mb-2">ADVERTISEMENT</p>
          <div className="bg-gray-200 dark:bg-gray-700 h-24 flex items-center justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Ad Space - 728x90</p>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Generate GDPR Cookie Consent Code in 30 Seconds – Free & No Signup!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Create a professional, customizable cookie consent banner for your website that complies with GDPR regulations.
          </p>
          <div className="space-y-6 mb-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Customize colors, text, and banner position</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>One-click copy code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No registration required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>GDPR compliant solution</span>
                </li>
              </ul>
            </div>
          </div>
          <Button
            onClick={handleStartNow}
            className="text-lg bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto"
          >
            Start Now <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      {/* Customization Section */}
      {showCodeGen && (
        <section id="customization" className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Customize Your Cookie Consent Banner</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Banner Settings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="bannerPosition">Banner Position</Label>
                        <Select
                          value={bannerPosition}
                          onValueChange={(value) => setBannerPosition(value as "bottom" | "top")}
                        >
                          <SelectTrigger id="bannerPosition">
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bottom">Bottom</SelectItem>
                            <SelectItem value="top">Top</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="backgroundColor">Background Color</Label>
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-8 h-8 rounded border border-gray-300 dark:border-gray-600" 
                            style={{ backgroundColor }}
                          />
                          <Input
                            id="backgroundColor"
                            type="color"
                            value={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.target.value)}
                            className="w-12 h-9 p-0"
                          />
                          <Input
                            type="text"
                            value={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.target.value)}
                            className="flex-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="textColor">Text Color</Label>
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-8 h-8 rounded border border-gray-300 dark:border-gray-600" 
                            style={{ backgroundColor: textColor }}
                          />
                          <Input
                            id="textColor"
                            type="color"
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                            className="w-12 h-9 p-0"
                          />
                          <Input
                            type="text"
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Text Settings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="bannerText">Banner Text</Label>
                        <Textarea
                          id="bannerText"
                          value={bannerText}
                          onChange={(e) => setBannerText(e.target.value)}
                          className="h-24"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="acceptButtonText">Accept Button Text</Label>
                        <Input
                          id="acceptButtonText"
                          value={acceptButtonText}
                          onChange={(e) => setAcceptButtonText(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="rejectButtonText">Reject Button Text</Label>
                        <Input
                          id="rejectButtonText"
                          value={rejectButtonText}
                          onChange={(e) => setRejectButtonText(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="privacyPolicyURL">Privacy Policy URL (optional)</Label>
                        <Input
                          id="privacyPolicyURL"
                          type="url"
                          placeholder="https://example.com/privacy"
                          value={privacyPolicyURL}
                          onChange={(e) => setPrivacyPolicyURL(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-7">
                  <div className="sticky top-4 space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-4">Preview</h3>
                      
                      <div className="relative border border-gray-200 dark:border-gray-700 rounded-lg h-96 overflow-hidden bg-gray-100 dark:bg-gray-900">
                        <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                          Website Content Preview
                        </div>
                        
                        {/* Cookie Banner Preview */}
                        <div 
                          className="cookie-consent-preview absolute left-0 right-0 py-4 px-6 flex flex-wrap justify-center items-center gap-4"
                          style={{ 
                            backgroundColor, 
                            color: textColor,
                            [bannerPosition]: 0
                          }}
                        >
                          <p className="m-0">{bannerText}</p>
                          <div className="flex gap-2">
                            <button 
                              className="bg-primary text-white px-3 py-1 rounded text-sm font-medium"
                            >
                              {acceptButtonText}
                            </button>
                            <button 
                              className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm font-medium"
                            >
                              {rejectButtonText}
                            </button>
                            {privacyPolicyURL && (
                              <a 
                                href="#" 
                                className="text-sm underline" 
                                style={{ color: textColor }}
                              >
                                Learn more
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Generated Code</h3>
                        <button 
                          onClick={copyToClipboard}
                          className="copy-btn"
                        >
                          <Copy size={16} className="mr-2" />
                          Copy Code
                        </button>
                      </div>
                      
                      <pre 
                        ref={codeRef}
                        className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto text-sm"
                      >
                        {generateCode()}
                      </pre>
                      
                      <div className="mt-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium mb-2">Installation Instructions:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Paste this code before the closing <code>&lt;/body&gt;</code> tag of your website.
                        </p>
                      </div>
                    </div>
                    
                    {/* Affiliate Banner */}
                    <div className="ads-banner">
                      <p className="text-sm font-medium mb-2">ADVERTISEMENT</p>
                      <div className="bg-gray-200 dark:bg-gray-700 p-4 text-center">
                        <p className="font-medium mb-2">Need a Privacy Policy for GDPR Compliance?</p>
                        <p className="text-sm mb-3">Generate a professional privacy policy for your website in minutes.</p>
                        <a href="#" className="inline-block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CookieConsentGenerator;
