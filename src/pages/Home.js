import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'

import { Example1, Example2 } from "../components/Examples";
import { discordInvite, discordSupport } from "../auth";

const iconArea = process.env.PUBLIC_URL;


let topGGCount = 11_000;

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
    <div className="flex flex-col items-center px-4 md:px-0">
        <div className="loader-slide-from-above-1 flex justify-center flex-col md:flex-row-reverse bg-discord rounded-xl shadow-embed py-4 mb-16 w-full xl:w-2/3">
            <img className="hidden xl:block" style={{height: 24 + 'rem'}} src={ `${iconArea}/emojis/hime-winner.png` } alt=""/>
            <div className="w-full xl:w-2/3 flex items-center pt-8 xl:pt-0 xl:pr-16">
                <div className="px-2 xl:px-0">
                    <h1 className="text-2xl md:text-5xl text-white text-center xl:text-left font-bold border-b-2 border-crunchy py-0 xl:pb-2">
                        Welcome!
                    </h1>
                    <div className="text-lg md:text-2xl text-white text-center xl:text-left py-4">
                        We hope you enjoy your stay on Crunchy's website, expore what
                        makes her the reason
                        <code className="text-crunchy px-2">{ topGGCount.toLocaleString() }</code>
                        servers user her!
                    </div>
                    <div className="flex justify-evenly flex-wrap w-full pt-8">
                        <ScrollLink to="ex1" smooth={ true }
                                    className="cursor-pointer font-bold border-b-3 border-crunchy hover:border-white text-white text-lg transition duration-200 outline-none focus:outline-none mx-2 xl:mx-0 my-2 xl:my-0 px-2 pb-1">
                            Explore
                        </ScrollLink>
                        <Link to="/commands"
                              className="cursor-pointer font-bold border-b-3 border-crunchy hover:border-white text-white text-lg transition duration-200 outline-none focus:outline-none mx-2 xl:mx-0 my-2 xl:my-0 px-2 pb-1">
                            Commands
                        </Link>
                        <Link to="/commands"
                              className="cursor-pointer font-bold border-b-3 border-crunchy hover:border-white text-white text-lg transition duration-200 outline-none focus:outline-none mx-2 xl:mx-0 my-2 xl:my-0 px-2 pb-1">
                            Faq
                        </Link>
                        <a className="cursor-pointer font-bold border-b-3 border-crunchy hover:border-white text-white text-lg transition duration-200 outline-none focus:outline-none mx-2 xl:mx-0 my-2 xl:my-0 px-2 pb-1" href={ discordSupport }>
                            Support
                        </a>
                        <a className="cursor-pointer font-bold border-b-3 border-crunchy hover:border-white text-white text-lg transition duration-200 outline-none focus:outline-none mx-2 xl:mx-0 my-2 xl:my-0 px-2 pb-1" href={ discordInvite }>
                            Invite
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="ex1" className="flex justify-around flex-col md:flex-row pt-8 lg:pt-4">
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
                        using the
                        <span className="text-crunchy font-semibold pl-1">anime</span>,
                        <span className="text-crunchy font-semibold px-1">manga</span>
                        and
                        <span className="text-crunchy font-semibold px-1">webtoon</span>
                        commands.
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-around flex-col md:flex-row-reverse pt-8 lg:pt-4">
            <Example2/>
            <div className="w-full md:w-2/5 flex items-center justify-center loader-slide-from-left-1/2 pt-8 xl:pt-0">
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
                        from Crunchyroll in your community with
                        Crunchy's webhooks .
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-center flex-col md:flex-row pt-8 lg:pt-4">
            <img className="loader-slide-from-left-2 object-contain" style={{height: 24 + 'rem'}} src={ `${iconArea}/emojis/hime-happy.png` } alt=""/>
            <div className="w-full md:w-2/5 flex items-center justify-center loader-slide-from-right-2 pt-8 xl:pt-0">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-white text-center py-0 md:py-4">
                        Leaving us review?
                    </h1>
                    <p className="text-lg md:text-2xl text-white text-center py-4">
                        Check out our
                        <Link className="text-crunchy font-semibold italic px-2" to="/faq">FAQ</Link>
                        and
                        <a className="text-crunchy font-semibold italic px-2" href="https://discord.com/invite/KvvUcKP">Support Server</a>
                        before leaving a review to see if we haven't already answered
                        your questions or can fix you problems!
                        Leaving us a great review? Thank you!
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
