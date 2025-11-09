import React, { useState } from 'react';
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

  if (isMobile) {
    return (
      <>
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            iconName="Filter"
            iconPosition="left"
            onClick={() => setIsFilterOpen(true)}
          >
            Filters
            {hasActiveFilters && (
              <span className="ml-2 w-2 h-2 bg-primary rounded-full"></span>
            )}
          </Button>
          
          <Select
            options={sortOptions}
            value={activeFilters?.sort}
            onChange={handleSortChange}
            placeholder="Sort by"
            className="w-32"
          />
        </div>
        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-300 bg-black bg-opacity-50">
            <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-xl p-6 space-y-6 animate-slide-up">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">Filter Projects</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  onClick={() => setIsFilterOpen(false)}
                />
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
                <Button
                  variant="outline"
                  fullWidth
                  onClick={clearAllFilters}
                >
                  Clear All
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="bg-surface rounded-xl border border-border p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={18} color="var(--color-text-secondary)" />
            <span className="text-sm font-medium text-text-secondary">Filter by:</span>
          </div>

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
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={clearAllFilters}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border">
          <span className="text-sm text-text-secondary">Active filters:</span>
          {activeFilters?.category !== 'all' && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md">
              {categoryOptions?.find(opt => opt?.value === activeFilters?.category)?.label}
            </span>
          )}
          {activeFilters?.technology !== 'all' && (
            <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md">
              {technologyOptions?.find(opt => opt?.value === activeFilters?.technology)?.label}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;