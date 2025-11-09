import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onNavigateProject }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'gallery', label: 'Gallery', icon: 'Images' },
    { id: 'insights', label: 'AI Insights', icon: 'Brain' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Project Description</h3>
              <p className="text-text-secondary leading-relaxed">{project?.fullDescription}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project?.challenges && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Challenges & Solutions</h3>
                <div className="space-y-3">
                  {project?.challenges?.map((challenge, index) => (
                    <div key={index} className="bg-muted rounded-lg p-4">
                      <h4 className="font-medium text-text-primary mb-2">{challenge?.title}</h4>
                      <p className="text-sm text-text-secondary">{challenge?.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'technical':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project?.technologies?.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                    <Icon name="Code" size={16} color="var(--color-primary)" />
                    <span className="text-sm font-medium text-text-primary">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            {project?.architecture && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Architecture</h3>
                <p className="text-text-secondary leading-relaxed">{project?.architecture}</p>
              </div>
            )}
            {project?.performance && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(project?.performance)?.map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold text-primary">{value}</p>
                      <p className="text-xs text-text-secondary capitalize">{key?.replace(/([A-Z])/g, ' $1')}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-6">
            {project?.gallery && project?.gallery?.length > 0 ? (
              <>
                <div className="relative">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={project?.gallery?.[currentImageIndex]?.src}
                      alt={project?.gallery?.[currentImageIndex]?.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {project?.gallery?.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 nav-transition"
                      >
                        <Icon name="ChevronLeft" size={20} color="currentColor" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 nav-transition"
                      >
                        <Icon name="ChevronRight" size={20} color="currentColor" />
                      </button>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {project?.gallery?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 nav-transition ${
                        index === currentImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={image?.src}
                        alt={image?.alt}
                        className="w-full h-full object-cover hover:scale-105 nav-transition"
                      />
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-sm text-text-secondary">
                    {project?.gallery?.[currentImageIndex]?.caption}
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Icon name="Image" size={48} color="var(--color-text-secondary)" className="mx-auto mb-4" />
                <p className="text-text-secondary">No gallery images available for this project.</p>
              </div>
            )}
          </div>
        );

      case 'insights':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Brain" size={20} color="var(--color-primary)" />
                <h3 className="text-lg font-semibold text-text-primary">AI-Generated Insights</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">{project?.aiInsights}</p>
            </div>
            {project?.recommendations && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Recommended Similar Projects</h3>
                <div className="space-y-3">
                  {project?.recommendations?.map((rec, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <h4 className="font-medium text-text-primary">{rec?.title}</h4>
                        <p className="text-sm text-text-secondary">{rec?.reason}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="ArrowRight"
                        onClick={() => onNavigateProject(rec?.id)}
                      >
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Learning Outcomes</h3>
              <ul className="space-y-2">
                {project?.learnings?.map((learning, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Lightbulb" size={16} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-400 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="FolderOpen" size={24} color="white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary">{project?.title}</h2>
              <p className="text-sm text-text-secondary">{project?.category} • {project?.year}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {project?.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                iconName="ExternalLink"
                iconPosition="left"
                onClick={() => window.open(project?.liveUrl, '_blank')}
              >
                Live Demo
              </Button>
            )}
            {project?.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                iconPosition="left"
                onClick={() => window.open(project?.githubUrl, '_blank')}
              >
                Code
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium nav-transition whitespace-nowrap ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name={tab?.icon} size={16} color="currentColor" />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;