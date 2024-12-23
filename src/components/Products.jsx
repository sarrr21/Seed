import { Car } from 'lucide-react'

export default function Products() {
  return (
    <section className="p-6  text-white">
      <h2 className="text-xl font-bold  mt-6 mb-4">Products</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4  border-2 border-white border-dashed rounded-lg">
          <div className="flex items-center gap-3 ">
            <Car className="text-yellow-400" />
            <div>
              <h3 className="font-bold">Cabby Regular</h3>
              <p className="text-sm text-gray-400">4 Passenger</p>
            </div>
          </div>
          <span className="text-yellow-400">$25.00</span>
        </div>
        <div className="flex items-center justify-between p-4 border-2 border-white border-dashed rounded-lg">
          <div className="flex items-center gap-3">
            <Car className="text-yellow-400" />
            <div>
              <h3 className="font-bold">Cabby XL</h3>
              <p className="text-sm text-gray-400">6 Passenger</p>
            </div>
          </div>
          <span className="text-yellow-400">$35.00</span>
        </div>
      </div>
    </section>
  )
}

