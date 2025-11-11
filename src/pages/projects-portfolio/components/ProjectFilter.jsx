import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ProjectFilter = ({ 
  categories, 
  technologies, 
  onFilterChange, 
  onSortChange,
  activeFilters,
  isMobile = false 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...categories?.map(cat => ({ value: cat?.toLowerCase(), label: cat }))
  ];

  const technologyOptions = [
    { value: 'all', label: 'All Technologies' },
    ...technologies?.map(tech => ({ value: tech?.toLowerCase(), label: tech }))
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'alphabetical', label: 'A-Z' },
    { value: 'complexity', label: 'Complexity' }
  ];

  const handleCategoryChange = (value) => {
    onFilterChange('category', value);
  };

  const handleTechnologyChange = (value) => {
    onFilterChange('technology', value);
  };

  const handleSortChange = (value) => {
    onSortChange(value);
  };

  const clearAllFilters = () => {
    onFilterChange('category', 'all');
    onFilterChange('technology', 'all');
    onSortChange('recent');
  };

  const hasActiveFilters = activeFilters?.category !== 'all' || activeFilters?.technology !== 'all';

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const mobileFilterVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      y: "100%",
      transition: {
        duration: 0.2
      }
    }
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Filter Toggle */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={() => setIsFilterOpen(true)}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-800 dark:text-gray-100 rounded-xl font-semibold border border-white/30 dark:border-gray-700/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon name="Filter" size={16} color="currentColor" />
            <span>Filters</span>
            {hasActiveFilters && (
              <motion.span 
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
          
          <Select
            options={sortOptions}
            value={activeFilters?.sort}
            onChange={handleSortChange}
            placeholder="Sort by"
            className="w-32"
          />
        </motion.div>

        {/* Mobile Filter Overlay */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-t-3xl p-6 space-y-6 border-t border-white/30 dark:border-gray-700/30"
                variants={mobileFilterVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Filter Projects</h3>
                  <motion.button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-xl transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon name="X" size={20} color="currentColor" />
                  </motion.button>
                </div>

                <div className="space-y-4">
                  <Select
                    label="Category"
                    options={categoryOptions}
                    value={activeFilters?.category}
                    onChange={handleCategoryChange}
                  />

                  <Select
                    label="Technology"
                    options={technologyOptions}
                    value={activeFilters?.technology}
                    onChange={handleTechnologyChange}
                    searchable
                  />
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    onClick={clearAllFilters}
                    className="flex-1 px-6 py-3 bg-gray-200/60 dark:bg-gray-700/60 backdrop-blur-sm text-gray-800 dark:text-gray-100 rounded-xl font-semibold border border-gray-300/30 dark:border-gray-600/30 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Clear All
                  </motion.button>
                  <motion.button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Filters
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <motion.div 
      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 p-6 mb-8 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Icon name="Filter" size={18} color="#6B7280" />
            </motion.div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter by:</span>
          </motion.div>

          <Select
            options={categoryOptions}
            value={activeFilters?.category}
            onChange={handleCategoryChange}
            placeholder="Category"
            className="w-full sm:w-48"
          />

          <Select
            options={technologyOptions}
            value={activeFilters?.technology}
            onChange={handleTechnologyChange}
            placeholder="Technology"
            searchable
            className="w-full sm:w-48"
          />
        </div>

        {/* Sort and Clear Controls */}
        <div className="flex items-center space-x-4">
          <Select
            options={sortOptions}
            value={activeFilters?.sort}
            onChange={handleSortChange}
            placeholder="Sort by"
            className="w-40"
          />

          {hasActiveFilters && (
            <motion.button
              onClick={clearAllFilters}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm text-red-600 dark:text-red-400 rounded-xl font-semibold border border-red-300/50 hover:bg-red-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name="X" size={16} color="currentColor" />
              <span>Clear</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      <AnimatePresence>
        {hasActiveFilters && (
          <motion.div 
            className="flex items-center space-x-2 mt-4 pt-4 border-t border-white/30 dark:border-gray-700/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
            {activeFilters?.category !== 'all' && (
              <motion.span 
                className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium border border-blue-300/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                {categoryOptions?.find(opt => opt?.value === activeFilters?.category)?.label}
              </motion.span>
            )}
            {activeFilters?.technology !== 'all' && (
              <motion.span 
                className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium border border-purple-300/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                {technologyOptions?.find(opt => opt?.value === activeFilters?.technology)?.label}
              </motion.span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectFilter;