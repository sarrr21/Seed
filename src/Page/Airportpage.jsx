import React from 'react'

const Airportpage = () => {
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
            src="./image/im4.png" 
            alt="Airport Transfer"
            className="w-full  object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Airport Transfer Details
            </h1>
            <p className="text-white mb-4">
              Experience seamless airport transfers with our professional and reliable service. We prioritize your comfort and punctuality to ensure a stress-free journey to and from the airport.
            </p>
            <ul className="list-disc list-inside text-white mb-6">
              <li>Professional and friendly drivers</li>
              <li>Timely pick-up and drop-off</li>
              <li>Clean and modern vehicles</li>
              <li>Competitive and transparent pricing</li>
            </ul>
            <p className="text-white mb-6">
              Whether traveling for business or leisure, we’ve got you covered. Book today and make your airport commute hassle-free.
            </p>
            <button
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black  font-semibold rounded shadow transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
   
    </div>
    </div>
  )
}

export default Airportpage