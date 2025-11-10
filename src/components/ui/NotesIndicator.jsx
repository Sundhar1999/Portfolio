import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import NotesViewer from './NotesViewer';

const NotesIndicator = () => {
  const [notesCount, setNotesCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isNotesViewerOpen, setIsNotesViewerOpen] = useState(false);

  useEffect(() => {
    const updateNotesCount = () => {
      const notes = JSON.parse(localStorage.getItem('portfolioNotes') || '[]');
      setNotesCount(notes.length);
      setUnreadCount(notes.filter(note => !note.read).length);
    };

    updateNotesCount();
    
    // Listen for storage changes
    window.addEventListener('storage', updateNotesCount);
    
    // Check for updates every 5 seconds
    const interval = setInterval(updateNotesCount, 5000);

    return () => {
      window.removeEventListener('storage', updateNotesCount);
      clearInterval(interval);
    };
  }, []);

  // Only show if there are notes
  if (notesCount === 0) return null;

  return (
    <>
      <div 
        className="fixed bottom-20 right-6 z-100 cursor-pointer group"
        onClick={() => setIsNotesViewerOpen(true)}
      >
        <div className="bg-red-500 text-white w-8 h-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center">
          <span className="text-xs font-bold">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-text-primary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {unreadCount > 0 ? `${unreadCount} new notes` : `${notesCount} notes`}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-text-primary"></div>
        </div>
      </div>

      <NotesViewer 
        isOpen={isNotesViewerOpen}
        onClose={() => setIsNotesViewerOpen(false)}
      />
    </>
  );
};

export default NotesIndicator;