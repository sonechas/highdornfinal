import React, { useState, useEffect } from 'react';
import { BedDouble, Bath, Square, MapPin, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Property } from '../../utils/supabase';

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'residential' | 'commercial'>('all');

  // Mock data - in real app, this would come from Supabase
  const mockProperties: Property[] = [
    {
      id: '1',
      title: 'Luxury Apartment in Kensington',
      description: 'Beautiful 3-bedroom apartment with stunning views of Hyde Park',
      price: 2500000,
      location: 'Kensington, London',
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      image_url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'residential',
      status: 'available',
      created_at: '2024-01-01',
    },
    {
      id: '2',
      title: 'Modern Office Space',
      description: 'Prime commercial space in the heart of Canary Wharf',
      price: 5000000,
      location: 'Canary Wharf, London',
      bedrooms: 0,
      bathrooms: 4,
      area: 2500,
      image_url: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'commercial',
      status: 'available',
      created_at: '2024-01-02',
    },
    {
      id: '3',
      title: 'Georgian Townhouse',
      description: 'Historic 4-bedroom townhouse in prestigious Mayfair',
      price: 4500000,
      location: 'Mayfair, London',
      bedrooms: 4,
      bathrooms: 3,
      area: 2000,
      image_url: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'residential',
      status: 'available',
      created_at: '2024-01-03',
    },
    {
      id: '4',
      title: 'Retail Space in Oxford Street',
      description: 'Prime retail location with high foot traffic',
      price: 3500000,
      location: 'Oxford Street, London',
      bedrooms: 0,
      bathrooms: 2,
      area: 800,
      image_url: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'commercial',
      status: 'available',
      created_at: '2024-01-04',
    },
    {
      id: '5',
      title: 'Penthouse in Chelsea',
      description: 'Stunning penthouse with panoramic city views',
      price: 6000000,
      location: 'Chelsea, London',
      bedrooms: 5,
      bathrooms: 4,
      area: 3000,
      image_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'residential',
      status: 'available',
      created_at: '2024-01-05',
    },
    {
      id: '6',
      title: 'Warehouse in East London',
      description: 'Large industrial space perfect for distribution',
      price: 2000000,
      location: 'East London',
      bedrooms: 0,
      bathrooms: 2,
      area: 5000,
      image_url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'commercial',
      status: 'available',
      created_at: '2024-01-06',
    },
  ];

  useEffect(() => {
    setProperties(mockProperties);
    setFilteredProperties(mockProperties);
  }, []);

  useEffect(() => {
    let filtered = properties;

    if (selectedType !== 'all') {
      filtered = filtered.filter(property => property.type === selectedType);
    }

    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  }, [searchTerm, selectedType, properties]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="properties" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium properties
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedType === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedType('residential')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedType === 'residential'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setSelectedType('commercial')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedType === 'commercial'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image_url}
                  alt={property.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    property.type === 'residential'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {property.type === 'residential' ? 'Residential' : 'Commercial'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {property.description}
                </p>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                {property.type === 'residential' && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.area.toLocaleString()} sqft</span>
                    </div>
                  </div>
                )}
                
                {property.type === 'commercial' && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{property.area.toLocaleString()} sqft</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms} facilities</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {formatPrice(property.price)}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No properties found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;