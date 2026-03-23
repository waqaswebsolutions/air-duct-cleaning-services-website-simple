import Hero from '@/components/Hero'
import ServiceIcons from '@/components/ServiceIcons'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceIcons />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Why Choose Us?</h2>
            <div className="space-y-4 bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
              <div className="flex items-start">
                <span className="text-success text-xl mr-3">✓</span>
                <span className="text-textDark">NADCA certified technicians</span>
              </div>
              <div className="flex items-start">
                <span className="text-success text-xl mr-3">✓</span>
                <span className="text-textDark">Free estimates with no obligation</span>
              </div>
              <div className="flex items-start">
                <span className="text-success text-xl mr-3">✓</span>
                <span className="text-textDark">100% satisfaction guaranteed</span>
              </div>
              <div className="flex items-start">
                <span className="text-success text-xl mr-3">✓</span>
                <span className="text-textDark">Same-day service available</span>
              </div>
              <div className="flex items-start">
                <span className="text-success text-xl mr-3">✓</span>
                <span className="text-textDark">Fully licensed and insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  )
}