import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CalendarWidget = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const unavailableDates = [
    new Date(2025, 10, 15)?.toDateString(),
    new Date(2025, 10, 22)?.toDateString(),
    new Date(2025, 10, 29)?.toDateString()
  ];

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isDateAvailable = (date) => {
    if (!date) return false;
    const today = new Date();
    today?.setHours(0, 0, 0, 0);
    
    return date >= today && 
           date?.getDay() !== 0 && 
           date?.getDay() !== 6 && 
           !unavailableDates?.includes(date?.toDateString());
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDateSelect = (date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return;
    
    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsBooked(false);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 3000);
    }, 2000);
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate?.setMonth(prev?.getMonth() + direction);
      return newDate;
    });
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const days = getDaysInMonth(currentMonth);
  const monthYear = currentMonth?.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  if (isBooked) {
    return (
      <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
        <div className="text-center">
          <div className="w-16 h-16 bg-success bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} color="var(--color-success)" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Meeting Scheduled!
          </h3>
          <p className="text-text-secondary mb-4">
            Your consultation has been booked successfully. You'll receive a confirmation email shortly.
          </p>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm font-medium text-text-primary">
              {formatDate(selectedDate)} at {selectedTime}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm border border-border">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 flex items-center space-x-2">
          <Icon name="Calendar" size={24} color="var(--color-primary)" />
          <span>Schedule a Consultation</span>
        </h3>
        <p className="text-text-secondary text-sm">
          Book a 30-minute consultation to discuss your project or opportunity.
        </p>
      </div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 rounded-lg hover:bg-muted nav-transition"
        >
          <Icon name="ChevronLeft" size={20} color="var(--color-text-secondary)" />
        </button>
        
        <h4 className="text-lg font-semibold text-text-primary">{monthYear}</h4>
        
        <button
          onClick={() => navigateMonth(1)}
          className="p-2 rounded-lg hover:bg-muted nav-transition"
        >
          <Icon name="ChevronRight" size={20} color="var(--color-text-secondary)" />
        </button>
      </div>
      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']?.map(day => (
            <div key={day} className="text-center text-xs font-medium text-text-secondary py-2">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days?.map((date, index) => (
            <button
              key={index}
              onClick={() => handleDateSelect(date)}
              disabled={!date || !isDateAvailable(date)}
              className={`
                h-10 text-sm rounded-lg nav-transition
                ${!date ? 'invisible' : ''}
                ${date && isDateAvailable(date) 
                  ? 'hover:bg-primary hover:text-primary-foreground cursor-pointer' 
                  : 'text-text-secondary cursor-not-allowed opacity-50'
                }
                ${selectedDate && date && selectedDate?.toDateString() === date?.toDateString()
                  ? 'bg-primary text-primary-foreground'
                  : 'text-text-primary'
                }
              `}
            >
              {date ? date?.getDate() : ''}
            </button>
          ))}
        </div>
      </div>
      {/* Time Slots */}
      {selectedDate && (
        <div className="mb-6">
          <h5 className="text-sm font-medium text-text-primary mb-3">
            Available times for {selectedDate?.toLocaleDateString()}
          </h5>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots?.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`
                  p-2 text-sm rounded-lg border nav-transition
                  ${selectedTime === time
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary hover:bg-muted'
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Booking Summary */}
      {selectedDate && selectedTime && (
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <h5 className="text-sm font-medium text-text-primary mb-2">Booking Summary</h5>
          <div className="space-y-1 text-sm text-text-secondary">
            <p><strong>Date:</strong> {formatDate(selectedDate)}</p>
            <p><strong>Time:</strong> {selectedTime} (PST)</p>
            <p><strong>Duration:</strong> 30 minutes</p>
            <p><strong>Type:</strong> Video consultation</p>
          </div>
        </div>
      )}
      {/* Book Button */}
      <Button
        variant="default"
        fullWidth
        iconName="Calendar"
        iconPosition="left"
        onClick={handleBooking}
        disabled={!selectedDate || !selectedTime || isBooking}
        loading={isBooking}
      >
        {isBooking ? 'Booking...' : 'Confirm Booking'}
      </Button>
      {/* Additional Info */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-start space-x-2 text-xs text-text-secondary">
          <Icon name="Info" size={14} color="var(--color-text-secondary)" className="mt-0.5" />
          <div>
            <p>• Meetings are conducted via Google Meet or Zoom</p>
            <p>• You'll receive a calendar invite with meeting details</p>
            <p>• Cancellations accepted up to 2 hours before the meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;