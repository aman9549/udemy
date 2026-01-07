import Image from "next/image"
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { Course } from '../types/course'

const CoursesCard = ({ course }: { course: Course }) => {

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalf key={i} />);
      } else {
        stars.push(<FaRegStar key={i} className="opacity-30" />);
      }
    }
    return stars;
  };

  return (
    <div>
      <div>
        <Image 
          width={300} 
          height={300} 
          // Provide a fallback string for src to satisfy Next.js Image requirements
          src={course.image || "/imgi_15_thumb-1.jpg"} 
          alt={course.title || "Course Image"} 
        />
      </div>

      <div>
        <div>
          <h3>
            <a href={`/course/${course.slug || ""}`} className="text-sm font-semibold">
              {course.title || "Untitled Course"}
            </a>
          </h3>
        </div>

        <div className="text-xs text-nav-text">
          {course.instructor || "Unknown Instructor"}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-rating font-semibold">{course.rating || 0}</span>
          <div className="text-star flex items-center">
             {renderStars(course.rating || 0)}
          </div>
          <span className="text-sm">({course.reviews || 0})</span>
        </div>

        <div className="flex gap-2">
          <div><span className="font-bold">{course.currentPrice || "Free"}</span></div>
          {course.originalPrice && (
            <div>
              <span className="text-gray-500 font-extralight">
                <s>{course.originalPrice}</s>
              </span>
            </div>
          )}
        </div>

        {course.badgeText && (
          <div>
            <div className="flex items-center gap-0.5 px-1 rounded-sm text-xs text-white py-1 font-bold bg-primary-500 w-fit"> 
               <MdOutlineVerified /> <span>{course.badgeText}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesCard