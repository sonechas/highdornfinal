import React from 'react';
import { Award, MapPin } from 'lucide-react'; // Only Award and MapPin are needed now
import { motion } from 'framer-motion';

const ManagementTeam = () => {
  // Updated management data with new individuals, no images, and no contact info
  const managers = [
    {
      id: 1,
      name: 'Grant Barrell',
      position: 'Head of Operational Finance',
      bio: 'Grant is the Head of Operational Finance. His main responsibility is to oversee the management of all aspects of accounts receivable, accounts payable and service charges. He joined the group in April 2018, having been involved within the property industry, focusing on block management and account compliance, since arriving from South Africa at the beginning of 2007. Grant completed his Master of Business Administration whilst in South Africa and is currently a member of The Property Institute and an associate of RICS.',
      specialization: 'Operational Finance',
      location: 'Head Office', // Added location based on context
      experience: '15+ years' // Derived from "since arriving from South Africa at the beginning of 2007"
    },
    {
      id: 2,
      name: 'Mike McCarthy',
      position: 'Manager Commercial Property',
      bio: 'Mike has over 30 years of property experience and currently has operational responsibility for property and asset management of the commercial portfolio. He has been part of the development management team for various schemes including office to residential projects, retail warehousing and development of Central London offices. Mike is a Chartered Surveyor and formerly worked at Hamptons and Dorrington PLC',
      specialization: 'Commercial Property & Asset Management',
      location: 'London Wide', // Derived from context
      experience: '30+ years'
    },
    {
      id: 3,
      name: 'Kalpesh Sonecha',
      position: 'Head of Information Technology',
      bio: 'Kalpesh is our Head of IT, responsible for leading and overseeing all aspects of Freshwater’s information technology operations. With over 25 years of experience in the IT sector, he brings a wealth of expertise, from hands-on support to strategic decision-making. Kalpesh’s primary focus is to develop and implement IT strategies that align with our business objectives, ensuring that our systems, networks, and digital services are secure, reliable, and efficient. He joined Freshwater in 2022, following a distinguished 21-year career at the National Housing Federation.',
      specialization: 'Information Technology',
      location: 'Head Office', // Derived from context
      experience: '25+ years'
    },
    {
      id: 4,
      name: 'Sarah Tate',
      position: 'Deputy General Counsel',
      bio: 'Sarah is the Deputy General Counsel, qualifying as a solicitor in 2012 after 12 years as a paralegal. Her main duties are dealing with transactional property, litigation, finance, corporate and banking matters as well as managing and coordinating external law firms and assisting the finance and property departments in all aspects of the business. Sarah joined the Freshwater Group in November 2021, previously having dealt with the Freshwater Group’s work as an external solicitor since 2017. Prior to that Sarah worked in the city as a real estate solicitor acting for large institutional landlords including British Land, the Crown Estate and the Wellcome Trust. Sarah is a trustee of West Harrow Community Forum Trust, a trust created to maintain and enhance the character of the area. She is also an active member of the West Harrow tube gardening group and Harrow Litter Pickers Charity.',
      specialization: 'Legal & Property Transactions',
      location: 'Head Office', // Derived from context
      experience: '24+ years' // Simplified from '12+ years (solicitor) + 12 years (paralegal)'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 font-sans">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4" style={{ color: '#FFFFFF' }}>Management Team</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: '#FFFFFF' }}>
              Dedicated professionals managing our properties and ensuring exceptional service delivery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Managers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 justify-center"> {/* Keeping 2 columns for better alignment and readability */}
            {managers.map((manager, index) => (
              <motion.div
                key={manager.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col" // Added flex-col for consistent height
              >
                <div className="p-4 sm:p-6 flex-grow"> {/* flex-grow to make bio section expand */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {manager.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-base sm:text-lg mb-4">
                    {manager.position}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-semibold w-fit">
                      {manager.specialization}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1 text-xs sm:text-sm">
                      <MapPin className="w-4 h-4 text-gray-500" /> {/* Changed icon to MapPin */}
                      {manager.location}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1 text-xs sm:text-sm">
                      <Award className="w-4 h-4 text-yellow-500" /> {/* Re-added Award for experience */}
                      {manager.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                    {manager.bio}
                  </p>
                  
                  {/* Removed the contact information section */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementTeam;