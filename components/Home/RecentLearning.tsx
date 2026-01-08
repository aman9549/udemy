import Link from "next/link"
import RecentLearningPath from "../ui/RecentLearningPath"

const RecentLearning = () => {
  return (
    <>
    <div className=" space-y-10">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
    <h1 className="text-2xl md:text-3xl font-bold heading">
      Let's start learning
    </h1>
    <Link 
      href={''} 
      className="nav-item-style text-primary-500 underline text-sm md:text-base whitespace-nowrap"
    >
      My learning
    </Link>
</div>
   <div className="flex flex-col md:flex-row justify-between gap-6">
  <RecentLearningPath />
  <RecentLearningPath />
  <RecentLearningPath />
</div>

   <div className="flex flex-col md:flex-row bg-black justify-between items-center rounded-xl p-5 gap-4">
    {/* Text: Centers on mobile, left-aligned on desktop */}
    <p className="text-white font-sans text-center md:text-left text-sm md:text-base">
        Training 2 or more people? Get your team access to Udemy's top 30,000+ courses
    </p>
    
    {/* Buttons: Stacked or full-width on mobile */}
    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
        <Link 
            href={''} 
            className="btnpadding bg-white text-black text-center whitespace-nowrap"
        >
            Get Udemy Business
        </Link>
        <button 
            className="btnpadding text-white border-2 text-center"
        >
            Dismiss
        </button>
    </div>
</div>
    </div>
   
    </>
    
  )
}

export default RecentLearning