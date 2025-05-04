'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const categories = [
  { name: 'Content Creation', icon: '✍️', color: 'bg-indigo-100' },
  { name: 'Data Analysis', icon: '📊', color: 'bg-emerald-100' },
  { name: 'Image Generation', icon: '🎨', color: 'bg-amber-100' },
  { name: 'Productivity', icon: '⚡', color: 'bg-rose-100' },
  { name: 'Research', icon: '🔍', color: 'bg-blue-100' },
  { name: 'Coding', icon: '💻', color: 'bg-violet-100' }
];

const featuredTools = [
  {
    name: "TextMind",
    description: "Advanced text generation and content creation",
    category: "Content Creation",
    image: "/globe.svg",
  },
  {
    name: "DataViz Pro",
    description: "Turn complex data into beautiful visualizations",
    category: "Data Analysis",
    image: "/window.svg",
  },
  {
    name: "PixelGenius",
    description: "Create stunning images from text descriptions",
    category: "Image Generation",
    image: "/file.svg",
  }
];

const Home = () => {
  const [hoverCategory, setHoverCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-96 h-96 -top-10 -left-10 bg-indigo-400 rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 top-1/3 right-0 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 bottom-0 left-1/4 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              AI Compass
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Navigate the world of AI tools to find exactly what you need
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link href="/login">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-medium rounded-full shadow-lg shadow-indigo-600/20 mr-4 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </Link>
              
              <Link href="#discover">
                <motion.button 
                  className="px-8 py-4 bg-white text-slate-800 font-medium rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Tools
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="discover" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Discover by Category
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {categories.map((category, i) => (
              <motion.div 
                key={category.name}
                className={`rounded-xl ${category.color} p-6 cursor-pointer transition-all duration-300 hover:shadow-lg`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoverCategory(category.name)}
                onMouseLeave={() => setHoverCategory(null)}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-slate-800">{category.name}</h3>
                <div className={`h-1 w-0 bg-slate-800 mt-2 transition-all duration-300 ${hoverCategory === category.name ? 'w-full' : ''}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-3 text-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured AI Tools
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-600 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Handpicked solutions for your specific needs
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTools.map((tool, i) => (
              <motion.div 
                key={tool.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image 
                      src={tool.image} 
                      alt={tool.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-slate-100 text-slate-600 mb-2">
                    {tool.category}
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-slate-800">{tool.name}</h3>
                  <p className="text-slate-600">{tool.description}</p>
                  
                  <motion.button 
                    className="mt-4 text-indigo-600 font-medium flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Explore tool
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to find your perfect AI companion?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of users navigating the AI landscape with confidence
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/Signup">
                <motion.button 
                  className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Up Now
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;