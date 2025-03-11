import type React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="border-b border-black pb-5 mb-8">
          <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
          <p className="mt-2 text-black font-outfit">
            Welcome to AndrewCaplin.com. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website.
          </p>
        </div>

        <div className="space-y-8">
          <PolicySection
            title="1. Scope and Purpose"
            content={
              <div className="space-y-4">
                <p>
                  This Privacy Policy governs all personal data collected
                  through www.andrewcaplin.com, including:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Research publications and books</li>
                  <li>Contact questionnaire form</li>
                  <li>Blog content and comments</li>
                  <li>AI-powered chatbot</li>
                </ul>
              </div>
            }
          />

          <PolicySection
            title="2. Information Collection"
            content={
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    2.1 Directly Provided Data
                  </h3>
                  <p>We collect:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      <strong>Contact Information</strong>: Name, email,
                      institution and other interests (via questionnaire)
                    </li>
                    <li>
                      <strong>Academic Inquiries</strong>: Subject lines and
                      message content
                    </li>
                    <li>
                      <strong>Chatbot Interactions</strong>: Questions and
                      responses
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    2.2 Automated Collection
                  </h3>
                  <p>We use cookies and analytics tools to track:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Device information (browser, OS)</li>
                    <li>Usage patterns (pages visited, time spent)</li>
                    <li>IP address (anonymized where possible)</li>
                  </ul>
                </div>
              </div>
            }
          />

          <PolicySection
            title="3. Data Usage"
            content={
              <div>
                <p>Your information helps us:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Respond to academic inquiries as soon as possible</li>
                  <li>Improve website navigation and content organization</li>
                  <li>
                    Train the chatbot for better research related responses
                  </li>
                  <li>Monitor blog engagement metrics</li>
                </ul>
              </div>
            }
          />

          <PolicySection
            title="4. Third-Party Services"
            content={
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    4.1 OpenAI Integration
                  </h3>
                  <p>Chatbot conversations:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Are processed via OpenAI's API (
                      <Link
                        to="https://openai.com/policies/privacy-policy"
                        className="text-gray-900 underline hover:text-gray-700"
                      >
                        Privacy Policy
                      </Link>
                      )
                    </li>
                    <li>May be stored for 30 days for quality improvement</li>
                    <li>Exclude sensitive personal or financial data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    4.2 Other Providers
                  </h3>
                  <p>We use:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Heroku secure hosting services</li>
                    <li>
                      Analytics tools (Google Analytics with IP anonymization)
                    </li>
                  </ul>
                </div>
              </div>
            }
          />

          <PolicySection
            title="5. Data Protection Measures"
            content={
              <div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Encryption</strong>: HTTPS/TLS for all data
                    transmissions
                  </li>
                  <li>
                    <strong>Access Control</strong>: Limited to Prof. Caplin and
                    authorized staff
                  </li>
                  <li>
                    <strong>Retention</strong>:
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>Contact form submissions: 2 years</li>
                      <li>Chat logs: 30 days</li>
                      <li>
                        Blog comments: Indefinitely (unless deletion requested)
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            }
          />

          <PolicySection
            title="6. Your Rights (CCPA/GDPR Compliant)"
            content={
              <div>
                <p>You may:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Request access to stored personal data</li>
                  <li>Ask for corrections to academic affiliations</li>
                  <li>
                    Delete non-essential records (excluding blog comments)
                  </li>
                  <li>
                    Opt out of non-essential cookies via [Cookie Settings]
                  </li>
                </ul>
              </div>
            }
          />

          <PolicySection
            title="7. Policy Updates"
            content={
              <div>
                <p>Changes will be:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Announced via blog posts</li>
                  <li>Effective immediately upon posting</li>
                </ul>
              </div>
            }
          />

          <PolicySection
            title="8. Contact Information"
            content={
              <div>
                <p>For data requests or concerns:</p>
                <div className="mt-2">
                  <p className="font-medium">Prof. Andrew Caplin</p>
                  <p>Economics Department, New York University</p>
                  <p>
                    <a
                      href="mailto:andrew.caplin@nyu.edu"
                      className="text-gray-900 hover:underline"
                    >
                      andrew.caplin@nyu.edu
                    </a>
                  </p>
                </div>
              </div>
            }
          />
        </div>


          <p className="text-sm mt-3 text-black text-center">
            Last updated: March 11, 2025
          </p>
  
      </div>
    </div>
  );
}

function PolicySection({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-black pb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-white w-full text-left"
      >
        <h2 className="text-xl font-outfit font-semibold text-black">{title}</h2>
        <span className="ml-2 text-black">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 text-black font-outfit prose max-w-none">{content}</div>
      )}
    </div>
  );
}
