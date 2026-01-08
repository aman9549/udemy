import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="grid gap-5 pb-7 px-4 md:px-0">
      {/* --- User Header Section --- */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center mt-6">
        <Image 
          src={'/profile.avif'} 
          className="rounded-full border border-surface-2" 
          width={70} 
          height={70} 
          alt="User" 
        />
        <div className="text-center sm:text-left">
          <h1 className="heading text-xl md:text-2xl">Welcome back, John Doe</h1>
          <p className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center text-course-body font-sans font-light">
            Manager, Software Development 
            <Link 
              href={''} 
              className="text-primary-300 underline px-2 py-1 hover:bg-primary-100 rounded-lg transition-colors"
            >
              Edit occupation and interests
            </Link>
          </p> 
        </div>
      </div>

      {/* --- Hero Banner Section --- */}
      <div className="relative w-full overflow-hidden rounded-lg md:rounded-none">
        {/* Hero Image */}
        <Image 
          src={'/imgi_hero.jpg'} 
          width={1360} 
          height={400} 
          alt="hero" 
          className="w-full h-[300px] md:h-auto object-cover"
          priority
        />

        {/* Floating Card */}
        {/* Mobile: Below image or centered | Desktop: Absolute top-left */}
        <div className="
          relative md:absolute 
          top-0 md:top-12 lg:top-17 
          left-0 md:left-12 lg:left-17 
          bg-white 
          w-full md:w-[450px] 
          p-6 md:p-8 
          shadow-lg md:shadow-md 
          space-y-3 
          leading-relaxed
        ">
          <h1 className="courseheading text-2xl lg:text-3xl leading-tight">
            Big ambitions? Meet big savings.
          </h1>
          <p className="text-nav-text font-sans font-light text-sm md:text-base">
            Get the skills you need for your 2026 dreams with courses from ₹399. Sale ends January 13.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero