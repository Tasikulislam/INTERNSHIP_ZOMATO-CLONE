import React from "react";

const events = [
  {
    title: "Sunburn Festival",
    image: "/images/Sunburn.jpeg",
    date: "12-14 December 2025",
    location: "Goa, India",
    description: "Asia’s biggest electronic dance music festival, bringing global DJs and epic energy to the beach."
  },
  {
    title: "NH7 Weekender",
    image: "/images/NH7-Weekender.webp",
    date: "6-8 November 2025",
    location: "Pune, India",
    description: "A multi-genre music and arts festival featuring rock, indie, and electronic acts in a vibrant setup."
  },
  {
    title: "Zomaland",
    image: "/images/Zomaland.jpeg",
    date: "20-21 January 2026",
    location: "Delhi, India",
    description: "Zomato's grandest food and entertainment carnival with gourmet food, live music, and carnival vibes."
  },
];

const LiveEvents = () => {
  const handleBooking = (eventName) => {
    alert(`You have successfully booked tickets for ${eventName}! 🎉`);
    // You can replace this with actual logic like:
    // - Redirect to payment/booking page
    // - API call to save booking
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">Live Events Near You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{event.date}</p>
                <p className="text-gray-600 text-sm mb-2">{event.location}</p>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
              </div>
              <button
                onClick={() => handleBooking(event.title)}
                className="mt-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;
