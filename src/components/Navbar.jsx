import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import logo from '/logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';
import { HiBars3CenterLeft } from 'react-icons/hi2';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { currentUser, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  if (isAdmin) {
    navLinks.push({ path: '/dashboard', label: 'Dashboard' });
  }

  return (
    <nav className={`bg-secondary text-white border-gray-200 dark:bg-gray-900 fixed w-full z-50 ${visible ? 'top-0' : '-top-20'} transition-all duration-300 shadow-md`}>
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-16 mr-2" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block ">
            Sri Ranga Tanjore Art Gallery
          </span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? <FaTimes /> : <div className='bg-white p-2 rounded-full'><FaBars className='w-4 h-4'/></div>}
        </button>
        <div
          className={`fixed inset-0 z-40 bg-secondary dark:bg-gray-800 transition-transform duration-500 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="font-medium flex flex-col space-y-4 ">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-white hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-medium dark:hover:bg-gray-700 ${
                      location.pathname === link.path ? 'underline' : ''
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {!currentUser && (
                <>
                  <li>
                    <button
                      onClick={() => { navigate('/signup'); closeMobileMenu(); }}
                      className="block py-2 px-3 rounded hover:bg-gray-100 text-white dark:hover:bg-gray-700"
                    >
                      Sign Up
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { navigate('/login'); closeMobileMenu(); }}
                      className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Login
                    </button>
                  </li>
                </>
              )}
              {currentUser && (
                <li>
                  <button
                    onClick={logout}
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
            <button
              onClick={closeMobileMenu}
              className="mt-8 text-white rounded-full border-2 p-2"
            >
              &#x2715;
            </button>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-row space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                    location.pathname === link.path ? 'text-blue-700 dark:text-blue-500' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {!currentUser && (
              <>
                <li>
                  <button
                    onClick={() => navigate('/signup')}
                    className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sign Up
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/login')}
                    className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </button>
                </li>
              </>
            )}
            {currentUser && (
              <li>
                <button
                  onClick={logout}
                  className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
