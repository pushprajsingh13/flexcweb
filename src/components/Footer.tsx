import React from "react";
import { FaYoutube, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/flexc_logo.png";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#2c2f33] text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300">

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Left Logo & Description */}
        <div>
          <a href="https://www.flexc.work/" className="mr-10 cursor-pointer" target="_blank">
            <img 
              src={logo}   
              alt="Logo" 
              className="h-12 w-auto"
            />
          </a>
          <p className="text-sm mb-4 text-xs text-gray-300">
            An AI-based integrated marketplace connecting professionals,
            agencies and organizations to hire and manage hybrid workforce.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="https://share.google/qyn6nQSEJgskcWcAG" target="_blank" className="hover:text-white"><FaFacebookSquare  /></a>
            <a href="https://www.youtube.com/@flexc" target="_blank" className="hover:text-white"><FaYoutube /></a>
            <a href="https://x.com/FlexcWork" target="_blank" className="hover:text-white"><BsTwitterX /></a>
            <a href="https://www.linkedin.com/company/flexc/" target="_blank" className="hover:text-white"><FaLinkedinIn  /></a>
          </div>
        </div>

        {/* Website Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Website</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="https://flexc.work/" target="_blank" className="hover:text-white">Home</a></li>
            <li><a href="https://flexc.work/aboutus" target="_blank" className="hover:text-white">About Us</a></li>
            <li><a href="https://flexc.work/contact-us" className="hover:text-white" target="_blank">Contact Us</a></li>
            <li><a href="https://flexc.work/enterprise" className="hover:text-white" target="_blank">Enterprise</a></li>
            <li><a href="https://flexc.work/talent" className="hover:text-white" target="_blank">Talent</a></li>
            <li><a href="https://flexc.work/recruiter" className="hover:text-white" target="_blank">Recruiter</a></li>
            <li><a href="https://flexc.work/blogs" className="hover:text-white" target="_blank">Blogs</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="https://flexc.work/enterprise" target="_blank" className="hover:text-white">FlexC for Enterprises</a></li>
            <li><a href="https://flexc.work/talent" target="_blank" className="hover:text-white">FlexC for Professionals</a></li>
            <li><a href="https://flexc.work/recruiter" target="_blank" className="hover:text-white">FlexC for Recruiter</a></li>
            <li><a href="https://flexc.work/octo" target="_blank" className="hover:text-white">Octo</a></li>
          </ul>
        </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get started now</h3>
          <p className="text-xs mb-4">Ready to Join FlexC Community?</p>
          <div className="flex space-x-3 text-sm">
           <a href="https://flexc.work/auth/signuphragency" target="_blank"> 
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Sign up
              </button>
           </a>
           <a href="https://flexc.work/auth/signin" target="_blank">
              <button className="border border-gray-400 hover:border-white px-4 py-2 rounded text-white">
              Login
            </button>
           </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t-2 border-gray-400 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>COPYRIGHT © 2025 ENCUBATE TECH PVT. LTD. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://flexc.work/terms-of-use" target="_blank" className="hover:text-white">Terms and Conditions</a>
          <a href="https://flexc.work/privacy-policy" target="_blank" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>


  );
}

export default Footer;
