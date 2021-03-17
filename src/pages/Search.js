import React, { useState }  from 'react';

import { AnimeResultCard ,MangaResultCard } from "../components/AnimeResultCard";


const _info = {
    title: "BURN THE WITCH",
    thumb: "https://img1.ak.crunchyroll.com/i/spire3/b1dd08aa691466b66de17f129beec2821601563640_full.jpg",
    desc: "Historically 72% of all the deaths in London are related to dragons, " +
        "fantastical beings invisible to the majority of the people. While unknown",
    rating: 4,
    url: "https://www.crunchyroll.com/burn-the-witch",
    isBookmarked: true,
    isFavourite: true,
    pendingCharacters: [],
};


function Option(props) {
    const cb = props.onClick;
    const opt = props.opt;
    const [isSelected, toggleSelect] = useState(false);

    return (
        <button onClick={ () => { toggleSelect(!isSelected); cb(!isSelected) } }
                className="relative flex items-center cursor-pointer bg-white hover:bg-gray-200 text-center text-discord-dark font-semibold outline-none focus:outline-none w-full py-2">
            { isSelected ? (
                <div className="absolute visible text-crunchy w-5 h-5 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            ) : (
                <div className="absolute invisible text-crunchy w-5 h-5 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            ) }

            <div className="w-full">
                { opt }
            </div>
        </button>
    )
}


function Dropdown() {
    const [isDropped, toggleDrop] = useState(false);

    let svgName;
    if (isDropped) {
        svgName = "rotate-90"
    } else {
        svgName = "rotate-0"
    }

    let svg = (
        <svg className={`text-white w-6 h-6 transform ${svgName} transition duration-150`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    )

    let renderedOptions = [];
    const options = [
        'bob',
        'action',
    ];
    for (let opt of options) {
        renderedOptions.push(
            <Option opt={ opt } onClick={ () => { console.log("wew") } }/>
        )
    }

    return (
        <div className="relative flex justify-center w-48 mx-8">
            <button onClick={ () => toggleDrop(!isDropped) } className="flex items-center cursor-pointer outline-none focus:outline-none">
                <h1 className="text-white text-lg font-bold">
                    Select Genre
                </h1>
                { svg }
            </button>
            { isDropped ? (
                <div className="absolute overflow-y-auto bg-white shadow-embed rounded-lg mt-8 w-48 p-2" style={{height: 24 + 'rem'}}>
                    { renderedOptions }
                </div>
            ) : (
                <div className="absolute overflow-y-auto bg-white shadow-embed rounded-lg mt-8 w-48 p-2 hidden" style={{height: 24 + 'rem'}}>
                    { renderedOptions }
                </div>
            )}
        </div>
    )
}


function Search() {
    let items = [];
    for (let i=0;i < 6; i++) {
        items.push(
            <AnimeResultCard/>
        )
    }

    let items2 = [];
    for (let i=0;i < 6; i++) {
        items2.push(
            <MangaResultCard/>
        )
    }

    return (
        <div className="flex justify-center">
            <div className="faq flex flex-col bg-discord-dark rounded-lg shadow-embed px-8 w-full" style={{ minHeight: 28 + 'vw', maxWidth: '90%' }}>
                <div className="flex flex-col xl:flex-row items-center my-4 xl:ml-4">
                    <div className="flex items-center border-b-2 border-white w-full xl:w-1/3 px-2 xl:pr-4 py-2 my-4 xl:my-0">
                        <svg className="cursor-pointer text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input className="outline-none focus:outline-none bg-transparent text-white placeholder-gray-200 w-full px-2" placeholder="Search for your next favourite anime and manga..."/>
                    </div>
                    <Dropdown/>
                </div>
                <div className="mt-8 mb-4 xl:mt-4 xl:mb-4">
                    <div className="flex justify-center xl:justify-start px-4">
                        <h1 className="text-white text-2xl font-bold border-b-2 border-crunchy">Anime Results</h1>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        { items }
                    </div>
                </div>
                <div className="mt-8 mb-4 xl:mt-4 xl:mb-4">
                    <div className="flex justify-center xl:justify-start px-4">
                        <h1 className="text-white text-2xl font-bold border-b-2 border-crunchy">Manga Results</h1>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        { items2 }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
