import { Button } from "./ui/button";
import { MapPin, Star, Users } from "lucide-react";
import cameronImage from "figma:asset/11982ea7fc74838e44ee4e2fef9c11d03d5f4c2b.png";

export function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted San Antonio Real Estate Expert
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              With years of experience in the San Antonio
              market, I help families find their dream homes and
              make smart investment decisions. Let me guide you
              through every step of your real estate journey.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">
                  San Antonio Specialist
                </span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">
                  5-Star Rated
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">
                  100% Happy Clients
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                View Current Listings
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={cameronImage}
                alt="Cameron Hinkel - San Antonio Realtor"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}