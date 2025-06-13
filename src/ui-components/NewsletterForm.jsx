"use client";
import React, { useState } from 'react';

const NewsletterForm = ({ title, description, onSubmit }) => {
  const [subscribeEmail, setSubscribeEmail] = useState('');

  return (
    <div className="tw:lg:flex-auto tw:xl:mt-0 tw:md:my-5 tw:mx-auto tw:lg:my-0 tw:lg:w-auto tw:sm:w-2/4 tw:w-full tw:text-start tw:md:text-center tw:lg:text-start tw:sm:order-4 tw:order-1 tw:mb-6">
      <h5 className="tw:text-white tw:text-base tw:2xl:text-xl tw:font-semibold tw:mb-2">
        {title || 'SUBSCRIBE TO OUR NEWSLETTER'}
      </h5>
      <p className="tw:text-gray-400 tw:text-[13px] tw:mb-3">
        {description || 'Sign up & receive the latest tips via email.'}
      </p>
      <div className="tw:flex tw:items-center tw:mb-4">
        <input
          type="email"
          value={subscribeEmail}
          onChange={(e) => setSubscribeEmail(e.target.value)}
          className="tw:bg-white tw:text-gray-900 tw:px-4 tw:lg:py-3 tw:py-2 tw:outline-none tw:rounded-tl-sm tw:rounded-bl-sm tw:mr-2 tw:w-3/5"
          placeholder="Email Address"
        />
        <button
          onClick={() => onSubmit(subscribeEmail)}
          className="tw:bg-blue-600 tw:rounded-tr-sm tw:rounded-br-sm tw:text-white tw:lg:py-3 tw:py-2 tw:px-3 tw:border tw:border-transparent tw:font-medium tw:transition-all tw:duration-300 tw:hover:bg-transparent tw:hover:text-blue-600 tw:hover:border-blue-600"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterForm; 