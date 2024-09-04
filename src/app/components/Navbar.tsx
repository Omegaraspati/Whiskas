"use client"

import React, { useState, useEffect } from 'react'
import logo from '@/assets/logo.webp'
import Image from 'next/image'
import NavTop from './NavTop'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            const logoElement = document.getElementById("logo");
            const navtop = document.getElementById("navtop");

            console.log("Scroll Position:", window.scrollY);

            if (navbar && logoElement && navtop) {
                if (window.scrollY > 50) {
                    console.log("Scroll detected, hiding NavTop");
                    navbar.classList.add("bg-fuchsia-700", "shadow-md");
                    navbar.classList.remove("bg-transparent");
                    logoElement.classList.add("scale-75");
                    logoElement.classList.remove("scale-100");
                    navtop.style.display = "none"; 
                    setScrolling(true);
                } else {
                    console.log("Scroll not detected, showing NavTop"); 
                    navbar.classList.add("bg-transparent");
                    navbar.classList.remove("bg-fuchsia-700", "shadow-md");
                    logoElement.classList.add("scale-100");
                    logoElement.classList.remove("scale-75");
                    navtop.style.display = "block";
                    setScrolling(false);
                }
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <header id='navbar' className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out bg-transparent">
            <div id="navtop" className="hidden lg:block">
                <NavTop />
            </div>
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="text-2xl font-bold lg:block hidden">
                    <a href="#">
                        <Image id='logo' src={logo} alt={'logo'} width={150} height={50} />
                    </a>
                </div>

                <div className="block lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                <nav className="hidden lg:flex lg:items-center lg:space-x-4 text-right">
                    <a href="#" className="max-w-[100px] px-4 text-sm font-bold text-white hover:text-gray-300">Beranda</a>
                    <a href="#" className="max-w-[100px] px-4 text-sm font-bold text-white hover:text-gray-300">Kenapa Whiskas</a>
                    <a href="#" className="max-w-[100px] px-4 text-sm font-bold text-white hover:text-gray-300">Produk Kami</a>
                    <a href="#" className="max-w-[100px] px-4 text-sm font-bold text-white hover:text-gray-300">Panduan Memberi Makan</a>
                    <a href="#" className="max-w-[100px] px-4 text-sm font-bold text-white hover:text-gray-300">Perawatan Kucing</a>
                    <a href="#" className="max-w-[100px] px-4 text-sm font-bold text-white hover:text-gray-300">Nutrisi</a>
                    <a href="#" className="max-w-[100px] px-4 text-sm font-bold text-white hover:text-gray-300">Purr Purr Lagi</a>
                    <a href="#" className="max-w-[100px] px-4 text-sm font-bold text-white hover:text-gray-300">Pendaftaran Voucher Gratis</a>
                    <a href="#" className="max-w-[100px] px-4 text-2xl flex py-3 text-white"><FaSearch /></a>
                </nav>

                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-fuchsia-700 text-white`}>
                    <div className="flex flex-col p-4 space-y-4">
                        <a href="#" className="text-sm font-bold hover:text-gray-300">Beranda</a>
                        <a href="#" className="text-sm font-bold hover:text-gray-300">Kenapa Whiskas</a>
                        <a href="#" className="text-sm font-bold hover:text-gray-300">Produk Kami</a>
                        <a href="#" className="text-sm font-bold hover:text-gray-300">Panduan Memberi Makan</a>
                        <a href="#" className="text-sm font-bold hover:text-gray-300">Perawatan Kucing</a>
                        <a href="#" className="text-sm font-bold hover:text-gray-300">Nutrisi</a>
                        <a href="#" className="text-sm font-bold hover:text-gray-300">Purr Purr Lagi</a>
                        <a href="#" className="text-sm font-bold hover:text-gray-300">Pendaftaran Voucher Gratis</a>
                        <a href="#" className="text-2xl flex py-3"><FaSearch /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
