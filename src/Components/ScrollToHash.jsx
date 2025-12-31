// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToHash() {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       // We use a small timeout to allow the page content to render first
//       const timeoutId = setTimeout(() => {
//         const element = document.getElementById(hash.replace("#", ""));
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 0); // 0 or 100ms usually works

//       return () => clearTimeout(timeoutId);
//     } else {
//       // If no hash, scroll to top of the new page
//       window.scrollTo(0, 0);
//     }
//   }, [pathname, hash]); // Trigger whenever path or hash changes

//   return null;
// }
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  // Extract 'key' from useLocation
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // Small delay to ensure DOM is ready
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]); // Adding 'key' here fixes the "re-click" bug

  return null;
}
