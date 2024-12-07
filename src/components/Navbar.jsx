import React from "react"
import { assets } from "../assets/assets"
const Navbar=()=>{
    return(
        <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img className="w-8 bg-black p-2 rounded-2*1 cursor-pointer"src={assets.left_arrow}alt=""/>
                <img className="w-8 bg-black p-2 rounded-2*1 cursor-pointer"src={assets.right_arrow}alt=""/>

            </div>
            <div className="flex items-center gap-4 absolute top-4 right-4">
                <p className="bg-white text-black text-[13px] px-4 py-1 rounded-2*1 hidden md:block cursor-pointer text-black rounded-full mt-4">Explore Premium</p>
                <p className="bg-black py-1 px-4 rounded-2*1 text-[13px] text-white cursor-pointer">Install App</p>
                <p className="bg-blue-500 text-black w-7 h-7 rounded-full flex items-center justify-center">A</p>
            </div>
        </div>
        <div className="flex items-center gap-2 mt-4 absolute top-17 left-[20rem] flex items-center gap-4 p-4">
            <p className="bg-white text-black px-4 py-1 rounded-full curson-pointer">All</p>
            <p className="text-white px-4py-1 rounded-2*1 cursor-pointer">Music</p>
            <p className="text-white px-4 py-1 rounded-2*1 cursor-pointer">Podcast</p>
        </div>

        </>
    )
}
export default Navbar