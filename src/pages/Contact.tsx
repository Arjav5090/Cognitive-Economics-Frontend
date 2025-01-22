import { Linkedin, Mail, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <div className="mx-10 p-6 font-outfit">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-5xl font-bold mb-4">Get in touch</h1>
          <p className="text-black font-outfit text-lg text-justify font-light mb-8 leading-relaxed">
            Your insights and curiosity drive innovation. Contact us to join the
            journey into cognitive economics. Whether you&apos;re a student,
            researcher, or professional, we&apos;d love to hear from you.
            Let&apos;s connect!
          </p>

          {/* Social Links */}
          <div className="flex flex-row gap-6 mb-6">
            {/* Twitter */}
            <div className="flex flex-col items-center">
              <Link
                to="#"
                className="p-4 rounded-full border border-black hover:bg-gray-100 flex items-center justify-center"
              >
                <XIcon className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <p className="text-black text-sm font-outfit mt-2">@twitteracc</p>
            </div>
            {/* LinkedIn */}
            <div className="flex flex-col items-center">
              <Link
                to="#"
                className="p-4 rounded-full border border-black hover:bg-gray-100 flex items-center justify-center"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <p className="text-black text-sm font-outfit mt-2">@linkedinacc</p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center">
              <Link
                to="mailto:sci@nyu.edu"
                className="p-4 rounded-full border border-black hover:bg-gray-100 flex items-center justify-center"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
              <p className="text-black text-sm font-outfit mt-2">sci@nyu.edu</p>
            </div>
          </div>

          <div className="text-md text-black font-outfit mt-2">
            <strong>Office:</strong> Economics Department, New York University
          </div>
        </div>

        {/* Right Column - Form */}
        <form className="space-y-6">
          {/* Name and Email - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2 text-black"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                type="text"
                name="name"
                required
                className="w-full border border-black text-black p-3 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-black"
              >
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your Email"
                type="email"
                name="email"
                required
                className="w-full border border-black text-black p-3 rounded-md focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Occupation */}
          <div>
            <label
              htmlFor="occupation"
              className="block text-lg font-semibold mb-2 text-black"
            >
              Occupation
            </label>
            <input
              id="occupation"
              placeholder="What do you do for a living"
              type="text"
              name="occupation"
              required
              className="w-full border border-black text-black p-3 rounded-md focus:outline-none focus:border-black"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2 text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your Message or comment"
              name="message"
              required
              className="w-full min-h-[120px] border border-black text-black p-3 rounded-md focus:outline-none focus:border-black"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-md font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
