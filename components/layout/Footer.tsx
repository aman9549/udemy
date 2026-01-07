import Image from "next/image"

const Footer = () => {
  return (
    <>
    <div className="bg-footer-bg">
    <div className="flex items-center px-10 py-6 font-sans border-b-white border-b text-white justify-between ">
      <div className="">
        <h2 className="text-md font-semibold">Teach the world online</h2>
        <p className="text-md font-extralight">Create an online video course, reach students across the globe, and earn money</p>
      </div>
      <button className="btnpadding border border-white">Teach on Udemy</button>
      </div>
    <div className="flex items-center px-10 py-6 font-sans border-b-white border-b text-white justify-between ">
      <div className="">
        <h2 className="text-md font-semibold">Top companies choose <span className="text-primary-100">Udemy Business</span> to build in-demand career skills.</h2>
              </div>

              <div className="flex gap-2">

          <Image src={'/imgi_72_nasdaq-light.svg'} width={90} className="" height={100} alt="img" />
          <Image src={'/imgi_73_volkswagen-light.svg'} width={50} className="" height={100} alt="img" />
          <Image src={'/imgi_74_netapp-light.svg'} width={90} className="" height={100} alt="img" />
          <Image src={'/imgi_75_eventbrite-light.svg'} width={90} className="" height={100} alt="img" />
</div>
      </div>

      <div className="px-10 py-6 space-y-4">

    <h2 className="text-md font-semibold text-white">Explore top skills and certifications</h2>

<div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  <div>
    <h3 className="font-bold mb-3 text-white text-sm">In-demand Careers</h3>
    <ul className="space-y-1 text-sm font-extralight">
      <li>Data Scientist</li>
      <li>Full Stack Web Developer</li>
      <li>Cloud Engineer</li>
      <li>Project Manager</li>
      <li>Game Developer</li>
      <li>All Career Accelerators</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Web Development</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Web Development</li>
      <li>JavaScript</li>
      <li>React JS</li>
      <li>Angular</li>
      <li>Java</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">IT Certifications</h3>
  <ul className="space-y-1 text-sm font-extralight">
      <li>Amazon AWS</li>
      <li>AWS Certified Cloud Practitioner</li>
      <li>AZ-900: Microsoft Azure Fundamentals</li>
      <li>AWS Certified Solutions Architect - Associate</li>
      <li>Kubernetes</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Leadership</h3>
   <ul className="space-y-1 text-sm font-extralight">
      <li>Leadership</li>
      <li>Management Skills</li>
      <li>Project Management</li>
      <li>Personal Productivity</li>
      <li>Emotional Intelligence</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Certifications by Skill</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Cybersecurity Certification</li>
      <li>Project Management Certification</li>
      <li>Cloud Certification</li>
      <li>Data Analytics Certification</li>
      <li>HR Management Certification</li>
      <li>See all Certifications</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Data Science</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Data Science</li>
      <li>Python</li>
      <li>Machine Learning</li>
      <li>ChatGPT</li>
      <li>Deep Learning</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Communication</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Communication Skills</li>
      <li>Presentation Skills</li>
      <li>Public Speaking</li>
      <li>Writing</li>
      <li>PowerPoint</li>
    </ul>
  </div>

  <div>
    <h3 className="font-bold mb-3 text-white text-sm">Business Analytics & Intelligence</h3>
     <ul className="space-y-1 text-sm font-extralight">
      <li>Microsoft Excel</li>
      <li>SQL</li>
      <li>Microsoft Power BI</li>
      <li>Data Analysis</li>
      <li>Business Analysis</li>
    </ul>
  </div>
</div>

      </div>

      </div>
    </>
  )
}

export default Footer