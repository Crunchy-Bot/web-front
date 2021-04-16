import React, { useEffect } from "react";
import {Redirect, useLocation} from "react-router-dom";
import axios from "axios";

import {checkAuth, sendAuth} from "../auth";

const iconArea = process.env.PUBLIC_URL;


function Authorized() {
    const loc = useLocation();
    const maybeCode = new URLSearchParams(loc.search).get('code');

    useEffect(() => {
        const temp = async () => {
            let res = await axios.post(`${sendAuth}?code=${maybeCode}`);
            if (res.status !== 200) {
                return
            }

            await checkAuth()
        }

        temp().then(() => {})
    }, [maybeCode])

    if (maybeCode === null) {
        return <Redirect from='/authorized' to="/home" />
    }

    return (
        <>
            <div className="flex flex-col-reverse xl:flex-row justify-center items-center px-4 xl:px-0 mx-4 mb-4 h-full">
                <img className="object-contain transform scale-75" src={ `${iconArea}/emojis/hime-schoolgirl.png` } alt=""/>
                <div className="flex flex-col w-full xl:w-1/2 pt-4 xl:pt-0 ml-0 xl:ml-16">
                    <h1 className="text-white text-5xl text-center xl:text-left italic font-bold pb-4">Logging you in...</h1>
                    <p className="text-white text-2xl text-center xl:text-left font-semibold">
                        We'll redirect you once everything's ready.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Authorized;
