import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNotification } from "../contexts/NotificationContext";
import translations from "../translations";

const Signup = ({ lang = "en" }) => {
  const t = (key) => translations[lang][key];

  const navigate = useNavigate();
  const { addNotification } = useNotification();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "client",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      addNotification({ type: "error", title: "Error", message: t("errorPasswordMismatch") });
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: 1,
          name: formData.name,
          email: formData.email,
          role: formData.role,
        })
      );

      addNotification({ type: "success", title: "Success", message: t("success") });
      navigate("/dashboard");
    } catch (error) {
      addNotification({ type: "error", title: "Error", message: t("errorRegistration") });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{t("createAccount")}</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {t("signIn")}{" "}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              {lang === "en" ? "Sign in" : "সাইন ইন করুন"}
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input-field"
              placeholder={t("fullName")}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              id="email"
              name="email"
              type="email"
              required
              className="input-field"
              placeholder={t("email")}
              value={formData.email}
              onChange={handleChange}
            />
            <input
              id="password"
              name="password"
              type="password"
              required
              className="input-field"
              placeholder={t("password")}
              value={formData.password}
              onChange={handleChange}
            />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="input-field"
              placeholder={t("confirmPassword")}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <select id="role" name="role" className="input-field" value={formData.role} onChange={handleChange}>
              <option value="client">{t("client")}</option>
              <option value="lawyer">{t("lawyer")}</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">{t("create")}</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
