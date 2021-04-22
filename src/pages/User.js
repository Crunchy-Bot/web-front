import React from 'react';

import Footer from "../components/Footer";
import ListItems from "../components/ListingItems";

const iconArea = process.env.PUBLIC_URL;

function User(props) {
    let id = props.id;

    let example = {
        icon: "https://cdn.crunchy.gg/thumbnails/anime/I0coXW1xRHwmOkk.jpg",
        msg: "The garden of sinners",
        url: "/anime/I0coXW1xRHwmOkk"
    };

    return (
        <div className="bg-gradient-about">
            <div className="flex flex-col items-center w-full px-8">
                <div className="flex justify-between h-64 w-11/12">
                    <div className="flex w-3/4">
                        <img
                            className="h-48 h-48 object-contain rounded-full shadow-small-sharp"
                            src={`${iconArea}/cf-512.webp`}
                            alt=""
                            loading="lazy"
                        />
                        <div className="flex flex-col space-y-4 px-8 py-4 w-full">
                            <div className="flex">
                                <h1 className="text-white text-2xl font-bold border-b-2 border-crunchy">
                                    ChillFish8
                                </h1>
                            </div>
                            <p className="text-gray-400 text-lg bg-discord-dark rounded p-4 h-full w-full">
                                Life is hard.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col text-white text-lg space-y-1 py-4">
                        <div className="flex pb-3">
                            <h1 className="text-2xl text-white border-b-2 border-crunchy">User Stats</h1>
                        </div>
                        <h1>
                            <code className="text-crunchy pr-1">32</code>
                            Recommendations to
                            <code className="text-crunchy px-1">3</code>
                            users
                        </h1>
                        <h1>
                            <code className="text-crunchy pr-1">32</code>
                            Items in recommended
                        </h1>
                        <h1>
                            <code className="text-crunchy pr-1">12</code>
                            Items in watchlist
                        </h1>
                        <h1>
                            <code className="text-crunchy pr-1">4</code>
                            Items in favourites
                        </h1>

                    </div>
                </div>
                <div className="flex flex-col w-11/12 mt-12 border-l-2 border-cr-blue px-4">
                    <div className="flex mx-2 mb-2">
                        <button className="text-white text-lg font-semibold mx-4 border-b-2 border-crunchy">Favourites</button>
                        <button className="text-white text-lg font-semibold mx-4">Watchlist</button>
                        <button className="text-white text-lg font-semibold mx-4">Recommended</button>
                    </div>
                   <ListItems title="Favourites" entities={[example, example, example, example, ]}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default User;