
import { useState } from 'react'

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0)

   const blogPosts = [
    {
      id: 1,
      title: "Exploring Eco-Friendly ",
      content: "Lorem ipsum is simply dummy text of the printing and type setting industry. ",
      image: "./image/ride.jpg"
    },
    {
      id: 2,
      title: "Future of Urban ",
      content: "Lorem ipsum is simply dummy text of the printing and type setting industry.",
      image: "./image/ride2.jpg"
    },
    {
      id: 3,
      title: "Sustainable City ",
      content: "Lorem ipsum is simply dummy text of the printing and type setting industry. ",
      image: "./image/ride3.jpg"
    }
  ];
  
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="  p-6">
  <div className=" mx-auto ">
    <h2 className="text-xl font-bold text-white  mt-6 mb-4">Blog</h2>

    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className={`transform transition-all duration-300 ease-in-out absolute w-full ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className="flex justify-between gap-2  ">
              <div className="relative ">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-2xl object-cover  h-full"
                />
              </div>
              <div className="">
                <h3 className="text-2xl font-semibold text-yellow-500">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-48 flex justify-center gap-2">
        {blogPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-yellow-500 w-6' : 'bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

