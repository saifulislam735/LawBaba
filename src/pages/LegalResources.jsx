import { FaGavel, FaBriefcase, FaUsers, FaHome, FaBalanceScale } from 'react-icons/fa'; // Font Awesome icons
import { MdChildCare, MdBusinessCenter, MdSecurity, MdAddCircle } from 'react-icons/md'; // Material Design icons
import { useTranslation } from '../hooks/useTranslation'; // Importing translation hook

const LegalResources = () => {
  const { t } = useTranslation(); // Using translation function

  const resources = [
    {
      category: t('FamilyLaw'),
      icon: <MdChildCare className="w-8 h-8 text-blue-600" />, // Using Material Design icon for Family Law
      topics: [t('Divorce'), t('ChildCustody'), t('Adoption'), t('Marriage'), t('DomesticViolence')],
    },
    {
      category: t('CriminalLaw'),
      icon: <FaGavel className="w-8 h-8 text-blue-600" />, // Using Font Awesome icon for Criminal Law
      topics: [t('CriminalDefense'), t('DUI'), t('DrugOffenses'), t('WhiteCollarCrime'), t('Appeals')],
    },
    {
      category: t('BusinessLaw'),
      icon: <FaBriefcase className="w-8 h-8 text-blue-600" />, // Using Font Awesome icon for Business Law
      topics: [t('Contracts'), t('CorporateLaw'), t('IntellectualProperty'), t('Employment'), t('Startups')],
    },
    {
      category: t('RealEstateLaw'),
      icon: <FaHome className="w-8 h-8 text-blue-600" />, // Using Font Awesome icon for Real Estate Law
      topics: [t('BuyingSellingProperty'), t('Leases'), t('RentingProperty'), t('LandlordTenantDisputes'), t('RealEstateTransactions')],
    },
    {
      category: t('IntellectualPropertyLaw'),
      icon: <FaBalanceScale className="w-8 h-8 text-blue-600" />, // Using Font Awesome icon for Intellectual Property
      topics: [t('Patents'), t('Trademarks'), t('Copyrights'), t('TradeSecrets'), t('Licensing')],
    },
    {
      category: t('LaborEmploymentLaw'),
      icon: <MdBusinessCenter className="w-8 h-8 text-blue-600" />, // Using Material Design icon for Labor Law
      topics: [t('EmploymentContracts'), t('WageHourLaws'), t('WorkplaceDiscrimination'), t('Unions'), t('EmployeeRights')],
    },
    {
      category: t('ImmigrationLaw'),
      icon: <MdSecurity className="w-8 h-8 text-blue-600" />, // Using Material Design icon for Immigration Law
      topics: [t('Visas'), t('GreenCards'), t('Citizenship'), t('WorkPermits'), t('DeportationDefense')],
    },
    {
      category: t('PersonalInjuryLaw'),
      icon: <FaUsers className="w-8 h-8 text-blue-600" />, // Using Font Awesome icon for Personal Injury Law
      topics: [t('CarAccidents'), t('MedicalMalpractice'), t('SlipFall'), t('ProductLiability'), t('WorkplaceInjuries')],
    },
    {
      category: t('TaxLaw'),
      icon: <FaBalanceScale className="w-8 h-8 text-blue-600" />, // Using Font Awesome icon for Tax Law
      topics: [t('TaxPlanning'), t('TaxPreparation'), t('TaxLitigation'), t('IRSIssues'), t('EstateTaxes')],
    },
    {
      category: t('EstatePlanningLaw'),
      icon: <MdAddCircle className="w-8 h-8 text-blue-600" />, // Using Material Design icon for Estate Planning Law
      topics: [t('Wills'), t('Trusts'), t('Probate'), t('PowerOfAttorney'), t('EstateTaxes')],
    },
  ];

  const commonQuestions = [
    {
      question: t('WhatShouldIDoAfterCarAccident'),
      answer: t('EnsureSafety'),
    },
    {
      question: t('DoINeedAWill'),
      answer: t('YesHavingAWillIsImportant'),
    },
    {
      question: t('WhatAreMyRightsAsTenant'),
      answer: t('TenantsRights'),
    },
  ];

  return (
    <div className="py-12 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mb-12 rounded-xl">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">{t('LegalResourcesInformation')}</h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto">
            {t('AccessComprehensiveLegalInformation')}
          </p>
        </div>
      </div>

      {/* Practice Areas */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold text-center mb-12 text-blue-800">{t('PracticeAreas')}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {resources.map((resource) => (
            <div key={resource.category} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{resource.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{resource.category}</h3>
              <ul className="space-y-2">
                {resource.topics.map((topic) => (
                  <li key={topic} className="text-gray-700 flex items-center text-lg">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Common Legal Questions */}
      <div className="bg-gray-50 py-16 rounded-xl">
        <h2 className="text-4xl font-semibold text-center mb-12 text-blue-800">{t('CommonLegalQuestions')}</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {commonQuestions.map((item) => (
            <div key={item.question} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">{item.question}</h3>
              <p className="text-lg text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold mb-6">{t('NeedProfessionalLegalHelp')}</h2>
        <p className="text-xl text-gray-600 mb-8">
          {t('OurNetworkOfExperiencedLawyers')}
        </p>
        <a
          href="/lawyers"
          className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          {t('FindALawyerNow')}
        </a>
      </div>
    </div>
  );
};

export default LegalResources;
