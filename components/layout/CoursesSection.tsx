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
      <h1 className="courseheading">{title}</h1>
      <div className="grid grid-cols-5 gap-5">
        {data.map((item) => (
          <CoursesCard key={item.id} course={item} />
        ))}
      </div>
    </>
  )
}

export default CoursesSection