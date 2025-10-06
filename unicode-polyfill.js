/* ============================================
   UNICODE-SAFE BASE64 ENCODING POLYFILL
   Fixes btoa/atob for Vietnamese and Unicode
   ============================================ */

// Store original functions
const originalBtoa = window.btoa;
const originalAtob = window.atob;

// Safe btoa that handles Unicode
window.btoa = function(str) {
  try {
    // Try original first for ASCII
    return originalBtoa(str);
  } catch (e) {
    // Fallback for Unicode: encode to UTF-8 first
    try {
      return originalBtoa(unescape(encodeURIComponent(str)));
    } catch (e2) {
      console.error('btoa failed:', e2);
      throw e2;
    }
  }
};

// Safe atob that handles Unicode
window.atob = function(str) {
  try {
    const decoded = originalAtob(str);
    // Try to decode as UTF-8
    try {
      return decodeURIComponent(escape(decoded));
    } catch (e) {
      // If UTF-8 decode fails, return raw decoded
      return decoded;
    }
  } catch (e) {
    console.error('atob failed:', e);
    throw e;
  }
};

// Export for module use
export const safeBtoa = window.btoa;
export const safeAtob = window.atob;

console.log('✅ Unicode-safe btoa/atob polyfill loaded');
