import React from 'react';
import Icon from '../AppIcon';

const QAPhilosophyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-60" onClick={onClose} />
      <div className="relative bg-gradient-to-br from-surface via-background to-surface rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-primary/20">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary to-accent p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Icon name="Shield" size={24} color="white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">The QA Philosophy</h2>
                <p className="text-white/80 text-sm">What Quality Assurance Really Means</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Icon name="X" size={24} color="white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Opening Statement */}
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
              <Icon name="TestTube" size={32} color="var(--color-primary)" />
            </div>
            <p className="text-lg text-text-primary font-medium leading-relaxed">
              People don't become QAs because they can find bugs. No, that's not the only reason.<br/>
              <span className="text-primary font-semibold">They come for stability, trust, and the guarantee that when users click "Buy Now," it just works.</span>
            </p>
          </div>

          {/* Philosophy Points */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-surface rounded-xl border border-border">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Settings" size={16} color="var(--color-primary)" />
              </div>
              <p className="text-text-primary leading-relaxed">
                They don't debate tools for fun - <span className="font-semibold text-primary">Selenium, Playwright, Cypress</span>.<br/>
                They pick what keeps the product reliable when traffic spikes and users depend on it.
              </p>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-surface rounded-xl border border-border">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="BarChart3" size={16} color="var(--color-accent)" />
              </div>
              <p className="text-text-primary leading-relaxed">
                They don't count how many test cases ran this sprint.<br/>
                <span className="font-semibold text-accent">They count how many potential issues never made it to production.</span>
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Code" size={16} color="var(--color-primary)" />
                </div>
                <p className="text-text-primary leading-relaxed italic">
                  They don't write automation scripts to impress anyone.<br/>
                  <span className="font-semibold">They write them so a release can go live on Friday night - without panic, without firefighting.</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-surface rounded-xl border border-border">
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Bug" size={16} color="var(--color-success)" />
              </div>
              <p className="text-text-primary leading-relaxed">
                They don't log bugs just to fill dashboards.<br/>
                <span className="font-semibold text-success">They do it because every small defect fixed early saves someone else from a big one later.</span>
              </p>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-surface rounded-xl border border-border">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Target" size={16} color="var(--color-primary)" />
              </div>
              <p className="text-text-primary leading-relaxed">
                They don't chase 100% coverage.<br/>
                <span className="font-semibold text-primary">They chase confidence that what's tested truly works.</span>
              </p>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-surface rounded-xl border border-border">
              <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Shield" size={16} color="var(--color-warning)" />
              </div>
              <p className="text-text-primary leading-relaxed">
                They don't block releases to slow things down.<br/>
                <span className="font-semibold text-warning">They do it because quality isn't about speed. It's about trust.</span>
              </p>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-surface rounded-xl border border-border">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Users" size={16} color="var(--color-accent)" />
              </div>
              <p className="text-text-primary leading-relaxed">
                They don't work behind the scenes for recognition.<br/>
                <span className="font-semibold text-accent">They do it so customers never have to think twice before using the product again.</span>
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-8 rounded-2xl border border-primary/20 mt-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Heart" size={32} color="var(--color-primary)" />
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-text-primary">
                  Real QA isn't about finding what's broken.
                </p>
                <p className="text-lg font-semibold text-primary">
                  It's about protecting what works.
                </p>
                <p className="text-base text-text-secondary">
                  About being the calm in the middle of chaos.
                </p>
                <p className="text-lg font-bold text-gradient">
                  That's what quality really means.<br/>
                  That's what real QAs stand for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAPhilosophyModal;