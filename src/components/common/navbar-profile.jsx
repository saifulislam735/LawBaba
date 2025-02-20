
import { useState } from "react"
import { Link } from "react-router-dom"
import { UserCircle2, GavelIcon as GavelSquare, ChevronDown } from "lucide-react"
import { useTranslation } from "../../hooks/useTranslation"

export function ProfileButton({ user, logout }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const isLawyer = user?.role === "lawyer"

  // Get user initials from name
  const getInitials = (name) => {
    if (!name) return ""
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        {user?.name ? (
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white
            ${isLawyer ? "bg-purple-600" : "bg-blue-600"}`}
          >
            {getInitials(user.name)}
          </div>
        ) : (
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center 
            ${isLawyer ? "text-purple-600" : "text-blue-600"}`}
          >
            {isLawyer ? <GavelSquare size={24} /> : <UserCircle2 size={24} />}
          </div>
        )}
        <ChevronDown
          size={16}
          className={`text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-lg border border-gray-100 z-20">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>

            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {t("profile")}
            </Link>

            {isLawyer && (
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                {t("dashboard")}
              </Link>
            )}

            <button
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
            >
              {t("logout")}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

