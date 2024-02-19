import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from '../components/Cards'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../firebase"
import Text from '../components/Text'


const Home = () => {
  const navigate= useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        navigate('/login')
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  }, [])
  return (
    <div className='flex items-start space-y-4 justify-center bg-slate-500 h-[100vh] w-[100vw] overflow-hidden '>
      <div className='space-y-[50px] w-[100%]' >
        <div className='space-y-[50px] p-2 w-[100%] '>
          <div className=' mt-5 '>
            <h1>Hello</h1>
          </div>
          <div className='w-[100vw] flex items-center justify-center '>
            <Cards />
          </div>

        </div>
        <div className='bg-white flex rounded-tr-[30px] overflow-hidden rounded-tl-[30px] h-[100vh] items-start mt-10 p-2 '>
          <div className=' p-2 overflow-hidden'>
            <h1>Hello</h1>
          </div>

        </div>
      </div>


    </div>

  )
}

export default Home