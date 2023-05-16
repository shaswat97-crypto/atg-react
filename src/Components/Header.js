import React from 'react'
import './header.css'
import logo from '../asstes/wholelogo.png'
import search from '../asstes/search.png'
import dropdown from '../asstes/dropdown.png'

function Header() {
  return (
    <div className='header'>
        <div className="cont">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="search">
                <div className="searchicon">
                    <img src={search} alt="" />
                </div>
                <input type="text" placeholder='Search for your favourite groups in ATG' />
            </div>
            <div className="account">
                <div className="accounttext">
                    Create account. <span>It's free!</span>
                </div>
                <div className="dropdown">
                    <img src={dropdown} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header