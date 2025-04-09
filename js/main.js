
// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Navigation & Theme Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const themeToggle = document.getElementById('themeToggle');
  const scrollToGeneratorBtn = document.getElementById('scrollToGenerator');
  
  // Generator Elements
  const bannerPosition = document.getElementById('bannerPosition');
  const backgroundColor = document.getElementById('backgroundColor');
  const textColor = document.getElementById('textColor');
  const acceptButtonText = document.getElementById('acceptButtonText');
  const rejectButtonText = document.getElementById('rejectButtonText');
  const privacyPolicyURL = document.getElementById('privacyPolicyURL');
  const bannerText = document.getElementById('bannerText');
  
  // Preview Elements
  const previewContainer = document.getElementById('previewContainer');
  const previewBanner = document.getElementById('previewBanner');
  const previewText = document.getElementById('previewText');
  const previewAcceptButton = document.getElementById('previewAcceptButton');
  const previewRejectButton = document.getElementById('previewRejectButton');
  const previewPrivacyLink = document.getElementById('previewPrivacyLink');
  
  // Code Generation Elements
  const generatedCode = document.getElementById('generatedCode');
  const generateCodeBtn = document.getElementById('generateCodeBtn');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const copySuccess = document.getElementById('copySuccess');
  
  // Menu Toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mainNav.classList.contains('active') && 
        !mainNav.contains(event.target) && 
        event.target !== menuToggle) {
      mainNav.classList.remove('active');
    }
  });
  
  // Theme Toggle
  if (themeToggle) {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark-theme');
    }
    
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      
      // Save preference
      if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
  
  // Scroll to Generator
  if (scrollToGeneratorBtn && document.getElementById('generator')) {
    scrollToGeneratorBtn.addEventListener('click', function() {
      document.getElementById('generator').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }
  
  // Update Preview
  function updatePreview() {
    if (!previewBanner) return;
    
    // Update banner position
    if (bannerPosition.value === 'top') {
      previewBanner.className = 'preview-banner top';
    } else {
      previewBanner.className = 'preview-banner bottom';
    }
    
    // Update colors
    previewBanner.style.backgroundColor = backgroundColor.value;
    previewBanner.style.color = textColor.value;
    
    // Update text
    previewText.textContent = bannerText.value;
    previewAcceptButton.textContent = acceptButtonText.value;
    previewRejectButton.textContent = rejectButtonText.value;
    
    // Update privacy link
    previewPrivacyLink.href = privacyPolicyURL.value;
  }
  
  // Attach update events to all input elements
  if (bannerPosition) {
    bannerPosition.addEventListener('change', updatePreview);
    backgroundColor.addEventListener('input', updatePreview);
    textColor.addEventListener('input', updatePreview);
    acceptButtonText.addEventListener('input', updatePreview);
    rejectButtonText.addEventListener('input', updatePreview);
    privacyPolicyURL.addEventListener('input', updatePreview);
    bannerText.addEventListener('input', updatePreview);
    
    // Initial preview update
    updatePreview();
  }
  
  // Generate Code
  if (generateCodeBtn) {
    generateCodeBtn.addEventListener('click', function() {
      const code = generateConsentCode();
      generatedCode.textContent = code;
      copyCodeBtn.disabled = false;
    });
  }
  
  // Function to generate the actual code
  function generateConsentCode() {
    const position = bannerPosition.value;
    const bgColor = backgroundColor.value;
    const txtColor = textColor.value;
    const acceptBtnText = acceptButtonText.value;
    const rejectBtnText = rejectButtonText.value;
    const privacyURL = privacyPolicyURL.value;
    const bannerTextValue = bannerText.value;
    
    // Define styles for the banner
    const positionCSS = position === 'top' ? 'top: 0;' : 'bottom: 0;';
    
    return `<!-- GDPR Cookie Consent Banner - Generated by gdprcookieconsentgenerator.com -->
<div id="gdpr-cookie-consent" style="display: none; position: fixed; ${positionCSS} left: 0; width: 100%; background-color: ${bgColor}; color: ${txtColor}; padding: 15px; box-shadow: 0 -2px 10px rgba(0,0,0,0.2); z-index: 999;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px;">
    <p style="margin: 0;">${bannerTextValue}</p>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <button id="gdpr-accept-btn" style="background-color: #0066cc; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">${acceptBtnText}</button>
      <button id="gdpr-reject-btn" style="background-color: #666; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">${rejectBtnText}</button>
      <a href="${privacyURL}" style="color: #ccc; text-decoration: underline; display: inline-flex; align-items: center;" target="_blank">Learn more</a>
    </div>
  </div>
</div>

<script>
(function() {
  // Function to check if consent was already given
  function hasConsent() {
    return document.cookie.split(';').some(item => item.trim().startsWith('gdpr-consent='));
  }
  
  // Function to set consent cookie
  function setConsentCookie(accepted) {
    const value = accepted ? 'accepted' : 'rejected';
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 6); // Cookie expires in 6 months
    
    document.cookie = \`gdpr-consent=\${value};expires=\${expiryDate.toUTCString()};path=/;SameSite=Lax\`;
  }
  
  // Function to hide the banner
  function hideBanner() {
    document.getElementById('gdpr-cookie-consent').style.display = 'none';
  }
  
  // Function to show the banner
  function showBanner() {
    document.getElementById('gdpr-cookie-consent').style.display = 'block';
  }
  
  // Show the banner only if consent wasn't given before
  if (!hasConsent()) {
    showBanner();
  }
  
  // Add event listeners to buttons
  document.getElementById('gdpr-accept-btn').addEventListener('click', function() {
    setConsentCookie(true);
    hideBanner();
    
    // Here you could activate additional cookies or tracking scripts
    console.log('Cookies accepted');
  });
  
  document.getElementById('gdpr-reject-btn').addEventListener('click', function() {
    setConsentCookie(false);
    hideBanner();
    
    // Here you could disable non-essential cookies or tracking
    console.log('Cookies rejected');
  });
})();
</script>
<!-- End of GDPR Cookie Consent Banner -->`;
  }
  
  // Copy to Clipboard
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', function() {
      const textArea = document.createElement('textarea');
      textArea.value = generatedCode.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      // Show success message
      copySuccess.classList.remove('hidden');
      copyCodeBtn.classList.add('copied');
      
      // Hide message after 3 seconds
      setTimeout(function() {
        copySuccess.classList.add('hidden');
        copyCodeBtn.classList.remove('copied');
      }, 3000);
    });
  }
});
