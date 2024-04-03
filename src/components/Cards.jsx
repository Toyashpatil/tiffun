import React from 'react'
import { FaHistory } from "react-icons/fa";

const Cards = () => {
    return (
        <div className='card_bg rounded-xl shadow-xl   p-2 space-y-2 h-fit flex items-center justify-center w-[60%]'>
            <div className='w-[100%] flex-col space-y-2 '>
                <div className='flex items-center justify-center'>
                    <h1 className=' text-xl text-white'>Welcome Ramu</h1>
                </div>
                <div className='flex-col items-center justify-center'>
                    <div className='flex'>
                        <h1 className='text-white'>Current expenses:</h1>
                    </div>
                    <div>
                        <h1 className='text-white'>200000</h1>
                    </div>
                </div>
                <div className=' flex gap-4 w-[100%] '>
                    <div className='w-[100%] gap-1 flex items-center'>
                        <h1 className='text-white'>+</h1> <h1 className='text-white'>last bill</h1>
                    </div>
                    <div className=' w-[100%] flex items-center justify-end gap-1'>
                        <FaHistory className='text-white' /><h1 className='text-white'>history</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cards