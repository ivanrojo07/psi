import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import Sidebar from '@/Components/Sidebar';
import Navbar from '@/Components/Navbar';


export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const handleHamburgerClick = () => {
        setShowingNavigationDropdown(!showingNavigationDropdown);
    }

    return (

        <div className="leading-normal tracking-normal" id='main-body'>
            <div className="flex">

                <Sidebar showingNavigationDropdown={showingNavigationDropdown} />

                <div className={
                    showingNavigationDropdown ? 
                    "w-screen bg-gray-100 pl-0 min-h-screen overlay"
                    : "w-full bg-gray-100 pl-0 min-h-screen"
                } id="main-content">
                    <Navbar showingNavigationDropdown={showingNavigationDropdown} auth={auth} onClick={handleHamburgerClick}/>

                    <main className="p-6 bg-gray-100 mb-20">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
