// PlaceCards.jsx
import React from 'react';

const PlaceCards = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-6 ml-[90px] mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex bg-white rounded-2xl shadow-md border border-teal-200 w-full md:w-[46%] px-4 py-4"
        >
          {/* Left section */}
          <div className="flex flex-col justify-between w-2/3 space-y-4">
            <button className="text-teal-500 border border-teal-300 px-4 py-1 rounded-full text-sm self-start">
              Attach Users
            </button>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {card.date} • {card.time}
              </div>
            </div>

            <div className="text-teal-500 text-xl font-semibold">{card.price}</div>

            <div className="flex space-x-4">
              <button className="bg-teal-400 hover:bg-teal-500 text-white font-medium px-6 py-2 rounded-full shadow-md">
                Update
              </button>
              <button className="border border-teal-400 text-teal-500 font-medium px-6 py-2 rounded-full shadow-sm">
                Disable
              </button>
            </div>
          </div>

          {/* Right section (Image) */}
          <div className="w-1/3 pl-2">
            <img
              src={card.image}
              alt={card.title}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceCards;
