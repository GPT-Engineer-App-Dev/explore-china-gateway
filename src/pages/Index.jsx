import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Utensils, Landmark, Camera, ChevronDown, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [expanded, setExpanded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      <Navbar />
      <header className="relative bg-red-600 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold leading-tight"
          >
            Discover the Magic <br />of China
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-2xl max-w-2xl"
          >
            Embark on a journey through ancient wonders, vibrant cultures, and breathtaking landscapes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Button className="bg-white text-red-600 hover:bg-red-100 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
        <img src="/placeholder.svg" alt="China landscape" className="absolute inset-0 w-full h-full object-cover" />
      </header>

      <main className="container mx-auto px-4 py-24">
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={0}
          className="mb-24"
        >
          <h2 className="text-5xl font-bold mb-8 text-center text-red-800">Welcome to China</h2>
          <p className="text-2xl text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
            China, a land of ancient wonders and modern marvels, invites you on a journey through time. 
            From the majestic Great Wall to the futuristic skylines of Shanghai, 
            experience the perfect harmony of tradition and innovation.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {[
            { title: "Imperial Cities", icon: <MapPin />, description: "Explore ancient capitals and modern metropolises" },
            { title: "Culinary Delights", icon: <Utensils />, description: "Savor the diverse flavors of Chinese cuisine" },
            { title: "Rich Heritage", icon: <Landmark />, description: "Discover 5,000 years of history and culture" },
            { title: "Natural Wonders", icon: <Camera />, description: "Witness breathtaking landscapes and diverse ecosystems" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-full bg-white border-none shadow-lg overflow-hidden">
                <CardHeader className="bg-red-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-lg text-gray-700">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={2}
          className="mb-24"
        >
          <h2 className="text-5xl font-bold mb-12 text-center text-red-800">Featured Attractions</h2>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {[
                { name: "The Great Wall", image: "great-wall", description: "A marvel of ancient engineering" },
                { name: "Terracotta Army", image: "terracotta-army", description: "Guardian warriors of the afterlife" },
                { name: "Li River", image: "li-river", description: "Scenic beauty of Guilin" },
                { name: "Forbidden City", image: "forbidden-city", description: "Heart of imperial China" },
                { name: "Shanghai Skyline", image: "shanghai-skyline", description: "Modern face of China" },
              ].map((attraction, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video group">
                    <img 
                      src={`/placeholder.svg`} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{attraction.name}</h3>
                      <p className="text-lg">{attraction.description}</p>
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
          animate={controls}
          custom={3}
          className="bg-white rounded-xl shadow-2xl p-12 mb-24"
        >
          <h2 className="text-5xl font-bold mb-8 text-center text-red-800">Why Visit China?</h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="collapsed"
              animate={expanded ? "expanded" : "collapsed"}
              variants={{
                expanded: { height: "auto" },
                collapsed: { height: "300px" }
              }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <ul className="space-y-6 text-xl text-gray-700">
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">🏛️</span>
                  <span>Immerse yourself in one of the world's oldest and most fascinating civilizations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">🌇</span>
                  <span>Experience the perfect blend of ancient traditions and cutting-edge innovations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">🥢</span>
                  <span>Indulge in the diverse and delicious cuisine from various regions of China</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">🏞️</span>
                  <span>Witness breathtaking natural landscapes, from misty mountains to tranquil rivers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">🤝</span>
                  <span>Engage with friendly locals and experience the warmth of Chinese hospitality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">🎭</span>
                  <span>Explore rich cultural heritage through art, music, and vibrant festivals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">🚄</span>
                  <span>Travel on high-speed trains and experience China's modern infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-3xl">🐼</span>
                  <span>Encounter unique wildlife, including the beloved giant pandas, in their natural habitats</span>
                </li>
              </ul>
            </motion.div>
            <div className="text-center mt-8">
              <Button
                onClick={() => setExpanded(!expanded)}
                variant="outline"
                className="inline-flex items-center text-lg px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
              >
                {expanded ? "Show Less" : "Discover More"}
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-red-900 text-white py-16 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Discover China</h3>
              <p className="text-lg">Embark on an unforgettable journey through the wonders of the Middle Kingdom</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-red-300 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-red-300 transition-colors duration-300">Our Tours</a></li>
                <li><a href="#" className="hover:text-red-300 transition-colors duration-300">Travel Tips</a></li>
                <li><a href="#" className="hover:text-red-300 transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-red-300 transition-colors duration-300">Facebook</a>
                <a href="#" className="text-2xl hover:text-red-300 transition-colors duration-300">Twitter</a>
                <a href="#" className="text-2xl hover:text-red-300 transition-colors duration-300">Instagram</a>
              </div>
              <p className="mt-6 text-lg">Subscribe to our newsletter for exclusive travel tips and offers!</p>
              <div className="mt-4 flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full" />
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-r-lg">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-red-800 text-center">
            <p>&copy; {new Date().getFullYear()} Discover China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
