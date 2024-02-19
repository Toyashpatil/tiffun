import React from 'react'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <div className='flex items-start space-y-4 justify-center bg-slate-500 h-[100vh] w-[100vw] overflow-hidden '>
      <div className='space-y-4'>
        <div >
          Name
        </div>
        <div className='w-[100vw] flex items-center justify-center '>
          <Cards />
        </div>
      </div>

    </div>
  )
}

export default Home