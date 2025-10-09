import { useEffect, useRef } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  google?: any;
  }
}

const GOOGLE_TRANSLATE_SCRIPT_ID = "google-translate-script";

const GoogleTranslateWidget: React.FC = () => {
  const initializedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialize = () => {
      if (initializedRef.current || !(window as any).google?.translate) {
        return;
      }

      initializedRef.current = true;

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,bho,ja",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = initialize;

    let script = document.getElementById(
      GOOGLE_TRANSLATE_SCRIPT_ID
    ) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    } else if ((window as any).google?.translate) {
      initialize();
    }

    return () => {
      // leave script in place to avoid re-downloading if component remounts
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      ref={containerRef}
      className="whitespace-nowrap text-sm"
    />
  );
};

export default GoogleTranslateWidget;
