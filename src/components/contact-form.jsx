export default function ContactForm() {
    return (
      <section className="p-6  text-white">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              className="w-full p-3 bg-gray-900 rounded-lg"
              placeholder=" Full Name"
            />
          </div>
          <div>
            <input 
              type="email" 
              className="w-full p-3 bg-gray-900 rounded-lg"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input 
              type="tel" 
              className="w-full p-3 bg-gray-900 rounded-lg"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <textarea 
              className="w-full p-3 bg-gray-900 rounded-lg h-32"
              placeholder="Your Message "
            ></textarea>
          </div>
          <div className="mx-16">
          <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 whitespace-nowrap">
            Send Message
          </button>
          </div>
        </form>
      </section>
    )
  }
  
  