import React from 'react';

function Ridepage() {
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
              src="./image/im5.png"
              alt="Ride Booking"
              className="w-full object-cover"
            />
            <div className="p-4 sm:p-6 md:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ride Booking Details
              </h1>
              <p className="text-sm sm:text-base text-white mb-4">
                Our ride booking service is tailored to provide you with safe,
                reliable, and affordable transportation. Enjoy the convenience
                of booking a ride anytime, anywhere.
              </p>
              <ul className="list-disc list-inside text-sm sm:text-base text-white mb-6 space-y-2">
                <li>Instant ride booking</li>
                <li>Real-time tracking</li>
                <li>Affordable and transparent pricing</li>
                <li>Comfortable and clean vehicles</li>
              </ul>
              <p className="text-sm sm:text-base text-white mb-6">
                Whether you're commuting to work, attending an event, or heading
                home, our service ensures a hassle-free experience. Download our
                app or book directly from our website today!
              </p>
              <button
                className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded shadow transition"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ridepage;
