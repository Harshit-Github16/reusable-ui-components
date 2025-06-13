import React, { useState } from 'react';

const NewsletterForm = ({
  title,
  description,
  onSubmit
}) => {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  return /*#__PURE__*/React.createElement("div", {
    className: "lg:flex-auto xl:mt-0 md:my-5 mx-auto lg:my-0 lg:w-auto sm:w-2/4 w-full text-start md:text-center lg:text-start sm:order-4 order-1 mb-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-white text-base 2xl:text-xl font-semibold mb-2"
  }, title || 'SUBSCRIBE TO OUR NEWSLETTER'), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-[13px] mb-3"
  }, description || 'Sign up & receive the latest tips via email.'), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center mb-4"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: subscribeEmail,
    onChange: e => setSubscribeEmail(e.target.value),
    className: "bg-white text-gray-900 px-4 lg:py-3 py-2 outline-none rounded-tl-sm rounded-bl-sm mr-2 w-3/5",
    placeholder: "Email Address"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSubmit(subscribeEmail),
    className: "bg-blue-600 rounded-tr-sm rounded-br-sm text-white lg:py-3 py-2 px-3 border border-transparent font-medium transition-all duration-300 hover:bg-transparent hover:text-blue-600 hover:border-blue-600"
  }, "Subscribe")));
};

export { NewsletterForm as default };
//# sourceMappingURL=NewsletterForm.js.map
