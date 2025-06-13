"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { socialLinks, helpfulLinks, otherLinks, popularLinks } from './footerData';

// JSDoc comments (optional) for prop types
/**
 * @typedef {Object} FooterLink
 * @property {string} label – The label of the link.
 * @property {string} pageUrl – The URL of the link.
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} link – The social link URL.
 * @property {string} icon – (Optional) The icon (e.g. an empty string or an image src).
 */

/**
 * @typedef {Object} FooterProps
 * @property {FooterLink[]} [helpfulLinks] – Array of helpful links (defaults to imported helpfulLinks).
 * @property {FooterLink[]} [otherLinks] – Array of other links (defaults to imported otherLinks).
 * @property {FooterLink[]} [popularLinks] – Array of popular links (defaults to imported popularLinks).
 * @property {SocialLink[]} [socialLinks] – Array of social links (defaults to imported socialLinks).
 * @property {Object} [appStoreLinks] – (Optional) Object containing playStore and appStore URLs.
 * @property {Object} [newsletter] – (Optional) Object for newsletter subscription (e.g. { title, description, onSubmit }).
 * @property {Object} [copyright] – (Optional) Object for copyright info (e.g. { text, link, linkText, version }).
 * @property {string} [className] – (Optional) Additional CSS class.
 */

const Footer = (props) => {
  const {
    helpfulLinks: propHelpfulLinks = helpfulLinks,
    otherLinks: propOtherLinks = otherLinks,
    popularLinks: propPopularLinks = popularLinks,
    socialLinks: propSocialLinks = socialLinks,
    appStoreLinks,
    newsletter,
    copyright,
    className = ''
  } = props;

  const [subscribeEmail, setSubscribeEmail] = useState('');

  return (
    <footer className={`bg-gray-900 text-white py-8 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Helpful Links Section */}
          <div className="flex-auto sm:w-auto w-6/12 sm:order-1 order-3 mb-6">
            <h5 className="text-white text-base 2xl:text-xl font-semibold mb-2">HELPFUL LINKS</h5>
            <ul>
              {propHelpfulLinks.map((item, index) => (
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
              {propOtherLinks.map((item, index) => (
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
              {propPopularLinks.map((item, index) => (
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

              {/* App Store Links (if provided) */}
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

        {/* Mobile App Store Links (if provided) */}
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
          {propSocialLinks.map((item, index) => (
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

        {/* Copyright (if provided) */}
        {copyright && (
          <div className="mt-5 text-center text-gray-400 text-xs">
            {copyright.text}
            {copyright.link && copyright.linkText && (
              <a href={copyright.link} target="_blank" rel="noopener noreferrer" className="underline ml-1">
                {copyright.linkText}
              </a>
            )}
            {copyright.version && <span className="ml-1">(v{copyright.version})</span>}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer; 