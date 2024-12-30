import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-300 transition duration-300"
            >
              Exploring the Future
            </Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Link
              href="/subscribe"
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-400 transition duration-300"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
