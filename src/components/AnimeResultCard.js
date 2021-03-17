import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";

const iconArea = process.env.PUBLIC_URL;

let counter = 0;

function Toggles(props) {
    counter++

    const isAnime = props.isAnime;
    const favourite = props.favourite;
    const watchlist = props.watchlist;

    let [isFavourite, toggleFavourite] = useState(favourite);
    let [isWatchlist, toggleWatchlist] = useState(watchlist);

    const onInfoClick = () => {
        document.location.href = "url";
    }

    const onFavouriteClick = () => {
        toggleFavourite(!isFavourite)
    }

    const onWatchlistClick = () => {
        toggleWatchlist(!isWatchlist)
    }

    return (
        <div className="flex justify-evenly items-center space-x-3 px-4 my-2 xl:my-0 ">
            <div data-tip data-for={`${counter}-btn-1`} onClick={ onInfoClick } className="text-white hover:text-indigo-500 transition duration-200 cursor-pointer object-contain h-6 w-6 float-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
            <ReactTooltip id={`${counter}-btn-1`}>
                <span>{ isAnime ? "Watch on Crunchyroll" : "View on MAL" }</span>
            </ReactTooltip>
            <div data-tip data-for={`${counter}-btn-2`} onClick={ onWatchlistClick } className="text-white hover:text-crunchy transition duration-200 cursor-pointer object-contain h-6 w-6 float-right">
                { isWatchlist ? (
                    <svg className="text-crunchy" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                )}
            </div>
            <ReactTooltip id={`${counter}-btn-2`}>
                <span>{ isWatchlist ? "Remove from watchlist" : "Add to watchlist" }</span>
            </ReactTooltip>

            <div data-tip data-for={`${counter}-btn-3`} onClick={ onFavouriteClick } className="text-white hover:text-red-600 transition duration-200 cursor-pointer object-contain h-6 w-6 float-right">
                { isFavourite ? (
                    <svg className="text-red-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )}
            </div>
            <ReactTooltip id={`${counter}-btn-3`}>
                <span>{ isFavourite ? "Remove from favourites" : "Add to favourites" }</span>
            </ReactTooltip>
        </div>
    )
}

export function AnimeResultCard() {
    return (
        <div className="flex justify-around my-12 xl:my-4 h-32 " style={{minHeight: 4 + 'rem', maxWidth: 460 + 'px'}}>
            <img className="object-contain rounded-lg shadow-embed h-32" src={ `${iconArea}/anime-thumbnails/jjk.jpg` } alt=""/>
            <div className="mt-2 px-4">
                <div className="flex justify-between items-center space-x-4 pr-4">
                    <h1 className="text-white text-xl font-bold border-b-2 border-crunchy">Jujisu Kesien</h1>
                    <div>
                        <Toggles isAnime={ true } favourite={ true } watchlist={ false } />
                    </div>
                </div>
                <p  className="text-white mt-2">
                    Itadori Yuuji is a boy with tremendous physical strength, though
                    he lives a completely ordinary high school life. One day,
                    to save a classmate...
                </p>
            </div>
        </div>
    )
}

export function MangaResultCard() {
    return (
        <div className="flex justify-around my-12 xl:my-4 h-32" style={{minHeight: 4 + 'rem', maxWidth: 460 + 'px'}}>
            <img className="object-contain rounded-lg shadow-embed h-32" src={ `${iconArea}/anime-thumbnails/jjk.jpg` } alt=""/>
            <div className="mt-2 px-4">
                <div className="flex justify-between items-center space-x-4 pr-4">
                    <h1 className="text-white text-xl font-bold border-b-2 border-crunchy">Jujisu Kesien</h1>
                    <div>
                        <Toggles isAnime={ false } favourite={ true } watchlist={ false } />
                    </div>
                </div>
                <p  className="text-white mt-2">
                    Itadori Yuuji is a boy with tremendous physical strength, though
                    he lives a completely ordinary high school life. One day,
                    to save a classmate...
                </p>
            </div>
        </div>
    )
}


