"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import menu from '../../public/images/icons8-menu.svg';
import logo from "../../public/images/JavaScriptcafe.svg";
import user from '../../public/images/user-icon.svg';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    const updateMenuStatus = () => {
        if (window.innerWidth < 700) {
            setOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateMenuStatus);
    
        return () => window.removeEventListener("resize", updateMenuStatus);
    }, []);
    
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <Image className="logo" src={logo} width={80} height={80}/>
            </div>
            <Link href="/"><p className="navbar_title">JavaScript Cafe</p></Link>
            <Image className="menuicon" src={menu} width={50} height={50} onClick={handleClick} alt="hamburger icon"/>
            {open ?
                <div className="navbar_list mobile">
                    <Link href="/about">About</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="order">Online Order</Link>
                    <Link href="/user">User Profile</Link>
                </div>
                : <div className="navbar_list">
                    <Link href="/about">About</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="order">Online Order</Link>
                    <Link href="/user"><Image className="userIcon" src={user} width={28} height={28} alt="user signin icon" /></Link>
                </div>
            }
            
        </nav>
    );
};

export default NavBar;
