'use client'
import React, { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

export interface Broker {
  link: string;
  name: string;
  isSend: boolean;
}

export interface FooterProps {
  brokersList?: Broker[] | undefined;
  sendNewsletter?: (value: any) => void | undefined;
  isSend?: boolean;
  setEmail: String;
  isFullUrl: boolean;
  handleRouting: (value: any) => void
}

// Custom hook to detect screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    // Check on mount
    checkIsMobile();

    // Add event listener
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

function Footer(props: FooterProps) {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <MobileFooter {...props} /> : <DesktopFooter {...props} />}
    </>
  );
}

export default Footer;