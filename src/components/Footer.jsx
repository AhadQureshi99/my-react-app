import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/flogo.jpg" alt="Growhm Tech" className="h-9 w-auto" />
              <span className="text-xl font-semibold tracking-tight text-gray-900">
                Growhm <span className="text-cyan-600">Tech</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Mobile App Development and Digital Design Agency
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/growhmtech"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            
              <a
                href="https://www.instagram.com/growhmtech"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>Mobile App Development</li>
              <li>Digital Design</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Digital Transformation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600">
                <FaMapMarkerAlt
                  className="mt-1 mr-3"
                  style={{ color: "#00FFA3" }}
                />
                <span>Pakistan</span>
              </li>
              <li className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3" style={{ color: "#03E1FF" }} />
                <span>info@growhmtech.com</span>
              </li>
              <li className="flex items-center text-gray-600">
                <FaPhone className="mr-3 text-blue-500" />
                <span>+92 316 5515075</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Growhm Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
