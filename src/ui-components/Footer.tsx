import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Types for the footer data
export interface FooterLink {
  label: string;
  pageUrl: string;
}

export interface SocialLink {
  link: string;
  icon: string;
}

export interface FooterProps {
  helpfulLinks: FooterLink[];
  otherLinks: FooterLink[];
  popularLinks: FooterLink[];
  socialLinks: SocialLink[];
  appStoreLinks?: {
    playStore?: string;
    appStore?: string;
  };
  newsletter?: {
    title?: string;
    description?: string;
    onSubmit: (email: string) => void;
  };
  copyright?: {
    text: string;
    link?: string;
    linkText?: string;
    version?: string;
  };
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  helpfulLinks,
  otherLinks,
  popularLinks,
  socialLinks,
  appStoreLinks,
  newsletter,
  copyright,
  className = ''
}) => {
  const [subscribeEmail, setSubscribeEmail] = useState<string>('');

  return (
    <footer className={`bg-gray-900 text-white py-8 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Helpful Links Section */}
          <div className="flex-auto sm:w-auto w-6/12 sm:order-1 order-3 mb-6">
            <h5 className="text-white text-base 2xl:text-xl font-semibold mb-2">HELPFUL LINKS</h5>
            <ul>
              {helpfulLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.pageUrl}
                    className="text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
                  >
                    <FontAwesomeIcon icon={faChevronRight} width={10} className="text-[10px] me-2" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links Section */}
          <div className="flex-auto sm:w-auto w-6/12 sm:order-2 order-4 mb-6">
            <h5 className="text-white text-base 2xl:text-xl font-semibold mb-2">OTHER LINKS</h5>
            <ul>
              {otherLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.pageUrl}
                    className="text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
                  >
                    <FontAwesomeIcon icon={faChevronRight} width={10} className="text-[10px] me-2" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links Section */}
          <div className="flex-auto sm:order-3 order-2 w-full sm:w-auto mb-6">
            <h5 className="text-white text-base 2xl:text-xl font-semibold mb-2">POPULAR LINKS</h5>
            <ul className="sm:block flex justify-between">
              {popularLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.pageUrl}
                    className="text-xs sm:text-sm xl:text-base font-medium text-gray-300 transition-all duration-200 mb-2 hover:text-blue-400 flex w-max items-center"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          {newsletter && (
            <div className="lg:flex-auto xl:mt-0 md:my-5 mx-auto lg:my-0 lg:w-auto sm:w-2/4 w-full text-start md:text-center lg:text-start sm:order-4 order-1 mb-6">
              <h5 className="text-white text-base 2xl:text-xl font-semibold mb-2">
                {newsletter.title || 'SUBSCRIBE TO OUR NEWSLETTER'}
              </h5>
              <p className="text-gray-400 text-[13px] mb-3">
                {newsletter.description || 'Sign up & receive the latest tips via email.'}
              </p>
              <div className="flex items-center mb-4">
                <input
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="bg-white text-gray-900 px-4 lg:py-3 py-2 outline-none rounded-tl-sm rounded-bl-sm mr-2 w-3/5"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => newsletter.onSubmit(subscribeEmail)}
                  className="bg-blue-600 rounded-tr-sm rounded-br-sm text-white lg:py-3 py-2 px-3 border border-transparent font-medium transition-all duration-300 hover:bg-transparent hover:text-blue-600 hover:border-blue-600"
                >
                  Subscribe
                </button>
              </div>

              {/* App Store Links */}
              {appStoreLinks && (
                <div className="hidden sm:flex items-center lg:justify-start justify-center">
                  {appStoreLinks.playStore && (
                    <a href={appStoreLinks.playStore} target="_blank" rel="noopener noreferrer">
                      <img src="/play-store.png" alt="Play Store" className="mr-3 cursor-pointer h-[45px]" />
                    </a>
                  )}
                  {appStoreLinks.appStore && (
                    <a href={appStoreLinks.appStore} target="_blank" rel="noopener noreferrer">
                      <img src="/app-store.png" alt="App Store" className="mr-3 cursor-pointer h-[45px]" />
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile App Store Links */}
        {appStoreLinks && (
          <div className="sm:hidden flex items-center my-5 justify-center">
            {appStoreLinks.playStore && (
              <a href={appStoreLinks.playStore} target="_blank" rel="noopener noreferrer">
                <img src="/play-store.png" alt="Play Store" className="mr-3 cursor-pointer h-[45px]" />
              </a>
            )}
            {appStoreLinks.appStore && (
              <a href={appStoreLinks.appStore} target="_blank" rel="noopener noreferrer">
                <img src="/app-store.png" alt="App Store" className="mr-3 cursor-pointer h-[45px]" />
              </a>
            )}
          </div>
        )}

        {/* Social Links */}
        <ul className="flex justify-center gap-4 mt-5 md:mt-0">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a
                target="_blank"
                href={item.link}
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-9 h-9 rounded-full ${
                  index === 0
                    ? 'bg-[#485a96]'
                    : index === 1
                    ? 'bg-[#333]'
                    : index === 2
                    ? 'bg-[#dc1716]'
                    : index === 3
                    ? 'bg-[#0077b5]'
                    : index === 4
                    ? 'bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]'
                    : index === 5
                    ? 'bg-[#2aa1d4]'
                    : 'bg-black'
                }`}
              >
                <img
                  src={item.icon}
                  className="transition duration-300 ease-in-out hover:rotate-y-180 hover:scale-x-[-1] w-5 h-5"
                  alt="social icon"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright Section */}
        {copyright && (
          <div className="m-auto border-t md:w-2/4 mt-4">
            <div className="text-gray-400 text-center mt-4">
              Copyright ©{' '}
              {copyright.link ? (
                <a href={copyright.link} className="text-blue-400">
                  {copyright.linkText}
                </a>
              ) : (
                copyright.text
              )}
              {copyright.version && <p className="mb-0">All rights reserved ver {copyright.version}</p>}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer; 