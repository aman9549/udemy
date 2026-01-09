"use client"
import Link from "next/link"
import RecentLearningPath from "../ui/RecentLearningPath"
import Slider from "react-slick";

// You can move this array to a separate data file later
const learningData = [
  {
    id: 1,
    image: "/imgi_15_thumb-1.jpg",
    category: "Complete web development course",
    title: "36. Tailwind setup with CDN and NodeJS",
    href: "/learning/1"
  },
  {
    id: 2,
    image: "/imgi_16_thumb-1.jpg",
    category: "React Mastery",
    title: "12. Understanding the UseEffect Hook",
    href: "/learning/2"
  },
  {
    id: 3,
    image: "/imgi_14_thumb-1.jpg",
    category: "Next.js 14 Guide",
    title: "05. Server Side Rendering vs Static",
    href: "/learning/3"
  },
  {
    id: 4,
    image: "/imgi_17_thumb-1.jpg",
    category: "Node.js Backend",
    title: "22. Connecting to MongoDB",
    href: "/learning/4"
  }
];

const RecentLearning = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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

        <div className=" slider-container block">
          <Slider {...settings}>
            {learningData.map((course) => (
              <RecentLearningPath 
                key={course.id}
                image={course.image}
                category={course.category}
                title={course.title}
                href={course.href}
              />
            ))}
          </Slider>
        </div>

        <div className="flex flex-col md:flex-row bg-black justify-between items-center rounded-xl p-5 gap-4">
          <p className="text-white font-sans text-center md:text-left text-sm md:text-base">
              Training 2 or more people? Get your team access to Udemy's top 30,000+ courses
          </p>
          
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