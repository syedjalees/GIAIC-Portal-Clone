import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
    return (
      <div className="bg-[#F4F4F5] text-zinc-800 grid grid-cols-1 gap-10 md:grid-cols-3 pt-20 pl-[100px] pb-32">
        
          <div>
              <ul>
             
              <h1 className="text-xl font-bold">Core Courses</h1>
              <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
                  <Link href ="#"><li>Programming Fundamentals</li></Link>
                  <Link href ="#"><li>Web2 Using NextJS</li></Link>
                  <Link href ="#"><li>Earn as You Learn</li></Link>
                  </div>
              </ul>
             
          </div>

          <div>
          <ul>
                
              <h1 className="text-xl font-bold">Advance Courses</h1>
              <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
                  <Link href ="#"><li>Web 3 and Metaverse</li></Link>
                  <Link href ="#"><li>Cloud-Native Computing</li></Link>
                  <Link href ="#"><li>Artificial Intelligence (AI) and Deep Learning</li></Link>
                  <Link href ="#"><li>Ambient Computing and IoT</li></Link>
                  <Link href ="#"><li>Genomics and Bioinformatics</li></Link>
                  <Link href ="#"><li>Network Programmability and Automation</li></Link>
            </div>
              </ul>
          </div>
          <div>
          
                  
              <h1 className="text-xl font-bold mb-4">Social Links</h1>
              <div className="mt-5 flex flex-row gap-1 text-sm md:text-base">
                  <Link href ="#"><FaFacebookF className="w-6 h-6 rounded-full text-white bg-blue-800 pt-1 pb-1"/></Link>
                  <Link href ="#"><FaYoutube className="w-6 h-6 rounded-full text-white bg-red-600 pt-1 pb-1"/></Link>
                  <Link href ="#"><FaXTwitter className="w-6 h-6 rounded-full text-white bg-black pt-1 pb-1"/></Link>
                  <Link href ="#"><FaInstagram className="w-6 h-6 rounded-full text-white bg-pink-600 pt-1 pb-1"/></Link>
                  <Link href ="#"><FaTiktok className="w-6 h-6 rounded-full text-white bg-black pt-1 pb-1"/></Link>
              </div>
              
              <Link href="mailto:education@governorsindh.com" target="_blank" className="text-blue-800 underline flex items-center gap-3 mt-6"><AiOutlineMail className="size-6"/> education@governorsindh.com</Link>
              
          </div>

          
        
      </div>
    )
  }
