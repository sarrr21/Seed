import { Facebook, Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="text-white">
      
      <div
        className="flex items-center h-80 w-full"
        style={{
          backgroundImage: "url('./image/ride.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-between items-center w-full p-4 gap-4 md:gap-8 lg:gap-12">
          
          <div className="mt-72 md:mt-72 lg:mt-72">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">Jeff Murray</h1>
            <p className="text-yellow-400 mt-2 font-semibold text-sm md:text-base">Taxi Service</p>
          </div>
          
          <div className="mt-72 md:mt-72 lg:mt-72">
            <img
              src="./image/profiles.png"
              alt="Profile"
              className="rounded-2xl border border-white w-20 h-16 md:w-28 md:h-20 lg:w-32 lg:h-24"
            />
          </div>
        </div>
      </div>

      
      <div className="flex gap-4 md:gap-6 mt-8 p-4 justify-left md:justify-start">
        <a href="#" className="bg-gray-800 rounded-lg text-white p-2 md:p-1">
          <Facebook size={20} />
        </a>
        <a href="#" className="bg-gray-800 rounded-lg text-white p-2 md:p-1">
          <Linkedin size={20} />
        </a>
        <a href="#" className="bg-gray-800 rounded-lg text-white p-2 md:p-1">
          <Instagram size={20} />
        </a>
        <a href="#" className="bg-gray-800 rounded-lg text-white p-2 md:p-1">
          <Twitter size={20} />
        </a>
        <a
          href="https://wa.me/<phone_number>"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-lg text-white p-2 md:p-1"
        >
          <MessageCircle size={20} />
        </a>
      </div>

      {/* Description */}
      <div className=" md:text-left p-4 text-gray-400 text-xs">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br className="hidden md:block" />
          Industry. Lorem Ipsum has been the industry's standard dummy text
          <br className="hidden md:block" />
          ever since the 1500s, when an unknown printer took a galley of type
          <br className="hidden md:block" />
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </header>
  );
}
