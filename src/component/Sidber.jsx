import React, { useState } from 'react'
import { RiTeamFill } from "react-icons/ri";
import { FcClapperboard } from "react-icons/fc";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import img from "../images/profile.jpg"
import friends from "../images/friends.png"
import memorias from "../images/memories.png"
import save from "../images/save.png"
import video from "../images/facebook.png"
import group from "../images/group.png"
import market from "../images/market.png"
import data from "../images/data.png"
import plant from "../images/plant.png"
import events from "../images/events.png"
import feed from "../images/feed.png"
import love from "../images/love.png"
import puzzle from "../images/puzzle.png"
import messenger1 from "../images/messenger1.png"
import messenger from "../images/messenger.png"
import cards from "../images/cards.png"
import game from "../images/game.png"
import pages from "../images/pages.png"


const Sidber = () => {
const arr1 =[
 
  {
    name : "Ads Manager",
    imageUrl :data
  },
  {
    name : "Climate Science Center  ",
    imageUrl :plant
  },
  {
    name : "Events ",
    imageUrl :events
  },
  {
    name : "Feeds",
    imageUrl :feed
  },
  {
    name : "Fundraisers",
    imageUrl :love
  },
  {
    name : "Gaming Video",
    imageUrl :puzzle
  },
  {
    name : "Messenger",
    imageUrl :messenger1
  },
  {
    name : "Messenger Kids",
    imageUrl :messenger
  },
  {
    name : "Pages",
    imageUrl :pages
  },
  {
    name : "Orders And Payment",
    imageUrl :cards
  },
  {
    name : "Play Games",
    imageUrl :game
  },
]
const arr2 =[
 
  {
    name : "Yahia Bin Ataher ",
    imageUrl :img
  },
  {
    name : "Friends ",
    imageUrl :friends
  },
  {
    name : "Video ",
    imageUrl :video
  },
  {
    name : "Memories",
    imageUrl :memorias
  },
  {
    name : "Save",
    imageUrl :save
  },
  {
    name : "Group",
    imageUrl :group
  },
  {
    name : "Market Place",
    imageUrl :market
  },
]
const arr3 =[
 
  {
    name : "Candy Clash ",
    imageUrl :'https://e7.pngegg.com/pngimages/660/899/png-clipart-candy-crush-saga-candy-crush-soda-saga-bubble-witch-2-saga-candy-crush-jelly-saga-farm-heroes-saga-candy-crush-miscellaneous-game.png'
  },
  {
    name : "Sorobindo",
    imageUrl :'https://sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png'
  },
  {
    name : "Tailwind Css",
    imageUrl :'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png'
  },
  {
    name : "Video ",
    imageUrl :video
  },

]

const [menu,setMenu] = useState(true)



  return (
    <>
   
    <div className='flex flex-col gap-1  px-4  '>
      {/* sidebar */}
    <div>
      {arr2.map((data,index) => {
      return (
        <div key={index} className='flex items-center gap-4 cursor-pointer  hover:bg-button_bg pl-4 py-2 rounded-l-md'>
          <img className='w-9 h-9 rounded-full object-cover'  src={data.imageUrl} alt="" />
          <h1 className='text-lg font-medium'>{data.name}</h1>
        </div>
      )
    })}

   {menu ? (<div onClick={() => setMenu(false)}  className='flex items-center gap-4 cursor-pointer  hover:bg-button_bg pl-4 py-2 rounded-l-md'>
         <div className='h-8 w-8  bg-button_bg rounded-full flex items-center justify-center'>
              <MdKeyboardArrowDown className='text-lg'/>
         </div>
          <h1 className='text-lg font-medium'>See More</h1>
    </div> ) : (
  <div >
    {arr1.map((data,index) => {
      return (
        <div key={index} className='flex items-center gap-4 cursor-pointer  hover:bg-button_bg pl-4 py-2 rounded-l-md'>
          <img className='w-9 h-9 rounded-full object-cover'  src={data.imageUrl} alt="" />
          <h1 className='text-lg font-medium'>{data.name}</h1>
        </div>
      )
    })}
    <div onClick={() => setMenu(true)}  className='flex items-center gap-4 cursor-pointer  hover:bg-button_bg pl-4 py-2 rounded-l-md'>
         <div className='h-8 w-8  bg-button_bg rounded-full flex items-center justify-center'>
              <MdKeyboardArrowUp className='text-lg'/>
         </div>
          <h1 className='text-lg font-medium'>See Lass</h1>
    </div> 
    </div>)}
    <div className='h-[1px] w-full bg-slate-400'></div>
    </div>

    {/* shortscurts */}
    <div flex flex-col gap-1 w-80 px-4>
      <h4 className='text-xl font-medium'>Your Shortcart</h4>
      {arr3.map((data,index) => {
      return (
        <div key={index} className='flex items-center gap-4 cursor-pointer  hover:bg-button_bg pl-4 py-2 rounded-l-md'>
          <img className='w-9 h-9 rounded-full object-cover'  src={data.imageUrl} alt="" />
          <h1 className='text-lg font-medium'>{data.name}</h1>
        </div>
      )
    })}
    </div>
    </div>
   
    </>
  )
}

export default Sidber