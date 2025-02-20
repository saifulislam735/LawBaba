import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../hooks/useTranslation';  // import useTranslation
import { AiOutlineHome } from 'react-icons/ai';

export default function LawyerLogin() {
  const { t } = useTranslation();  // use the translation function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password, 'lawyer');
      navigate('/dashboard');
    } catch (err) {
      console.log(err)
      setError(t('loginFailed'));  // Use translation here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg mx-auto">
        <div className='flex justify-between items-center'>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-500 font-medium bg-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <AiOutlineHome className="text-xl" /> {t('home')}
          </button>
          <Link to='/'>
            <img src="../../public/logo drk.png" className='h-24 ' alt="" />
          </Link>
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t('lawyerPortal')}  {/* Use translation for title */}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {t('accessLegalPractice')}  {/* Use translation for description */}
          </p>
        </div>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                {t('emailAddress')}  {/* Use translation for label */}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder={t('emailAddress')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                {t('password')}  {/* Use translation for label */}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder={t('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? t('signingIn') : t('signIn')}  {/* Use translation for button text */}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/client-login" className="font-medium text-blue-600 hover:text-blue-500">
                {t('lookingForClientLogin')}  {/* Use translation */}
              </Link>
            </div>
            <div className="text-sm">
              <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                {t('needAccount')}  {/* Use translation */}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
