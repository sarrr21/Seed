import React from 'react'

function Ridepage() {
  return (
    <div className=" min-h-screen bg-black">
    <div  className="max-w-3xl mx-auto min-h-screen" 
       style={{
        backgroundImage: "url('./image/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      
      }}>
      
      <div className="max-w-5xl mx-auto  shadow-md rounded-lg overflow-hidden">
        <div className="">
          <img
            src="./image/im5.png" 
            alt="Airport Transfer"
            className="w-full  object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Ride Booking Details
            </h1>
            <p className="text-white mb-4">
              Our ride booking service is tailored to provide you with safe, reliable, and affordable transportation. Enjoy the convenience of booking a ride anytime, anywhere.
            </p>
            <ul className="list-disc list-inside text-white mb-6">
              <li>Instant ride booking</li>
              <li>Real-time tracking</li>
              <li>Affordable and transparent pricing</li>
              <li>Comfortable and clean vehicles</li>
            </ul>
            <p className="text-white mb-6">
              Whether you're commuting to work, attending an event, or heading home, our service ensures a hassle-free experience. Download our app or book directly from our website today!
            </p>
            <button
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black  font-semibold rounded shadow  transition"
            >
              Book 
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Ridepage
