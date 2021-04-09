import React from 'react';
import styled from "styled-components";

const iconArea = process.env.PUBLIC_URL;

const ExampleBlock1 = styled.div`
    grid-column: 1 / span 5
`;

const ExampleBlock2 = styled.div`
    grid-column: 6 / span 2
`;


function Example1() {
    return (
        <div className="loader-slide-from-left-1 bg-discord rounded-lg shadow-embed w-full md:w-2/5 z-20">
            <div className="grid grid-cols-12 grid-rows-1 gap-0 py-4 px-3">
                <div className="flex justify-end col-span-2 lg:col-span-1">
                    <img className="rounded-full h-12 w-12" src={ `${iconArea}/cf-512.webp` } alt=""/>
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
                    <div className="bg-discord-dark shadow-embed border-l-4 border-crunchy rounded-md mt-1">
                        <div className="relative w-full pl-4 py-2">
                            <div className="absolute grid grid-cols-7 grid-rows-1">
                                <ExampleBlock1 className="title flex justify-start items-start">
                                    <div className="flex items-center">
                                        <img alt="" className="h-8 w-8 mt-1"
                                             src="https://cdn.discordapp.com/emojis/742857781232795741.png?v=1"/>
                                        <h1 className="px-1 xl:px-2 text-blue-400 text-base font-bold xl:font-semibold xl:text-lg">
                                            Tower of God
                                        </h1>
                                        <img alt="" className="h-8 w-8 mt-1"
                                             src="https://cdn.discordapp.com/emojis/742857781232795741.png?v=1"/>
                                    </div>
                                </ExampleBlock1>


                                <ExampleBlock2 className="thumbnail flex justify-end">
                                    <img alt="" className="w-16 h-16 xl:w-28 xl:h-28"
                                         src="https://cdn.discordapp.com/attachments/680350705038393344/717784215986634953/cheeky.png"/>
                                </ExampleBlock2>
                            </div>
                            <div className="desc text-white pt-2 mt-12 xl:mt-8">
                                ⭐ <span className="font-bold">Rating</span> 4.5 / 5
                                stars<br/>
                                📖 <span className="font-bold">Subscribers</span>
                                2.3M<br/>
                                <h2 className="underline font-bold pt-2">
                                    Description:</h2>
                                <p className="w-full pr-1 xl:pr-4" style={{ fontSize: 14 + 'px' }}>
                                    What do you desire? Money and wealth?
                                    Honor and pride? Authority and power?
                                    Revenge? Or something that transcends
                                    them all? Whatever you desire—it's here.<br/>
                                    <span
                                        className="text-blue-400 hover:underline cursor-pointer">Read now</span>
                                </p>
                            </div>
                            <div className="image flex items-end pr-4">
                                <div>
                                    <img alt="" className="rounded pt-2 pb-1"
                                         src="https://crunchy-bot.live/data/wt/banners/img_195.png"/>
                                    <div className="flex pt-1">
                                        <img alt="" className="h-6 w-6 rounded-full"
                                             src="https://cdn.discordapp.com/avatars/290923752475066368/4921a5665c5320be55559d1a026fca68.webp?size=128"/>
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
                                             src={ `${iconArea}/cr-logo.png` } />
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
                                     src="https://cdn.discordapp.com/avatars/290923752475066368/4921a5665c5320be55559d1a026fca68.webp?size=128"/>
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