import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: projects?.length,
      color: 'var(--color-primary)'
    },
    {
      icon: 'CheckCircle',
      label: 'Completed',
      value: projects?.filter(p => p?.status === 'completed')?.length,
      color: 'var(--color-success)'
    },
    {
      icon: 'Clock',
      label: 'In Progress',
      value: projects?.filter(p => p?.status === 'in-progress')?.length,
      color: 'var(--color-warning)'
    },
    {
      icon: 'Code',
      label: 'Technologies Used',
      value: [...new Set(projects.flatMap(p => p.technologies))]?.length,
      color: 'var(--color-accent)'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-surface rounded-xl border border-border p-6 text-center hover-lift nav-transition"
        >
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" 
               style={{ backgroundColor: `${stat?.color}15` }}>
            <Icon name={stat?.icon} size={24} color={stat?.color} />
          </div>
          <p className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</p>
          <p className="text-sm text-text-secondary">{stat?.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;