import { useState } from "react"
import { Link } from "wouter"


export const Nav = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  const menu = 
    <div className="sm:hidden block absolute top-28 w-full left-0 right-0 bg-gray-500 transition">
      <ul className="text-center text-xl p-4 ">
        <li className="border-y mx-10 p-4 border-gray-300 hover:bg-gray-500 hover:text-white"><Link className={(active) => active ? "current" : ""} href="/">HOME</Link></li>
        <li className="border-b mx-10 p-4 border-gray-300 hover:bg-gray-500 hover:text-white"><Link className={(active) => active ? "current" : ""} href="/bike-typs.jsx">BIKE TYPES</Link></li>
        <li className="border-b mx-10 p-4 border-gray-300 hover:bg-gray-500 hover:text-white"><Link className={(active) => active ? "current" : ""} href="/choose-your-bike.jsx">CHOOSE YOUR BIKE</Link></li>
      </ul>
    </div>
  return (
    <div>
      <div className="hidden sm:flex items-center justify-end">
        <ul className="flex  gap-2">
          <li className="px-2 border-gray-500 border-x-2 hover:text-white hover:border-white cursor-pointer"><Link  className={(active) => active ? "current" : ""} href="/">HOME</Link></li>
          <li className="px-2 border-gray-500 border-x-2 hover:text-white hover:border-white cursor-pointer"><Link  className={(active) => active ? "current" : ""} href="/bike-typs.jsx">BIKE TYPES</Link></li>
          <li className="px-2 border-gray-500 border-x-2 hover:text-white hover:border-white cursor-pointer"><Link  className={(active) => active ? "current" : ""} href="/choose-your-bike.jsx">CHOOSE YOUR BIKE</Link></li>
        </ul>
      </div>
      <div>
        {click && menu}
      </div>
      <button className="block sm:hidden transition" onClick={handleClick}>
        {click ? <p className="hover:text-2xl hover:text-white">X</p> :<p className="hover:text-2xl hover:text-white border-t-2 border-b-2">MENU</p>}
      </button>
    </div>
  )
}