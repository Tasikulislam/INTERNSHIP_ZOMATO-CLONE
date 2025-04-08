import React from "react";

const items = [
  {
    name: "Burger King",
    image: "/images/Burger King.jpeg",
    description: "Delicious flame-grilled burgers with fresh toppings.",
  },
  {
    name: "Subway",
    image: "/images/Subway.jpeg",
    description: "Freshly made subs customized to your taste.",
  },
  {
    name: "Pizza Hut",
    image: "/images/Pizza Hut.jpg",
    description: "Hot and cheesy pizzas loaded with toppings.",
  },
];

const OrderOnline = () => {
  const handleOrder = (itemName) => {
    alert(`You have successfully ordered from ${itemName}! 🍔🍕🥪`);
    // Optionally add logic here for cart, redirect, or API call
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">Order Online</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              </div>
              <button
                onClick={() => handleOrder(item.name)}
                className="mt-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderOnline;
