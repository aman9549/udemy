import Image from "next/image"
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <>
    <div className="bg-footer-bg">
   {/* Section 1: Teach the world */}
<div className="flex flex-col md:flex-row items-center px-6 md:px-10 py-8 font-sans border-b border-b-white/20 text-white justify-between gap-6">
  <div className="text-center md:text-left">
    <h2 className="text-lg font-semibold">Teach the world online</h2>
    <p className="text-sm md:text-md font-extralight max-w-2xl">
      Create an online video course, reach students across the globe, and earn money
    </p>
  </div>
  <button className="btnpadding border border-white whitespace-nowrap w-full md:w-auto">
    Teach on Udemy
  </button>
</div>

{/* Section 2: Companies Bar */}
<div className="flex flex-col lg:flex-row items-center px-6 md:px-10 py-8 font-sans border-b border-b-white/20 text-white justify-between gap-8">
  <div className="text-center lg:text-left">
    <h2 className="text-md font-semibold">
      Top companies choose <span className="text-primary-300">Udemy Business</span> to build in-demand career skills.
    </h2>
  </div>

  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
    <Image src={'/imgi_72_nasdaq-light.svg'} width={90} height={30} alt="nasdaq" className="h-auto" />
    <Image src={'/imgi_73_volkswagen-light.svg'} width={50} height={30} alt="volkswagen" className="h-auto" />
    <Image src={'/imgi_74_netapp-light.svg'} width={90} height={30} alt="netapp" className="h-auto" />
    <Image src={'/imgi_75_eventbrite-light.svg'} width={90} height={30} alt="eventbrite" className="h-auto" />
  </div>
</div>

      <div className="px-10 py-6 space-y-4">

    <h2 className="text-md font-semibold text-white">Explore top skills and certifications</h2>

<div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  <div>
    <h3 className="font-bold mb-3 text-white text-sm">In-demand Careers</h3>
    <ul className="space-y-1 text-sm font-extralight">
      <li>Data Scientist</li>
      <li>Full Stack Web Developer</li>
      <li>Cloud Engineer</li>
      <li>Project Manager</li>
      <li>Game Developer</li>
      <li>All Career Accelerators</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Web Development</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Web Development</li>
      <li>JavaScript</li>
      <li>React JS</li>
      <li>Angular</li>
      <li>Java</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">IT Certifications</h3>
  <ul className="space-y-1 text-sm font-extralight">
      <li>Amazon AWS</li>
      <li>AWS Certified Cloud Practitioner</li>
      <li>AZ-900: Microsoft Azure Fundamentals</li>
      <li>AWS Certified Solutions Architect - Associate</li>
      <li>Kubernetes</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Leadership</h3>
   <ul className="space-y-1 text-sm font-extralight">
      <li>Leadership</li>
      <li>Management Skills</li>
      <li>Project Management</li>
      <li>Personal Productivity</li>
      <li>Emotional Intelligence</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Certifications by Skill</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Cybersecurity Certification</li>
      <li>Project Management Certification</li>
      <li>Cloud Certification</li>
      <li>Data Analytics Certification</li>
      <li>HR Management Certification</li>
      <li>See all Certifications</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Data Science</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Data Science</li>
      <li>Python</li>
      <li>Machine Learning</li>
      <li>ChatGPT</li>
      <li>Deep Learning</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Communication</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Communication Skills</li>
      <li>Presentation Skills</li>
      <li>Public Speaking</li>
      <li>Writing</li>
      <li>PowerPoint</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Business Analytics & Intelligence</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Microsoft Excel</li>
      <li>SQL</li>
      <li>Microsoft Power BI</li>
      <li>Data Analysis</li>
      <li>Business Analysis</li>
    </ul>
  </div>
</div>

      </div>

      </div>
      <div className="bg-footer-bottom">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-6 bg-footer-bottom text-white border-b-white border-b ">
  <div>
    <h3 className="font-bold mb-3">About</h3>
    <ul className="space-y-1 text-sm font-extralight">
      <li>About us</li>
      <li>Careers</li>
      <li>Contact us</li>
      <li>Blog</li>
      <li>Investors</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3">Discover Udemy</h3>
    <ul className="space-y-1 text-sm font-extralight">
      <li>Get the app</li>
      <li>Teach on Udemy</li>
      <li>Plans and Pricing</li>
      <li>Affiliate</li>
      <li>Help and Support</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3">Udemy for Business</h3>
    <ul className="space-y-1 text-sm font-extralight">
      <li>Udemy Business</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3">Legal & Accessibility</h3>
    <ul className="space-y-1 text-sm font-extralight">
      <li>Accessibility statement</li>
      <li>Privacy policy</li>
      <li>Sitemap</li>
      <li>Terms</li>
    </ul>
  </div>
</div>
        
      <div className="px-6 md:px-10 py-8 text-white flex flex-col md:flex-row justify-between items-center gap-6">
  {/* Left side: Logo and Copyright */}
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">
    <Image 
      src="/imgi_76_logo-udemy-inverted.svg" 
      width={91} 
      height={34} 
      alt="Logo" 
    />
    <p className="text-sm md:text-base">&copy; 2026 Udemy, Inc.</p>
  </div>

  {/* Right side: Links and Language */}
  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
    <div className="cursor-pointer hover:underline">
      <p className="text-sm md:text-base">Cookie setting</p>
    </div>
    
    <div className="flex gap-2 items-center cursor-pointer hover:underline">
      <CiGlobe className="text-xl"/>
      <p className="text-sm md:text-base">English</p>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Footer