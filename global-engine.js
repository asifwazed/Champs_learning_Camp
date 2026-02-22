/* global-engine.js - Master Engine for Global Components & Upgrades */

function injectGlobalComponents() {
    // 1. Inject the CSS styling for the Translator
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        #google_translate_element { position: fixed; bottom: 90px; left: 15px; z-index: 200; }
        .goog-te-gadget-simple { background-color: white !important; border-radius: 50px !important; padding: 8px 15px !important; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border: 1px solid #e2e8f0 !important; font-family: 'Plus Jakarta Sans', sans-serif !important; font-size: 12px !important; font-weight: 700 !important; }
        .goog-te-gadget-icon { display: none; }
        .goog-te-menu-value span { color: #3b82f6 !important; }
        .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
        body { top: 0 !important; } /* Fixes Google's annoying top spacing bug */
        .skiptranslate iframe { display: none !important; } /* Hides the top banner */
    `;
    document.head.appendChild(globalStyle);

    // 2. Inject the Translator HTML Div
    const translateDiv = document.createElement('div');
    translateDiv.id = "google_translate_element";
    document.body.appendChild(translateDiv);

    // 3. Inject the Google Translate logic scripts
    const script1 = document.createElement('script');
    script1.type = "text/javascript";
    script1.innerHTML = `
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en', 
                includedLanguages: 'bn,hi,en', 
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = "text/javascript";
    script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script2);

    // NOTE TO ASIF: In the future, if you want to add a global "Notice Banner" 
    // to all pages, you can just write the code for it right here!
}

// Run the engine as soon as the page loads
window.addEventListener('DOMContentLoaded', injectGlobalComponents);
