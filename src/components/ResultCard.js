import React, {useState, useEffect} from 'react';
import ReactTooltip from "react-tooltip";


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


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


function Card(props) {
    const [isHover, setHover] = useState(props.active);

    let cardSize;
    let imgTrans;
    let textBlock;
    if (!isHover) {
        cardSize = "card-small";
        imgTrans = "translate-x-0 translate-y-0";
        textBlock = "hidden";
    } else {
        cardSize = "card-big";
        imgTrans = "-translate-x-4 -translate-y-4"
        textBlock = "block";
    }


    const title = "Bureau of Proto Society";
    const description = "In the far distant future… Humans are living in the " +
        "underground shelters under the complete controlled " +
        "situation.\"Why has the world gone to ruin, and what " +
        "have made humans stay in the shelters?\" " +
        "Every day the members of BUREAU OF PROT SOCIETY " +
        "debate the cause of the fall of the world from the " +
        "past documentary videos... probably. " +
        "ahhhhhhhhhhhhhhhhhhhhhhh " +
        "ahhhhhhhhhhhhhhhhhhhhhhh" +
        "ahhhhhhhhhhhhhhhhhhhhhhhhhhh " +
        "ahhhhhhh " +
        "ah " +
        " ah " +
        "";
    const tags = "action, comedy, sci_fi";

    return (
      <div
          onMouseOver={() => {
              setHover(true);
          }}
          onMouseLeave={() => {
              setHover(false);
          }}
          className={`flex bg-discord-dark shadow-small-sharp rounded-lg ${cardSize} slow-grow h-64 my-4`}
      >
          <img
              className={`w-40 h-64 rounded-lg shadow-small-sharp transition duration-200 transform ${imgTrans}`}
              src="https://cdn.crunchy.gg/thumbnails/anime/I0EmQCxSYChoZWE.jpg"
              alt=""
          />
          <div className={`${textBlock} flex flex-col justify-between h-full w-full overflow-hidden py-2`}>
              <div className="flex justify-between w-full mb-2">
                <h1 className="font-bold text-white text-lg border-b-2 border-crunchy">
                    { title }
                </h1>
                <Toggles/>
              </div>
              <div className="flex flex-col justify-between h-full overflow-y-auto pr-4">
                  <p className="py-2 text-white break-words">
                      { description }
                  </p>
              </div>
              <div className="text-gray-300">
                <code>{ tags }</code>
              </div>
          </div>
      </div>
    )
}


function ResultCard() {
    return (
        <div className="flex flex-wrap justify-evenly space-x-8 px-16">
            <Card active={false}/>
            <Card active={false}/>
            <Card active={false}/>
            <Card active={false}/>
            <Card active={false}/>
            <Card active={false}/>
            <Card active={false}/>
            <Card active={false}/>
            <Card active={false}/>
            <Card active={false}/>
        </div>
    )
}

export default Card;