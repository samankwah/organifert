import {
  FaTiktok,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1C3E] text-white py-12">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Evans Okyere Farms</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-white mr-2 mt-1" />
              <div>
                Evans Okyere Farms <br />
                Ramseyer Technical Institute/Presby Senior High School <br />
                Atonsu-Chirapatre, opposite Wood Pillar Ltd <br />
                Kumasi, Ghana
              </div>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-white mr-2" />
              Tel:{" "}
              <a
                href="tel:+2330542733102"
                className="text-white hover:underline ml-1"
              >
                +2330542733102
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-white mr-2" />
              <a
                href="mailto:evans.okyere@evansokyerefarms.com"
                className="text-white hover:underline"
              >
                evans.okyere@evansokyerefarms.com
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Evans Okyere Farms</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/about-us" className="hover:underline">
                Our Story
              </a>
            </li>
            <li>
              <a href="/fertilisers" className="hover:underline">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Evans Okyere Farms</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay connected with us through social media.
          </p>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.tiktok.com/@evansokyerefarms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin className="fa-lg" />
            </a>
            <a
              href="https://www.tiktok.com/@evansokyerefarms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTiktok className="fa-lg" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61570580871137"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook className="fa-lg" />
            </a>
            <a
              href="https://twitter.com/evansokyerefarms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaSquareXTwitter className="fa-lg" />
            </a>
            <a
              href="https://www.instagram.com/evansokyere_farms/profilecard/?igsh=bHpleXEyOTVodW9h"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram className="fa-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="mt-12 border-t border-gray-700">
        <div className="container max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Safety Data Sheets
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Ethics Hotline
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Evans Okyere Farms. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
