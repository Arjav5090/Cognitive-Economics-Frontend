import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_n8gwbrr", // Replace with EmailJS Service ID
        "template_j2k5rnf", // Replace with EmailJS Template ID
        formData,
        "s17P9tfVREIA2zuD-" // Replace with EmailJS Public Key
      );

      setStatus("success");
      setFormData({ name: "", email: "", occupation: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>
          <p className="text-black font-outfit text-base sm:text-lg text-justify font-light mb-6 sm:mb-8 leading-relaxed">
            Your insights and curiosity drive innovation. Contact us to join the journey into cognitive economics. 
            Whether you&apos;re a student, researcher, or professional, we&apos;d love to hear from you. Let&apos;s connect!
          </p>

          {/* Social Links */}
          <div className="flex flex-row flex-wrap gap-4 sm:gap-6 mb-6">

            <div className="flex flex-col sm:justify-items-center items-center">
              <Link to="mailto:andrew.caplin@nyu.edu" className="p-3 sm:p-4 rounded-full border border-black hover:bg-gray-100 flex items-center justify-center">
                <Mail className="w-10 h-10 sm:w-6 sm:h-6" />
              </Link>
              <p className="text-black text-md sm:text-sm font-outfit mt-2">andrew.caplin@nyu.edu</p>
            </div>
          </div>

          <div className="text-sm flex flex-col sm:text-md text-black font-outfit mt-2">
            <strong>Office:</strong>
            <span>Department of Economics, <br/> New York University, <br/> 19 W. 4th Street, 6th
              Floor, <br/> New York, NY 10012</span>
          </div>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-6 md:mt-0">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-base sm:text-lg font-semibold mb-2 text-black">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-black text-black p-2 sm:p-3 rounded-md focus:outline-none focus:border-black"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base sm:text-lg font-semibold mb-2 text-black">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-black text-black p-2 sm:p-3 rounded-md focus:outline-none focus:border-black"
                placeholder="Enter your Email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="occupation" className="block text-base sm:text-lg font-semibold mb-2 text-black">Occupation</label>
            <input
              id="occupation"
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full border border-black text-black p-2 sm:p-3 rounded-md focus:outline-none focus:border-black"
              placeholder="What do you do for a living"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-base sm:text-lg font-semibold mb-2 text-black">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full min-h-[120px] border border-black text-black p-2 sm:p-3 rounded-md focus:outline-none focus:border-black"
              placeholder="Enter your message or comment"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-black text-white hover:bg-gray-800 py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium text-base sm:text-lg w-full sm:w-auto" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>

          {/* Display success/error message */}
          {status === "success" && <p className="text-green-600 text-center">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600 text-center">Failed to send message. Try again.</p>}
        </form>
      </div>
    </div>
  );
}
