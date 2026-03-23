import ContactForm from '@/components/ContactForm'
import Map from '@/components/Map'

export default function Contact() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-primary">Contact Us</h1>
      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div className="p-8 mb-8 bg-white border-t-4 rounded-lg shadow-md border-secondary">
            <h2 className="mb-4 text-2xl font-bold text-primary">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary">Phone</h3>
                <p className="text-textDark">(813) 555-8267</p>
                <p className="text-sm text-gray-500">Monday-Friday 8am-6pm | Saturday 9am-4pm</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-textDark">hello@pureflowair.demo</p>
                <p className="text-sm text-gray-500">We respond to all inquiries within 24 hours</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Office Address</h3>
                <p className="text-textDark">1245 Clearwater Avenue<br />Tampa, FL 33607</p>
                <p className="text-sm text-gray-500">Serving all of Tampa Bay and surrounding areas</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary">License & Certifications</h3>
                <p className="text-textDark">✓ NADCA Certified: NADCA-FL-24789</p>
                <p className="text-textDark">✓ Fully Licensed: FL-CAC1815756</p>
                <p className="text-textDark">✓ Insured: FL-IND-8267-2024</p>
                <p className="text-textDark">✓ EPA Lead-Safe Certified: NAT-FL-98723</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-l-4 rounded-lg bg-secondary/10 border-secondary">
            <h3 className="mb-2 font-semibold text-primary">Service Area</h3>
            <p className="text-sm text-textDark">We provide professional air duct cleaning services throughout the Tampa Bay area including:</p>
            <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-textDark">
              <span>✓ Tampa</span>
              <span>✓ St. Petersburg</span>
              <span>✓ Clearwater</span>
              <span>✓ Brandon</span>
              <span>✓ Lutz</span>
              <span>✓ Wesley Chapel</span>
            </div>
          </div>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
      
      <Map />
    </div>
  )
}