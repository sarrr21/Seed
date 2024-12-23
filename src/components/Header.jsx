import { Facebook, Linkedin, Instagram, Twitter, MessageCircle} from "lucide-react";

export default function Header() {
  return (
    <header className=" text-white">
      
      <div className="flex items-center gap-4 h-80 w-full "
       style={{
        backgroundImage: "url('./image/ride.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      
      }}>
       <div className='flex gap-28 p-6 '>
        <div className=' mt-80 '>
          <h1 className="text-2xl font-bold whitespace-nowrap">Jeff Murray</h1>
          <p className="text-yellow-400 mt-2 font-semibold">Taxi Service</p>
        </div>
        <div className=' mt-72'>
        <img 
          src="./image/profiles.png" 
          alt="Profile" 
          className="rounded-2xl border border-white w-32 h-32"
        />
       </div>
       </div>
      </div>

      <div className="flex gap-6 mt-12 p-6">
        <a href="#" className="bg-gray-800 rounded-lg text-white p-1"><Facebook size={20} /></a>
        <a href="#" className="bg-gray-800 rounded-lg text-white p-1"><Linkedin size={20} /></a>
        <a href="#" className="bg-gray-800 rounded-lg text-white p-1"><Instagram size={20} /></a>
        <a href="#" className="bg-gray-800 rounded-lg text-white p-1"><Twitter size={20} /></a>
        <a
          href="https://wa.me/<phone_number>"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-lg text-white p-1"
        >
          <MessageCircle size={20} />
        </a>
      </div>
      <div>
        <p className=" text-xs px-6 text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting<br/> Industry.
       Lorem Ipsum has been the industry's standard dummy text<br/> ever since the 1500s,
         when an unknown printer took a galley of type<br/> and scrambled it to make a type specimen book.
        </p>
      </div>
    </header>
  )
}

