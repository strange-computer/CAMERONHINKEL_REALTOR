import { Award, Clock, Heart, TrendingUp } from "lucide-react";

export function AboutSection() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Top Homes",
      description:
        "Consistently finding the best homes of San Antonio",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Quick Response",
      description: "Fast response to client inquiries",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Client Focused",
      description:
        "Personalized service tailored to your unique needs and goals",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Market Expert",
      description:
        "Deep knowledge of San Antonio neighborhoods and market trends",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Cameron Hinkel?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a San Antonio local and passionate realtor, I
            bring local expertise, market knowledge, and
            unwavering commitment to every transaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The World in San Antonio
              </h3>
              <p className="text-gray-600 mb-6">
                Having family in San Antonio as well as living
                here myself, I understand the unique character
                of each neighborhood, from the historic charm of
                King William to the family-friendly communities
                of Stone Oak. This local knowledge gives my
                clients a distinct advantage in finding the
                perfect home or investment property.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    1000's
                  </div>
                  <div className="text-gray-600">
                    Hidden Spots of San Antonio
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    10,000's
                  </div>
                  <div className="text-gray-600">
                    to be discovered
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-lg p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600">
                  Client Satisfaction Rate
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Based on post-transaction surveys
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}