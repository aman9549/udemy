import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="text-nav-text font-sans font-light bg-white">
      <nav className="flex items-center px-5 py-2 gap-3 border-b border-gray-200">
        <div className="flex shrink-0">
          <Image 
            src="/imgi_19_udemy-logo.png" 
            width={91} 
            height={34} 
            alt="Logo" 
            priority
          />
        </div>
        
        <div className="text-course-body">
          <button className="hover:text-primary-500 cursor-pointer nav-item-style">Explore</button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 gap-2 items-center border border-nav-text text-course-body rounded-full px-4 py-2.5 bg-surface-1">
          <IoIosSearch className="text-2xl text-dark-2" />
          <input 
            className="bg-transparent outline-none w-full placeholder:text-dark-2" 
            placeholder="Search for anything" 
            type="text" 
          />
        </div>

        <div className="flex items-center gap-3">
          <ul className="hidden lg:flex text-course-body items-center gap-3">
            <li><Link href="#" className="hover:text-primary-500 nav-item-style">Plans & Pricing</Link></li>
            <li><Link href="#" className="hover:text-primary-500 nav-item-style">Udemy Business</Link></li>
            <li><Link href="#" className="hover:text-primary-500 nav-item-style">Teach on Udemy</Link></li>
            <li><Link href="#" className="hover:text-primary-500 nav-item-style">My learning</Link></li>
          </ul>

          <ul className="flex text-icon-body items-center gap-1">
            <li className="nav-item-style"><Link href="#"><CiHeart className="hover:text-primary-500" /></Link></li>
            <li className="nav-item-style"><Link href="#"><IoCartOutline className="hover:text-primary-500" /></Link></li>
            <li className="nav-item-style"><Link href="#"><FaRegBell className="hover:text-primary-500" /></Link></li>
          </ul>

          <Link href="#">
            <Image 
              src="/profile.avif" 
              width={35} 
              height={35} 
              className="rounded-full border border-gray-200" 
              alt="Profile" 
            />
          </Link>
        </div>
      </nav>

      {/* Categories Sub-nav */}
      <div className="shadow-sm border-b border-gray-100">
        <ul className="flex justify-center gap-8 py-3 text-course-body overflow-x-auto whitespace-nowrap px-4">
          <li className="hover:text-primary-500"><Link href="/development">Development</Link></li>
          <li className="hover:text-primary-500"><Link href="/business">Business</Link></li>
          <li className="hover:text-primary-500"><Link href="/finance-accounting">Finance & Accounting</Link></li>
          <li className="hover:text-primary-500"><Link href="/it-software">IT & Software</Link></li>
          <li className="hover:text-accent-purple"><Link href="/office-productivity">Office Productivity</Link></li>
          <li className="hover:text-primary-500"><Link href="/personal-development">Personal Development</Link></li>
          <li className="hover:text-primary-500"><Link href="/design">Design</Link></li>
          <li className="hover:text-primary-500"><Link href="/marketing">Marketing</Link></li>
          <li className="hover:text-primary-500"><Link href="/health-fitness">Health & Fitness</Link></li>
          <li className="hover:text-primary-500"><Link href="/music">Music</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;