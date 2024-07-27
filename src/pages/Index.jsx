import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Utensils, Landmark, Camera } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-200">
      <header className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Discover China</h1>
          <p className="mt-2">Experience the wonders of the Middle Kingdom</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to China</h2>
          <p className="text-lg">
            China, the world's most populous country, boasts a rich history spanning thousands of years. 
            From the Great Wall to the Forbidden City, ancient traditions to modern marvels, 
            China offers a unique blend of the old and the new.
          </p>
          <Button className="mt-4">Plan Your Trip</Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Cities", icon: <MapPin />, description: "Explore bustling metropolises" },
            { title: "Cuisine", icon: <Utensils />, description: "Savor diverse flavors" },
            { title: "History", icon: <Landmark />, description: "Discover ancient wonders" },
            { title: "Nature", icon: <Camera />, description: "Experience breathtaking landscapes" },
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Great Wall", image: "great-wall" },
              { name: "Terracotta Army", image: "terracotta-army" },
              { name: "Li River", image: "li-river" },
            ].map((attraction, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={`/placeholder.svg`} 
                  alt={attraction.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-semibold">{attraction.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Why Visit China?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Immerse yourself in one of the world's oldest civilizations</li>
            <li>Experience the perfect blend of ancient traditions and modern innovations</li>
            <li>Indulge in diverse and delicious cuisine from various regions</li>
            <li>Witness breathtaking natural landscapes and iconic landmarks</li>
            <li>Engage with friendly locals and experience warm hospitality</li>
          </ul>
        </section>
      </main>

      <footer className="bg-red-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Discover China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
