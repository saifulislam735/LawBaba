
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useLanguage } from "../../contexts/LanguageContext"
import { useTranslation } from "../../hooks/useTranslation"
import { ProfileButton } from "./navbar-profile"
import logo from '../../../public/logo drk.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const { language, changeLanguage } = useLanguage()
  const { t } = useTranslation()
  const location = useLocation()

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("lawyers"), path: "/lawyers" },
    { name: t("resources"), path: "/legal-resources" },
  ]

  const clientLinks = [
    { name: t("messages"), path: "/messages" },
    { name: t("profile"), path: "/profile" },
  ]

  const lawyerLinks = [{ name: t("dashboard"), path: "/dashboard" }]

  const getAuthLinks = () => {
    if (!isAuthenticated) return []
    return user.role === "lawyer" ? lawyerLinks : clientLinks
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img className="h-20 w-auto" src={logo} alt="Logo" />
          </Link>

          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${isActive(link.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 text-sm rounded-md transition-all ${language === "en" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {t("english")}
            </button>
            <button
              onClick={() => changeLanguage("bn")}
              className={`px-3 py-1 text-sm rounded-md transition-all ${language === "bn" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {t("bangla")}
            </button>

            {isAuthenticated ? (
              <>
                {getAuthLinks().map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive(link.path)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <ProfileButton user={user} logout={logout} />
              </>
            ) : (
              <>
                <Link
                  to="/client-login"
                  className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {t("login")}
                </Link>
                <Link
                  to="/client-signup"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {t("signup")}
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white shadow-md px-4 pb-4 space-y-2`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {isAuthenticated ? (
          <>
            {user?.name && (
              <div className="px-3 py-2 text-sm font-medium text-gray-900">
                {user.name}
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
            )}
            {getAuthLinks().map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-100"
            >
              {t("logout")}
            </button>
          </>
        ) : (
          <>
            <Link
              to="/client-login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {t("login")}
            </Link>
            <Link
              to="/client-signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              {t("signup")}
            </Link>
          </>
        )}

        <div className="flex justify-center space-x-2">
          <button
            onClick={() => changeLanguage("en")}
            className={`px-3 py-1 text-sm rounded-md ${language === "en" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {t("english")}
          </button>
          <button
            onClick={() => changeLanguage("bn")}
            className={`px-3 py-1 text-sm rounded-md ${language === "bn" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {t("bangla")}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

