import React from 'react';
import { Building2, MapPin, Users2, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';

const Office = () => {
  const officeProperties = [
    {
      id: 1,
      title: 'Dean Bradley House',
      location: 'Horseferry Road, Westminster, SW1P 2AF',
      size: '30,500 sqft',
      floors: 9,
      availability: '',
      price: '',
      images: ['/Dean-02.jpg', '/Dean-03.jpg', '/Dean-04.jpg'],
      description: 'A mixed use office and retail building spread over 9 floors, built in the 1930s, with the Freehold being owned by Mayfair Charities Limited, a charity within the Freshwater Group. The ground and basement floors comprise over 7200 square feet of retail space currently split into 10 shop units. The upper floors comprise over 23,300 square feet of office space.',
      features: ['Mixed Use', 'Retail Space', 'Office Space']
    },
    {
      id: 2,
      title: 'Bridge House',
      location: 'London Road, Twickenham, TW1 3QL',
      size: '33,400 sqft',
      floors: 5,
      availability: '',
      price: '',
      images: ['/Twick-01.jpg', '/Twick-04.jpg', '/Twick-05.jpg', '/Twick-06.jpg'],
      description: 'A five storey 33,400 square feet office building, built in the 1970s, with the Freehold being owned by Mayfair Charities Limited, a charity within the Freshwater Group. The offices are on the 1st to 4th floors with car parking on the ground floor. The building is currently let to Haymarket Media Group Limited, Michael Heseltine\'s publishing group.',
      features: ['Car Parking', 'Office Space']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Office Properties</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#FFFFFF' }}>
              Discover premium commercial office spaces in London's most prestigious business districts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {officeProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <ImageCarousel 
                    images={property.images} 
                    alt={property.title}
                  />
                  {property.availability && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {property.availability}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 dark:text-slate-400 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600 dark:text-slate-300">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{property.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users2 className="w-4 h-4" />
                      <span>{property.floors} floors</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 dark:text-slate-300 text-sm mb-3">
                      {property.description}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {property.price && (
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {property.price}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Office;