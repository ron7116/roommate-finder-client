import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="https://i.ibb.co/b5v53YJh/roommate.png"
            alt="Roommate Logo"
            className="w-20 h-20 mb-4"
          />
          <p className="text-lg font-semibold">Roommate</p>
          <p>
            Connect with like-minded individuals for a better living experience.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Email: support@roomate.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: 123 Sherpur, Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-primary">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-primary">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Roommate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
