"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch, IoIosMenu, IoIosClose, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const NAV_DATA = [
  { name: "Development", href: "/development", sub: ["Web Development", "Mobile Apps", "Programming Languages", "Game Development", "Database Design"] },
  { name: "Business", href: "/business", sub: ["Entrepreneurship", "Communication", "Management", "Sales", "Business Strategy"] },
  { name: "Finance & Accounting", href: "/finance-accounting", sub: ["Accounting", "Cryptocurrency", "Investing", "Financial Modeling"] },
  { name: "IT & Software", href: "/it-software", sub: ["IT Certifications", "Network & Security", "Hardware", "Operating Systems"] },
  { name: "Office Productivity", href: "/office-productivity", sub: ["Microsoft", "Apple", "Google", "SAP", "Oracle"] },
  { name: "Personal Development", href: "/personal-development", sub: ["Leadership", "Happiness", "Self Esteem", "Motivation"] },
  { name: "Design", href: "/design", sub: ["Web Design", "Graphic Design", "Design Tools", "User Experience"] },
  { name: "Marketing", href: "/marketing", sub: ["Digital Marketing", "Social Media", "SEO", "Branding"] },
  { name: "Health & Fitness", href: "/health-fitness", sub: ["Fitness", "Yoga", "Mental Health", "Nutrition"] },
  { name: "Music", href: "/music", sub: ["Instruments", "Music Software", "Vocal", "Music Technique"] },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="bg-white font-sans font-light text-nav-text relative">
      {/* --- Main Top Header --- */}
      <nav className="relative z-100 flex items-center justify-between border-b border-surface-3 bg-white px-4 py-2 md:px-5">
        
        {/* Left Section: Menu & Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            className="text-icon-body lg:hidden" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <IoIosMenu />
          </button>

          <Link href="/" className="flex shrink-0">
            <Image src="/imgi_19_udemy-logo.png" width={91} height={34} className="w-[75px] h-[28px] md:w-[91px] md:h-[34px]" alt="Logo" priority />
          </Link>

          <div className="hidden lg:block">
            <button className="text-course-body nav-item-style cursor-pointer hover:text-primary-500">Explore</button>
          </div>
        </div>

        {/* Center Section: Search Bar (Hidden on Mobile) */}
        <div className="bg-surface-1 border-dark-2/20 hidden flex-1 items-center gap-2 rounded-full border px-4 py-2.5 md:flex max-w-2xl mx-4">
          <IoIosSearch className="text-dark-2 text-xl" />
          <input 
            className="text-course-body w-full bg-transparent outline-none placeholder:text-dark-3" 
            placeholder="Search for anything" 
            type="text" 
          />
        </div>

        {/* Right Section: Icons & Profile */}
        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden items-center gap-1 xl:flex">
            <li><Link href="#" className="text-course-body nav-item-style hover:text-primary-500 whitespace-nowrap">Udemy Business</Link></li>
            <li><Link href="#" className="text-course-body nav-item-style hover:text-primary-500 whitespace-nowrap">Teach on Udemy</Link></li>
          </ul>

          <div className="text-icon-body flex items-center gap-1">
            <button className="nav-item-style md:hidden"><IoIosSearch /></button>
            <Link href="#" className="nav-item-style hidden sm:block"><CiHeart className="hover:text-primary-500" /></Link>
            <Link href="#" className="nav-item-style relative"><IoCartOutline className="hover:text-primary-500" /></Link>
            <Link href="#" className="nav-item-style hidden sm:block"><FaRegBell className="hover:text-primary-500" /></Link>
          </div>

          <Link href="#" className="shrink-0 ml-2">
            <Image src="/profile.avif" width={32} height={32} className="rounded-full border border-surface-3" alt="Profile" />
          </Link>
        </div>
      </nav>

      {/* --- Desktop Categories (Hover Only) --- */}
      <div className="relative z-40 hidden border-b border-surface-2 bg-white shadow-sm lg:block">
        <ul className="flex justify-center gap-6 px-4 py-3">
          {NAV_DATA.map((item) => (
            <li key={item.name} className="group list-none">
              <Link 
                href={item.href} 
                className="text-course-body hover:text-primary-500 transition-colors pb-4"
              >
                {item.name}
              </Link>
              
              {/* Mega Sub-menu */}
              <div className="invisible absolute top-full left-0 z-50 w-full bg-black text-white group-hover:visible">
                <div className="mx-auto flex max-w-7xl justify-center gap-8 px-6 py-4">
                  {item.sub.map((sub) => (
                    <Link 
                      key={sub} 
                      href="#" 
                      className="text-course-body font-normal hover:text-primary-300 whitespace-nowrap"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Mobile Sidebar (Drawer) --- */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-200 bg-black/50 transition-opacity lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-0 z-201 h-full w-[280px] bg-white transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-surface-2 p-4">
          <span className="heading text-lg">Menu</span>
          <button onClick={() => {setIsMobileMenuOpen(false); setActiveCategory(null);}}>
            <IoIosClose className="text-icon-body" />
          </button>
        </div>

        <div className="h-full overflow-y-auto pb-20">
          {!activeCategory ? (
            <ul className="flex flex-col">
              {NAV_DATA.map((item) => (
                <li key={item.name} className="border-b border-surface-1">
                  <button 
                    onClick={() => setActiveCategory(item.name)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium hover:bg-surface-1"
                  >
                    {item.name} <IoIosArrowForward className="text-dark-3" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <button 
                onClick={() => setActiveCategory(null)}
                className="text-primary-500 bg-surface-1 flex w-full items-center gap-2 px-4 py-4 text-sm font-medium"
              >
                <IoIosArrowBack /> Back
              </button>
              <div className="border-b border-surface-2 p-4 font-bold text-nav-text">{activeCategory}</div>
              <ul className="flex flex-col">
                {NAV_DATA.find(c => c.name === activeCategory)?.sub.map((sub) => (
                  <li key={sub}>
                    <Link href="#" className="text-dark-2 block border-b border-surface-1 px-8 py-3 text-sm hover:bg-surface-1">
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;