import React, { useEffect, useState } from 'react'
import './App.css'


const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{
    if(toggle === true){
      setToggle(false);
      console.log(toggle)
    }
    else{
      setToggle(true);
      console.log(toggle)
    }
  }

  return (
    <nav className={toggle ? "sidebar-active" : "sidebar"}>
      <div className='logo-menu'>
        <h2 className='logo'>LOGO</h2>
        <i class='bx bx-menu toggle-btn' onClick={handleToggle}></i>
      </div>

      <ul className='lists'>

        <li className='list-menu active'>
          <a href="">
            <i class='bx bx-grid-alt' ></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className='list-menu'>
          <a href="">
            <i class='bx bx-user' ></i>
            <span>User</span>
          </a>
        </li>
        <li className='list-menu'>
          <a href="">
            <i class='bx bx-chat' ></i>
            <span>Messages</span>
          </a>
        </li>
        <li className='list-menu'>
          <a href="">
            <i class='bx bx-cart-alt' ></i>
            <span>Orders</span>
          </a>
        </li>
        <li className='list-menu'>
          <a href="">
            <i class='bx bx-heart' ></i>
            <span>Saved</span>
          </a>
        </li>
        <li className='list-menu'>
          <a href="">
            <i class='bx bx-cog' ></i>
            <span>Settings</span>
          </a>
        </li>

      </ul>
      
    </nav>
  )
}

export default App