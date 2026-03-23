export default function ServiceIcons() {
  const services = [
    {
      icon: "🏠",
      title: "Air Duct Cleaning",
      description: "Professional removal of dust, allergens, mold, and contaminants from your entire ductwork system. Improves air quality and HVAC efficiency.",
      price: "$299+"
    },
    {
      icon: "🌀",
      title: "Dryer Vent Cleaning",
      description: "Eliminate lint buildup and prevent fire hazards. Improves drying efficiency by up to 40% and reduces energy costs.",
      price: "$149+"
    },
    {
      icon: "💨",
      title: "Air Quality Solutions",
      description: "UV light installation, air quality testing, and HVAC sanitization to create a healthier indoor environment.",
      price: "$199+"
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center text-primary">
          Professional Air Duct Services
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-textDark">
          Comprehensive solutions for cleaner air, improved efficiency, and peace of mind
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 text-center transition bg-white border-t-4 rounded-lg shadow-md hover:shadow-lg border-secondary">
              <div className="mb-4 text-5xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mb-3 text-textDark">{service.description}</p>
              <p className="font-bold text-accent">Starting at {service.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">* Prices vary based on system size and number of vents. Free estimates provided.</p>
        </div>
      </div>
    </section>
  )
}