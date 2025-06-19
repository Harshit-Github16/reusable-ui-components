'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import play_storeIcon from '../../public/images/play_store.svg';
import app_storeIcon from '../../public/images/app_store.svg';
import logoDarkImage from "../../public/images/logo-dark.svg"
import {
  socialLinks,
  navItems,
} from './FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export interface Broker {
  link: string;
  name: string;
  isSend: boolean;
}

export interface MobileFooterProps {
  brokersList?: Broker[] | undefined;
  sendNewsletter?: (value: any) => void | undefined;
  isSend?: boolean;
  setEmail: String;
  isFullUrl: boolean;
  handleRouting: (value: any) => void
}

function MobileFooter({ sendNewsletter, brokersList, isSend, isFullUrl = false, handleRouting }: MobileFooterProps) {
  const [subscribeEmail, setSubscribeEmail] = useState<string>();
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const BASE_URL = 'https://www.niftytrader.in';

  useEffect(() => {
    if (isSend && subscribeEmail) {
      setSubscribeEmail('');
    }
  }, [isSend]);

  const refreshPath = [
    '/ipo',
    '/my-dashboard'
  ]
  
  const generateHref = (pageUrl: string): string => {
    const shouldUseFullUrl = isFullUrl || refreshPath.some(path => pageUrl.startsWith(path));
    return shouldUseFullUrl ? new URL(pageUrl, BASE_URL).href : pageUrl;
  };

  return (
    <section className="tw-bg-[#1b0d29] tw-bg-cover tw-pt-4 tw-pb-4 tw-px-4 tw-p-2 tw-bg-no-repeat">
      <div className="tw-flex tw-flex-col tw-gap-4">
        {/* Logo and Social Links */}
        <div className='tw-flex tw-gap-4 tw-flex-col tw-items-center'>
          <Link
            onClick={(e) => {
              e.preventDefault()
            }}
            href={"/"}
          >
            <Image
              src={logoDarkImage}
              alt="Logo"
              width={152}
              height={35}
              className="tw-h-[35px] tw-w-[152px]"
            />
          </Link>
        </div>

        {/* Newsletter Section */}
        <div className="tw-text-center tw-flex tw-flex-col tw-items-center">
          <p className="tw-text-white tw-font-bold tw-text-base tw-mb-0">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <p className="tw-text-[#DDDDDD] tw-text-xs tw-font-normal tw-my-1">Sign up & receive the latest tips via email.</p>
          <div className="tw-flex tw-items-center tw-mb-4 tw-w-full tw-max-w-sm">
            <input
              type="email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              className={`tw-bg-white tw-px-3 tw-py-[8px] tw-font-normal tw-outline-none tw-rounded-tl-[4px] tw-rounded-bl-[4px] tw-w-full tw-text-sm ${subscribeEmail ? 'tw-text-black' : 'tw-text-[#999999]'}`}
              placeholder="Enter Email Address"
            />
            <button
              disabled={!isSend || !subscribeEmail?.trim()}
              onClick={() => sendNewsletter && sendNewsletter(subscribeEmail)}
              className="tw-bg-[#236AD4] tw-rounded-tr-[4px] tw-rounded-br-[4px] tw-text-white tw-px-3 tw-py-[8px] tw-border tw-border-transparent tw-font-medium tw-transition-all tw-duration-300 hover:tw-bg-transparent hover:tw-text-[#236AD4] hover:tw-border-[#236AD4] tw-text-sm tw-cursor-pointer"
            >
              {isSend ? 'Subscribe' : 'Subscribing...'}
            </button>
          </div>
        </div>

        {/* App Store Links */}
        <div className="tw-flex tw-items-center tw-justify-center tw-my-2">
          <Link href="https://play.google.com/store/apps/details?id=in.niftytrader&hl=en_IN" target="_blank">
            <Image src={play_storeIcon} alt="icon" width={116} height={35} className="tw-mr-3 tw-cursor-pointer" />
          </Link>
          <Link href="https://apps.apple.com/us/app/niftytrader/id1587483980" target="_blank">
            <Image src={app_storeIcon} alt="icon" width={116} height={35} className="tw-cursor-pointer" />
          </Link>
        </div>

        {/* Social Links */}
        <div className='tw-flex tw-flex-col tw-gap-2 tw-items-center'>
          <p className='tw-text-white tw-text-sm tw-mb-0 tw-font-medium'>Connect with Us</p>
          <ul className="tw-flex tw-justify-center tw-gap-3">
            {socialLinks?.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    target="_blank"
                    href={item.link}
                    className={`tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-full ${index === 0
                      ? 'tw-bg-[#485a96]'
                      : index === 1
                        ? 'tw-bg-[#333]'
                        : index === 2
                          ? 'tw-bg-[#dc1716]'
                          : index === 3
                            ? 'tw-bg-linkedin-gradient'
                            : index === 4
                              ? 'tw-bg-instagram-gradient'
                              : index === 5
                                ? 'tw-bg-[#43d37a]'
                                : 'tw-bg-black'
                      }`}
                  >
                    <Image
                      src={item.icon}
                      className="tw-h-3 tw-w-3"
                      width={16}
                      height={16}
                      alt="icon"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Navigation - Mobile Accordion */}
        <div className="tw-text-white">
          {navItems.map((item, index) => {
            const isOpen = mobileOpen === index;

            return (
              <div key={index} className="tw-py-1">
                <button
                  className="tw-w-full tw-bg-[rgba(34,34,34,0.6)] tw-px-2 tw-py-3 tw-rounded-lg tw-flex tw-justify-between tw-items-center tw-text-start tw-font-semibold tw-text-white tw-text-sm"
                  onClick={() =>
                    setMobileOpen(isOpen ? null : index)
                  }
                >
                  {item.label}
                  <FontAwesomeIcon
                    icon={isOpen ? faMinus : faPlus}
                    className="tw-h-4 tw-w-4 tw-transition-transform"
                  />
                </button>

                {/* Animated content */}
                <div
                  className={`tw-transition-all tw-overflow-hidden tw-duration-300 ${isOpen ? "tw-max-h-[1000px] tw-mt-2" : "tw-max-h-0"}`}
                >
                  <div className="tw-grid tw-grid-cols-1 tw-gap-2">
                    {item.links.map((link, i) => (
                      <Link key={i}
                        onClick={(e) => { e.preventDefault(), handleRouting(link.url) }}
                        href={generateHref(link.url)}>
                        <div className="tw-px-2 tw-py-1 tw-flex tw-text-xs tw-text-white hover:tw-text-primary-text">
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            width={10}
                            className="tw-text-[10px] tw-mt-[3px] tw-me-2 tw-h-[10px] tw-w-[10px]"
                          />
                          {link.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="tw-flex tw-justify-center">
          <div className="tw-w-3/4 tw-my-3" style={{ borderTop: '1px solid #555555' }}></div>
        </div>

        {/* Copyright */}
        <div className="tw-text-white tw-text-xs tw-text-center tw-flex tw-flex-col tw-items-center tw-gap-1">
          <div className="tw-flex tw-items-center tw-justify-center">
            <span>Copyright ©</span>
            <Link prefetch={false} href="/" className="tw-text-primary-text tw-px-2">
              NiftyTrader
            </Link>
          </div>
          <p className="tw-mb-0">All rights reserved ver {process.env.VERSION}</p>
        </div>
      </div>
    </section>
  );
}

export default MobileFooter; 