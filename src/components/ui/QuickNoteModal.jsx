import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const QuickNoteModal = ({ isOpen, onClose }) => {
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return;

    setIsSubmitting(true);
    
    const newNote = {
      id: Date.now(),
      name: name || 'Anonymous',
      email: email || 'No email provided',
      message: note,
      timestamp: new Date().toISOString(),
      read: false
    };

    const existingNotes = JSON.parse(localStorage.getItem('portfolioNotes') || '[]');
    existingNotes.unshift(newNote);
    localStorage.setItem('portfolioNotes', JSON.stringify(existingNotes));
    
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setNote('');
      setName('');
      setEmail('');
      setIsSubmitted(false);
      setIsSubmitting(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative bg-surface rounded-xl p-6 w-full max-w-md mx-4 shadow-xl border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
            <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
            <span>Leave a Quick Note</span>
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded">
            <Icon name="X" size={20} color="var(--color-text-secondary)" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <Icon name="CheckCircle" size={48} color="var(--color-success)" className="mx-auto mb-4" />
            <p className="text-text-primary font-medium">Note sent successfully!</p>
            <p className="text-text-secondary text-sm">Thank you for reaching out.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-text-primary"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Your Email (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-text-primary"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Your Note *
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-text-primary resize-none"
                placeholder="Write your quick note here..."
              />
            </div>

            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="default"
                disabled={!note.trim() || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? 'Sending...' : 'Send Note'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuickNoteModal;