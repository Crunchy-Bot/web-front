import React, {useEffect, useState} from 'react';
import ReactTooltip from "react-tooltip";

import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";
import axios from "axios";


const searchUrl = "http://127.0.0.1:9990/v0/search"

const info = {
    title: "BURN THE WITCH",
    image: "https://img1.ak.crunchyroll.com/i/spire3/3952cc8186b2e2a7ea11f8283ca0c8951617747268_full.jpg",
    description: "Historically 72% of all the deaths in London are related to dragons, " +
        "fantastical beings invisible to the majority of the people. While unknown",
    url: "https://www.crunchyroll.com/burn-the-witch",
    isBookmarked: true,
    isFavourite: true,
    tags: (1 << 0) | (1 << 1),
};


function TagButton(props) {
    const [isSelected, toggleSelect] = useState(props.start);

    let css;
    if (isSelected) {
        css = "outline-none focus:outline-none bg-discord border-2 border-crunchy rounded-full text-white px-4 pb-1"
    } else {
        css = "outline-none focus:outline-none  bg-discord border-2 border-transparent rounded-full text-white px-4 pb-1"
    }

    const toggleTag = () => {
        toggleSelect(!isSelected);
    }

    return (
        <button className={ css } onClick={toggleTag}>
            {props.name}
        </button>
    )
}


function FilterBlock(props) {
    const [isSelected, toggleSelect] = useState(false);

    let css;
    if (isSelected) {
        css = "flex justify-center items-center outline-none focus:outline-none bg-crunchy rounded h-5 w-5"
    } else {
        css = "flex justify-center items-center outline-none focus:outline-none bg-discord rounded h-5 w-5"
    }

    const toggleFilter = () => {
        toggleSelect(!isSelected);
    }

    return (
        <div className="flex items-center py-1">
            <button className={ css } onClick={toggleFilter}>
                {
                    isSelected ? (
                        <svg className="text-white h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <></>
                    )
                }
            </button>
            <h1 className="text-gray-400 pl-2">
                {props.name}
            </h1>
        </div>
    )
}


function Search() {
    const [isAnime, toggleType] = useState(true);
    const [windowDimension, setWindowDimension] = useState(null);
    const [query, setQuery] = useState("*");
    const [results, setResults] = useState([]);

    let svgCss;
    if (isAnime) {
        svgCss = "h-6 w-6 transition duration-300 transform rotate-0"
    } else {
        svgCss = "h-6 w-6 transition duration-300 transform rotate-180"
    }


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


    let itemsPerRow = Math.floor(windowDimension / 320);

    if (itemsPerRow === 0) {
        itemsPerRow = 1
    }

    useEffect(() => {
        axios({
            url: searchUrl,
            method: "post",
            body:{
                "query": "*",
                "type": "anime",
                "limit": 4,
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => setResults(resp.data.results))
            .catch(() => {})
    }, [query, isAnime, itemsPerRow]);

    let rendered = [];
    for (let block of results) {
        let temp = [];
        for (let row of block) {
            row.isBookmarked = false;
            row.isFavourite = false;
            temp.push(
                <ResultCard data={row}/>,
            )
        }
        rendered.push(
            <div className="flex space-x-8 w-full px-8 py-4">
                {temp}
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-between min-h-full">
            <div className="flex justify-center">
                <div className="flex flex-col px-8 w-11/12" style={{ minHeight: 32 + 'vw'}}>
                    <div className="flex items-center space-x-3">
                        <div className="h-10 border-r-2 border-crunchy"/>
                        <button className="outline-none focus:outline-none text-white h-6 w-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <input className="w-1/2 bg-transparent text-white placeholder-gray-300" placeholder="Type something in the search bar to get exploring..."/>
                    </div>
                    <div className="flex justify-start items-center space-x-4 h-32 w-full">
                        <TagButton start={true} name="All"/>
                        <TagButton start={false} name="Action"/>
                        <TagButton start={false} name="Drama"/>
                        <TagButton start={false} name="Comedy"/>
                        <TagButton start={false} name="Fantasy"/>
                        <TagButton start={false} name="Yuri"/>
                        <TagButton start={false} name="Shounen"/>
                        <TagButton start={false} name="Harem"/>
                        <TagButton start={false} name="Yaoi"/>
                        <TagButton start={false} name="Romance"/>
                        <TagButton start={false} name="Music"/>
                        <TagButton start={false} name="Tournaments"/>
                    </div>
                    <div className="flex h-full">
                        <div className="flex flex-col w-64 h-full">
                            <div className="flex items-center">
                                <ReactTooltip id="toggle-type-btn-1">
                                    <span>Switch to { isAnime ? "Manga" : "Anime" }</span>
                                </ReactTooltip>
                                <button data-tip data-for="toggle-type-btn-1" onClick={ () => toggleType(!isAnime) } className="text-white hover:text-crunchy cursor-pointer outline-none focus:outline-none mr-2">
                                    <svg className={ svgCss } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </button>
                                <h1 className="text-white font-bold text-2xl mb-1">
                                    Search { isAnime ? "Anime" : "Manga" }
                                </h1>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-gray-500">Sort by</h2>
                                <FilterBlock name="Trending"/>
                                <FilterBlock name="Recommended"/>
                                <FilterBlock name="Popular"/>
                                <FilterBlock name="Rating: High - Low"/>
                                <FilterBlock name="Rating: Low - High"/>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-gray-500">Hide</h2>
                                <FilterBlock name="Favourites"/>
                                <FilterBlock name="Watchlist"/>
                                <FilterBlock name="Recommended"/>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            {rendered}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Search;
