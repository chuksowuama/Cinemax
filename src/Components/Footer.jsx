import React from "react";
import logo from "../assets/cinemaxLogo.png"

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <img src={logo} alt="" className="w-10 h-10" />
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">MovieVerse</h2>
          <p className="text-sm">
           Dive into the world of TV series — from classics to the latest episodes. Stream trailers, track releases, and stay entertained.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
           <li><a href="/series" className="hover:text-white">All Series</a></li>
            <li><a href="/genres" className="hover:text-white">Genres</a></li>
            <li><a href="/top-rated" className="hover:text-white">Top Rated</a></li>
            <li><a href="/new-episodes" className="hover:text-white">New Episodes</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/help" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="" className="hover:text-white" ><i class="fa-brands fa-facebook"></i></a>
            <a href="" className="hover:text-white"><i class="fa-brands fa-instagram"></i></a>
            <a href="" className="hover:text-white"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="" className="hover:text-white"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-10 text-gray-600">
        &copy; {new Date().getFullYear()} MovieVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
