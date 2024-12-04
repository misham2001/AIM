

export function Events() {
  const events = [
    {
      title: 'Sunday Service',
      date: 'Every Sunday',
      time: '10:00 AM',
      description: 'Join us for our weekly worship service.'
    },
    {
      title: 'Bible Study',
      date: 'Every Wednesday',
      time: '7:00 PM',
      description: 'Dive deep into God\'s word with our community.'
    },
    {
      title: 'Youth Meeting',
      date: 'Every Sunday',
      time: '2:00 PM',
      description: 'Special gathering for young people to grow in faith.'
    },
    {
      title: 'Out Reach',
      date: 'Every Sunday',
      time: '5:00 PM',
      place:'Perumbakkam',
      description: ''
    },
    {
      title: 'Dawn prayer',
      date: 'Every Morning',
      time: '5:45 AM',
      description: ''
    },
    {
      title: 'Vigil prayer',
      date: 'Every Friday',
      time: '10:00 PM',
      description: ''
    },
    {
      title: 'Youth Meeting',
      date: 'Every Sunday',
      time: '2:00 PM',
      description: 'Special gathering for young people to grow in faith.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-blue-600 mb-2">{event.date} at {event.time}</p>
                <p className="text-black">
                  {event.place}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
  );
}