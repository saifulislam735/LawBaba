import { useTranslation } from "../hooks/useTranslation";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 items-center">
          <div className="lg:col-span-3 px-4 sm:px-6 lg:px-8 xl:pr-12">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{t("heroTitle")}</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              {t("heroSubtitle")}
            </p>

            <div className="mt-10 sm:flex sm:justify-start">
              <div className="rounded-md shadow-lg">
                <Link
                  to="/lawyers"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out shadow-md"
                >
                  {t("findLawyer")}
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/client-signup"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-600 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out shadow-md"
                >
                  {t("getStarted")}
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 mt-12 lg:mt-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-none">
              <img
                className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto object-cover"
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Legal consultation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t("trustedLawyers")}</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">{t("platformConnects")}</p>
          </div>
        </div>
        <div className="mt-10 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-white"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      {t("satisfiedClients")}
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">10K+</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      {t("expertLawyers")}
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">1K+</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      {t("successRate")}
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600">98%</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">{t("whyChooseUs")}</h2>
            <p className="mt-4 text-xl text-gray-600">{t("everythingYouNeed")}</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Step 1: Easy Search */}
            <div className="relative p-8 bg-blue-100 rounded-xl shadow-lg border border-blue-200 transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-200 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{t("easySearch")}</h3>
              <p className="text-base text-gray-700 text-center">{t("easySearchDesc")}</p>
            </div>

            {/* Step 2: Verified Experts */}
            <div className="relative p-8 bg-green-100 rounded-xl shadow-lg border border-green-200 transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:scale-105">
              <div className="w-16 h-16 bg-green-200 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{t("verifiedExperts")}</h3>
              <p className="text-base text-gray-700 text-center">{t("verifiedExpertsDesc")}</p>
            </div>

            {/* Step 3: Easy Scheduling */}
            <div className="relative p-8 bg-yellow-100 rounded-xl shadow-lg border border-yellow-200 transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:scale-105">
              <div className="w-16 h-16 bg-yellow-200 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{t("easyScheduling")}</h3>
              <p className="text-base text-gray-700 text-center">{t("easySchedulingDesc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                {t("whatOurUsersSay")}
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-2xl text-gray-600 sm:mt-4">
                {t("hearFromClientsAndLawyers")}
              </p>
            </div>

            <div className="mt-16 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none">
              {/* Testimonial 1 */}
              <div className="flex flex-col rounded-xl shadow-2xl overflow-hidden transition duration-300 ease-in-out hover:shadow-3xl hover:scale-105 transform hover:translate-y-4 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-700">{t("client")}</p>
                    <div className="block mt-2">
                      <p className="text-2xl font-semibold text-gray-900">{t("quickAndProfessional")}</p>
                      <p className="mt-3 text-base text-gray-600">{t("foundGreatLawyer")}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{t("shuvoDas")}</span>
                      <div className="h-14 w-14 rounded-full bg-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">SD</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{t("shuvoDas")}</p>
                      <p className="text-sm text-gray-500">{t("smallBusinessOwner")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col rounded-xl shadow-2xl overflow-hidden transition duration-300 ease-in-out hover:shadow-3xl hover:scale-105 transform hover:translate-y-4 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-700">{t("lawyer")}</p>
                    <div className="block mt-2">
                      <p className="text-2xl font-semibold text-gray-900">{t("expandedMyPractice")}</p>
                      <p className="mt-3 text-base text-gray-600">{t("thisPlatformHasHelpedMe")}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{t("masumHossain")}</span>
                      <div className="h-14 w-14 rounded-full bg-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">MH</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{t("masumHossain")}</p>
                      <p className="text-sm text-gray-500">{t("corporateLawyer")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col rounded-xl shadow-2xl overflow-hidden transition duration-300 ease-in-out hover:shadow-3xl hover:scale-105 transform hover:translate-y-4 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-700">{t("client")}</p>
                    <div className="block mt-2">
                      <p className="text-2xl font-semibold text-gray-900">{t("excellentSupport")}</p>
                      <p className="mt-3 text-base text-gray-600">{t("thePlatformMadeItEasy")}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{t("raihanSarker")}</span>
                      <div className="h-14 w-14 rounded-full bg-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">RS</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{t("raihanSarker")}</p>
                      <p className="text-sm text-gray-500">{t("startupFounder")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">{t("howItWorks")}</h2>
            <p className="mt-4 text-xl text-gray-600">{t("getStartedInJustAFewSteps")}</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Step 1: Create an Account */}
            <div className="relative group bg-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:translate-y-2">
              <div className="absolute top-0 left-0 -ml-6 mt-2 md:block">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-xl font-bold text-blue-600">
                  1
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{t("createAccount")}</h3>
              <p className="mt-2 text-gray-600 text-center">{t("signUpAsClientOrLawyer")}</p>
            </div>

            {/* Step 2: Find a Lawyer */}
            <div className="relative group bg-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:translate-y-2">
              <div className="absolute top-0 left-0 -ml-6 mt-2 md:block">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-xl font-bold text-blue-600">
                  2
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{t("findLawyer")}</h3>
              <p className="mt-2 text-gray-600 text-center">{t("browseProfilesAndReadReviews")}</p>
            </div>

            {/* Step 3: Book Consultation */}
            <div className="relative group bg-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:translate-y-2">
              <div className="absolute top-0 left-0 -ml-6 mt-2 md:block">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-xl font-bold text-blue-600">
                  3
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{t("bookConsultation")}</h3>
              <p className="mt-2 text-gray-600 text-center">{t("scheduleAMeetingAtYourConvenience")}</p>
            </div>

            {/* Step 4: Get Help */}
            <div className="relative group bg-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:translate-y-2">
              <div className="absolute top-0 left-0 -ml-6 mt-2 md:block">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-xl font-bold text-blue-600">
                  4
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{t("getHelp")}</h3>
              <p className="mt-2 text-gray-600 text-center">{t("receiveExpertLegalAssistance")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mb-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t("readyToGetStarted")}</span>
            <span className="block text-blue-200">{t("joinOurPlatformToday")}</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow mb-4 sm:mb-0 sm:mr-3">
              <Link
                to="/client-signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out"
              >
                {t("getStarted")}
              </Link>
            </div>
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/lawyer-signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                {t("joinAsLawyer")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
