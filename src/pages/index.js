import Link from "next/link"
import { useAuth } from "@/context/AuthContext";

import { useRouter } from "next/router";
import { LuBoxes } from "react-icons/lu";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { TbShoppingCartCopy } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import AOS from 'aos'
import 'aos/dist/aos.css'




import { PiBuildings, PiGavel, PiNotebook, PiRobot, PiWarning, PiScroll, PiPhoneCall} from "react-icons/pi";
import { useEffect } from "react";


export default function Home() {
  const {token} = useAuth();
  const router = useRouter();

  if (token) {
    router.push('/dashboard');
  }


  const youtubeVideoUrl = "https://www.youtube.com/watch?v=OnTDSLzBO8E"

  const newWidth = 560 * 1.5;
  const newHeight = 315 * 1.5;

  useEffect(()=>{
    AOS.init({duration: 3000});
  },[])

  return (
    <div className="no-scrollbar">
    <div className="bg-[url(/images/banner-1.jpeg)] w-full h-full bg-cover bg-center bg-no-repeat z-0">
    
    <div className="bg-black bg-opacity-75">
    {/* hero section */}
    {/* <div className="hero mx-auto min-h-screen px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl py-11 bg-white" data-aos="fade-right"> */}
      <div className=" grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center rounded-lg shadow-xl" data-aos="fade-right">
        <div className="relative glassmorphism top-[130px] z-0">
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight mt-20">
          Want to make Your Home job easier? We are here <span className="orange_gradient">The HomeHelpers</span>
          </h1>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            {/* <button className="btn btn-primary">
            <Link className="" href="#">
              Try it out
            </Link>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

            </button> */}
            <button className="btn btn-primary">
            <Link className="" href="/signUp">
              What Are You Waiting For??...Join us 
            </Link>
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>

            </button>
            
          </div>

        </div>

         <div className="mt-10 md:mt-0 ">
          <img className="relative rounded-lg shadow-xl top-[130px]" src="/images/banner-1.jpeg" alt="Your Alt Text" />
        </div>
      </div>
    {/* </div> */}


    {/* Second Banner */}
    <div className="hero mx-auto">
    <div className="flex flex-col lg:flex-row-reverse justify-between gap-6 items-center mt-64" data-aos="fade-left">
      <div className="flex-1 text-center lg:text-left lg:pr-16 lg:pl-12 glassmorphism" >
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight">
          We,<span className="blue_gradient">the HomeHelpers</span>, are always ready to help you !!!
        </h2>
      </div>
      <div className="flex-1 mb-6 lg:mb-0 lg:order-1 order-2">
        <img src='/images/banner_2.jpeg' className="w-full h-full rounded-xl shadow-xl" />
      </div>
    </div>
    </div>
    </div>
    </div>
    {/* hero section */}


    {/* video section */}

    

    {/* video section */}




      {/* <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-base-300 text-primary mb-5 flex-shrink-0">
          {/* <Robot size={40} /> */}
          {/* <HiOutlineDocumentReport size={40} />
        </div>
        <div className="flex-grow">
          <h2 className=" text-lg title-font font-medium mb-3">
          Business Reports
          </h2>
          <p className="leading-relaxed text-base">
          Get instant updates on your supply chain, keep an eye on stock movements, check inventory levels, and use the latest data to make intelligent decisions. React quickly to changes and save time and money. One of the critical benefits of inventory management is gaining real-time visibility. You can optimise decision-making with stock transfer reports. With the Godawn web, you can gain real-time visibility and optimise decision-making. You can improve your business efficiency and profitability by using data-driven strategies.
          </p> */}
          {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a> */}
        /
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
    </button> */}
  {/* </div>
</section> */} 



<div className="hero" style={{backgroundImage: 'url(/images/banner-1.jpeg)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="py-16 text-center">
    <div className="glass bg-opacity-60 p-8 rounded-xl">
      <h1 className="mb-5 text-5xl font-bold">What are you waiting for ?</h1>
      <div className="flex justify-center items-center gap-4">
      {/* <PhoneCall size={48} className="mt-2 text-accent" /> */}
      <PiPhoneCall size={48} className="mt-2 text-accent" />
      <h1 className="text-5xl font-bold text-primary">
         7208253036
      </h1>
      </div>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
  
</div>


      

    </div>
  )
}

