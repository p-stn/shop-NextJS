'use client'

import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'
import LoginUser from './LoginUser'
import Theme from './Theme'
import ShoppingCart from './ShoppingCart'
import Navbar from '@/components/ui/navbar/Navbar'
import NavbarMobile from '@/components/ui/navbar/NavbarMobile'
export default function Header() {
    return (
        <>
            <header className="header">
                {/* Desktop  */}
                <div className="container mt-5 hidden flex-col gap-y-6 lg:flex">
                    {/* TOPBAR  */}
                    <div className="flex-between">                        
                        <SearchBar />                        
                        <Logo />                        
                        <div className="flex items-center gap-x-3">
                            <LoginUser />                            
                            <Theme />                            
                            <ShoppingCart />
                        </div>
                    </div>                    
                    <Navbar/>
                </div>                
                <NavbarMobile/>                                                
            </header >
        </>

    )
}
