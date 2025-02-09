import Card from "./Card/Card";

export function Events() {
  const events = [
    
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
      place: 'Perumbakkam',
      description: ''
    },
    {
      title: 'Dawn prayer',
      date: 'Every Morning',
      time: '5:45 AM',
      description: ''
    },
    {
      title: 'Wednesday Prayer',
      date: 'Every Wednesday',
      time: '7:00 PM',
      description: 'Special gathering to grow in faith.'
    },
    {
      title: 'Vigil prayer',
      date: 'Every Friday',
      time: '10:00 PM',
      description: ''
    },
    {
      title: 'Bible Study',
      date: 'Every Wednesday',
      time: '7:00 PM',
      description: 'Dive deep into God\'s word with our community.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="origin-bottom-left whitespace-nowrap text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-2xl lg:leading-[1.1] xl:text-4xl xl:leading-[1.1]"
      >Our schedule
      </h2>

      <div className="flex justify-center pt-10"><Card /></div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
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