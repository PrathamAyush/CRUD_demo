import React, { useState } from 'react'
import {NavLink}from "react-router-dom"
import "./Snav.css"
const Snav = () => {
    const [profile, setProfile] = useState("profile");
    return (
        <>
            <div>
                <nav className="navbar navbar-light ">
                    <NavLink className="navbar-brand fw-bolder" to='#logo'>LOGO</NavLink>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" value={profile} />
                    </form>
                </nav>
                <div className='d-flex mt-4'>
                    <ul className=''>
                        <li><NavLink to="/">Add Student</NavLink></li>
                        <li><NavLink to="/manage">Manage Student</NavLink></li>
                        <li><NavLink to="/login">Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Snav