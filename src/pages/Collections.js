import React from 'react';
import Card from "../components/CollectionCard";

const info = {
    title: "BURN THE WITCH",
    thumb: "https://img1.ak.crunchyroll.com/i/spire3/b1dd08aa691466b66de17f129beec2821601563640_full.jpg",
    desc: "Historically 72% of all the deaths in London are related to dragons, " +
        "fantastical beings invisible to the majority of the people. While unknown",
    rating: 4,
    url: "https://www.crunchyroll.com/burn-the-witch",
    isBookmarked: false,
    isFavourite: true,
    pendingCharacters: [],
};

function Collections() {
    return (
        <div className="faq flex justify-center">
            <Card info={ info }/>
        </div>
    );
}

export default Collections;
