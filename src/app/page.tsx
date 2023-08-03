"use client"
import React from 'react';
import { useEffect } from 'react';



export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {

      const scrollY = window.scrollY;

      const threshold = 100;
      if (scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-cover bg-no-repeat h-screen w-screen absolute top-0 flex justify-center items-center opacity-10 z-10" style={{ backgroundImage: "url('/upper.png')" }}></div>
        <div className="bg-cover bg-no-repeat h-screen w-screen absolute top-0 flex justify-center items-center" style={{ backgroundImage: "url('/back.png')" }}>
          <div className="bg-white md:bg-inherit p-8 rounded bg-opacity-60">
            <span className=" font-bold text-custom-color text-[40px] md:text-[100px] leading-none">LOSANGELES</span>
            <br />
            <span className=" font-bold text-custom-color1 text-[43px] md:text-[108px] leading-none">MOUNTAINS</span>
          </div>
        </div>
        <nav className={`fixed w-full z-20 top-0 left-0 ${isScrolled ? "bg-white" : ""}`}>

          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center">
              <img src="/logo.png" className="h-8 mr-3" alt="Logo" />
              <div className={`self-center  ${isScrolled ? "" : "hidden"}`}>
                <span className=" font-bold text-custom-color text-[15px]">LOSANGELES</span>
                <div className=" font-bold text-custom-color1 text-[16px] mt-[-5px]">MOUNTAINS</div>
              </div>
            </a>
            <div className="flex">
              <button
                onClick={handleMobileMenuToggle}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? "" : "hidden"}`} id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                  <a href="#history" className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent 00 md:p-0  underline ${isScrolled ? "bg-white text-custom-color" : ""}`} aria-current="page">01. History</a>
                </li>
                <li>
                  <a href="#team" className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent 00 md:p-0  underline ${isScrolled ? "bg-white text-custom-color" : ""}`} >02. Team</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
      {/* History Div */}
      <div id='history' className="flex min-h-screen flex-col items-center justify-between">
        <div className=" bg-cover bg-no-repeat h-screen w-screen absolute flex" style={{ backgroundImage: "url('/peak.png')" }}>
          <div className="max-w-screen-xl mx-auto p-4 w-screen xl:w-xl bg-white md:bg-inherit rounded bg-opacity-60">
            <div className="flex ">
              <div className="text-[100px] text-custom-color2">01.</div>
              <div className='text-[50px] text-custom-color1 mt-[35px] ml-[-20px]'>History</div>

            </div>
            <div className='ml-[10px] md:ml-[80px] md:mt-[-30px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci at architecto quod fuga in aliquid temporibus, molestiae rerum repellat perspiciatis suscipit commodi quas magni dicta veniam iusto sit recusandae consequatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci at architecto quod fuga in aliquid temporibus, molestiae rerum repellat perspiciatis suscipit commodi quas magni dicta veniam iusto sit recusandae</div>

          </div>
          <div className='absolute w-screen bottom-0 h-max bg-opacity-50 bg-[#414f6b]'>
            <div className="max-w-screen-xl mx-auto p-4 w-screen xl:w-xl">
              <div className="grid grid-cols-4 gap-4 p-2">
                <div>
                  <img className="h-auto max-w-full rounded-lg" src="/history1.png" alt="" />
                </div>
                <div>
                  <img className="h-auto max-w-full rounded-lg" src="/history2.png" alt="" />
                </div>
                <div>
                  <img className="h-auto max-w-full rounded-lg" src="/history1.png" alt="" />
                </div>
                <div>
                  <img className="h-auto max-w-full rounded-lg" src="/history2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 02. Climb */}
      <div id='team' className="flex min-h-screen max-h-full flex-col items-center justify-between">
        <div className=" bg-cover bg-no-repeat h-screen w-screen">
          <div className="max-w-screen-xl mx-auto p-4 w-screen xl:w-xl">
            <div className="flex ">
              <div className="text-[100px] text-custom-color2">02.</div>
              <div className='text-[50px] text-custom-color1 mt-[35px] ml-[-20px]'>Climb</div>
              <span className='mt-[50px] ml-[30px] hidden md:inline'>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis henderit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</span>
            </div>
            <div className='mt-[-10px] ml-[10px] md:hidden'>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis henderit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</div>


          </div>
         <ul
            className=" flex list-none flex-row flex-wrap border-b-0 pl-0 back-custom"
            role="tablist"
            data-te-nav-ref>
            <div className="max-w-screen-xl mx-auto  w-screen xl:w-xl flex">
              <li role="presentation">
                <a
                  href="#tabs-home"
                  className="p-1 block border-x-0 px-4 py-2 border-b-2 border-t-0 border-transparent text-[#b0b4be]  text-lg font-bold uppercase leading-tight hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:underline data-[te-nav-active]:text-[#414f6b] 
                  data-[te-nav-active]:bg-[#b0b4be]"
                  data-te-toggle="pill"
                  data-te-target="#tabs-home"
                  data-te-nav-active
                  role="tab"
                  aria-controls="tabs-home"
                  aria-selected="true"
                >MOUNTAIN 1</a>
              </li>
              <li role="presentation">
                <a
                  href="#tabs-profile"
                  className="p-1 block border-x-0 py-2 px-4 border-b-2 border-t-0 border-transparent text-[#b0b4be]  text-lg font-bold uppercase leading-tight hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:underline data-[te-nav-active]:text-[#414f6b] 
                  data-[te-nav-active]:bg-[#b0b4be]"
                  data-te-toggle="pill"
                  data-te-target="#tabs-profile"
                  role="tab"
                  aria-controls="tabs-profile"
                  aria-selected="false"
                >MOUNTAIN 2</a>
              </li>
            </div>
          </ul>


          <div className="mb-6">
            <div
              className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
              id="tabs-home"
              role="tabpanel"
              aria-labelledby="tabs-home-tab"
              data-te-tab-active>
              <div className=" bg-cover bg-no-repeat h-screen w-screen flex" style={{ backgroundImage: "url('/Climb.png')" }}>
                <div className="max-w-screen-xl mx-auto  w-screen xl:w-xl flex">
                  <div className="bg-white bg-opacity-70 flex flex-col h-max mt-20 md:mt-40 w-[350px] md:w-[500px] pl-10 pr-10 pb-10 md:ml-20 ">
                    <div className="text-[50px] font-bold text-custom-color1 pt-2">SCHEDULE</div>
                    <div className='flex justify-between'>
                      <div>
                        25 Nov 2016
                      </div>
                      <div>
                        Vestibulum viverra
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div>
                        25 Nov 2016
                      </div>
                      <div>
                        Vestibulum viverra
                      </div>
                    </div >
                    <div className='flex justify-between pt-8'>
                      <div>
                        25 Nov 2016
                      </div>
                      <div>
                        Vestibulum viverra
                      </div>
                    </div>
                    <div className='flex justify-between pt-8'>
                      <div >
                        25 Nov 2016
                      </div>
                      <div>
                        Vestibulum viverra
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div
              className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
              id="tabs-profile"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab">
              <div className=" bg-cover bg-no-repeat h-screen w-screen  flex" style={{ backgroundImage: "url('/Climb.png')" }}>
                <div className="max-w-screen-xl mx-auto  w-screen xl:w-xl flex">
                  <div className="bg-white bg-opacity-70 flex flex-col h-max mt-20 md:mt-40 w-[350px] md:w-[500px] pl-10 pr-10 pb-10 md:ml-20 ">
                    <div className="text-[50px] font-bold text-custom-color1 pt-2">SCHEDULE</div>
                    <div className='flex justify-between'>
                      <div>
                        25 Nov 2016
                      </div>
                      <div>
                        Vestibulum viverra
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div>
                        25 Nov 2016
                      </div>
                      <div>
                        Vestibulum viverra
                      </div>
                    </div >
                    <div className='flex justify-between pt-8'>
                      <div>
                        25 Nov 2016
                      </div>
                      <div>
                        Vestibulum viverra
                      </div>
                    </div>
                    <div className='flex justify-between pt-8'>
                      <div >
                        25 Nov 2016
                      </div>
                      <div>
                        Vestibulum viverra
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 

          </div>
        </div>
      </div>

      {/* footer */}
      <div className='flex flex-col items-center justify-between mt-44'>
        <div className='w-full bg-[#414f6b] text-white py-4 bottom-0'>
          <div className="max-w-screen-xl mx-auto p-4 w-screen xl:w-xl flex md:flex-row flex-col justify-between items-center">
          <div >
              <a href="" className="flex items-center">
                <img src="/logo.png" className="h-8 mr-3" alt="Logo" />
                <div className={`self-center  ${isScrolled ? "" : "hidden"}`}>
                  <span className=" font-bold text-white text-[15px]">LOSANGELES</span>
                  <div className=" font-bold text-white text-[16px] mt-[-5px]">MOUNTAINS</div>
                </div>
              </a>
            </div>
            <div>
              COPYRIGHT 2016. ALL RIGHTS RESERVED
            </div>
          </div>
         
        </div>
      </div>

    </>
  )
}
