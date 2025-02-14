import React from "react";
import { Link } from "react-router-dom";

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
                href="mailto:ac1@nyu.edu"
                className="block  justify-items-center"
                aria-label="Email"
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="mt-1 text-sm block text-center">
                  andrew.caplin@nyu.edu
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold font-outfit text-lg mb-2">Office</h3>
            <p className="text-sm font-outfit">
              Department of Economics, <br/> New York University, <br/> 19 W. 4th Street, 6th
              Floor, <br/> New York, NY 10012
            </p>
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
