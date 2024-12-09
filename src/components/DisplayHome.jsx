import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";

const DisplayHome = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        // Scroll down to the bottom when the width is reduced
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    };

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      {/* Main Container */}
      
        {/* Header */}
        

        {/* Grid Container */}
        <div className="mb-4">
            {/* <h1 className="my-5 font-bold text-2xl">Features Charts</h1> */}
            </div>
        <div
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-15 gap-12 justify-items-start items-start overflow-y-auto max-h-[80vh]"
        >
          {albumsData.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-2 overflow-auto">
              <AlbumItem
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            </div>
          ))}
      
      </div>
    </>
  )
}

export default DisplayHome;




// const DisplayHome=()=>{
//     return(
//         <>
//         <Navbar/>
//         <div className="mb-4">
//             <h1 className="my-5 font-bold text-2xl">Features Charts</h1>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-y-auto">
//                 {albumsData.map((item, index) => (
//                     <div key={index} className="flex flex-col">
//                         <AlbumItem
//                             name={item.name}
//                             desc={item.desc}
//                             id={item.id}
//                             image={item.image}
//                             />
//             </div>
//     ))}
//   </div>
//             {/* <div className="flex absolute-right overflow-auto">
//                 {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
//             </div> */}
//         </div>
//         </>
//     )
// }
// export default DisplayHome,
// export default ResponsiveAlbumGrid,