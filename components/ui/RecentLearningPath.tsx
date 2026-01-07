import Image from "next/image"
import Link from "next/link";

const RecentLearningPath = () => {
  return (
    <>
    <div className="flex overflow-hidden shadow relative w-96">
        <div className="">
            <Image src={'/imgi_15_thumb-1.jpg'} className="-translate-x-16 " width={240} height={500} alt="title" />
        </div>
        <div className="absolute left-28 p-4 space-y-1   bg-white h-full ">
            <p className="text-xs font-bold text-gray-600">Complete web development course</p>
            <Link className="text-md font-bold text-nav-text" href={''}>36. Tailwind setup with CDN and NodeJS</Link>
        </div>
    </div>
    </>
  )
}

export default RecentLearningPath;