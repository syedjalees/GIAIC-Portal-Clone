import Link from "next/link"
export default function Navbar() {
  return (
    // 
    <div className="sticky top-0 z-50"> 
    
    <div className="bg-[#044e83] w-screen h-10 lg:h-[80px] px-4 py-6 flex -m-4  "> 
      <img className="h-[113px] w-[150px] pl-10  " src="/images/G-logo.png" alt="governor-house-logo" />
        <h1 className="h-[45px] flex justify-center items-start font-20px text-lg text-[#B9D8F3] font-extrabold tracking-wide px-10 -mt-3px">Tuition Free Education Program on Latest Technologies</h1>
     
        <ul className="flex ml-6 text-xl font-medium gap-10 text-[17px] text-white " >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/apply">Apply</Link></li>
          <li><Link href="/jobs">Jobs</Link></li>
          <li><Link href="/result">Results</Link></li>
    <div>
          <li><Link href="/courses" >
    
    <select className="bg-[#044e83] w-24">
      
      <option>Courses</option>
    <optgroup label=" Core Courses"></optgroup>
    <option>Programming Fundamentals</option>
    <option>Web2 Using NextJS</option>
    <option>Earn as You Learn</option>
    <br />
  <br />
  <hr />
  <optgroup label="Advanced Courses"></optgroup>
    <option>Web 3 and Metaverse</option>
    <option>Cloud-Native Computing</option>
    <option>Artificial Intelligence (AI) and Deep Learning</option>
    <option>Ambient Computing and IoT</option>
    <option>Genomics and Bioinformatics</option>
    <option>Network Programmability and Automation</option>
    
    </select></Link></li>
    </div>
        </ul>


        
      </div>

    
    
    </div>
  
  )
}
