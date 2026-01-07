import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <>
    <div className="py-11 grid gap-5">
    <div className="flex gap-7 items-center">
        <Image src={'/profile.avif'} className="rounded-full" width={70} height={70} alt="User" />
        <div className="">
            <h1 className="heading">Welcome back, Jhon Doe</h1>
            <p className="flex gap-5 items-center text-nav-text font-sans font-light"> Manager, Software Development <Link href={''} className="text-primary-300 underline px-2 py-1 hover:bg-primary-100 rounded-lg">Edit occupation and intrests</Link></p> 
        </div>
    </div>
    <div className="relative">
        <Image src={'/imgi_hero.jpg'} width={1360} height={400} alt="hero" />
        <div className="absolute top-17 left-17 bg-white w-card p-5 rounded-lg space-y-3 leading-7">
            <h1 className="heading text-3xl">Big ambitions? Meet big savings.</h1>
            <p className=" text-nav-text font-sans font-light">Get the skills you need for your 2026 dreams with courses from ₹399. Sale ends January 13.</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero