import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase"
import { CiMoneyBill } from "react-icons/ci";
import "./main.css"
import { CgProfile } from "react-icons/cg";
import { GrTransaction } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

const Home = () => {
  const navigate = useNavigate()
  const [button1, setbutton1] = useState(false)
  const [button2, setbutton2] = useState(false)
  const [button3, setbutton3] = useState(false)
  const [button4, setbutton4] = useState(false)
  const [button5, setbutton5] = useState(false)
  const [button6, setbutton6] = useState(false)
  const [button7, setbutton7] = useState(false)
  const [color, setColor] = useState("gray")

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

    const handleColor = () => {
      setbutton7(true)
      setColor("gray")
    }
  }, [])
  return (

    <div className="container">
      <div className="container-main">
        <div className='header'>
          <div className="name">
            <div className='greetings'>Welcome!</div>
            <div className='profile-name'>Ramu</div>
          </div>
          <div className="profile-img"><CgProfile size={45} /></div>
        </div>
        <div className="gradient">

          <div className="expense-card">
            <div className="card-header">
              <div> <CiMoneyBill size={34} /> </div>
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
          <div className="green"></div>
          <div className="red"></div>
        </div>
        <div className='contain-body'>
          <div className="add-section">
            <div className="add-header">Add tiffin:</div>
            <div className="add-btns">
              <div className="row1">
                <button className='price glow-on-hover button1'>63</button>
                <button className='price glow-on-hover button2'>83</button>
              </div>
              <div className="row2">
                <button className='price glow-on-hover button3'>125</button>
                <button className='price glow-on-hover button4'>0</button>
              </div>
            </div>
            <div className="add-bill"><button className='glow-on-hover add-bill-btn button5'>Add bill</button></div>
          </div>
          <div className="footer">
            <div className="footer-btns">
              <div className={`home button6}`} onClick={() => {
                setbutton1(false);
                setbutton2(false);
                setbutton3(false);
                setbutton4(false);
                setbutton5(false);
                setbutton6(true);
                setbutton7(false);
              }}>
                <FaHome size={40} color={button6 ? 'white' : 'gray'} />
              </div>
              <div className={`transactions button7`} onClick={() => {
                setbutton1(false);
                setbutton2(false);
                setbutton3(false);
                setbutton4(false);
                setbutton5(false);
                setbutton6(false);
                setbutton7(true);
              }}>
                <GrTransaction size={40} color={button7 ? 'white' : 'gray'} />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>


  )
}

export default Home