import type React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Research", href: "/research" },
    // { name: "Forum", href: "/forum" },
    { name: "Contact", href: "/contact" },
    //{ name: "Chatbot", href: "/chatbot" },
    { name: "Questionnaire", href: "/questionnaire" },
  ];

  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between py-10 items-center h-16">
          {/* Logo/Title */}
          <Link to="/" className="text-3xl font-orienta font-light">
            Andrew Caplin
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative font-outfit group inline-flex items-center h-16 "
              >
                <span
                  className={`${
                    location.pathname === item.href
                      ? "text-white bg-black rounded-md p-2"
                      : "black"
                  } transition-colors`}
                >
                  {item.name}
                </span>

                {/* Active dot indicator */}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <hr className="border-t border-black" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="pt-4 pb-3 px-4 flex justify-between items-center border-b">
            <Link
              to="/"
              className="text-xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Andrew Caplin
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="px-4 pt-4 pb-6 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 px-3 text-base font-medium relative"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {/* Mobile active dot indicator */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-black transition-all duration-200 ${
                    location.pathname === item.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
