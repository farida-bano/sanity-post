import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import React Icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg mb-4">© 2024 Exploring the Future. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-yellow-400 transition duration-300 transform hover:scale-110"
          >
            <FaTwitter className="text-2xl sm:text-3xl lg:text-4xl" /> {/* React Icon for Twitter */}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-yellow-400 transition duration-300 transform hover:scale-110"
          >
            <FaFacebook className="text-2xl sm:text-3xl lg:text-4xl" /> {/* React Icon for Facebook */}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-yellow-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl sm:text-3xl lg:text-4xl" /> {/* React Icon for LinkedIn */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
