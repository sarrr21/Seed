'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    title: "ServiceNow Micro Assessment",
    description: "We assess your existing Servicenow Implementation to help you expand your business workflows with best practices.",
    buttonText: "Contact Us",
    image: "./image/image4.png"
  },
  {
    title: "NFC Card",
    description: "NFC (Near Field Communication) cards are contactless smart cards that use NFC technology for secure and quick communication with compatible devices. They are widely used in various industries for convenience and efficiency.",
    buttonText: "Contact Us",
    image: "./image/image5.png"
  },
  {
    title: "We Collaborate To Innovate",
    description: "Partnerships are at the heart of business success, we're proud to have teamed up with some of the best solution providers in the world.",
    buttonText: "Contact Us",
    image: "./image/image3.png"
  }
]

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <div
      className="relative w-full overflow-hidden h-80 sm:h-[400px] lg:h-[500px]"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8 md:px-20">
            <div className="max-w-7xl w-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="flex-1 text-center md:text-left">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="px-6 sm:px-8 py-2 sm:py-3 bg-amber-400 hover:bg-amber-500 text-black rounded-lg 
                             transition-colors duration-200 font-medium shadow-xl"
                  >
                    {slides[currentSlide].buttonText}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/20 
                   hover:bg-black/30 text-white transition-colors duration-200 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 sm:w-6 h-5 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/20 
                   hover:bg-black/30 text-white transition-colors duration-200 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 sm:w-6 h-5 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-colors duration-200 
                       ${currentSlide === index ? 'bg-amber-400 hover:bg-amber-500 text-black ' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  )
}
