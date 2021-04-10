import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";

import {parseTagBitflags} from "../utils/BitFlags";

const iconArea = process.env.PUBLIC_URL;

let counter = 0;

function Toggles(props) {
    counter++

    const link = props.url;
    const favourite = props.favourite;
    const watchlist = props.watchlist;

    let [isFavourite, toggleFavourite] = useState(favourite);
    let [isWatchlist, toggleWatchlist] = useState(watchlist);

    const onInfoClick = () => {
        document.location.href = link;
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
                <span>Take me there</span>
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


export default function ResultCard(props) {
    const [isHovered, setHover] = useState(false);
    const [showContent, setContent] = useState(false);
    const [hideSiblings, setSiblings] = useState(false);

    let link = props.url;
    let data = props.data;
    let imgUrl = data.image;
    let title = data.title;
    let desc = data.description;
    let isFavourite = data.isFavourite;
    let isWatchlist = data.isBookmarked;
    // let isRecommended = data.isRecommended;
    let tags = parseTagBitflags(data.tags).join(", ");

    let imgStyle;
    let blockStyle;
    if (isHovered) {
        imgStyle = "relative h-full w-full rounded object-cover slow-grow z-20 shadow-small-sharp transform -translate-x-4 -translate-y-4";
        blockStyle = { width: 32 + 'rem' };
    } else {
        imgStyle = "relative h-full w-full rounded object-cover slow-grow z-20 transform translate-x-0 translate-y-0";
        blockStyle =  { width: 0 + 'rem' };
    }

    return (
        <div className={hideSiblings ? "hide-next-siblings" : ""}>
            <div className="relative rounded w-40" onMouseEnter={ () => {
                setSiblings(true);
                setHover(true);
                setTimeout(() => setContent(true), 400);
            }} onMouseLeave={ () => {
                setTimeout(() => setSiblings(false), 200);
                setHover(false);
                setContent(false)
            } } style={{height: 15 + 'rem'}}>
                <img className={imgStyle} src={ imgUrl } alt=""/>
                <div className="absolute bg-discord-dark shadow-small-sharp top-0 left-0 h-full z-10 slow-grow rounded pl-40" style={blockStyle}>
                    { (showContent && isHovered) ? (
                        <div className="flex flex-col w-full h-full pt-2 pb-4">
                            <div className="flex flex-grow flex-wrap justify-between w-full py-2 h-16">
                                <h1 className="text-white font-bold text-lg border-b-2 border-crunchy">{title}</h1>
                                <div>
                                    <Toggles url={ link } favourite={ isFavourite } watchlist={ isWatchlist } />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-full">
                                <p className="text-white text-sm pr-2">
                                    { desc }
                                </p>
                                <div className="flex">
                                    <div className="text-sm text-white pt-1">
                                        <code>
                                            { tags }
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

