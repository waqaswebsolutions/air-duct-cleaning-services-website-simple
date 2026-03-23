export default function Footer() {
  return (
    <footer className="mt-16 text-white bg-primary">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">PureFlow Air</h3>
            <p className="text-gray-200">Professional air duct cleaning services in Tampa and surrounding areas. NADCA certified technicians using state-of-the-art equipment.</p>
            <p className="mt-2 text-sm text-gray-300">NADCA Certified | Licensed & Insured</p>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Info</h3>
            <p className="text-gray-200">📞 (813) 555-8267</p>
            <p className="text-gray-200">✉️ hello@pureflowair.demo</p>
            <p className="text-gray-200">📍 1245 Clearwater Ave, Tampa, FL 33607</p>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Hours</h3>
            <p className="text-gray-200">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-200">Saturday: 9:00 AM - 4:00 PM</p>
            <p className="text-gray-200">Sunday: Closed</p>
            <p className="mt-2 text-sm text-gray-300">Emergency service available - call for pricing</p>
          </div>
        </div>
        
        <div className="pt-6 mt-8 text-center text-gray-200 border-t border-gray-600">
          <p>&copy; 2024 PureFlow Air. All rights reserved. | Demo Website</p>
          <p className="mt-1 text-sm text-gray-300">NADCA Certified: NADCA-FL-24789 | Fully Licensed & Insured: FL-IND-8267-2024</p>
        </div>
      </div>
    </footer>
  )
}