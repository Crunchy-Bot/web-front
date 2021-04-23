import React, { useState } from 'react';
import { Link } from "react-router-dom";

let counter = 0;

function RecommendedItem(props) {
    let data = props.data;
    let icon = data.icon;
    let link = data.url;
    let msg = data.msg;
    let desc = data.desc;
    let title = data.title;
    let author = data.author;
    let hasViewed = data.viewed;

    const [toggled, setToggle] = useState(false);

    return (
        <div className="flex flex-col bg-discord-dark shadow-small-sharp rounded w-2/3 mx-4 my-2">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-4 mx-4">
                    <button className="text-red-700 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <div className="text-crunchy w-6 h-6">
                        { hasViewed ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                            </svg>
                        )}

                    </div>
                    <h1 className="text-gray-500 font-semibold mx-4">{ author }</h1>
                    { link !== null ? (
                        <Link to={link} className="text-blue-400 hover:text-blue-500 cursor-pointer font-semibold text-lg">
                            { title }
                        </Link>
                    ) : (
                        <h1 className="text-gray-300 cursor-default font-semibold text-lg">
                            { title }
                        </h1>
                    ) }

                </div>
                <div className="mx-4">
                    <button
                        className={`transform ${toggled ? "-rotate-90" : "rotate-0"} transition duration-200 outline-none focus:outline-none text-white h-6 w-6`}
                        onClick={() => setToggle(!toggled)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${!toggled ? "hidden": "flex"} h-64`}>
                <div className="flex items-center mx-4">
                    <img className="w-40 object-contain rounded shadow-small-sharp" src={icon} alt=""/>
                    <div className="flex flex-col w-full h-full mx-4 py-4">
                        <div className="flex pb-3">
                            <h1 className="text-gray-100 font-semibold">Message from { author }</h1>
                        </div>
                        <p className="text-gray-400 text-lg border-l-2 border-crunchy w-full px-2">
                            {msg}
                        </p>

                        <div className="flex pb-3 mt-8">
                            <h1 className="text-gray-100 font-semibold">Recommendation Description</h1>
                        </div>
                        <p className="text-gray-400 text-lg border-l-2 border-crunchy w-full px-2">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


function WatchlistItem(props) {
    let data = props.data;
    let icon = data.icon;
    let link = data.url;
    let desc = data.desc;
    let title = data.title;

    const [toggled, setToggle] = useState(false);
    const [bookmarked, bookmark] = useState(false);

    return (
        <div className="flex flex-col bg-discord-dark shadow-small-sharp rounded w-2/3 mx-4 my-2">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-4 mx-4">
                    <button className="text-red-700 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => bookmark(!bookmarked)}
                        className="outline-none focus:outline-none text-crunchy w-6 h-6">
                        { bookmarked ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        )}
                    </button>
                    { link !== null ? (
                        <Link to={link} className="text-blue-400 hover:text-blue-500 cursor-pointer font-semibold text-lg">
                            { title }
                        </Link>
                    ) : (
                        <h1 className="text-gray-300 cursor-default font-semibold text-lg">
                            { title }
                        </h1>
                    ) }

                </div>
                <div className="mx-4">
                    <button
                        className={`transform ${toggled ? "-rotate-90" : "rotate-0"} transition duration-200 outline-none focus:outline-none text-white h-6 w-6`}
                        onClick={() => setToggle(!toggled)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${!toggled ? "hidden": "flex"} h-64`}>
                <div className="flex items-center mx-4">
                    <img className="w-40 object-contain rounded shadow-small-sharp" src={icon} alt=""/>
                    <div className="flex flex-col w-full h-full mx-4 py-4">
                        <div className="flex pb-3">
                            <h1 className="text-gray-100 font-semibold">Description</h1>
                        </div>
                        <p className="text-gray-400 text-lg border-l-2 border-crunchy w-full px-2">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


function FavouritesItem(props) {
    let data = props.data;
    let icon = data.icon;
    let link = data.url;
    let desc = data.desc;
    let title = data.title;

    const [toggled, setToggle] = useState(false);
    const [bookmarked, bookmark] = useState(false);

    return (
        <div className="flex flex-col bg-discord-dark shadow-small-sharp rounded w-2/3 mx-4 my-2">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-4 mx-4">
                    <button className="text-red-700 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => bookmark(!bookmarked)}
                        className="outline-none focus:outline-none text-crunchy w-6 h-6">
                        { bookmarked ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        )}
                    </button>
                    { link !== null ? (
                        <Link to={link} className="text-blue-400 hover:text-blue-500 cursor-pointer font-semibold text-lg">
                            { title }
                        </Link>
                    ) : (
                        <h1 className="text-gray-300 cursor-default font-semibold text-lg">
                            { title }
                        </h1>
                    ) }

                </div>
                <div className="mx-4">
                    <button
                        className={`transform ${toggled ? "-rotate-90" : "rotate-0"} transition duration-200 outline-none focus:outline-none text-white h-6 w-6`}
                        onClick={() => setToggle(!toggled)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${!toggled ? "hidden": "flex"} h-64`}>
                <div className="flex items-center mx-4">
                    <img className="w-40 object-contain rounded shadow-small-sharp" src={icon} alt=""/>
                    <div className="flex flex-col w-full h-full mx-4 py-4">
                        <div className="flex pb-3">
                            <h1 className="text-gray-100 font-semibold">Description</h1>
                        </div>
                        <p className="text-gray-400 text-lg border-l-2 border-crunchy w-full px-2">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ListItems(props) {
    let entities = props.entities;
    let type = props.typeOfList;

    let rendered = [];
    for (let entity of entities) {
        let item;
        switch (type) {
            case "favourites":
                item = <FavouritesItem key={counter++} data={entity}/>
                break;
            case "watchlist":
                item = <WatchlistItem key={counter++} data={entity}/>
                break;
            case "recommended":
                item = <RecommendedItem key={counter++} data={entity}/>
                break;
        }

        rendered.push(item)
    }

    return (
        <div className="flex flex-wrap">
            { rendered }
        </div>
    )
}

export default ListItems;