import React from 'react'
import { Facebook, Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";

const Midea = () => {
  return (
    <div className="flex gap-4 md:gap-6 mt-8 p-4 justify-left md:justify-start">
        <a href="https://web.facebook.com/?_rdc=1&_rdr" className="bg-gray-800 rounded-lg text-white p-2 md:p-1">
          <Facebook size={20} />
        </a>
        <a href="https://www.linkedin.com/feed/" className="bg-gray-800 rounded-lg text-white p-2 md:p-1">
          <Linkedin size={20} />
        </a>
        <a href="" className="bg-gray-800 rounded-lg text-white p-2 md:p-1">
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

  )
}

export default Midea
