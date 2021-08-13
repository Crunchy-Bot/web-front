import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'

import { Example1, Example2 } from "../components/Examples";
import Footer from "../components/Footer";
// import { discordInvite, discordSupport } from "../auth";

const iconArea = process.env.PUBLIC_URL;


let topGGCount = 15_000;

/*
const topGGUrl = "https://top.gg/api/bots/656598065532239892";
const fetchCount = () => {
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
           let data = JSON.parse(xhttp.responseText);
           topGGCount = data.server_count;
        }
    };

    xhttp.open("GET",topGGUrl);
    xhttp.send(null);
};

fetchCount()
*/

function Home() {
  return (
    <div className="bg-gradient-about flex flex-col items-center px-4 md:px-0">
        <div className="relative w-full min-h-screen">
            <img className="absolute bottom-0 left-0 w-full xl:w-1/2 origin-bottom transform translate-y-10 xl:translate-y-64 z-10 ml-20" src={`${iconArea}/banners/fireworks-about.png`} alt=""/>
            <img className="absolute top-0 right-0 w-full xl:w-1/2 transform -translate-y-10 xl:translate-y-0 opacity-75 object-contain z-10" src={`${iconArea}/banners/fireworks-about.png`} alt=""/>
            <div className="absolute top-0 flex flex-row justify-around items-center w-full h-full z-20 mx-auto">
                <div className="flex flex-col w-full xl:w-2/5 mb-24">
                    <h1 className="text-6xl text-center font-bold text-cr-blue">
                        Introducing Crunchy
                    </h1>
                    <p className="text-gray-200 text-center text-2xl mt-4 px-4">
                        Inspired by Crunchyroll, built for the community bringing the
                        best of Anime to your Discord server all in a cute and simple
                        bot powering over <code className="text-crunchy">{topGGCount.toLocaleString()}</code> communities.
                    </p>
                    <div className="flex flex-wrap justify-evenly items-center space-x-4 xl:space-x-0 mt-8 h-12">
                        <Link className="text-white text-xl font-bold" to="/invite">
                            <img className="inline-block w-10 h-10 object-contain" src={`${iconArea}/icons/discord-logo-white.svg`} alt=""/>
                            <span className="border-b-2 border-crunchy">Invite</span>
                        </Link>
                        <Link className="text-white text-xl font-bold h-9" to="/support">
                            Support Server
                        </Link>
                        <ScrollLink smooth={true} className="cursor-pointer text-white text-xl font-bold h-9" to="ex1">
                            Explore
                        </ScrollLink>
                        <Link className="text-white text-xl font-bold h-9" to="/commands">
                            Commands
                        </Link>
                    </div>
                </div>
                <img className="hidden xl:block w-1/5 object-contain transform translate-y-24" src={`${iconArea}/emojis/hime-winner.png`} alt=""/>
            </div>
        </div>
         <div id="ex1" className="flex justify-around flex-col md:flex-row pt-8 lg:pt-4 z-20">
            <Example1/>
            <div className="w-full md:w-2/5 flex items-center justify-center loader-slide-from-right-1 pt-8 xl:pt-0">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-white text-center py-0 md:py-4">
                        Details on<br/>
                        Anime, Manga and Webtoons
                    </h1>
                    <p className="text-lg md:text-2xl text-white text-center py-4">
                        We have support for
                        the entire Crunchyroll anime collection<br/>
                        as well as manga and more.<br/>
                        Using the
                        <span className="text-crunchy font-semibold pl-1">anime</span>,
                        <span className="text-crunchy font-semibold px-1">manga</span>
                        and
                        <span className="text-crunchy font-semibold px-1">webtoon</span>
                        commands.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative flex justify-around flex-col md:flex-row-reverse pt-8 lg:pt-4 z-20">
            <img className="absolute top-0 right-0 w-full xl:w-1/2 opacity-75 object-contain z-0" src={`${iconArea}/banners/fireworks-about.png`} alt=""/>
            <Example2/>
            <div className="w-full md:w-2/5 flex items-center justify-center loader-slide-from-left-1/2 pt-8 xl:pt-0 z-20">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-white text-center py-0 md:py-4">
                        Enjoy our legendary<br/>
                        live feeds
                    </h1>
                    <p className="text-lg md:text-2xl text-white text-center py-4">
                        Enjoy live
                        <span className="text-crunchy font-semibold px-1">release</span>
                        and
                        <span className="text-crunchy font-semibold px-1">news</span>
                        from Crunchyroll in your <br/>
                        community with Crunchy's webhooks.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;
