import React from 'react';
import { motion } from 'framer-motion';

const Directors = () => {
  const directors = [
    {
      id: 1,
      name: 'Benzion Freshwater',
      position: 'Chairman & Managing Director',
      bio: 'Benzion joined the Freshwater Group in December 1971 with primary responsibility for the Freshwater Group\'s finances. He is a trained accountant and now has over 50 years of experience working in the property industry. In July 1976 he was appointed Managing Director and, additionally, became Chairman in July 1980. Benzion is the son of Osias Freshwater who founded the property business in London\'s East End after World War II having fled from his native Poland in 1939 to escape the holocaust.',
      email: 'benzion.freshwater@highdorn.co.uk'
    },
    {
      id: 2,
      name: 'Solomon Freshwater',
      position: 'Director & Head USA Operations',
      bio: 'Solomon was appointed to the Board of the main companies in the Freshwater Group in January 1986. He is primarily responsible for the Freshwater Group\'s operations in the USA and also has responsibility for the UK sales division. Solomon is the second son of Osias Freshwater and Benzion\'s brother. He is also a Rabbi in the Jewish Northwest London community.',
      email: 'solomon.freshwater@highdorn.co.uk'
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
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Board of Directors</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#FFFFFF' }}>
              Meet the experienced leadership team guiding Highdorn's strategic direction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {directors.map((director, index) => (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {director.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-4">
                  {director.position}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {director.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directors;