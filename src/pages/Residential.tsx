import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';

const Residential = () => {
  const residentialProperties = [
    {
      id: 1,
      title: 'Chelsea Cloisters',
      location: 'Sloane Avenue, Chelsea, SW3 3DW',
      images: [
        '/Cloisters-01.jpg',
        '/Cloisters-02.jpg',
        '/Cloisters-04.jpg'
      ],
      description: 'A purpose built block of 74 residential flats, built in the 1930s, with some commercial space on the ground floor and basement. The group does not own the Freehold but purchased a 999 year lease on the commercial area and 30 flats which are let out on short term ASTs. The commercial areas comprise a 2600 square foot restaurant and a petrol station and long term storage garage.',
      features: ['74 Flats', 'Commercial Space', 'Restaurant', 'Petrol Station']
    },
    {
      id: 2,
      title: 'Empire Court',
      location: 'North End Road, Wembley, HA9 0AG',
      images: [
        '/Empire-05.jpg',
        '/Empire-13.jpg',
        '/Empire-02.jpg',
        '/Empire-11.jpg',
        '/Empire-09.jpg',
        '/Empire-08.jpg'
      ],
      description: 'A purpose built residential estate comprising 6 four storey flat blocks and separate garage blocks, built in the 1930s, with the Freehold being owned by LKB Investments Limited, a part of a charity group within the Freshwater Group. The estate comprises 247 flats and 38 garages in total; 155 of the flats were sold on 125-190 year long leases in the 1970s and 1980s with the remaining 92 flats being let out on short term ASTs.',
      features: ['247 Flats', '38 Garages', '6 Blocks', 'Four Storey']
    },
    {
      id: 3,
      title: 'Endsleigh Court',
      location: 'Upper Woburn Place, London, WC1H 0HA',
      images: [
        '/Endsleigh-01.jpg',
        '/Endsleigh-02.jpg',
        '/Endsleigh-03.jpg',
        '/Endsleigh-04.jpg',
        '/Endsleigh-05.jpg',
        '/Endsleigh-06.jpg'
        
      ],
      description: 'A purpose built block of 180 residential flats, built in the 1930s, with the Freehold being owned by LKB Investments Limited, a part of a charity group within the Freshwater Group. The building is located in central London near to Tavistock Square. 63 of the flats were sold on 100-150 year long leases in the 1980s with the remaining 117 flats being let out on short term ASTs.',
      features: ['180 Flats', 'Central London', 'Near Tavistock Square']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4" style={{ color: '#FFFFFF' }}>Residential Properties</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: '#FFFFFF' }}>
              Exceptional homes in London's most desirable neighborhoods
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {residentialProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <ImageCarousel 
                  images={property.images} 
                  alt={property.title}
                />
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-xs sm:text-sm break-words">{property.location}</span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs whitespace-nowrap"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;