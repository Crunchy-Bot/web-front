import React from 'react';
import { Link } from "react-router-dom";

const iconArea = process.env.PUBLIC_URL;

function Faq() {
    return (
        <div className="faq flex justify-center">
            <div className="w-5/6">
                <div className="loader-slide-from-left-1 flex flex-row bg-discord-dark shadow-embed rounded-lg w-full xl:w-4/5 xl:h-32 p-4 my-4 float-left">
                    <img className="hidden xl:block self-center w-24 h-24" src={`${iconArea}/emojis/hime-confuse.png`} alt=""/>
                    <div>
                        <h1 className="italic text-white text-xl font-bold cursor-default">
                            How do I add a news / release channel?
                        </h1>
                        <p  className="text-white cursor-default pl-4">
                          You can add a news channel using the
                          <code className="text-crunchy px-1">addnews</code> and
                            <code className="text-crunchy px-1">addrelease</code>
                          command respectively.<br/>
                          <Link
                              className="text-blue-400 font-semibold cursor-pointer hover:underline pr-1"
                              to="/commands?target=add-news-channel">
                            Click For News
                          </Link>
                            Or
                            <Link
                              className="text-blue-400 font-semibold cursor-pointer hover:underline px-1"
                              to="/commands?target=add-news-channel">
                            Click For Releases
                          </Link>
                          for more information.
                        </p>
                    </div>
                </div>

                <div className="loader-slide-from-right-1 flex bg-discord-dark shadow-embed rounded-lg w-full xl:w-4/5 xl:h-32 p-4 my-4 float-right">
                    <img className="hidden xl:block self-center w-24 h-24" src={`${iconArea}/emojis/hime-schoolgirl.png`} alt=""/>
                    <div>
                        <h1 className="italic text-white text-xl font-bold cursor-default">
                            I love this bot! How can I support you?
                        </h1>
                        <p  className="text-white cursor-default pl-4">
                            You using the bot at all means alot to me, that said if
                            you want to spread the word and share the love consider
                            <code className="text-crunchy px-1">Voting</code> and
                            <code className="text-crunchy px-2">Leaving a Review</code>
                        </p>
                    </div>
                </div>

                <div className="loader-slide-from-left-1/2 flex bg-discord-dark shadow-embed rounded-lg w-full xl:w-4/5 xl:h-32 p-4 my-4 float-left">
                    <img className="hidden xl:block self-center w-24 h-24" src={`${iconArea}/emojis/hime-waaa.png`} alt=""/>
                    <div>
                        <h1 className="italic text-white text-xl font-bold cursor-default">
                            Why isn't Crunchy responding in my server?
                        </h1>
                        <p  className="text-white cursor-default pl-4">
                            Make sure Crunchy has permission to view the channel you're trying to
                            run as well as that she has the required permissions mentioned for the
                            command. You can find the list
                            <Link
                              className="text-blue-400 font-semibold cursor-pointer hover:underline px-1"
                              to="/commands">
                                Here
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="loader-slide-from-right-1/2 flex bg-discord-dark shadow-embed rounded-lg w-full xl:w-4/5 xl:h-32 p-4 my-4 float-right">
                    <img className="hidden xl:block self-center w-24 h-24" src={`${iconArea}/emojis/hime-no.png`} alt=""/>
                    <div>
                        <h1 className="italic text-white text-xl font-bold cursor-default">
                            I've added a live feed, how can I remove it?
                        </h1>
                        <p  className="text-white cursor-default pl-4">
                            To remove a live feed you must be on a Desktop or browser
                            version of Discord (mobile is currently not supported)
                            Go to
                            <code className="text-crunchy px-1">Server Settings</code> ->
                            <code className="text-crunchy px-1">Integrations</code> ->
                            <code className="text-crunchy px-1">Webhooks</code> ->
                            <code className="text-crunchy px-1">Delete the Webhook</code>
                        </p>
                    </div>
                </div>

                <div className="loader-slide-from-left-2 flex bg-discord-dark shadow-embed rounded-lg w-full xl:w-4/5 xl:h-32 p-4 my-4 float-left">
                    <img className="hidden xl:block self-center w-24 h-24" src={`${iconArea}/emojis/hime-mad.webp`} alt=""/>
                    <div>
                        <h1 className="italic text-white text-xl font-bold cursor-default">
                            How can I level up my characters?
                        </h1>
                        <p  className="text-white cursor-default pl-4">
                            At the moment you don't i'm afraid, The system was removed due to a
                            large amount of bugs that appeared making it pretty annoying for
                            a user, the system for that will stay removed until the summer
                            when all my exams are over, sorry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
