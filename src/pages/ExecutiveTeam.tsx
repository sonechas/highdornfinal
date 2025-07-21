import React from 'react';
import { Mail, PhoneCall, Award } from 'lucide-react'; // Mail and PhoneCall are no longer used but kept for completeness if needed later
import { motion } from 'framer-motion';

const ExecutiveTeam = () => {
  // Updated executive data with new individuals and no images
  const executives = [
    {
      id: 1,
      name: 'James Southgate',
      position: 'Chief Financial Officer & Company Secretary',
      bio: 'James is the Chief Financial Officer and joint Company Secretary of the Freshwater Group. His main areas of responsibility are finance, treasury, IT, M&A, pension and tax strategy. He joined the Freshwater Group in 2015 after a 25 year career at PricewterhouseCoopers where he was an Assurance partner. He led many listed company audits including National Grid, ARM and British Steel and listed transactions including IPOs and Class 1 acquisitions. James is currently a Non-executive Director and Audit Committee Chairman of S P Jain London, a newly formed UK university specialising in business qualifications. Previously he was a member of the Audit Committee of the University of West London for 9 years and they awarded him an honorary doctorate in Business Administration.',
      experience: '25+ years',
      department: 'Finance & Legal',
      // Removed email and phone fields as per request
    },
    {
      id: 2,
      name: 'Jonathan Ainsley',
      position: 'Director of Property',
      bio: 'Jonathan is the Director of Property, responsible for the performance of the Residential and Commercial assets held by the Freshwater Group. With over 30 years experience in the market, Jonathan has a wide range of responsibilities including, the strategic leadership of Development, Asset Management, Leasing and financial performance of the residential and commercial assets. Leading a team of professionals across both asset classes, Jonathan has been with Freshwater since 2020. Prior to joining Freshwater, he was at Battersea Power Station Development Company, CSC, Hammerson and JLL. Jonathan is a member of the RICS.',
      experience: '30+ years',
      department: 'Property',
      // Removed email and phone fields as per request
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4" style={{ color: '#FFFFFF' }}>Executive Team</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: '#FFFFFF' }}>
              Our senior leadership team driving operational excellence and strategic growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executives Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 justify-center"> {/* Adjusted grid for 2 columns */}
            {executives.map((executive, index) => (
              <motion.div
                key={executive.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col" // Added flex-col for consistent height
              >
                <div className="p-4 sm:p-6 flex-grow"> {/* flex-grow to make bio section expand */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {executive.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-base sm:text-lg mb-4">
                    {executive.position}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-semibold w-fit">
                      {executive.department}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1 text-xs sm:text-sm">
                      <Award className="w-4 h-4 text-yellow-500" />
                      {executive.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                    {executive.bio}
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

export default ExecutiveTeam;