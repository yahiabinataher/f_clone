import React from 'react'
import profile from "../images/profile.jpg"
import { HiUsers } from "react-icons/hi";
import { RxDotsHorizontal, RxCross2  } from "react-icons/rx";
import { FcLike } from "react-icons/fc";
import { IoMdChatboxes } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { PiShareFatThin } from "react-icons/pi";

const PostShow = () => {
  return (
    <div className='w-[600px] mt-4 bg-white rounded-lg shadow-sm mx-auto'>
    <div className='flex items-center justify-between'>
             <div className='flex gap-4 p-4 '>
                 <div>
                     <img src={profile} className='h-12 w-12 rounded-full object-cover' alt="" />
                 </div>
                 <div>
                     <h4 className='text-2xl font-medium'>Yahia Bin Ataher</h4>
                     <div className='flex items-center gap-3'>
                     <span>1h</span>
                     <HiUsers className='text-slate-500'/>
                     </div>
                 </div>
             </div>
             <div className='flex items-center'>
                 <div className='h-10 w-10 hover:bg-button_bg rounded-full flex justify-center items-center'>
                     <button><RxDotsHorizontal className='text-2xl'/></button>
                 </div>
                 <div className='h-10 w-10 hover:bg-button_bg rounded-full flex justify-center items-center'>
                     <button><RxCross2 className='text-2xl'/></button>
                 </div>
             </div>
    </div>
    <div className='px-4 '>
      <p>মতপার্থক্যের কালো মেঘ সরিয়ে দিতে,  পীর সাহেব চরমোনাইর এই ভূমিকা ইতিহাস হয়ে থাকবে ইনশাআল্লাহ। 
     আজ ২৩/১২/২৩ ঢাকায় ফিলিস্তিন ইস্যুতে পীর সাহেব চরমোনাই এর দল ইসলামি আন্দোলন বাংলাদেশ এর সহযোগী সংগঠনের আহবানে। সকল দল ও মত নির্বিশেষে উলামা মাশায়েখদের নিয়ে সেমিনার হয়।
     এই ধারা থাকুক চলমান ..
     জাতীয় ওলামা মাশায়েখ আইম্মা পরিষদ  
     এগিয়ে যাক বহুদূর </p>
    </div>
    <div className='mt-4'>
     <img src="https://scontent.fruh4-6.fna.fbcdn.net/v/t39.30808-6/412841709_3179937575646905_4234797815442500739_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=b6cMreW39SgAX_o6sEC&_nc_ht=scontent.fruh4-6.fna&oh=00_AfCp8_V3dhhqS1TX0c0J_WCz_ENZrv74-FLZLpAelpnu-A&oe=658C38CF" alt="" />
    </div>
    <div className='flex justify-between items-center mt-4'>
     <div className='px-4 flex items-center gap-2'>
         <FcLike/>
         <span>12</span>
     </div>
     <div className='px-4 flex items-center gap-2'>
         <span>12</span>
         <IoMdChatboxes className='text-2xl text-slate-500'/>
     </div>
     
    </div>
    <div className='px-4 flex justify-between items-center w-5/6 mx-auto border-y-2 mt-4 '>
     <div className='flex items-center hover:bg-button_bg px-8 py-2 gap-2'>
         <AiOutlineLike className='text-2xl'/>
         <span className='text-xl font-medium'>Like</span>
     </div>
     <div className='flex items-center hover:bg-button_bg px-8 py-2 gap-2'>
         <FaComment className='text-2xl'/>
         <span className='text-xl font-medium'>Comment</span>
     </div>
     <div className='flex items-center hover:bg-button_bg px-8 py-2 gap-2'>
         <PiShareFatThin className='text-2xl'/>
         <span className='text-xl font-medium'>Share</span>
     </div>
    </div>
    <div>
         <div className='flex items-center gap-4 p-4 '>
                 <div>
                     <img src={profile} className='h-8 w-8 rounded-full object-cover' alt="" />
                 </div>
                 <div className='w-full'>
                     <input className='w-full rounded-full py-4 border-none outline-none bg-button_bg shadow-sm pl-4 text-slate-700 ' type="text" placeholder='Write Yout Comment' />
                 </div>
                 
         </div>
    </div>
    
 </div>
  )
}

export default PostShow