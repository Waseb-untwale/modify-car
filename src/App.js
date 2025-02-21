import React, { useState } from 'react';
import { Car, Search, Shield, Star, Zap, ChevronRight, Heart, Share2 } from 'lucide-react';

function App() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
            alt="Modified car showcase"
            className="w-full h-full object-cover transform scale-105 animate-float"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold mb-6 text-white opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Auto<span className="gradient-text">Vogue</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Discover and Own Premium Modified Cars
            </p>
            <div className={`bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-2xl transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''} opacity-0 animate-slide-up`} style={{ animationDelay: '0.6s' }}>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by make, model, or modification..."
                    className="w-full p-3 pl-12 border rounded-lg text-gray-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </div>
                <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Why Choose AutoVogue?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-indigo-600" />}
              title="Verified Sellers"
              description="All cars and sellers are thoroughly vetted for your peace of mind"
              delay={0.2}
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-indigo-600" />}
              title="Premium Modifications"
              description="Curated selection of professionally modified vehicles"
              delay={0.4}
            />
            <FeatureCard 
              icon={<Star className="w-8 h-8 text-indigo-600" />}
              title="Expert Inspection"
              description="200+ point inspection for every vehicle"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 gradient-text text-center">Featured Modified Cars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CarCard 
              image="https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?auto=format&fit=crop&q=80"
              name="Modified BMW M4"
              price="75,000"
              year="2021"
              delay={0.2}
            />
            <CarCard 
              image="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80"
              name="Custom Nissan GTR"
              price="95,000"
              year="2020"
              delay={0.4}
            />
            <CarCard 
              image="https://images.unsplash.com/photo-1622199312881-bf6fb164e67f?auto=format&fit=crop&q=80"
              name="Modified Porsche 911"
              price="120,000"
              year="2022"
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }) {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-slide-up border border-gray-100/50"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-6 transform transition-transform duration-300 hover:scale-110">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CarCard({ image, name, price, year, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-all">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-all">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 mb-1">Year: {year}</p>
            <p className="text-2xl font-bold gradient-text">${price}</p>
          </div>
          <button className="group bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
            View Details
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;