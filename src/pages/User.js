import React, {useState} from 'react';

import Footer from "../components/Footer";
import ListItems from "../components/ListingItems";
import { Link, useLocation } from "react-router-dom";

const iconArea = process.env.PUBLIC_URL;



function UserSettings() {
    const [isPublic, setPublic] = useState(true);
    const [showFav, setFav] = useState(true);
    const [showWatch, setWatch] = useState(true);
    const [showRec, setRec] = useState(true);

    return (
        <div className="flex flex-col text-white space-y-4 w-full h-full px-4 py-4">
            <div className="flex items-center justify-between text-white text-lg font-bold bg-discord-dark rounded shadow-small-sharp w-2/3 p-4">
                <button
                    onClick={() => setPublic(!isPublic)}
                    className="flex flex-col items-center text-center outline-none focus:outline-none w-48 mr-4">

                    <div className={`flex items-center justify-center outline-none focus:outline-none ${isPublic ? 'text-green-600' : 'text-red-600'} rounded w-8 h-8 mr-2`}>
                        { isPublic ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                            </svg>
                        )}
                    </div>
                    Profile {isPublic ? "Public": "Private"}
                </button>
                <div className="flex items-center  border-l-2 border-crunchy pl-4 w-full h-full">
                    <div className="text-gray-400 font-normal">
                        Toggle whether your profile can be
                        viewed by anyone or just yourself.
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between text-white text-lg font-bold bg-discord-dark rounded shadow-small-sharp w-2/3 p-4">
                <button
                    onClick={() => setFav(!showFav)}
                    className="flex flex-col items-center text-center outline-none focus:outline-none w-48 mr-4">

                    <div className={`flex items-center justify-center outline-none focus:outline-none ${showFav ? 'text-green-600' : 'text-red-600'} rounded w-8 h-8 mr-2`}>
                        { showFav ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                            </svg>
                        )}
                    </div>
                    Favourites {showFav ? "Shown": "Hidden"}
                </button>
                <div className="flex items-center  border-l-2 border-crunchy pl-4 w-full h-full">
                    <div className="text-gray-400 font-normal">
                        Toggle whether your favourites can be
                        viewed by anyone or just yourself.
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between text-white text-lg font-bold bg-discord-dark rounded shadow-small-sharp w-2/3 p-4">
                <button
                    onClick={() => setWatch(!showWatch)}
                    className="flex flex-col items-center text-center outline-none focus:outline-none w-48 mr-4">

                    <div className={`flex items-center justify-center outline-none focus:outline-none ${showWatch ? 'text-green-600' : 'text-red-600'} rounded w-8 h-8 mr-2`}>
                        { showWatch ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                            </svg>
                        )}
                    </div>
                    Watchlist {showWatch ? "Shown": "Hidden"}
                </button>
                <div className="flex items-center  border-l-2 border-crunchy pl-4 w-full h-full">
                    <div className="text-gray-400 font-normal">
                        Toggle whether your watchlist can be
                        viewed by anyone or just yourself.
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between text-white text-lg font-bold bg-discord-dark rounded shadow-small-sharp w-2/3 p-4">
                <button
                    onClick={() => setRec(!showRec)}
                    className="flex flex-col items-center outline-none focus:outline-none text-center w-48 mr-4">

                    <div className={`flex items-center justify-center ${showRec ? 'text-green-600' : 'text-red-600'} rounded w-8 h-8 mr-2`}>
                        { showRec ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                            </svg>
                        )}
                    </div>
                    Recommended {showRec ? "Shown": "Hidden"}
                </button>
                <div className="flex items-center  border-l-2 border-crunchy pl-4 w-full h-full">
                    <div className="text-gray-400 font-normal">
                        Toggle whether your recommended can be
                        viewed by anyone or just yourself.
                    </div>
                </div>
            </div>
        </div>
    )
}


