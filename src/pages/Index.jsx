import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Utensils, Landmark, Camera, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-200">
      <header className="relative bg-red-600 text-white py-12 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold"
          >
            Discover China
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl"
          >
            Experience the wonders of the Middle Kingdom
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="mt-6 bg-white text-red-600 hover:bg-red-100">Start Your Journey</Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="/placeholder.svg" alt="China landscape" className="absolute inset-0 w-full h-full object-cover" />
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-semibold mb-6 text-center">Welcome to China</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            China, the world's most populous country, boasts a rich history spanning thousands of years. 
            From the Great Wall to the Forbidden City, ancient traditions to modern marvels, 
            China offers a unique blend of the old and the new.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { title: "Cities", icon: <MapPin />, description: "Explore bustling metropolises" },
            { title: "Cuisine", icon: <Utensils />, description: "Savor diverse flavors" },
            { title: "History", icon: <Landmark />, description: "Discover ancient wonders" },
            { title: "Nature", icon: <Camera />, description: "Experience breathtaking landscapes" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-semibold mb-6 text-center">Featured Attractions</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                { name: "Great Wall", image: "great-wall" },
                { name: "Terracotta Army", image: "terracotta-army" },
                { name: "Li River", image: "li-river" },
                { name: "Forbidden City", image: "forbidden-city" },
                { name: "Shanghai Skyline", image: "shanghai-skyline" },
              ].map((attraction, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
                    <img 
                      src={`/placeholder.svg`} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <h3 className="text-2xl font-semibold">{attraction.name}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-4xl font-semibold mb-6 text-center">Why Visit China?</h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="collapsed"
              animate={expanded ? "expanded" : "collapsed"}
              variants={{
                expanded: { height: "auto" },
                collapsed: { height: "200px" }
              }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-2">🏛️</span>
                  <span>Immerse yourself in one of the world's oldest civilizations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌇</span>
                  <span>Experience the perfect blend of ancient traditions and modern innovations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🥢</span>
                  <span>Indulge in diverse and delicious cuisine from various regions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏞️</span>
                  <span>Witness breathtaking natural landscapes and iconic landmarks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🤝</span>
                  <span>Engage with friendly locals and experience warm hospitality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎭</span>
                  <span>Explore rich cultural heritage through art, music, and festivals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚄</span>
                  <span>Travel on high-speed trains and experience modern infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🐼</span>
                  <span>See unique wildlife like giant pandas in their natural habitats</span>
                </li>
              </ul>
            </motion.div>
            <div className="text-center mt-4">
              <Button
                onClick={() => setExpanded(!expanded)}
                variant="outline"
                className="inline-flex items-center"
              >
                {expanded ? "Show Less" : "Show More"}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-red-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Discover China</h3>
              <p>Embark on a journey through the Middle Kingdom</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Tours</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-300">Facebook</a>
                <a href="#" className="hover:text-red-300">Twitter</a>
                <a href="#" className="hover:text-red-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-red-700 text-center">
            <p>&copy; {new Date().getFullYear()} Discover China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
