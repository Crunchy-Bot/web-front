import React, { useState, useEffect }  from 'react';
import { Link } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'


import { isAuthenticated, user} from "../auth";

const iconArea = process.env.PUBLIC_URL;



function DropDown() {
    const [isToggled, setToggle] = useState(false);

    let svgName;
    let dropdownVis;
    if (isToggled) {
        svgName = "rotate-0"
        dropdownVis = "visible"
    } else {
        svgName = "rotate-90"
        dropdownVis = "invisible"
    }

    let svg = (
        <svg className={`transform ${svgName} transition duration-200`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    )

    return (
        <div className="relative flex items-center" onClick={ () => { setToggle(!isToggled) } }>
            <img className="w-8 h-8 rounded-full object-contain" src={ user.icon } alt=""/>
            <div className="text-white w-5 h-5">
                { svg }
            </div>
            <div className={`absolute pt-2 w-64 transform -translate-x-48 translate-y-32 mt-4 transition duration-200 ${dropdownVis}`}>
                <div className="relative py-1 bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className="absolute top-0 right-0 w-4 h-4 origin-center transform rotate-45 -translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"/>
                    <div className="relative">
                        <div className="w-full px-4 py-2 text-sm text-gray-700 italic font-semibold">
                            <code>Hi there, { user.name }</code>
                        </div>
                        <Link to="/me"
                              className="flex items-center w-full px-4 py-2 font-semibold text-gray-700 whitespace-no-wrap focus:outline-none hover:underline transition duration-300 ease-in-out">
                            <svg className="w-5 h-5 object-contain" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <p className="pb-1 ml-2">My Area</p>
                        </Link>
                        <Link to="/servers"
                              className="flex items-center w-full px-4 py-2 font-semibold text-gray-700 whitespace-no-wrap focus:outline-none hover:underline transition duration-300 ease-in-out">
                            <svg className="w-5 h-5 object-contain" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="pb-1 ml-2">My Servers</p>
                        </Link>
                        <Link to="/logout"
                              className="flex items-center w-full px-4 py-2 font-semibold text-gray-700 whitespace-no-wrap focus:outline-none hover:underline transition duration-300 ease-in-out">
                            <svg className="w-5 h-5 object-contain" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <p className="pb-1 ml-2">Logout</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RenderMobile() {
    const [isToggled, toggleDrop] = useState(false);


    let dropDownHide;
    if (!isToggled) {
        dropDownHide = "hidden"
    } else {
        dropDownHide = "flex flex-col items-start block"
    }

    return (
        <div className="relative w-full">
            <div className="flex items-center justify-between h-16">
                <Link className="flex items-center" to="/home">
                    <img className="object-contain w-12 h-12 object-contain mr-2" src={ `${iconArea}/emojis/hime-good.png` } alt=""/>
                </Link>
                <div className="text-white">
                    <Hamburger toggled={ isToggled } toggle={ toggleDrop }/>
                </div>
            </div>
            <div className="transition duration-300">
                <div className={ dropDownHide }>
                    <div className="px-4 py-2 text-sm text-white italic font-semibold">
                        <code>Hi there, { user.name }</code>
                    </div>
                    <Link className="flex items-center" to="/home">
                        <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-4">
                            Home
                        </h1>
                    </Link>
                    <Link className="flex items-center" to="/commands">
                        <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-4">
                            Commands
                        </h1>
                    </Link>
                    <Link className="flex items-center" to="/faq">
                        <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-4">
                            Faq
                        </h1>
                    </Link>
                    <Link className="flex items-center" to="/support" >
                        <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-4">
                            Support
                        </h1>
                    </Link>
                    <Link className="flex items-center" to="/invite">
                        <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-1 mx-3 border-b-2 border-crunchy">
                            Invite
                        </h1>
                    </Link>
                    <Link to="/me"
                          className="flex items-center px-4 py-2 font-semibold text-white whitespace-no-wrap focus:outline-none hover:underline transition duration-300 ease-in-out">
                        <svg className="w-5 h-5 object-contain" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="pb-1 ml-2">My Area</p>
                    </Link>
                    <Link to="/servers"
                          className="flex items-center px-4 py-2 font-semibold text-white whitespace-no-wrap focus:outline-none hover:underline transition duration-300 ease-in-out">
                        <svg className="w-5 h-5 object-contain" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="pb-1 ml-2">My Servers</p>
                    </Link>
                    <Link to="/logout"
                          className="flex items-center px-4 py-2 font-semibold text-white whitespace-no-wrap focus:outline-none hover:underline transition duration-300 ease-in-out">
                        <svg className="w-5 h-5 object-contain" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <p className="pb-1 ml-2">Logout</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function RenderNormal() {
    let right;
    if (isAuthenticated()) {
        right = <DropDown/>
    } else {
        right = (
            <Link to="/home" className="flex items-center text-white transition duration-200">
                <img className="object-contain w-8 h-8 object-contain mr-1" src={ `${iconArea}/icons/discord-logo-white.svg` } alt=""/>
                <h1 className="text-lg font-semibold outline-none focus:outline-none mb-1 px-1">
                    Login
                </h1>
            </Link>
        )
    }

    return (
        <>
            <div className="flex justify-around space-x-3">
                <Link className="flex items-center" to="/home">
                    <img className="object-contain w-12 h-12 object-contain mr-2" src={ `${iconArea}/emojis/hime-good.png` } alt=""/>
                    <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-1">
                        Home
                    </h1>
                </Link>
                <Link className="flex items-center" to="/commands">
                    <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-1">
                        Commands
                    </h1>
                </Link>
                <Link className="flex items-center" to="/faq">
                    <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-1">
                        Faq
                    </h1>
                </Link>
                <Link className="flex items-center" to="/support">
                    <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-1">
                        Support
                    </h1>
                </Link>
                <Link className="flex items-center" to="/invite">
                    <h1 className="text-white hover:text-gray-300 text-lg font-semibold transition duration-200 outline-none focus:outline-none mb-1 px-1 border-b-2 border-crunchy">
                        Invite
                    </h1>
                </Link>
            </div>
            <div className="flex justify-around">
                { right }
            </div>
        </>
    )
}

function Nav() {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
        }, []);

    useEffect(() => {
        function handleResize() {
          setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        }, []);

    const isMobile = windowDimension <= 640;

    let navContent;
    if (isMobile) {
       navContent = <RenderMobile/>;
    } else {
        navContent = <RenderNormal/>
    }

    return (
        <nav className="shadow-sharp flex justify-between items-center fixed bg-discord w-full z-50 px-12" style={{minHeight: 4 + 'rem'}}>
            { navContent }
        </nav>
    )
}

export default Nav;