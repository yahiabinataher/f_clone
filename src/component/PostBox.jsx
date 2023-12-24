import React from 'react'
import profile from "../images/profile.jpg"
import { FaCirclePlus } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FcGallery } from "react-icons/fc";
import { FcNightPortrait } from "react-icons/fc";
import { HiUsers } from "react-icons/hi";
import { RxDotsHorizontal, RxCross2  } from "react-icons/rx";
import { FcLike } from "react-icons/fc";
import { IoMdChatboxes } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";
import PostShow from './PostShow';

const arrStory = [
    {
        profile:"https://scontent.fruh4-4.fna.fbcdn.net/v/t39.30808-1/366635334_1544522639412057_1836711408825886282_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=_-DsasyihRkAX9P-lpV&_nc_ht=scontent.fruh4-4.fna&oh=00_AfA-Qt25SFaawzxg1cJIk6BbtXfiligBrgUG_f3-dKY5Tg&oe=658CD5FB",
        photo:"https://scontent.fruh4-4.fna.fbcdn.net/v/t39.30808-6/315005200_1376119289585727_7389254983743620908_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=p-xkBJ_jtFoAX-lv-sw&_nc_ht=scontent.fruh4-4.fna&oh=00_AfBec568X3zNT9sM6B5H5Dn1_OdQFjARNTHOQVzxcMRyxQ&oe=658C4F73",
        name:"Aminul Islam"
    },
    {
        profile:"https://scontent.fruh4-3.fna.fbcdn.net/v/t39.30808-1/369677037_362437672893193_1710538654979323314_n.jpg?stp=c0.22.240.240a_dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=11e7ab&_nc_ohc=gsT6HYcvFHMAX_giD_j&_nc_oc=AQnzOmGuR6l6lWCPkf0-0Z_RPXG6a_a9BQZoKBbFpC0j6Z44KFmXekXPa3SWel4JFnM&_nc_ht=scontent.fruh4-3.fna&oh=00_AfDR9S2bSNH0G0G9z96JykycIMqHVva3Vw62vefkH58Pvg&oe=658BB71A",
        photo:"https://scontent.fruh4-6.fna.fbcdn.net/v/t39.30808-6/338310433_1929583017396765_2481607779176333780_n.png?_nc_cat=108&ccb=1-7&_nc_sid=783fdb&_nc_ohc=7X7lshhXkuoAX-SPhPl&_nc_oc=AQkLS7m8ovmi9m1zalat4Iq5vRZVbHSWGSqfGX7ZxR0K2vPE7gUAs5KoROViwTGzEQU&_nc_ht=scontent.fruh4-6.fna&oh=00_AfACn5ljK3jmsyq3SjO9bGLuJ_Vu4z1B-4XJvUiBdCbN2w&oe=658BDE4B",
        name:"Rahi Ahmed"
    },
    {
        profile:"https://scontent.fruh4-6.fna.fbcdn.net/v/t39.30808-6/406230554_895718712069606_5154531605752497212_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=783fdb&_nc_ohc=Hf7FthNLFGcAX_l0OQ5&_nc_ht=scontent.fruh4-6.fna&oh=00_AfDeDrNgK54GI_NEFxLCDIkyEtkZ_yL4jeBxUycUv1rMrA&oe=658C9282",
        photo:"https://scontent.fruh4-5.fna.fbcdn.net/v/t39.30808-6/401027738_885712819736862_4378922546912647515_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=WCWScg2Oxf4AX_w-U0g&_nc_ht=scontent.fruh4-5.fna&oh=00_AfCwwFsvZ4M3t8T3zO12qsdBsUYwOo0EfXbvpmtfdStnQQ&oe=658C44A2",
        name:"MD Israfil"
    }
]


const PostBox = () => {
  return (
    <div className=' mt-6'>
        {/* story */}
        <div className='flex  gap-4'>
            <div className='h-[280px] w-[170px] bg-white shadow-sm rounded-lg relative'>
                <img src={profile} className='object-cover  overflow-hidden rounded-lg h-56' alt="" />
                <div className='flex justify-center items-center h-12 w-12 bg-white absolute -mt-6 ml-16 rounded-full'>
                    <FaCirclePlus className='text-primary text-center text-4xl'/>
                </div>
                <h4 className='text-center font-normal mt-6'>Create Story</h4>
            </div>

            {arrStory.map((data,index) => {
                return(<div key={index} className='h-[280px] w-[170px] bg-no-repeat bg-cover bg-center bg-blend-soft-light shadow-sm rounded-lg relative' style={{backgroundImage:`url(${data.photo})`}}>
                <div className='flex justify-center items-center h-12 w-12 bg-primary absolute mt-3 ml-8 rounded-full'>
                   <img src={data.profile} className='h-9 w-9 object-cover rounded-full' alt="" />
                </div>
                <h4 className='text-center mt-60 text-white font-semibold text-lg'>{data.name}</h4>
            </div>)
            })}
        </div>
        {/* post */}
        <div className='w-[600px] h-[150px] mt-4 bg-white rounded-lg shadow-sm mx-auto'>
            <div >
                <div className='px-4 flex flex-col gap-3'>
                    <div className='flex items-center gap-3 pt-4'>
                        <img src={profile} className='w-12 h-12 object-cover rounded-full' alt="" />
                        <button className='bg-button_bg rounded-full cursor-pointer w-full py-3 text-start pl-4 font-semibold text-slate-600 text-xl'>Whats is your mind Yahia!</button>

                    </div>
                    <div className='h-[1px] w-full bg-slate-200'></div>
                </div>

                <div className='mt-4 px-4'>
                    <div className='flex gap-4 items-center justify-center'>
                        <div className='flex items-center gap-1 px-4 bg-red-200 hover:bg-black cursor-pointer py-2 rounded-md'>
                            <BiSolidCameraMovie className='text-2xl text-red-600'/>
                            <h4 className='text-lg font-medium'>Live Video</h4>
                        </div>
                        <div className='flex items-center gap-1 hover:bg-button_bg px-4 py-2 rounded-md'>
                            <FcGallery className='text-2xl text-red-600'/>
                            <h4 className='text-lg font-medium'>Photo/Video</h4>
                        </div>
                        <div className='flex items-center gap-1 hover:bg-button_bg px-4 py-2 rounded-md'>
                            <FcNightPortrait className='text-2xl text-red-600'/>
                            <h4 className='text-lg font-medium'>Felling/Activity</h4>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        {/* post content */}
       <PostShow/>
       <PostShow/>
       <PostShow/>
    </div>
    
  )
}

export default PostBox