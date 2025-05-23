import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img
            src="https://i.ibb.co/b5v53YJh/roommate.png"
            alt="Roommate Logo"
            className="w-16 h-16 mb-4"
          />
          <p className="text-xl font-bold">Roommate</p>
          <p className="mt-1 text-sm">
            Connect with like-minded individuals for a better living experience.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">support@roomate.com</p>
          <p className="text-sm">+880 1234 567890</p>
          <p className="text-sm">123 Sherpur, Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/terms" className="hover:text-primary transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex items-center space-x-4 mt-2">
            <a href="#" className="hover:text-primary text-lg transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary text-lg transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary text-lg transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary text-lg transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-base-content/60 py-6 border-t border-base-300">
        © {new Date().getFullYear()} Roommate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
