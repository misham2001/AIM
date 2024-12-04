import React, { useState } from 'react';

export function PrayerRequest() {

  const [prayerSubmitted, setPrayerSubmitted] = useState(false);
  
  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrayerSubmitted(true);
  };
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Prayer Request</h2>

          {prayerSubmitted ? (
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <p className="text-green-700 text-lg text-center">
                Your prayer request has been submitted. We will keep you in our prayers.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePrayerSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  className="mt-2 block w-full rounded-lg border border-blue-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 px-4 py-3"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="mt-2 block w-full rounded-lg border border-blue-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 px-4 py-3"
                />
              </div>

              <div>
                <label
                  htmlFor="prayer"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prayer Request
                </label>
                <textarea
                  id="prayer"
                  rows={4}
                  required
                  placeholder="Write your prayer request here..."
                  className="mt-2 block w-full rounded-lg border border-blue-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 px-4 py-3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium px-4 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
              >
                Submit Prayer Request
              </button>
            </form>
          )}
        </div>
  );
}