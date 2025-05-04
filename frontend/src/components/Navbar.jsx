'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Discover', href: '/#discover' },
        { name: 'Categories', href: '/categories' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'About', href: '/about-us' },
        { name: 'Contact', href: '/contact-us' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
            initial={{ y: -100, backgroundColor: 'transparent' }}
            animate={{ y: 0, backgroundColor: scrolled ? 'white' : 'transparent' }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600">
                                AI Compass
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={item.href}
                                    className="px-4 py-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Auth Buttons - Desktop */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Link href="/login">
                            <motion.button
                                className="px-4 py-2 rounded-lg text-indigo-600 font-medium hover:bg-indigo-50 transition-all duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Login
                            </motion.button>
                        </Link>
                        <Link href="/Signup">
                            <motion.button
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sign Up
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg text-slate-700 hover:bg-indigo-50 transition-all duration-200"
                            whileTap={{ scale: 0.9 }}
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="md:hidden"
                initial="closed"
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                {mobileMenuOpen && (
                    <div className="bg-white border-t mt-3 py-3 shadow-inner">
                        <div className="container mx-auto px-4 space-y-2">
                            {navItems.map((item) => (
                                <motion.div key={item.name} variants={itemVariants}>
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-2 space-y-2">
                                <motion.div variants={itemVariants}>
                                    <Link
                                        href="/login"
                                        className="block px-4 py-2 rounded-lg text-indigo-600 font-medium hover:bg-indigo-50 transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link
                                        href="/Signup"
                                        className="block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-medium transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Sign Up
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;