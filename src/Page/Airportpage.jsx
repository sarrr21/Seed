import React from 'react';

const Airportpage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div
        className="max-w-3xl mx-auto min-h-screen"
        style={{
          backgroundImage: "url('./image/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-lg sm:max-w-2xl mx-auto shadow-md rounded-lg overflow-hidden bg-opacity-90 bg-black">
          <div>
            <img
              src="./image/im4.png"
              alt="Airport Transfer"
              className="w-full object-cover"
            />
            <div className="p-4 sm:p-6 md:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Airport Transfer Details
              </h1>
              <p className="text-sm sm:text-base text-white mb-4">
                Experience seamless airport transfers with our professional and
                reliable service. We prioritize your comfort and punctuality to
                ensure a stress-free journey to and from the airport.
              </p>
              <ul className="list-disc list-inside text-sm sm:text-base text-white mb-6 space-y-2">
                <li>Professional and friendly drivers</li>
                <li>Timely pick-up and drop-off</li>
                <li>Clean and modern vehicles</li>
                <li>Competitive and transparent pricing</li>
              </ul>
              <p className="text-sm sm:text-base text-white mb-6">
                Whether traveling for business or leisure, we’ve got you
                covered. Book today and make your airport commute hassle-free.
              </p>
              <button
                className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded shadow transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airportpage;
