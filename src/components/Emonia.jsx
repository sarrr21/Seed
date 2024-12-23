import { useState } from 'react'
import { ArrowLeft, ArrowRight} from 'lucide-react'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text.",
      name: "Shane Watson",
      image: "./image/ride1.jpg"
    },
    {
      text: "Testimonials are valuable social proof that help potential customers understand how your product or service can help solve their problems.",
      name: "John Smith",
      image: "./image/ride2.jpg"
    },
    {
      text: "A great product combined with excellent customer service has made this company stand out from the competition. Highly recommended!",
      name: "Sarah Johnson",
      image: "./image/ride3.jpg"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto   rounded-lg"
    >
      <h2 className="text-xl font-bold text-white px-6  mt-6 mb-4 ">Testimonial</h2>
      
      <div className="relative overflow-hidden p-4"
      style={{
        backgroundImage: "url('./image/taxi1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      
      }}>
        <div 
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-8 text-center"
              >
                <p className="text-white text-sm mb-8">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-center gap-4 ">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="w-12 h-12 rounded-full "
                  />
                  <span className="text-yellow-500 font-semibold">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full  transition-colors"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>

     
    </div>
  )
}

