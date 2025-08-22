export function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CAMERON HINKEL</h3>
              <p className="text-gray-300 mb-4">
                Your trusted San Antonio real estate professional, dedicated to helping 
                you find the perfect home or sell your property with confidence.
              </p>
              <div className="text-sm text-gray-400">
                <p>License #: 123456789</p>
                <p>Equal Housing Opportunity</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#listings" className="hover:text-white transition-colors">Current Listings</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/resources" className="hover:text-white transition-colors">Buyer Resources</a></li>
                <li><a href="/sellers" className="hover:text-white transition-colors">Seller Information</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Stone Oak</li>
                <li>Alamo Heights</li>
                <li>King William District</li>
                <li>Southside</li>
                <li>Downtown San Antonio</li>
                <li>Northwest Side</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cameron Hinkel Realtor. All rights reserved.</p>
            <p className="mt-2">
              Website: <span className="text-blue-400">CAMERONHINKELREALTOR.com</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }