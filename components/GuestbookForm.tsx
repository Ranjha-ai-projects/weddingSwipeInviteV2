import React, { useState } from 'react';

const WHATSAPP_PHONE_NUMBER = '919878627770'; // India number with country code

const GuestbookForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState<'Attending' | 'Not Attending' | ''>('Attending');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppRSVP = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate that the name is not empty
    if (!name.trim()) {
      alert('Oops! Please grace us with your name before sending your RSVP. ✨');
      return;
    }

    setIsSubmitting(true);

    // 2. Format a clean WhatsApp message
    let whatsappMessage = `💍 Wedding RSVP\n`;
    whatsappMessage += `Name: ${name.trim()}\n`;

    if (attendance) {
      whatsappMessage += `Attendance: ${attendance}\n`;
    }

    if (message.trim()) {
      whatsappMessage += `Message: ${message.trim()}\n`;
    }

    // Optional: Add a friendly closing
    whatsappMessage += `\nLooking forward to celebrating! ❤️`;

    // 3. URL encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // 4. Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;

    // 5. Redirect the user to WhatsApp
    window.open(whatsappUrl, '_blank');

    // Optional: Reset form fields and submitting state after a short delay
    // This delay gives WhatsApp a moment to open before resetting,
    // which feels more natural to the user.
    setTimeout(() => {
      setName('');
      setMessage('');
      setAttendance('Attending');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full h-full max-h-[75vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-6 md:p-8">
      <h2 className="text-3xl font-script text-gray-800 mb-6 text-center">Share Your Joy!</h2>

      <form onSubmit={handleWhatsAppRSVP} className="flex flex-col gap-4 flex-grow">
        {/* Name Field (Required) */}
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
            Your Esteemed Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="E.g., John & Jane Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-rose-400 focus:border-rose-400 transition duration-150 ease-in-out text-gray-800"
            required
            aria-required="true"
          />
        </div>

        {/* Attendance Selection (Optional) */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Will you grace us with your presence?
          </label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Attending"
                checked={attendance === 'Attending'}
                onChange={() => setAttendance('Attending')}
                className="form-radio text-rose-500 h-5 w-5"
              />
              <span className="ml-2 text-gray-800">Joyfully Attending! ✨</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Not Attending"
                checked={attendance === 'Not Attending'}
                onChange={() => setAttendance('Not Attending')}
                className="form-radio text-gray-500 h-5 w-5"
              />
              <span className="ml-2 text-gray-800">Sadly, Cannot Make It</span>
            </label>
          </div>
        </div>

        {/* Message Field (Optional) */}
        <div className="flex-grow">
          <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">
            A Special Note (Optional)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your wishes or a lovely memory..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-rose-400 focus:border-rose-400 transition duration-150 ease-in-out text-gray-800 resize-y min-h-[80px]"
          ></textarea>
        </div>

        {/* Send RSVP Button */}
        <button
          type="submit"
          className={`w-full px-6 py-3 rounded-xl font-bold text-lg transition duration-300 ease-in-out ${
            isSubmitting
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-rose-500 text-white hover:bg-rose-600 shadow-md'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Joy...' : 'Send 💌'}
        </button>
      </form>
    </div>
  );
};

export default GuestbookForm;
