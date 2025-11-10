import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, featured = false, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClasses = viewMode === 'list'
    ? "group relative bg-surface rounded-xl shadow-lg border border-border overflow-hidden hover-lift nav-transition flex"
    : featured 
      ? "group relative bg-surface rounded-xl shadow-lg border border-border overflow-hidden hover-lift nav-transition col-span-2 row-span-2"
      : "group relative bg-surface rounded-xl shadow-lg border border-border overflow-hidden hover-lift nav-transition";

  return (
    <div 
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${
        viewMode === 'list' 
          ? 'w-80 h-48 flex-shrink-0' 
          : featured ? 'h-64' : 'h-48'
      }`}>
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 nav-transition"
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center nav-transition ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-3">
            {project?.liveUrl && (
              <Button
                variant="secondary"
                size="sm"
                iconName="ExternalLink"
                iconPosition="left"
                onClick={(e) => {
                  e?.stopPropagation();
                  window.open(project?.liveUrl, '_blank');
                }}
              >
                Live Demo
              </Button>
            )}
            {!project?.liveUrl && project?.documentationUrl && (
              <Button
                variant="secondary"
                size="sm"
                iconName="FileText"
                iconPosition="left"
                onClick={(e) => {
                  e?.stopPropagation();
                  window.open(project?.documentationUrl, '_blank');
                }}
              >
                Documentation
              </Button>
            )}
            {project?.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                iconPosition="left"
                onClick={(e) => {
                  e?.stopPropagation();
                  window.open(project?.githubUrl, '_blank');
                }}
              >
                Code
              </Button>
            )}
          </div>
        </div>

        {/* Status Badge */}
        {project?.status && (
          <div className="absolute top-4 right-4">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              project?.status === 'completed' 
                ? 'bg-success text-success-foreground'
                : project?.status === 'in-progress' ?'bg-warning text-warning-foreground' :'bg-secondary text-secondary-foreground'
            }`}>
              {project?.status === 'completed' ? 'Completed' : 
               project?.status === 'in-progress' ? 'In Progress' : 'Planning'}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-1 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
              <Icon name="Star" size={12} color="currentColor" />
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className={`p-6 ${
        viewMode === 'list' 
          ? 'flex-1 flex flex-col justify-between' 
          : featured ? 'space-y-4' : 'space-y-3'
      }`}>
        <div className="flex items-start justify-between">
          <h3 className={`font-semibold text-text-primary group-hover:text-primary nav-transition ${
            featured ? 'text-xl' : 'text-lg'
          }`}>
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-text-secondary">
            <Icon name="Calendar" size={14} color="currentColor" />
            <span className="text-xs">{project?.year}</span>
          </div>
        </div>

        <p className={`text-text-secondary leading-relaxed ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {project?.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project?.technologies?.slice(0, featured ? 6 : 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > (featured ? 6 : 4) && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md font-medium">
              +{project?.technologies?.length - (featured ? 6 : 4)} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        {featured && project?.stats && (
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="text-center">
              <p className="text-lg font-semibold text-text-primary">{project?.stats?.duration}</p>
              <p className="text-xs text-text-secondary">Duration</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-text-primary">{project?.stats?.teamSize}</p>
              <p className="text-xs text-text-secondary">Team Size</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-text-primary">{project?.stats?.complexity}</p>
              <p className="text-xs text-text-secondary">Complexity</p>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <Button
            variant="outline"
            size={featured ? "default" : "sm"}
            iconName="ArrowRight"
            iconPosition="right"
            fullWidth
            onClick={() => onViewDetails(project)}
            className="group-hover:bg-primary group-hover:text-primary-foreground nav-transition"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;