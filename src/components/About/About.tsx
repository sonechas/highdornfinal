import React from 'react';

// --- Icon Components (Self-contained SVGs for lucide-react) ---
const Building2 = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
);
const Users2 = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 19a6 6 0 0 0-12 0"/><circle cx="8" cy="9" r="4"/><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"/></svg>
);
const Award = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);
const TrendingUp = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
);

// --- Mock Hook and Framer Motion ---
const useScrollAnimation = () => {
  // This is a mock hook. In a real app, it would contain logic for scroll animations.
  const ref = React.useRef(null);
  return ref;
};

const motion = {
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
};


// --- About Page Component ---
const About = () => {
  const ref = useScrollAnimation();

  const features = [
    {
      icon: Building2,
      title: 'Property Management',
      description: 'Expert management of commercial and residential properties across the UK',
    },
    {
      icon: Users2,
      title: 'Family Owned',
      description: 'Owned and controlled by the Freshwater family with decades of experience',
    },
    {
      icon: Award,
      title: 'Trusted Partners',
      description: 'Working with established investment groups including Daejan Holdings and Centremanor Group',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Continuously expanding our portfolio while maintaining exceptional standards',
    },
  ];

  return (
    <>
      {/* Header Section with White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About Highdorn Group
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A leading property management group with a commitment to excellence and innovation
              </p>
            </motion.div>
        </div>
      </section>

      {/* Main Content Section with Dark Background */}
      <section className="py-20 bg-[#101826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Our Heritage
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  Highdorn Group is a property management group that manages both commercial and 
                  residential properties in the UK. Highdorn is owned and controlled by the Freshwater family.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Almost all the properties Highdorn manages are owned by two property investment groups - 
                  <a href="#" className="text-blue-400 hover:text-blue-500 mx-1">Daejan Holdings</a> 
                  and 
                  <a href="#" className="text-blue-400 hover:text-blue-500 mx-1">Centremanor Group</a>
                  that are also owned and controlled by the Freshwater family.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Colloquially these groups together are known as the 
                  <a href="#" className="text-blue-400 hover:text-blue-500 mx-1">Freshwater Group</a>
                  although this is not a legal entity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Our Services
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  Highdorn employs most of the people in the Freshwater Group and supplies their services to 
                  other groups and companies within the Freshwater Group.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Details relevant to employment matters are therefore included in this website, 
                  for example details of the Defined Benefit Pension Scheme.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


// --- Main App Component ---
const App = () => {
    return <About />;
}

export default App;