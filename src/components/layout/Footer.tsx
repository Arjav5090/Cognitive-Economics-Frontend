import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const resources = [
    { name: "Application", path: "/resources/application" },
    { name: "Calibration", path: "/resources/caliberationandreferences" },
    { name: "Foundation", path: "/resources/foundation" },
    { name: "Housing", path: "/resources/housing" },
    { name: "Manufacturing", path: "/resources/manufacturing" },
    { name: "Training", path: "/resources/training" },
  ];
  const discoverLinks = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Research papers", path: "/research" },
    { name: "Questionnaire", path: "/questionnaire" }, // Adjust as needed
  //  { name: "Forum", path: "/forum" },
    { name: "Contact", path: "/contact" },
 //   { name: "Chatbot", path: "/chatbot" }
  ];

  return (
    <footer className="w-full border-t border-black py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column - Stay Updated & Reach Out */}
        <div className="space-y-8">
          <div>
            <h1 className="font-bold text-2xl mb-4">Reach out</h1>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/twitteracc"
                className="block justify-items-center"
                aria-label="Twitter"
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17.2 3h2.4l-5.2 6L20 16.9h-4.2l-3.4-4.4-3.9 4.4H6.1l5.6-6.3L6.1 3h4.3l3.1 4 3.7-4Z"/>
                  </svg>
                </div>
                <span className="mt-1 text-sm block text-center">@twitteracc</span>
              </a>
              <a
                href="https://linkedin.com/in/linkedinacc"
                className="block justify-items-center"
                aria-label="LinkedIn"
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <span className="mt-1 text-sm block text-center">@linkedinacc</span>
              </a>
              <a
                href="mailto:ac1@nyu.edu"
                className="block  justify-items-center"
                aria-label="Email"
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span className="mt-1 text-sm block text-center">ac1@nyu.edu</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Office</h3>
            <p className="text-sm">Economics Department, New York University</p>
          </div>
        </div>

        {/* Center Column - Resources */}
        <div className="md:px-4">
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            {resources.map((resource, index) => (
              <li key={index}>
                <Link to={resource.path} className="text-sm hover:underline">
                  {resource.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Discover */}
        <div>
          <h3 className="font-bold text-lg mb-4">Discover</h3>
          <ul className="space-y-2">
            {discoverLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="text-sm hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
