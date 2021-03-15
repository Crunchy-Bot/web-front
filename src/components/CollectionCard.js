import React, { useState, useEffect }  from 'react';
import ReactTooltip from 'react-tooltip';

let counter = 0;

function Character(props) {
    counter++

    const name = props.name;
    const icon = props.icon;

    return (
        <div className="inline-block">
            <img data-tip data-for={`${counter}`} className="object-contain rounded-full h-8 xl:h-10 w-8 xl:w-10" src={ icon } alt=""/>
            <ReactTooltip id={`${counter}`}><span>{ name }</span></ReactTooltip>
        </div>
    )
}


function Card(props) {
    const info = props.info;

    const pendingCharacter = info.pendingCharacters;
    const title = info.title;
    const thumb = info.thumb;
    const desc = info.desc;
    const rating = info.rating;
    const url = info.url;
    const isAlreadyBookmarked = info.isBookmarked;
    const isAlreadyFavourites = info.isFavourite;


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

    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(
            <svg key={ i } className="object-contain w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        )
    }


    let [isFavourite, toggleFavourite] = useState(isAlreadyBookmarked);
    let [isWatchlist, toggleWatchlist] = useState(isAlreadyFavourites);

    const onInfoClick = () => {
        document.location.href = url;
    }

    const onFavouriteClick = () => {
        toggleFavourite(!isFavourite)
    }

    const onWatchlistClick = () => {
        toggleWatchlist(!isWatchlist)
    }

    let tempCounter = 0;
    let renderedCharacters = [];
    for (let character of pendingCharacter) {
        tempCounter++;
        renderedCharacters.push(<Character key={ tempCounter } name={ character.name } icon={ character.icon }/>)
    }

    const characters = (
        <div className="w-full px-4">
            <div className="flex">
                <h1 className="text-white font-semibold italic border-b-2 border-crunchy">Collectable Characters:</h1>
            </div>
            <div className="flex w-full px-4 py-2 space-x-1">
                { renderedCharacters }
            </div>
        </div>
    );

    const description = (
        <p className="text-white text-sm xl:text-base font-medium pb-4 xl:pr-0 my-0 xl:my-2">
            { desc }...
        </p>
    );

    return (
        <div className="flex flex-col bg-card shadow-embed rounded-lg w-10/12 xl:w-3/5" style={{maxWidth: 600 + 'px', minHeight: 16 + 'rem'}}>
            <div className="flex w-full">
                <img className="object-contain rounded-lg shadow-embed transform -translate-x-4 -translate-y-4 h-40" src={ thumb } alt=""/>
                <div className="flex flex-col cursor-default py-2">
                    <div className="flex flex-wrap justify-start xl:justify-between items-center w-full">
                        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center space-x-0 xl:space-x-4 w-full xl:w-auto pl-4 xl:pl-0">
                            <h1 className="text-white text-center xl:text-left text-lg xl:text-2xl font-bold border-b-2 border-crunchy">{ title }</h1>
                            <div className="flex justify-evenly text-crunchy pt-3 xl:pt-1">
                                { stars }
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center space-x-3 px-4 my-2 xl:my-0 ">
                            <div data-tip data-for="btn-1" onClick={ onInfoClick } className="text-white hover:text-indigo-500 transition duration-200 cursor-pointer object-contain h-6 w-6 float-right">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                            <ReactTooltip id="btn-1"><span>Watch on Crunchyroll</span></ReactTooltip>

                            <div data-tip data-for="btn-2" onClick={ onWatchlistClick } className="text-white hover:text-crunchy transition duration-200 cursor-pointer object-contain h-6 w-6 float-right">
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
                            <ReactTooltip id="btn-2"><span>Add to watchlist</span></ReactTooltip>

                            <div data-tip data-for="btn-3" onClick={ onFavouriteClick } className="text-white hover:text-red-600 transition duration-200 cursor-pointer object-contain h-6 w-6 float-right">
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
                            <ReactTooltip id="btn-3"><span>Add to Favourites</span></ReactTooltip>
                        </div>
                    </div>
                    { isMobile ? characters : description }
                </div>
            </div>
            { isMobile ? description : characters }
        </div>
    )
}

export default Card;