import Image from "next/image"
import Link from "next/link";

interface RecentLearningProps {
  image: string;
  category: string;
  title: string;
  href: string;
}

const RecentLearningPath = ({ image, category, title, href }: RecentLearningProps) => {
  return (
    <>
      <div className="flex overflow-hidden shadow relative w-full max-w-md sm:max-w-lg">
        {/* Image Container - Takes up about 40% */}
        <div className="flex-shrink-0 w-1/3 sm:w-2/5">
          <Image 
            src={image} 
            className="" 
            width={240} 
            height={500} 
            alt={title} 
          />
        </div>

        {/* Content Container - Takes up the rest */}
        <div className="p-4 space-y-2 bg-white flex-1 flex flex-col justify-center">
          <p className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-tight">
            {category}
          </p>
          <Link 
            className="text-sm sm:text-md font-bold text-nav-text hover:underline line-clamp-2" 
            href={href}
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  )
}

export default RecentLearningPath;