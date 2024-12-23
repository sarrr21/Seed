import { Plane, Clock } from 'lucide-react'

export default function Services() {
  return (
    <section className="p-6  text-white">
      <h2 className="text-xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border-2 border-white border-dashed rounded-lg">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Plane className="text-yellow-400" />
          </div>
          <h3 className="font-bold ">Airport Transfers</h3>
          <p className="text-gray-400">Professional and punctual airport transfer service</p>
        </div>
        <div className="p-4 border-2 border-white border-dashed  rounded-lg">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Clock className="text-yellow-400 items-center" />
          </div>
          <h3 className="font-bold">Scheduled Rides</h3>
          <p className="text-gray-400">Pre-book your rides for guaranteed availability</p>
        </div>
      </div>
    </section>
  )
}

