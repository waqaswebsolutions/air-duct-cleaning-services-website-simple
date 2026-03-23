export default function Testimonials() {
  const testimonials = [
    {
      name: "Robert Henderson",
      location: "Tampa, FL",
      text: "My allergies have improved significantly since PureFlow cleaned my ducts. The team was professional, on time, and showed me before/after photos. Highly recommend!",
      rating: 5
    },
    {
      name: "Linda Patterson",
      location: "St. Petersburg, FL",
      text: "Great service! They explained everything upfront, no hidden fees. The technicians were knowledgeable and did a thorough job. My house feels so much fresher now.",
      rating: 5
    },
    {
      name: "Thomas Bradley",
      location: "Clearwater, FL",
      text: "Best duct cleaning service in Tampa Bay. Fair pricing, excellent work, and they even pointed out some minor issues with my HVAC system. Very professional team.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      location: "Brandon, FL",
      text: "Technicians were punctual, courteous, and did a fantastic job. They wore shoe covers and cleaned up everything. My energy bills have gone down noticeably.",
      rating: 5
    },
    {
      name: "James Morrison",
      location: "Lutz, FL",
      text: "Highly recommend PureFlow! They were thorough, answered all my questions, and the price was exactly what they quoted. My home feels cleaner and smells fresher.",
      rating: 5
    },
    {
      name: "Michelle Carter",
      location: "Wesley Chapel, FL",
      text: "After moving into an older home, we had PureFlow clean the ducts. What a difference! No more musty smell and the air quality is dramatically better.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center text-primary">
          What Our Customers Say
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-textDark">
          Join hundreds of satisfied homeowners who have experienced cleaner air and improved HVAC efficiency
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 transition bg-white border-l-4 rounded-lg shadow-md hover:shadow-lg border-secondary">
              <div className="flex mb-4 text-accent">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="mb-4 italic text-textDark">"{testimonial.text}"</p>
              <p className="font-semibold text-primary">- {testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}