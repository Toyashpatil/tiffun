import React from 'react'
import { FaHistory } from "react-icons/fa";

const Cards = () => {
    return (
        <div className='bg-red-500 rounded-xl shadow-xl drop-shadow-xl p-2 space-y-2 h-fit flex items-center justify-center w-[60%]'>
            <div className='w-[100%] flex-col space-y-2 '>
                <div className='flex items-center justify-center'>
                    <h1>Welcome Ramu,</h1>
                </div>
                <div className='flex-col items-center justify-center'>
                    <div className='flex'>
                        <h1>Current expenses:</h1>
                    </div>
                    <div>
                        <h1>200000</h1>
                    </div>
                </div>
                <div className=' flex gap-4 w-[100%] '>
                    <div className='w-[100%] gap-1 flex items-center'>
                       <h1>+</h1> <h1>last bill</h1>
                    </div>
                    <div className=' w-[100%] flex items-center justify-end gap-1'>
                    <FaHistory /><h1>history</h1>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Cards