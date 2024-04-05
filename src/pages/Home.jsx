import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../firebase"
import { CiMoneyBill } from "react-icons/ci";
import "./main.css"
import { CgProfile } from "react-icons/cg";
import { GrTransaction } from "react-icons/gr";
import { BiSolidCategory } from "react-icons/bi";

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

    <div className="container"> 
    <div className="container-main">
      <div className='header'>
        <div className="name">
        <div className='greetings'>Welcome!</div>
        <div className='profile-name'>Ramu</div>
        </div>
        <div className="profile-img"><CgProfile size={45}/></div>
      </div>
      <div className="expense-card">
        <div className="card-header">
         <div> <CiMoneyBill size={34}/> </div>
          <div className='Current-expense'>Current expense</div>
         </div>
        <div className="total-amount">₹1000</div>
        <div className="card-btns">
          <div className="btn1">
            <div className='btn1-icon'></div>
            <div className='btn1-content'>
              <div className='yesterday'>
              Yesterday
              </div>
              <div className='yesterday-amount'>
              ₹63
              </div>
            </div>
            </div>
            <div className="btn2">
            <div className='btn2-icon'></div>
            <div className='btn2-content'>
              <div className='left'>
              Left
              </div>
              <div className='left-amount'>
              ₹1200
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className="add-section">
        <div className="add-header">Add tiffin:</div>
        <div className="add-btns">
          <div className="row1">
            <button className='price'>63</button>
            <button className='price'>83</button>
          </div>
          <div className="row2">
            <button className='price'>125</button>
            <button className='price'>0</button>
          </div>
        </div>
        <div className="add-bill"><button className='add-bill-btn'>add bill</button></div>
      </div>
      <div className="footer">
        <div className="footer-btns">
        <div className="home"><BiSolidCategory size={45}/></div>
          <div className="transactions"><GrTransaction size={45}/></div>          
        </div>
      </div>
      </div>
      </div>

  )
}

export default Home