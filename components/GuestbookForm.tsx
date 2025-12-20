
import React, { useState } from 'react';
import { Send, Heart, CheckCircle } from 'lucide-react';

const GuestbookForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log('Form Submitted:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px]">
        <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-rose-500 w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 serif mb-4">You're All Set!</h2>
        <p className="text-gray-500 mb-8">
          Thank you for your beautiful message. We can't wait to see you there!
        </p>
        <div className="flex items-center gap-2 text-rose-400 font-medium">
          <span>Sent with</span>
          <Heart className="w-4 h-4 fill-rose-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 serif mb-2">Join Our Guestbook</h2>
        <p className="text-sm text-gray-500">Share a message or confirm your RSVP</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
            Full Name
          </label>
          <input
            id="name"
            required
            type="text"
            className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-transparent focus:border-rose-200 focus:bg-white focus:outline-none transition-all duration-200"
            placeholder="E.g. John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
            Email Address
          </label>
          <input
            id="email"
            required
            type="email"
            className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-transparent focus:border-rose-200 focus:bg-white focus:outline-none transition-all duration-200"
            placeholder="E.g. john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
            Your Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-transparent focus:border-rose-200 focus:bg-white focus:outline-none transition-all duration-200 resize-none"
            placeholder="Tell us something sweet..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-2xl bg-rose-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-rose-200 active:scale-[0.98] transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-rose-600'}`}
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>Send Invitation Response</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default GuestbookForm;
