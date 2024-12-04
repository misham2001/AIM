
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Contact Us</h2>

    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Contact Info Section */}
      <div className="space-y-12 pt-20">
        {/* Get in Touch */}
        <div data-aos="fade-right">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-gray-600">123 Church Street</p>
                <p className="text-gray-600">City, State 12345</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-600">(555) 123-4567</p>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-600">contact@ashwaschurch.org</p>
            </div>
          </div>
        </div>

        {/* Service Times */}
        <div data-aos="fade-right" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Times</h3>
          <div className="space-y-2">
            <p className="text-gray-600">Sunday Service: 10:00 AM</p>
            <p className="text-gray-600">Wednesday Bible Study: 7:00 PM</p>
            <p className="text-gray-600">Youth Meeting: Sunday 2:00 PM</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <form
        className="bg-white p-8 rounded-lg shadow-lg space-y-6 animate__animated animate__fadeIn"
        data-aos="fade-left"
      >
        <h3 className="text-2xl font-bold text-gray-900 text-center">Send Us a Message</h3>
        <p className="text-sm text-gray-600 text-center">
          Fill in the form below, and we’ll get back to you shortly.
        </p>

        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            placeholder="Your Full Name"
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-4 py-3"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-4 py-3"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Write your message here..."
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 px-4 py-3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
  );
}