import Hero from "@/components/Home/Hero";
import RecentLearning from "@/components/Home/RecentLearning";
import CoursesSection from "@/components/layout/CoursesSection";
import Recommended from "@/components/layout/Recommended";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <Hero />
 <div className="px-4 py-6 space-y-6 md:px-8 md:space-y-10 lg:px-16">
   <RecentLearning />
   <div className="space-y-6">
    <h1 className="heading text-3xl">What to learn next</h1>

    <div className="space-y-5">
      <CoursesSection />
      <CoursesSection title="Based on your recent searches" />
      <CoursesSection title="Trending courses" />
    </div>

    <Recommended />

   </div>
   </div>
    </>
  );
}
