import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const NotesViewer = ({ isOpen, onClose }) => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('all'); // all, unread, read

  useEffect(() => {
    if (isOpen) {
      const savedNotes = JSON.parse(localStorage.getItem('portfolioNotes') || '[]');
      setNotes(savedNotes);
    }
  }, [isOpen]);

  const markAsRead = (noteId) => {
    const updatedNotes = notes.map(note => 
      note.id === noteId ? { ...note, read: true } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('portfolioNotes', JSON.stringify(updatedNotes));
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    localStorage.setItem('portfolioNotes', JSON.stringify(updatedNotes));
  };

  const clearAllNotes = () => {
    setNotes([]);
    localStorage.removeItem('portfolioNotes');
  };

  const filteredNotes = notes.filter(note => {
    if (filter === 'unread') return !note.read;
    if (filter === 'read') return note.read;
    return true;
  });

  const unreadCount = notes.filter(note => !note.read).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-surface rounded-xl w-full max-w-4xl mx-4 h-[80vh] shadow-xl border border-border flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Icon name="MessageSquare" size={24} color="var(--color-primary)" />
            <h3 className="text-xl font-semibold text-text-primary">
              Portfolio Notes ({notes.length})
            </h3>
            {unreadCount > 0 && (
              <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg">
            <Icon name="X" size={20} color="var(--color-text-secondary)" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === 'all' ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
              }`}
            >
              All ({notes.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === 'unread' ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
              }`}
            >
              Unread ({unreadCount})
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === 'read' ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
              }`}
            >
              Read ({notes.length - unreadCount})
            </button>
          </div>
          {notes.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllNotes}
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-y-auto p-4">
          {filteredNotes.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="MessageSquare" size={48} color="var(--color-text-secondary)" className="mx-auto mb-4 opacity-50" />
              <p className="text-text-secondary">
                {filter === 'all' ? 'No notes yet' : `No ${filter} notes`}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className={`p-4 rounded-lg border ${
                    note.read ? 'border-border bg-surface' : 'border-primary bg-primary/5'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} color="var(--color-primary)" />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{note.name}</p>
                        <p className="text-sm text-text-secondary">{note.email}</p>
                      </div>
                      {!note.read && (
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-text-secondary">
                        {new Date(note.timestamp).toLocaleString()}
                      </span>
                      <div className="flex space-x-1">
                        {!note.read && (
                          <button
                            onClick={() => markAsRead(note.id)}
                            className="p-1 hover:bg-muted rounded"
                            title="Mark as read"
                          >
                            <Icon name="Check" size={14} color="var(--color-success)" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="p-1 hover:bg-muted rounded"
                          title="Delete note"
                        >
                          <Icon name="Trash2" size={14} color="var(--color-text-secondary)" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-primary leading-relaxed">{note.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesViewer;