import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';


function ShowListingNav() {
    return (
        <div className='z-10 flex bg-blue-700 fixed top-0 w-[100vw] h-[4rem] text-white items-center gap-10 px-5 md:px-16'>
            <div>
                <Link onClick={() => window.history.back()} > <IoArrowBack className='text-3xl ' /></Link>
            </div>
            <div>
                <h2 className='text-2xl '>𝑴𝒆𝒔𝒔𝒂𝒈𝒆𝒔</h2>
            </div>
            
        </div>
    )
}

export default ShowListingNav