import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const Analytics = () => {
  const location = useLocation();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      ReactGA.initialize('G-VG59SK0CLK');
      isInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (isInitialized.current) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};

export default Analytics;
