import React from 'react';

const iconArea = process.env.PUBLIC_URL;


function Example1() {
    return (
        <div className="loader-slide-from-left-1 bg-discord rounded-lg shadow-embed w-full md:w-2/5 z-20">
            <div className="grid grid-cols-12 grid-rows-1 gap-0 py-4 px-3">
                <div className="flex justify-end col-span-2 lg:col-span-1">
                    <img className="rounded-full h-12 object-contain" src={ `${iconArea}/cf-512.webp` } alt=""/>
                </div>
                <div className="col-span-10 pl-3">
                    <div className="flex items-end pl-1">
                        <h1 className="text-white font-semibold">ハーリさん (CF8)</h1>
                        <h1 className="text-white text-sm font-sm text-gray-600 pl-2">Today at 7:02 PM</h1>
                    </div>
                    <p className="text-white">
                        -webtoon tower of god
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 grid-rows-1 gap-0 py-4 px-3">
                <div className="flex justify-end col-span-2 lg:col-span-1">
                    <img className="rounded-full h-12 w-12" src={ `${iconArea}/crunchy-512.webp` } alt=""/>
                </div>
                <div className="col-span-10 pl-3">
                    <div className="flex items-end pl-1">
                        <h1 className="text-white font-semibold">Crunchy</h1>
                        <h1 className="text-white text-sm font-sm text-gray-600 pl-2">Today at 7:02 PM</h1>
                    </div>
                    <div className="bg-discord-dark shadow-embed border-l-4 border-crunchy rounded-md mt-1 w-full">
                        <div className="flex justify-between px-3 pt-2">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <img alt="" className="h-8 w-8 mt-1"
                                         src={`${iconArea}/webtoon.png`}/>
                                    <h1 className="px-1 xl:px-2 text-blue-400 text-base text-center font-bold xl:font-semibold xl:text-lg">
                                        Tower of God
                                    </h1>
                                    <img alt="" className="h-8 w-8 mt-1"
                                         src={`${iconArea}/webtoon.png`}/>
                                </div>
                                <div className="desc text-white pt-1">
                                    ⭐ <span className="font-bold">Rating</span> 4.5 / 5
                                    stars<br/>
                                    📖 <span className="font-bold">Subscribers</span>
                                    2.3M<br/>
                                    <h2 className="underline font-bold pt-2">
                                        Description:</h2>
                                </div>
                            </div>
                            <div>
                                <img alt=""
                                     className="w-16 h-16 xl:w-28 xl:h-28"
                                     src={`${iconArea}/emojis/cheeky.png`}/>
                            </div>
                        </div>
                        <p className="text-white w-full px-3" style={{ fontSize: 14 + 'px' }}>
                            What do you desire? Money and wealth?
                            Honor and pride? Authority and power?
                            Revenge? Or something that transcends
                            them all? Whatever you desire—it's here.<br/>
                            <span className="text-blue-400 hover:underline cursor-pointer">
                                Read now
                            </span>
                        </p>
                        <div className="px-3 py-2">
                            <img alt="" className="rounded mt-2 mb-1"
                                 src={`${iconArea}/banner.png`}/>
                            <div className="flex items-center xl:items-start pt-1">
                                <img alt="" className="h-6 w-6 rounded-full"
                                     src={`${iconArea}/cf-128.webp`}/>
                                <h3 className="text-xs font-semibold text-white mt-1 ml-2">
                                    Part of Crunchy, the Crunchyroll Discord
                                    bot. Powered by CF8
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Example2() {
    return (
        <div className="loader-slide-from-right-1/2 bg-discord rounded-lg shadow-embed w-full md:w-2/5 z-20">
            <div className="grid grid-cols-12 grid-rows-1 gap-0 py-4 px-2">
                <div className="flex justify-end col-span-2 lg:col-span-1">
                    <img className="rounded-full h-12 w-12" src={ `${iconArea}/crunchy-512.webp` } alt=""/>
                </div>
                <div className="col-span-10 pl-3">
                    <div className="flex items-end pl-1">
                        <h1 className="text-white font-semibold">Crunchy</h1>
                        <h1 className="text-white text-sm font-sm text-gray-600 pl-2">Today at 7:02 PM</h1>
                    </div>
                    <div className="bg-discord-dark shadow-embed border-l-4 border-crunchy rounded-md mt-1">
                        <div className="flex items-center ml-3 pt-2">
                            <img alt="" className="h-8 w-8 mt-1"
                                             src="https://images.crunchy.gg/content/news/ec73422e-5834-4dab-8be2-5e9f0745f156" />
                            <h1 className="px-1 xl:px-2 text-white text-base cursor-pointer hover:underline font-semibold xl:text-lg">
                                Crunchyroll Anime News! - Click for more!
                            </h1>
                        </div>
                        <div className="flex items-center ml-3 pt-2">
                            <a href="https://www.crunchyroll.com/" className="text-blue-400 cursor-pointer hover:underline">Read More</a>
                            <h3 className="text-white font-semibold mx-1"> | </h3>
                            <a href="https://top.gg/bot/656598065532239892/vote" className="text-blue-400 cursor-pointer hover:underline">Vote for Crunchy </a>
                        </div>
                        <div className="flex w-full p-3">
                            <img className="rounded-md" src={ `${iconArea}/news.png` } alt="" />
                        </div>
                        <div className="image flex items-end px-3">
                            <div className="flex pt-1 pb-3">
                                <img alt="" className="h-6 w-6 rounded-full"
                                     src={`${iconArea}/cf-128.webp`}/>
                                <h3 className="text-xs font-semibold text-white mt-1 ml-2">
                                    Part of Crunchy, the Crunchyroll Discord
                                    bot. Powered by CF8
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Example1, Example2 } ;
