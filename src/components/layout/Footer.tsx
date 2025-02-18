import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

  //const discoverLinks = [
  //  { name: "Home", path: "/" },
  //  { name: "Resources", path: "/resources" },
  //  { name: "Research papers", path: "/research" },
  //  { name: "Questionnaire", path: "/questionnaire" }, // Adjust as needed
    //  { name: "Forum", path: "/forum" },
  //  { name: "Contact", path: "/contact" },
    //   { name: "Chatbot", path: "/chatbot" }
  //];

  return (
    <footer className="w-full border-t border-black py-2 px-4 md:px-4">
   
  
    {/* Bottom Legal Section */}
    <div className="w-full text-center   text-sm font-outfit text-black">
      <p>© {new Date().getFullYear()} All Rights Reserved | <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></p>
    </div>
  </footer>
  
  
  

  );
};

export default Footer;