function User(props) {

    let user = {
        id: '14923423752311434224',
        name: 'ChillFish8',
        discriminator: '1234',
    }

    let example = {
        title: "Osamake: Romcom Where The Childhood Friend Won't Lose",
        icon: "https://cdn.crunchy.gg/thumbnails/anime/I0coXW1xRHwmOkk.jpg",
        msg: "Sup fucker, hope you enjoy this :P",
        desc: "Insert some generic anime description here",
        url: "/anime/I0coXW1xRHwmOkk",
        author: "marloso2",
        viewed: false,
    };

    let example2 = {
        title: "Darling in the FRANXX",
        icon: "https://cdn.crunchy.gg/thumbnails/anime/I0coXW1xRHwmOkk.jpg",
        msg: "Sup fucker, hope you enjoy this :P",
        desc: "Insert some generic anime description here",
        url: null,
        author: "marloso2",
        viewed: true,
        bookmarked: true,
    };

    const loc = useLocation();
    let maybeTarget = new URLSearchParams(loc.search).get('target');

    if (maybeTarget === null) {
        maybeTarget = "favourites";
    }

    let render;
    switch (maybeTarget) {
        case "watchlist":
            render = <ListItems entities={[example, example2]} typeOfList="watchlist"/>
            break;
        case "recommended":
            render = <ListItems entities={[example, example2]} typeOfList="recommended"/>
            break;
        case "settings":
            render = <UserSettings/>
            break;
        default:
            render = <ListItems entities={[example, example2]} typeOfList="favourites"/>
            break;
    }


    let id = props.id;

    const activeTabCss = "flex items-center text-white text-lg font-semibold mx-4 border-b-2 border-crunchy";
    const defaultTabCss = "flex items-center text-white text-lg font-semibold mx-4 border-b-2 border-transparent";

    return (
        <div className="flex flex-col justify-between bg-gradient-about min-h-screen">
            <div className="grid grid-cols-4 grid-rows-1 gap-4 w-full px-8 z-20">
                <div className="flex flex-col items-center col-span-1">
                    <img
                        className="self-center h-64 h-64 object-contain rounded-full shadow-small-sharp"
                        src={`${iconArea}/cf-512.webp`}
                        alt=""
                        loading="lazy"
                    />

                    <div className="flex flex-col py-4 w-64">
                        <h1 className="text-white text-2xl font-bold">
                            { user.name }<span className="text-gray-500 text-normal font-medium">#{ user.discriminator }</span>
                        </h1>
                        <h1 className="text-gray-500">
                            { user.id }
                        </h1>
                    </div>

                    <div className="flex flex-col text-white text-lg space-y-1 py-4">
                        <h1 className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <code className="text-crunchy pr-1">32</code>
                            Recommendations to
                            <code className="text-crunchy px-1">3</code>
                            users
                        </h1>
                        <h1 className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <code className="text-crunchy pr-1">32</code>
                            Items in recommended
                        </h1>
                        <h1 className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <code className="text-crunchy pr-1">12</code>
                            Items in watchlist
                        </h1>
                        <h1 className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <code className="text-crunchy pr-1">4</code>
                            Items in favourites
                        </h1>

                    </div>
                </div>
                <div className="flex flex-col col-span-3 mt-12">
                    <div className="flex mx-2 mb-2">
                        <Link
                            to="?target=favourites"
                            className={maybeTarget === "favourites" ? activeTabCss : defaultTabCss}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Favourites
                        </Link>
                        <Link
                            to="?target=watchlist"
                            className={maybeTarget === "watchlist" ? activeTabCss : defaultTabCss}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Watchlist
                        </Link>
                        <Link
                            to="?target=recommended"
                            className={maybeTarget === "recommended" ? activeTabCss : defaultTabCss}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Recommended
                        </Link>
                        <Link
                            to="?target=settings"
                            className={maybeTarget === "settings" ? activeTabCss : defaultTabCss}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            Settings
                        </Link>
                    </div>
                    { render }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default User;