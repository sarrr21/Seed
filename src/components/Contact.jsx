import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="p-4 mt-4 text-white text-sm">
      {/* Title and List Wrapper */}
      <div className="flex flex-col md:flex-row md:justify-between">
        <h2 className="text-xl font-bold mb-4 md:mb-0">Contact</h2>
        {/* Contact List */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 md:w-3/4">
          {/* Email */}
          <a href="mailto:taxiservice@gmail.com" className="flex items-center">
            <Mail className="text-yellow-400 mr-2" />
            <h1>taxiservice@gmail.com</h1>
          </a>
          {/* Phone */}
          <a href="tel:+49955542654" className="flex items-center">
            <Phone className="text-yellow-400 mr-2" />
            <h1>+49 95554 2654</h1>
          </a>
          {/* Location */}
          <a
            href="https://www.google.com/maps/place/Berlin,+Germany"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <MapPin className="text-yellow-400 mr-2" />
            <h1>Berlin, Germany</h1>
          </a>
          {/* Date */}
          <div className="flex items-center">
            <Calendar className="text-yellow-400 mr-2" />
            <h1>4 December 1995</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
