import { Plane, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="p-4 text-white">
      <div className="flex flex-col lg:flex-row md:items-center lg:justify-between mb-4">
        <h2 className="text-xl font-bold mb-4 md:mb-0 whitespace-nowrap">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="p-4 border-2 border-white border-dashed rounded-lg overflow-hidden">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Plane className="text-yellow-400" />
          </div>
          <h3 className="font-bold whitespace-nowrap  break-words text-center">
            Airport Transfers
          </h3>
          <p className="text-gray-400 whitespace-normal break-words text-center">
            Professional and punctual airport transfer service
          </p>
          <Link to="/airport">
          <h1 className="text-center text-yellow-400">Read More</h1>
          </Link>
        </div>
        <div className="p-4 border-2 border-white border-dashed rounded-lg overflow-hidden">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Clock className="text-yellow-400" />
          </div>
          <h3 className="font-bold whitespace-nowrap text-center  break-words">
            Scheduled Rides
          </h3>
          <p className="text-gray-400 whitespace-normal break-words text-center">
            Pre-book your rides for guaranteed availability
          </p>
          <Link to="/ride">
          <h1 className="text-center text-yellow-400">Read More</h1>
          </Link>
        </div>
      </div>
    </section>
  );
}
