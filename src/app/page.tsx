import App from "@/components/slider/Slider";

export default function Home(){
  return(
    
    <div className=" relative max-w-full  lg:w-[100%] h-full overflow-hidden m-0">
      {/* Background-pic div */}
    <div className="absolute  inset-0  h-[807px] w-screen bg-zinc-100  mt-5 overflow-hidden ">
    <img  className="opacity-20 h-full overflow-hidden " src={"/images/background.jpg"} alt="Governor-House" />
    </div>

    <div className=" flex relative  h-[751px] w-full mt-[73px] ">

{/* Text Div */}
<div>

<div className="  relative h-[730px] w-[600px] ml-8 pt-[116px]  ">

<h1 className="flex justify-start  tracking-wider font-extrabold text-6xl  w-[32.55rem] h-[4rem] shadow-2xl shadow-inherit text-[#014D82] ">Governor Sindh</h1>
<h1 className="flex justify-start ml-2 tracking-wider font-medium text-4xl w-[32.75rem] h-[3rem] shadow-2xl shadow-inherit text-[#014D82] ">Kamran Khan Tessori</h1>


<h1 className=" mt-5 ml-2 text-[#2EB6E8] justify-start font-extrabold  tracking-wider text-5xl shadow-2xl shadow-inherit">
  Certified Cloud
  <br />
  Applied Generative AI
  <br />
  Engineer (GenEng)
</h1>
  
<h1 className=" mt-5 ml-2 text-[#014D82] justify-start my-5 font-extrabold text-2xl shadow-2xl shadow-inherit">
Earn up to $5,000 / month
</h1>
<h1 className=" w-96 mt-5 ml-2 text-[#014D82] justify-start my-5 tracking-wider font-extrabold text-2xl shadow-2xl shadow-inherit">
Now admissions are open in Hyderabad
</h1>

{/* button and applicaiton div */}
<div className=" w-[31rem] h-17 flex flex-row items-center gap-20 mt-10">
  <button className="bg-[#044E83] text-white flex items-center justify-center font-extrabold text-1xl tracking-widest z-80 rounded-md  w-52 h-16 text-center shadow-2xl shadow-inherit">
    APPLY NOW
  </button>

  <div className="  text-[#014D82] font-semibold w-33 h-17 text-center flex-col tracking-wider">
    <div className=" flex w-full justify-center text-3xl font-extrabold shadow-2xl shadow-inherit ">562,143</div>
    <div className=" flex w-52 justify-center font-normal text-sm shadow-2xl shadow-inherit"> Accepted Applications</div>
  </div>

</div>
  

</div>
</div>
  {/* Cover-Pic div */}
  <div className="   h-[755px] w-[700px] pt-7 border-collapse overflow-hidden ">
    <img className="   relative flex justify-self-start items-start pl-[100px] h-full max-w-fit  pt-7 " src="/images/governor1.png" alt="Kamran-tessori" />

    </div>
  </div>


 {/* text below pic */}
  <div className=" w-full h-fit mt-0 ">

    <h1 className="   h-[124px] text-3xl m-8 mt-0 flex items-end justify-center text-center font-bold z-50 text-[#044E83] shadow-2xl shadow-inherit">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>


    <p className=" ml-[66px] mr-[66px] -mt-8 pt-10 text-xl  text-justify tracking-normal font-normal z-50 text[#27272A] shadow-2xl shadow-inherit">The pace of technological change is accelerating,big players like Microsoft, Amazon, Google, and OpenAI are winning by providing 
      infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. 
      Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to 
      customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar 
      valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs.
       These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other 
       team members.</p>

  </div>
    {/* Grids */}

    <div className= " grid grid-cols-3 gap-7 m-14 mt-10 ">

    <img className="shadow-2xl shadow-black rounded-xl h-[300px] w-full -z-50  "  src="/images/grid1.jpg" alt="Laptop-boy" />
    <img className="shadow-2xl shadow-black rounded-xl h-[300px] w-full -z-50" src="/images/grid2.jpg" alt="graphics" />
    <img className="shadow-2xl shadow-black rounded-xl h-[300px] w-full -z-50" src="/images/grid3.jpg" alt="class-lab" />
    </div>


{/* swiper */}
    {/* Overflow-pics */}
        <App />


    {/* Core Courses Sequence */}
    <br />
    <div className="  w-[95%] m-auto mt-10 mb-10  ">
    <hr />
      <h1 className="text-4xl flex justify-start items-start text-center ml-5 font-bold text-[#044E83] mt-10  ">Core Courses Sequence</h1>

    {/* grid-pics */}
      <div className="  grid grid-cols-4 gap-5 mt-10 ml-5 ">
        
        {/* pic1 */}
        <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/CCS1.jpg" alt="Programming" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Programming Fundamentals</p>
        </div>

      {/* pic2 */}

        <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/CCS2.jpg" alt="Web2 Using NextJS" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Web2 Using NextJS</p>
        </div>

      {/* pic3 */}

        <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/CCS3.jpg" alt="Earn as You Learn" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Earn as You Learn</p>
        </div>



      
       

      </div>  

    </div>


    {/* Advanced Courses */}
    
    <div className="  w-[95%] m-auto mt-10 mb-10 pb-20  ">
    
    <h1 className="text-4xl flex justify-start items-start text-center ml-5 font-bold text-[#044E83] mt-10  ">Advanced Courses</h1>

    {/* grid-1-pics */}
      <div className="  grid grid-cols-4 grid-rows-2  gap-5 gap-y-16 mt-10 ml-5 ">

          {/* pic1 */}
          <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/AC.1.jpg" alt="AI" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Artificial Intelligence</p>
        </div>

      {/* pic2 */}

        <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/AC2.jpg" alt="Web 3 and Metaverse" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Web 3 and Metaverse</p>
        </div>

      {/* pic3 */}

        <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/AC3.jpg" alt="Cloud-Native Computing" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Cloud-Native Computing</p>
        </div>
    
      {/* pic4 */}

        <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/AC4.jpg" alt="Ambient Computing and IoT" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Ambient Computing and IoT</p>
        </div>

         {/* pic5 */}

      <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/AC5.jpg" alt="Genomics and Bioinformatic" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Genomics and Bioinformatics</p>
        </div>

      {/* pic6 */}

      <div className="rounded-lg bg-white shadow-xl shadow-gray-400 h-[105%] w-[90%]  hover:scale-[1.1] overflow-hidden " >
        <img src="/images/AC6.jpg" alt="Network Programmability" height={700} width={700} />
        <p className="px-4 flex justify-center items-center text-center text-lg text-[#52525B] font-bold h-[30%] ">Network Programmability and Automation</p>
        </div>
  
        </div>
    </div>


    

    
    </div>
    
  )
}

