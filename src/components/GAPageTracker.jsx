import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GAPageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-WK2NT88VQ4", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GAPageTracker;
