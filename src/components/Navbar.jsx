import React from "react"
import { assets } from "../assets/assets"
const Navbar=()=>{
    return(
        <>
        <div className="h-[12%] static px-4 bg-black flex justify-between items-center font-semibold">
        
        {/* flex items-center gap-2 */}
            <div className="flex flex-wrap items-center gap-2 absolute top-5 left-50">
                <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt=""/>
                <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt=""/>

            </div>
            <div className="flex items-center gap-4 absolute top-4 right-4">
                <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer text-black rounded-2xl mt-4">Explore Premium</p>
                <p className="bg-black py-1 px-3 rounded-2xl text-[15px] text-white cursor-pointer">Install App</p>
                <p className="bg-blue-500 text-black w-7 h-7 rounded-full flex items-center justify-center">A</p>
            </div>

            <div className="flex items-center gap-2 pl-8 mt-4 absolute top-10 left-1/6 cursor pointer">
            {/* flex item-center gap-3 pl-8 cursor-pointer */}
            <p className="bg-white text-black px-4 py-1 rounded-2xl curson-pointer">All</p>
            {/* bg-black change this */}
            <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Music</p>
            <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
        </div> 

        </div>
        {/* absolute top-0 left-80  flex items-center gap-2 mt-4 relative top-0 left-0*/}
       

        </>
    )
}
export default Navbar