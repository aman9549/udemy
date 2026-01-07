import Hero from "@/components/Home/Hero";
import RecentLearning from "@/components/Home/RecentLearning";
import CoursesSection from "@/components/layout/CoursesSection";
import Recommended from "@/components/layout/Recommended";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <Hero />
   <div className="px-8 space-y-10">
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
