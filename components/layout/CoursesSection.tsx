import CoursesCard from "../ui/CoursesCard"
import coursesData from "../../data/data.json";
import { Course } from '../types/course'; // Ensure this path is correct

 interface CoursesSectionProps {
  title?: string; // Optional prop to make the heading dynamic
}

const CoursesSection = ({ title = "Recommended for you" }: CoursesSectionProps) => {
  // Cast the JSON data to the Course array type
  const data = coursesData as Course[];

 

  return (
    <>
    <h1 className="courseheading text-2xl md:text-2xl font-bold mb-6">{title}</h1>

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
  {data.map((item) => (
    <CoursesCard key={item.id} course={item} />
  ))}
</div>
    </>
  )
}

export default CoursesSection