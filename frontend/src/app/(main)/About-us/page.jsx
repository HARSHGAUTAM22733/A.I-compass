import React from 'react'

const AboutUs = () => {
  return ;}
import image from 'next/image';
import { Globe, Eye, Users, Star } from 'lucide-react';


const teamMembers = [
  {
    name: 'Sachin Shukla',
    role: 'Frontend Developer',
    image: '/images/sachin.jpg',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    name: 'Neha',
    role: 'Backend Developer',
    image: '/images/neha.jpg',
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    name: 'Harsh',
    role: 'AI Engineer',
    image: '/images/harsh.jpg',
    socials: { twitter: '#', linkedin: '#' }
  }
];

const features = [
  { icon: <Globe size={36} />, title: 'AI Tool Manager', desc: 'Submit, edit, and explore AI tools with ease.' },
  { icon: <Eye size={36} />, title: 'Recommendation System', desc: 'Get tailored AI tool suggestions for your needs.' },
  { icon: <Star size={36} />, title: 'Review & Rating', desc: 'Read and write reviews to gauge tool performance.' },
  { icon: <Users size={36} />, title: 'Tool Comparison', desc: 'Compare features, pricing, and ratings side by side.' }
];

const testimonials = [
  { quote: 'AI Compass transformed how we select AI tools—simple and effective!', author: 'Jane Doe' },
  { quote: 'The recommendation engine is spot on. Highly recommend!', author: 'John Smith' }
];

export default function AboutUs() {
  return (
    <div className="space-y-16 px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">Navigating the AI Landscape with Confidence</h1>
        <p className="text-lg text-gray-700">AI Compass helps you discover, evaluate, and implement the most suitable AI tools for your goals.</p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex items-start space-x-4">
          <Globe size={48} className="text-indigo-600" />
          <div>
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-2 text-gray-600">To simplify AI adoption by guiding users to the right tools for their goals.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Eye size={48} className="text-indigo-600" />
          <div>
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-2 text-gray-600">Empowering ethical and efficient AI integration across industries.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transform transition">
              <Image src={member.image} alt={member.name} width={120} height={120} className="rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-center mt-4">{member.name}</h3>
              <p className="text-center text-gray-500">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.socials.twitter} aria-label="Twitter">
                  <svg className="w-6 h-6 text-blue-400 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.924a8.338 8.338 0 0 1-2.357.637A4.077 4.077 0 0 0 21.448 4.2a8.19 8.19 0 0 1-2.605.981A4.104 4.104 0 0 0 11.07 8.14a11.635 11.635 0 0 1-8.457-4.287 4.075 4.075 0 0 0 1.27 5.462A4.041 4.041 0 0 1 2.8 8.713v.051a4.105 4.105 0 0 0 3.292 4.018A4.095 4.095 0 0 1 2.23 13.1c0 .01.002.02.002.03A4.108 4.108 0 0 0 4.1 17.568a8.233 8.233 0 0 1-5.088 1.755A8.32 8.32 0 0 1 0 19.296a11.616 11.616 0 0 0 6.29 1.84"/></svg>
                </a>
                <a href={member.socials.linkedin} aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3a2 2 0 1 1 .001 4.001A2 2 0 0 1 4.98 3zM.25 8.332h4.5V24h-4.5V8.332zM8.682 8.332H13v2.153h.063c.613-1.162 2.108-2.385 4.338-2.385 4.64 0 5.494 3.054 5.494 7.023V24h-4.5v-7.76c0-1.849-.034-4.231-2.58-4.231-2.583 0-2.979 2.017-2.979 4.103V24h-4.5V8.332z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Summary */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="flex justify-center mb-4 text-indigo-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6">What Our Users Say</h2>
        <div className="space-y-6">
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="italic text-center text-gray-700">
              “{t.quote}”
              <footer className="mt-2 font-semibold">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
