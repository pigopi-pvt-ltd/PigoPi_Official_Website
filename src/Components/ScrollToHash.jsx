import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // We use a small timeout to allow the page content to render first
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0); // 0 or 100ms usually works

      return () => clearTimeout(timeoutId);
    } else {
      // If no hash, scroll to top of the new page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Trigger whenever path or hash changes

  return null;
}
