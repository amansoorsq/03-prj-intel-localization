// List of RTL language codes (e.g., Arabic, Hebrew, Persian, Urdu, Yiddish)
const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'yi'];

// Function to check if a language is RTL
function isRTL(lang) {
  // Check if the language code starts with any RTL language
  return rtlLanguages.some(rtl => lang && lang.startsWith(rtl));
}

// Set the initial direction based on the current lang attribute
document.documentElement.dir = isRTL(document.documentElement.lang) ? 'rtl' : 'ltr';

// Create a MutationObserver to watch for changes to the lang attribute
const observer = new MutationObserver(() => {
  // Get the current lang attribute
  const lang = document.documentElement.lang;
  // Set dir to 'rtl' if RTL language, else 'ltr'
  document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';
});

// Start observing changes to the lang attribute on the html element
observer.observe(document.documentElement, {
  attributes: true, // Watch for attribute changes
  attributeFilter: ['lang'] // Only watch the lang attribute
});
