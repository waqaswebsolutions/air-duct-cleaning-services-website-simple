export default function About() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-primary">About PureFlow Air</h1>
      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-lg text-textDark">
            PureFlow Air is Tampa's premier air duct cleaning service, dedicated to improving indoor air quality for homes and businesses throughout the Tampa Bay area. With over 15 years of industry experience, we've helped thousands of families breathe cleaner, healthier air.
          </p>
          <p className="mb-6 text-lg text-textDark">
            Our team consists of NADCA-certified technicians who undergo rigorous training and stay current with the latest industry standards. We use state-of-the-art HEPA-filtered vacuum systems and advanced cleaning techniques to ensure your ductwork is thoroughly cleaned without spreading contaminants throughout your home.
          </p>
          <p className="mb-6 text-lg text-textDark">
            Our mission is simple: to help you breathe cleaner, healthier air while improving the efficiency of your HVAC system. Clean air ducts can reduce energy costs by up to 20% and significantly decrease allergens and dust in your home. We take pride in our work and stand behind every job with our 100% satisfaction guarantee.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-bold text-primary">Our Values</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-xl text-success">✓</span>
              <span className="text-textDark">Quality craftsmanship and attention to detail in every job</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl text-success">✓</span>
              <span className="text-textDark">Honest, upfront pricing with no hidden fees or surprises</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl text-success">✓</span>
              <span className="text-textDark">Eco-friendly cleaning solutions safe for children and pets</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl text-success">✓</span>
              <span className="text-textDark">Exceptional customer service from estimate to completion</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl text-success">✓</span>
              <span className="text-textDark">100% satisfaction guaranteed on all our work</span>
            </li>
          </ul>
        </div>
        
        <div>
          {/* Team Image Section - Using reliable placeholder with gradient background */}
          <div className="p-1 rounded-lg shadow-md bg-gradient-to-br from-primary to-secondary">
            <div className="overflow-hidden bg-white rounded-lg">
              <div className="p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="mb-4 text-6xl">👥</div>
                <h3 className="mb-2 text-2xl font-bold text-primary">PureFlow Air Team</h3>
                <p className="text-textDark">Your Local Air Duct Cleaning Experts</p>
                <div className="grid grid-cols-2 gap-4 mt-6 text-left">
                  <div className="p-3 rounded bg-gray-50">
                    <p className="font-semibold text-primary">Mike Thompson</p>
                    <p className="text-sm text-textDark">Lead Technician</p>
                    <p className="text-xs text-gray-500">15+ years experience</p>
                  </div>
                  <div className="p-3 rounded bg-gray-50">
                    <p className="font-semibold text-primary">Sarah Martinez</p>
                    <p className="text-sm text-textDark">Customer Service</p>
                    <p className="text-xs text-gray-500">10+ years experience</p>
                  </div>
                  <div className="p-3 rounded bg-gray-50">
                    <p className="font-semibold text-primary">David Chen</p>
                    <p className="text-sm text-textDark">HVAC Specialist</p>
                    <p className="text-xs text-gray-500">12+ years experience</p>
                  </div>
                  <div className="p-3 rounded bg-gray-50">
                    <p className="font-semibold text-primary">Jessica Williams</p>
                    <p className="text-sm text-textDark">Quality Assurance</p>
                    <p className="text-xs text-gray-500">8+ years experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 mt-8 bg-white border-t-4 rounded-lg shadow-md border-accent">
            <h3 className="mb-4 text-xl font-bold text-primary">Certifications & Memberships</h3>
            <ul className="space-y-2 text-textDark">
              <li className="flex items-start">
                <span className="mr-2 text-xl text-success">✓</span>
                <span>NADCA Certified (National Air Duct Cleaners Association) - Member since 2009</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl text-success">✓</span>
                <span>EPA Lead-Safe Certified Firm</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl text-success">✓</span>
                <span>Better Business Bureau A+ Rated</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl text-success">✓</span>
                <span>Fully Licensed in Florida: CAC1815756</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl text-success">✓</span>
                <span>Fully Insured - Liability and Workers' Compensation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl text-success">✓</span>
                <span>Member of ACCA (Air Conditioning Contractors of America)</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 mt-6 border-l-4 rounded-lg bg-primary/5 border-primary">
            <h3 className="mb-2 text-xl font-bold text-primary">Industry Statistics</h3>
            <ul className="space-y-2 text-sm text-textDark">
              <li className="flex items-start">
                <span className="mr-2 text-lg text-success">✓</span>
                <span>90% of HVAC system failures are caused by dust and dirt buildup</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-lg text-success">✓</span>
                <span>Clean air ducts can improve HVAC efficiency by up to 30%</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-lg text-success">✓</span>
                <span>EPA ranks indoor air pollution among top 5 environmental health risks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-lg text-success">✓</span>
                <span>Regular duct cleaning can reduce allergens by up to 50%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}