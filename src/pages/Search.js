import React  from 'react';
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


function Search() {
    let items = [];
    for (let i=0;i < 1; i++) {
        items.push(
            <AnimeResultCard/>
        )
    }

    let items2 = [];
    for (let i=0;i < 1; i++) {
        items2.push(
            <MangaResultCard/>
        )
    }

    return (
        <div className="faq flex flex-col bg-discord-dark rounded-lg shadow-embed px-8" style={{ height: 40 + 'vw' }}>
            <div className="my-8">
                <div className="flex">
                    <h1 className="text-white text-2xl font-bold border-b-2 border-crunchy">Anime Results</h1>
                </div>
                <div className="flex flex-wrap w-full px-8 float-right">
                    { items }
                </div>
            </div>
            <div className="my-8">
                <div className="flex">
                    <h1 className="text-white text-2xl font-bold border-b-2 border-crunchy">Manga Results</h1>
                </div>
                <div className="flex flex-wrap w-full px-8 float-right">
                    { items2 }
                </div>
            </div>
        </div>
    );
}

export default Search;
