'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    "Company": [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    "Features": [
      { name: "Tool Directory", href: "/tools" },
      { name: "AI Categories", href: "/categories" },
      { name: "Pricing", href: "/pricing" },
      { name: "API", href: "/api" },
    ],
    "Resources": [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "X", href: "https://twitter.com" },
    { name: "GitHub", icon: "GH", href: "https://github.com" },
    { name: "LinkedIn", icon: "IN", href: "https://linkedin.com" },
    { name: "Discord", icon: "DS", href: "https://discord.com" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div 
            className="col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="/">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
                AI Compass
              </h3>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              Navigate the world of AI tools to find exactly what you need. 
              Discover, compare, and implement the perfect AI solutions for your workflow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-indigo-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div 
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
            >
              <h4 className="font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-slate-300 hover:text-indigo-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Compass. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-indigo-300 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-indigo-300 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-slate-400 hover:text-indigo-300 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-emerald-500 to-indigo-600 bg-size-200 animate-gradient-x"></div>
    </footer>
  );
};

export default Footer;