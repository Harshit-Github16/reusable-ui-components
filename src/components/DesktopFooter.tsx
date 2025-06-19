'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import play_storeIcon from '../../public/images/play_store.svg';
import app_storeIcon from '../../public/images/app_store.svg';
import logoDarkImage from "../../public/images/logo-dark.svg"
import {
  socialLinks,
  navItems,
} from './FooterData';

export interface Broker {
  link: string;
  name: string;
  isSend: boolean;
}

export interface DesktopFooterProps {
  brokersList?: Broker[] | undefined;
  sendNewsletter?: (value: any) => void | undefined;
  isSend?: boolean;
  setEmail: String;
  isFullUrl: boolean;
  handleRouting: (value: any) => void
}

function DesktopFooter({ sendNewsletter, isSend, isFullUrl = false, handleRouting }: DesktopFooterProps) {
  const [subscribeEmail, setSubscribeEmail] = useState<string>('');
  const BASE_URL = 'https://www.niftytrader.in';

  const refreshPath = [
    '/ipo',
    '/my-dashboard'
  ];
  const generateHref = (pageUrl: string): string => {
    const shouldUseFullUrl = isFullUrl || refreshPath.some(path => pageUrl.startsWith(path));
    return shouldUseFullUrl ? new URL(pageUrl, BASE_URL).href : pageUrl;
  };

  return (
    <section className="tw-bg-[#1b0d29] tw-bg-cover tw-pt-6 tw-pb-2 tw-px-6 tw-bg-no-repeat">
       <div className='tw-flex tw-flwx-row tw-justify-between tw-mb-6'>
       <div className="tw-flex tw-flex-col tw-gap-6 tw-min-w-[220px]">
          <Link href="/" onClick={e => e.preventDefault()}>
            <Image src={logoDarkImage} alt="Logo" width={180} height={40} className="tw-mb-2" />
          </Link>
          <div>
            <p className="tw-text-white tw-text-base tw-font-medium tw-mb-2">Connect with Us</p>
            <ul className="tw-flex tw-gap-3">
              {socialLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    target="_blank"
                    href={item.link}
                    className={`tw-flex tw-items-center tw-justify-center tw-w-9 tw-h-9 tw-rounded-full ${idx === 0
                      ? 'tw-bg-[#485a96]'
                      : idx === 1
                        ? 'tw-bg-[#333]'
                        : idx === 2
                          ? 'tw-bg-[#dc1716]'
                          : idx === 3
                            ? 'tw-bg-linkedin-gradient'
                            : idx === 4
                              ? 'tw-bg-instagram-gradient'
                              : idx === 5
                                ? 'tw-bg-[#43d37a]'
                                : 'tw-bg-black'
                      }`}
                  >
                    <Image src={item.icon} width={22} height={22} alt="icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-items-end tw-gap-4 tw-min-w-[320px]">
          <div>
            <p className="tw-text-white tw-font-bold tw-text-lg tw-mb-0">SUBSCRIBE TO OUR NEWSLETTER</p>
            <p className="tw-text-[#DDDDDD] tw-text-xs tw-font-normal tw-mb-2">Sign up & receive the latest tips via email.</p>
            <div className="tw-flex tw-items-center tw-mb-3">
              <input
                type="email"
                value={subscribeEmail}
                onChange={e => setSubscribeEmail(e.target.value)}
                className="tw-bg-white tw-px-3 tw-py-2 tw-font-normal tw-outline-none tw-rounded-l tw-w-[200px] tw-text-sm tw-text-black"
                placeholder="Enter Email Address"
              />
              <button
                disabled={!isSend || !subscribeEmail?.trim()}
                onClick={() => sendNewsletter && sendNewsletter(subscribeEmail)}
                className="tw-bg-[#3b82f6] tw-rounded-r tw-text-white tw-px-6 tw-py-2 tw-font-semibold tw-text-base tw-transition-all hover:tw-bg-[#2563eb] disabled:tw-opacity-60"
              >
                Subscribe
              </button>
            </div>
            <div className="tw-flex tw-gap-3">
              <Link href="https://play.google.com/store/apps/details?id=in.niftytrader&hl=en_IN" target="_blank">
                <Image src={play_storeIcon} alt="icon" width={140} height={40} className="tw-cursor-pointer" />
              </Link>
              <Link href="https://apps.apple.com/us/app/niftytrader/id1587483980" target="_blank">
                <Image src={app_storeIcon} alt="icon" width={140} height={40} className="tw-cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
       </div>

      <div className="tw-flex tw-flex-row tw-justify-between tw-items-start tw-gap-8 tw-max-w-[1600px] tw-mx-auto">
        {/* Left: Logo + Social */}
     
        {/* Center: 6 Columns */}
        <div className="tw-flex-1 tw-grid tw-grid-cols-6 tw-gap-6">
          {navItems.slice(0, 6).map((item, idx) => (
            <div key={idx}>
              <div className="tw-text-[#3b82f6] tw-font-bold tw-text-base tw-mb-2 tw-border-b-2 tw-border-[#3b82f6] tw-inline-block tw-pb-1">
                {item.label}
              </div>
              <ul className="tw-mt-2 tw-space-y-2">
                {item.links.slice(0, 5).map((link, i) => (
                  <li key={i}>
                    <Link
                      href={generateHref(link.url)}
                      onClick={e => { e.preventDefault(); handleRouting(link.url); }}
                      className="tw-flex tw-items-center tw-text-white tw-text-base tw-font-normal hover:tw-text-[#3b82f6] tw-transition"
                    >
                      <span className="tw-mr-2 tw-text-lg">›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right: Newsletter + App Store */}
    
      </div>
      {/* Divider and copyright */}
      <div className="tw-mt-8 tw-border-t tw-border-[#555] tw-pt-4 tw-text-white tw-text-xs tw-text-center">
        Copyright © <Link href="/" className="tw-text-[#3b82f6] tw-px-1">NiftyTrader</Link> | All rights reserved ver {process.env.VERSION}
      </div>
    </section>
  );
}

export default DesktopFooter; 