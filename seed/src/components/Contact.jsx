import { Mail, Phone, MapPin, Calendar  } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section className="p-6 mt-4  text-white text-sm">
      <h2 className="text-xl font-bold mb-4">Contact</h2>
      <div className="space-y-6 grid-cols-2 grid">
        <div className=" items-center ">
          <Mail className="text-yellow-400" />
          <h1 className='mt-4'>taxiservice@gmail.com</h1>
        </div>
        <div className=" items-center space-y-4">
          <Phone className="text-yellow-400" />
          <h1 className='mt-4'>+49 95554 2654</h1>
        </div>
        <div className=" items-center ">
          <MapPin className="text-yellow-400" />
          <h1 className='mt-4'>Berlin, Germany</h1>
        </div>
        <div className=" items-center ">
          <Calendar className="text-yellow-400" />
          <h1 className='mt-4'>4 December 1995</h1>
        </div>
      </div>
    </section>
  )
}

