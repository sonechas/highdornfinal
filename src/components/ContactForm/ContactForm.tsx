import React from 'react';
import { PhoneCall, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  // Data for office locations and company information, extracted from screenshots
  const offices = [
    {
      id: 1,
      name: 'Main Office',
      address: [
        'Highdorn Co. Limited',
        'Freshwater House',
        '158-162 Shaftesbury Avenue',
        'London',
        'WC2H 8HR',
      ],
      phone: '020 7836 1555',
      // Fax removed
    },
    {
      id: 2,
      name: 'London WC2',
      address: [
        'New London House',
        '172 Drury Lane',
        'London, WC2B 5AB',
      ],
      phone: '020 7242 0514',
    },
    {
      id: 3,
      name: "Queen's Park (Area 5)",
      address: [
        '105-109 Salusbury Road',
        "Queen's Park",
        'London, NW6 6RG',
      ],
      phone: '0204 512 8400',
    },
    {
      id: 4,
      name: 'Croydon (Area Office)',
      address: [
        '3rd Floor Suffolk House',
        'George Street',
        'Croydon, CR0 1PE',
      ],
      phone: '020 8662 8870',
    },
    {
      id: 5,
      name: 'Croydon (Regional Executive)',
      address: [
        '3rd Floor Suffolk House',
        'George Street',
        'Croydon, CR0 1PE',
      ],
      phone: '020 8662 2500',
    },
    {
      id: 6,
      name: 'West Midlands',
      address: [
        '4 Walmley Chambers',
        'Walmley Close',
        'Sutton Coldfield',
        'West Midlands, B76 1NQ',
      ],
      phone: '0121 313 2255',
    },
  ];

  const companyInfo = {
    id: 7,
    name: 'Office Information',
    details: [
      'Part of Freshwater Group of Companies',
      'Highdorn Co. Limited.',
      'Registered in England',
      'Number- 603121',
    ],
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Office Locations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Find us at our various offices across the UK
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Render Company Information Card at the top and centered */}
          <motion.div
            key={companyInfo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 mx-auto w-full max-w-md text-center" // Centered and max-width added
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                {companyInfo.name}
              </h3>
              <div className="space-y-1 text-gray-700 dark:text-gray-300">
                {companyInfo.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-xs sm:text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Render Office Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8"> {/* Added margin-top for spacing */}
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {office.name}
                  </h3>
                  <div className="space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                    {office.address.map((line, addrIndex) => (
                      <p key={addrIndex} className="flex items-start gap-2 text-xs sm:text-sm">
                        {addrIndex === 0 && <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />}
                        <span className="break-words">{line}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  {office.phone && (
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium hover:underline"
                    >
                      <PhoneCall className="w-4 h-4" />
                      {office.phone}
                    </a>
                  )}
                  {/* Fax rendering removed */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;