import React from 'react'

const Home = () => {
  return (
   <div className="page">
    <div className="card">
        <div className='your-name text-2xl '>
            <h1>Welcome Ramu,</h1>
            </div>
            <div className='expense text-xl'>
             Current expense:<br></br>
             ₹20,000
            </div>
            <div className="add-items">
                <button className='items'>+last bill</button>
                <button className='history'>history</button>
            </div>
            </div>
    </div>
        
    
  )
}

export default Home