import Link from "next/link"
import RecentLearningPath from "../ui/RecentLearningPath"

const RecentLearning = () => {
  return (
    <>
    <div className=" space-y-10">

 <div className="flex items-center justify-between">
        <h1 className="text-3xl heading">Let's start learning</h1>
        <Link href={''} className="nav-item-style text-primary-500 underline">My learing</Link>
    </div>
    <div className="flex justify-between">
    <RecentLearningPath />
    <RecentLearningPath />
    <RecentLearningPath />
    </div>

    <div className="flex bg-black justify-between items-center rounded-xl p-5">
        <p className="text-white font-sans">Training 2 or more people?Get your team access to Udemy's top 30,000+ courses</p>
        <div className="flex gap-2">
            <Link href={''} className="btnpadding bg-white text-black ">Get Udemy Business</Link>
            <button className="btnpadding text-white border-2">Dismiss</button>
        </div>
    </div>
    </div>
   
    </>
    
  )
}

export default RecentLearning