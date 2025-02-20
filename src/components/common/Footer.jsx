import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import logo from '../../../public/logo drk.png'
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 shadow-xl">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          {/* Logo & Tagline Section */}
          <div className="space-y-8 xl:col-span-1 flex flex-col items-center">
            <div className="flex items-center space-x-2">
              {/* <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=128&h=128&fit=crop&auto=format"
                alt="Logo"
                className="h-12 w-12 rounded-lg shadow-md"
              /> */}
              <Link to="/" className="flex items-center">
                <img className="h-32 w-auto" src={logo} alt="Logo" />
              </Link>

            </div>
            <p className="text-gray-400 text-base text-center leading-relaxed max-w-xs">
              {t('footerTagline')}
            </p>
            <div className="flex space-x-6 justify-center mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Solutions */}
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  {t('solutions')}
                </h3>
                <ul className="mt-4 space-y-4">
                  {[{ to: '/lawyers', text: t('findLawyer') }, { to: '/legal-resources', text: t('resources') }, { to: '/messages', text: t('messages') }].map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200">
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="ml-1">{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  {t('support')}
                </h3>
                <ul className="mt-4 space-y-4">
                  {[{ to: '/faq', text: t('faq') }, { to: '/contact', text: t('contact') }].map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200">
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="ml-1">{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-500 text-center">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
