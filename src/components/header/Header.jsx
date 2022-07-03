import React, { useState } from 'react'
import '../../css/header.css'
import Logo from '../../assets/Logo.svg'
import iconLogout from '../../assets/icon-logout.svg'
import iconModify from '../../assets/icon-modify-white.svg'
import '../../css/button.css'
import { Link } from 'react-router-dom'




function Header() {

    const [isLogined, setIsLogined] = useState(true)

    const loginHeader = (
        <>
            <li class="profile-img">
                <a href="#">
                    <img src="./assets/profile.jpg" alt="My Page" />
                </a>
            </li>
            <li>
                <a href="#" class="button">
                    <img src={iconModify} alt="" />
                    <span>Write</span>
                </a>
            </li>
            <li>
                <button 
                    class="button white"
                    onClick={() => {
                        setIsLogined(!isLogined)
                    }}
                >
                <img src={iconLogout} alt="" />
                <span>Logout</span>
                </button>
            </li>
        </>
    )

    const logoutHeader = (
        <>
            <li>
                <a href="#" class="button gray" onClick={() => {
                setIsLogined(!isLogined)
                }}>
                <img src="./assets/icon-login.svg" alt="" />
                <span>Login</span>
                </a>
            </li>
            <li class="only-pc">
                <a href="#" class="button gray">
                <img src="./assets/icon-register.svg" alt="" />
                <span>Register</span>
                </a>
            </li>
        </>
    )


    return (
        <header>
        <div class="max-width">
            <h1>
                <Link to='/'>
                    <img src={Logo} alt="My Blog" />
                </Link>
            </h1>
            <ul>
                {isLogined ? loginHeader : logoutHeader}
            </ul>
		</div>
		</header>
    )
}

export default Header
