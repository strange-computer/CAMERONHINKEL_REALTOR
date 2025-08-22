import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bed, Bath, Square, MapPin } from "lucide-react";

export function ListingsSection() {
  const listings = [
    {
      id: 1,
      price: "$485,000",
      address: "1234 Oak Hill Drive, Stone Oak",
      beds: 4,
      baths: 3,
      sqft: "2,850",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NTc4OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "New Listing",
      neighborhood: "Stone Oak"
    },
    {
      id: 2,
      price: "$325,000",
      address: "5678 River Walk Lane, Southside",
      beds: 3,
      baths: 2,
      sqft: "1,950",
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1NzIwMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Price Reduced",
      neighborhood: "Southside"
    },
    {
      id: 3,
      price: "$650,000",
      address: "9012 Alamo Heights Blvd, Alamo Heights",
      beds: 5,
      baths: 4,
      sqft: "3,400",
      image: "https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTU3MTU4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Luxury Home",
      neighborhood: "Alamo Heights"
    },
    {
      id: 4,
      price: "$275,000",
      address: "3456 Historic Street, King William",
      beds: 2,
      baths: 2,
      sqft: "1,600",
      image: "https://images.unsplash.com/photo-1624431926585-7dbdd65cfe10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob21lJTIwZmFjYWRlfGVufDF8fHx8MTc1NTgxMjEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "Historic Charm",
      neighborhood: "King William"
    }
  ];

  return (
    <section id="listings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured San Antonio Listings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover beautiful homes across San Antonio's most desirable neighborhoods. 
            Each property is carefully selected to offer exceptional value and lifestyle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={`Home at ${listing.address}`}
                  className="w-full h-64 object-cover"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700"
                >
                  {listing.status}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{listing.price}</h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.neighborhood}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{listing.address}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center text-gray-600">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.beds} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.baths} Baths</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Square className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.sqft} sqft</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Schedule Tour
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-white">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
}