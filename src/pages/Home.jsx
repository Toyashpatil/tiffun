import React from 'react'
import Cards from '../components/Cards'
import Text from '../components/Text'

const Home = () => {
  return (
    <div className='flex items-start space-y-4 justify-center bg-slate-500 h-[100vh] w-[100vw] overflow-hidden '>
      <div className='space-y-[50px] p-2 w-[100%]'>
        <div className=' mt-5 text-2xl'>
          <h1>Tea-fun</h1>
        </div>
        <div className='w-[100vw] flex items-center justify-center '>
          <Cards />
        </div>
        <div className='flex items-center justify-center'>
        <div className='bg-white rounded-tr-xl rounded-tl-xl h-[100vh] w-[100vw] flex'>
         <h1>current date</h1> 
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home