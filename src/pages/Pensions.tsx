import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Pensions = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const pdfDocuments = [
    {
      title: 'Pension Financial Statements July 2024',
      file: '/pensions/Pension Financial Statements July 2024.pdf'
    },
    {
      title: 'Pension Financial Statements July 2023',
      file: '/pensions/Pension Financial Statements July 23.pdf'
    },
    {
      title: 'Pension Financial Statements July 2022',
      file: '/pensions/Pension Financial Statements July 22.pdf'
    },
    {
      title: 'Pension Implementation Statement July 2024',
      file: '/pensions/Pension Implementation Statement July 24.pdf'
    },
    {
      title: 'Pension Implementation Statement July 2023',
      file: '/pensions/Pension Implementation Statement July 23.pdf'
    },
    {
      title: 'Pension Statement of Investment Principles March 2024',
      file: '/pensions/Pension Statement of Investment Principles March 2024.pdf'
    },
    {
      title: 'Pension Statement of Investment Principles September 2020',
      file: '/pensions/Pension Statement of Investment Principles September 2020.pdf'
    }
  ];

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

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
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Pension Documents</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#FFFFFF' }}>
              Access all pension scheme documents and reports
            </p>
          </motion.div>
        </div>
      </section>

      {/* PDF Documents */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {pdfDocuments.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleTab(index)}
                  className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 px-6 py-4 flex items-center justify-between transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-white text-left">
                    {document.title}
                  </h3>
                  {activeTab === index ? (
                    <ChevronUp className="w-6 h-6 text-white" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white" />
                  )}
                </button>
                
                {activeTab === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 md:p-6"
                  >
                    {/* Mobile-only download option */}
                    <div className="block md:hidden">
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 text-center">
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          Download the PDF to view:
                        </p>
                        <a
                          href={document.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download PDF
                        </a>
                      </div>
                    </div>

                    {/* Desktop PDF viewer */}
                    <div className="hidden md:block w-full" style={{ height: '800px' }}>
                      <iframe
                        src={document.file}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title={document.title}
                      >
                        <p>Your browser does not support PDFs. 
                          <a href={document.file} target="_blank" rel="noopener noreferrer">
                            Download the PDF
                          </a>
                        </p>
                      </iframe>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pensions;