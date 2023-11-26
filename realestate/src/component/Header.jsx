import React from 'react';
import Link from "react-router-dom";
import {FaSearch, FaBars} from "react-icons/fa";

export default function Header() {
  return (
    <>
        <header className="sm:relative">
            <div className='sm:flex sm:items-center'>
                <div className='sm:flex sm:items-center'>
                    <FaBars />
                    <img src="" alt="" className="" />
                </div>
                <div>
                    <ul>
                        <Link to="/home">
                            <li>Home</li>
                        </Link>
                        <Link to="/gallery">
                            <li>Gallery</li>
                        </Link>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                        <Link to="/sign-in">
                            <li>Sign-In</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}