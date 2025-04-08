import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("Kolkata");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative text-center py-16 md:py-24">
        <img 
          src="https://img.freepik.com/premium-vector/food-abstract-elements-healsy-composition-modern-trendy-matisse-minimal-style-restaurant-poster_295889-8069.jpg?w=540" 
          alt="Food background"
          className="w-full h-48 object-cover rounded-lg border-4 border-white"
        />
        <h1 className="text-4xl font-bold mt-4">Discover the best food & drinks in {locationQuery}</h1>
        <div className="mt-6 flex justify-center gap-4">
          <input 
            type="text" 
            placeholder="Location" 
            className="px-4 py-2 rounded-lg text-black"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Search for restaurant, cuisine or a dish" 
            className="px-4 py-2 rounded-lg text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Sections */}
      <div className="flex justify-center gap-6 py-10">
        <div onClick={() => navigate('/order-online')} className="cursor-pointer bg-gray-800 p-6 rounded-lg text-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/030/095/491/small_2x/spaghetti-with-tomatoes-beans-and-vegetables-on-a-wooden-board-ai-generated-free-photo.jpg" alt="Order Online" className="rounded-lg mb-2" />
          <h2 className="text-xl font-bold">Order Online</h2>
          <p>Stay home and order to your doorstep</p>
        </div>
        <div onClick={() => navigate('/dining')} className="cursor-pointer bg-gray-800 p-6 rounded-lg text-center">
          <img src="https://img.freepik.com/premium-photo/interior-luxury-elegant-modern-fine-dining-restaurant_1061358-301179.jpg" alt="Dining" className="rounded-lg mb-2" />
          <h2 className="text-xl font-bold">Dining</h2>
          <p>View the city's favorite dining venues</p>
        </div>
        <div onClick={() => navigate('/live-events')} className="cursor-pointer bg-gray-800 p-6 rounded-lg text-center">
          <img src="https://i.pinimg.com/736x/85/74/fb/8574fbbb86b837b72ddcd43752f4ced9.jpg" alt="Live Events" className="rounded-lg mb-2" />
          <h2 className="text-xl font-bold">Live Events</h2>
          <p>Unique food experiences in {locationQuery}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
