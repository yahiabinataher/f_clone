import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { PiVideoFill } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi2";
import { VscGame } from "react-icons/vsc";
import { TbGridDots } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

import profile from "../images/profile.jpg"
import profile1 from "../images/profile1.jpg"
import fav from "../images/favicon.ico"
import { IoMdSettings,IoIosMoon,IoIosArrowForward  } from "react-icons/io";
import { MdHelp,MdFeedback  } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";


const Header = () => {
  const [drop,setDrop] = useState(false)
  
  return (
    <>
    <div className='w-full '>
    <div className="w-[98vw] shadow-md mx-auto">
      <div className='flex justify-between items-center px-4 py-1'>
        <div className="logo flex items-center gap-4">
          <FaFacebook className=' text-5xl text-primary'/>
          <div className="searchbar flex outline-none border-none bg-button_bg  py-3 px-8 rounded-full">
            <AiOutlineSearch className='mt-1 text-2xl text-slate-400'/>
            <input className='bg-button_bg border-none outline-none' type="text" placeholder='Search Facebook' />
          </div>
        </div>
        <div className="menu">
          <ul className='flex grow gap-4 justify-between items-center relative'>
            <li className='w-32 bdti text-center group   active:text-primary  hover:bg-button_bg active:bg-transparent rounded-md flex justify-center items-center flex-col py-4 px-2' >
              <NavLink ><AiOutlineHome className='text-3xl  text-center  '/></NavLink>
              <div className='bg-black/70 text-white hidden group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>Home</div>
              <div className='bdt h-1 w-24 center  absolute -bottom-4 hidden bg-primary'></div>
            </li>
            <li className='w-32 bdti text-center group   active:text-primary  hover:bg-button_bg active:bg-transparent rounded-md flex justify-center items-center flex-col py-4 px-2' >
              <NavLink ><PiVideoFill className='text-3xl  text-center  '/></NavLink>
              <div className='bg-black/60 text-white hidden group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>Video</div>
              <div className='bdt h-1 w-24 center  absolute -bottom-4 hidden bg-primary'></div>
            </li>
            <li className='w-32 bdti text-center group   active:text-primary  hover:bg-button_bg active:bg-transparent rounded-md flex justify-center items-center flex-col py-4 px-2' >
              <NavLink ><FiShoppingBag className='text-3xl  text-center  '/></NavLink>
              <div className='bg-black/60 text-white hidden group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>MarkerPlace</div>
              <div className='bdt h-1 w-24 center  absolute -bottom-4 hidden bg-primary'></div>
            </li>
            <li className='w-32 bdti text-center group   active:text-primary  hover:bg-button_bg active:bg-transparent rounded-md flex justify-center items-center flex-col py-4 px-2' >
              <NavLink ><HiUserGroup className='text-3xl  text-center  '/></NavLink>
              <div className='bg-black/60 text-white hidden group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>Group</div>
              <div className='bdt h-1 w-24 center  absolute -bottom-4 hidden bg-primary'></div>
            </li>
            <li className='w-32 bdti text-center group   active:text-primary  hover:bg-button_bg active:bg-transparent rounded-md flex justify-center items-center flex-col py-4 px-2' >
              <NavLink ><VscGame className='text-3xl  text-center  '/></NavLink>
              <div className='bg-black/60 text-white hidden group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>Games</div>
              <div className='bdt h-1 w-24 center  absolute -bottom-4 hidden bg-primary'></div>
            </li>
            
          </ul>
      

        </div>
        <div className='icon flex gap-3 '>
           <div className='w-10 h-10 bg-button_bg flex group relative  justify-center items-center rounded-full'>
                <TbGridDots className='text-2xl'/>
                <div className='bg-black/70 text-white hidden group-active:hidden  group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>Menu</div>
                
            </div>
           <div className='w-10 h-10 bg-button_bg flex group  relative justify-center items-center rounded-full'>
                <FaFacebookMessenger className='text-2xl'/>
                <div className='bg-black/70 text-white hidden group-active:hidden  group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>Messenger</div>
                <div className='absolute h-6 w-6 rounded-full bg-red-600 text-white flex justify-center items-center -right-1 -top-2'>5</div>
            </div>
           <div className='w-10 h-10 bg-button_bg flex group  relative justify-center items-center rounded-full'>
                <IoNotificationsSharp className='text-2xl'/>
                <div className='bg-black/70 text-white hidden group-active:hidden  group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>Notifications</div>
                <div className='absolute h-6 w-6 rounded-full bg-red-600 text-white flex justify-center items-center -right-1 -top-2'>2</div>
            </div>
           <div className='w-10 h-10 bg-button_bg flex group  relative justify-center items-center rounded-full'>
                <div onClick={() => setDrop((prev) => !prev)}>
                <img src={profile} className='w-10 h-10 rounded-full object-cover' alt="" />
                <div className='bg-black/70 text-white hidden group-active:hidden  group-hover:block group-active:hidden absolute px-4 py-2 rounded-md -bottom-14'>Profile</div>
              <MdKeyboardArrowDown className='absolute h-6 w-6 -bottom-2 -right-2 rounded-full bg-button_bg'/>
                </div>
                {/* dropDown profile */}
                {drop ? (<div className='  flex flex-col gap-1 absolute w-80 z-[10000000] bg-white shadow-sm -bottom-100 top-20 -left-80'>
                  {/* prifile */}
                  <div className='flex flex-col w-[300px] mx-auto mt-4 overflow-hidden bg-white  shadow-xl py-4 gap-1'>
                    <div className='flex flex-col gap-2 pl-4 py-1  w-full hover:bg-button_bg  '>
                      <div className='flex items-center gap-4 '>
                        <img src={profile} alt="" className='w-10 h-10 rounded-full object-cover' />
                        <h2 className='text-xl font-medium'>Yahia Bin Ataher</h2>
                      </div>
                      <div className='h-[0.5px] w-60 bg-slate-500'></div>
                    </div>

                    <div className='flex flex-col gap-2 pl-4 w-full hover:bg-button_bg py-1 px-3'>
                      <div className='flex items-center gap-4'>
                        <img src={fav} alt="" className='w-10 h-10 object-cover rounded-full' />
                        <h2 className='text-xl font-medium'>Varsel</h2>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 pl-4 w-full hover:bg-button_bg py-1 px-3'>
                      <div className='flex items-center gap-4'>
                        <img src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" className='w-10 h-10 rounded-full object-cover' />
                        <h2 className='text-xl font-medium'>Bangla Food</h2>
                      </div>
                    </div>

                    <div className='flex flex-col gap-2 pl-4 py-1 w-full hover:bg-button_bg  '>
                      <div className='flex items-center gap-4 '>
                        <img src={profile1} alt="" className='w-10 h-10 rounded-full object-cover' />
                        <h2 className='text-xl font-medium'>Yahia</h2>
                      </div>
                      <div className='h-[0.5px] w-60 bg-slate-500'></div>
                    </div>
                    <div className='flex items-center justify-center bg-button_bg  mx-auto rounded-md gap-2 pl-4 py-1  w-full hover:bg-button_bg  '>
                        <RiTeamFill/>
                      <button>See All Profile</button>
                    </div>
                   
                  </div>
                  {/* setting */}
                  <div className='py-4 flex flex-col gap-2'>
                    <div className='flex gap-2 justify-between items-center px-4 hover:bg-button_bg'>
                       <div className='flex items-center gap-2  '>
                        <div className='h-12 w-12 bg-button_bg flex justify-center items-center rounded-full '>
                         <IoMdSettings className='text-4xl' />
                        </div>
                        <h2 className='text-lg font-medium'>Setting & Privecy</h2>
                       </div>
                       <IoIosArrowForward className='text-2xl'/>
                    </div>
                    <div className='flex justify-between items-center px-4 hover:bg-button_bg'>
                       <div className='flex items-center gap-2  '>
                        <div className='h-12 w-12 bg-button_bg flex justify-center items-center rounded-full '>
                         <MdHelp className='text-4xl' />
                        </div>
                        <h2 className='text-lg font-medium'>Help & Support</h2>
                       </div>
                       <IoIosArrowForward className='text-2xl'/>
                    </div>
                    <div className='flex justify-between items-center px-4 hover:bg-button_bg'>
                       <div className='flex items-center gap-2  '>
                        <div className='h-12 w-12 bg-button_bg flex justify-center items-center rounded-full '>
                         <IoIosMoon className='text-4xl' />
                        </div>
                        <h2 className='text-lg font-medium'>Display & Accessibalit</h2>
                       </div>
                       <IoIosArrowForward className='text-2xl'/>
                    </div>
                    <div className='flex justify-between items-center px-4 hover:bg-button_bg'>
                       <div className='flex items-center gap-2  '>
                        <div className='h-12 w-12 bg-button_bg flex justify-center items-center rounded-full '>
                         <MdFeedback className='text-4xl' />
                        </div>
                        <h2 className='text-lg font-medium'>Give Feedback</h2>
                       </div>
                    
                    </div>
                    <div className='flex justify-between items-center px-4 hover:bg-button_bg'>
                       <div className='flex items-center gap-2  '>
                        <div className='h-12 w-12 bg-button_bg flex justify-center items-center rounded-full '>
                         <TbLogout className='text-4xl' />
                        </div>
                        <h2 className='text-lg font-medium'>Logout</h2>
                       </div>
                    
                    </div>
                  </div>
                </div>) : null}
            </div>

        </div>
    

      </div>
       
  
    </div>
    </div>
  </>
  )
}

export default Header