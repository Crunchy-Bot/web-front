import React, { useState } from 'react';
import Card from "../components/CollectionCard";

const info = {
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

function SearchBar() {
    const [isAnime, toggleAnime] = useState(true);
    const [isManga, toggleManga] = useState(false);
    const [isWebtoon, toggleWebtoon] = useState(false);

    const setAnime = () => {
        toggleAnime(true);
        toggleManga(false);
        toggleWebtoon(false);
    };

    const setManga = () => {
        toggleAnime(false);
        toggleManga(true);
        toggleWebtoon(false);
    };

    const setWebtoon = () => {
        toggleAnime(false);
        toggleManga(false);
        toggleWebtoon(true);
    };


    const toggles = (
        <div className="flex justify-center space-x-8 w-full mb-2">
            <button onClick={ setAnime } className="flex items-center outline-none focus:outline-none h-8">
                { isAnime ? (
                    <span className="text-white border-b-2 border-crunchy transition duration-200 text-lg font-bold">Anime</span>
                ) : (
                    <span className="text-white border-b-2 border-transparent transition duration-200 text-lg font-bold">Anime</span>
                )}
            </button>

            <button onClick={ setManga } className="flex items-center outline-none focus:outline-none text-white text-lg font-bold h-8">
                { isManga ? (
                    <span className="text-white border-b-2 border-crunchy transition duration-200 text-lg font-bold">Manga</span>
                ) : (
                    <span className="text-white border-b-2 border-transparent transition duration-200 text-lg font-bold">Manga</span>
                )}
            </button>

            <button onClick={ setWebtoon } className="flex items-center outline-none focus:outline-none text-white text-lg font-bold h-8">
                { isWebtoon ? (
                    <span className="text-white border-b-2 border-crunchy transition duration-200 text-lg font-bold">Webtoons</span>
                ) : (
                    <span className="text-white border-b-2 border-transparent transition duration-200 text-lg font-bold">Webtoons</span>
                )}
            </button>
        </div>
    )

    return (
        <div className="flex flex-col items-center bg-discord-dark shadow-embed rounded-lg w-full xl:w-1/2 pt-2 pb-4">
            <div className="flex justify-center items-center w-full my-3">
                <div className="flex justify-center items-center border-b-2 border-white w-11/12 xl:w-2/3 px-4">
                    <div className="cursor-pointer text-white h-6 w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        className="outline-none text-white text-lg placeholder-gray-300 bg-transparent w-full px-2 pb-1"
                        placeholder="Search for anime, manga and webtoons..."/>
                </div>
            </div>
            { toggles }
        </div>
    )
}

function Search() {
    return (
        <div className="faq flex flex-col items-center xl:overflow-hidden">
            <div className="flex justify-center w-full mb-16 xl:mb-0 px-2 pb-8">
                <SearchBar/>
            </div>
            <div className="flex flex-col xl:flex-row justify-evenly flex-no-wrap xl:flex-wrap space-y-8 xl:overflow-y-auto w-full px-8">
                <Card info={ info }/>

                <Card info={ info }/>

                <Card info={ info }/>

                <Card info={ info }/>

                <Card info={ info }/>
            </div>
        </div>
    );
}

export default Search;
