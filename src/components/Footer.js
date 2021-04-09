import React from 'react';
import { Link } from "react-router-dom";

const iconArea = process.env.PUBLIC_URL;

function Footer() {
    return (
        <div className="relative w-full pb-4">
            <img className="absolute right-0 bottom-0 full xl:w-1/2 object-contain z-0" src={`${iconArea}/banners/lights.png`} alt=""/>
            <div className="flex flex-wrap w-full xl:w-1/2 z-20 space-x-8 space-y-4 xl:space-y-0 xl:px-8 pt-16">
                <div style={{maxWidth: 20 + 'rem'}}>
                    <h1 className="text-cr-blue font-semibold">Crunchy Bot</h1>
                    <p className="text-gray-100 text-sm font-semibold">
                        Developed by CF8. All
                        mascot (Hime) icons, banners, etc... belong to their respective
                        owner, Crunchyroll.
                    </p>
                    <p className="text-gray-100 text-sm font-semibold pt-4">
                        © 2021 ハーリさん (CF8)#6621. Made with ❤️
                    </p>
                </div>
                <div>
                    <h1 className="text-cr-blue font-semibold">Useful Links</h1>
                    <div>
                        <img className="inline-block w-5 h-5 object-contain mr-1" src={`${iconArea}/icons/discord-logo-white.svg`} alt=""/>
                        <Link className="text-gray-100 font-semibold text-sm" to="/invite">Invite Crunchy</Link>
                    </div>
                    <div>
                        <Link className="text-gray-100 font-semibold text-sm" to="/support">Support Server</Link>
                    </div>
                    <div>
                        <Link className="text-gray-100 font-semibold text-sm" to="/privacy">Privacy Policy</Link>
                    </div>
                    <div>
                        <Link className="text-gray-100 font-semibold text-sm" to="/tos">Terms of Service</Link>
                    </div>
                    <div>
                        <Link className="text-gray-100 font-semibold text-sm" to="/github">Github</Link>
                    </div>
                </div>
                <div>
                    <h1 className="text-cr-blue font-semibold">Contact</h1>
                    <div>
                        <Link className="text-gray-100 font-semibold text-sm" to="/support">Developer Discord</Link>
                    </div>
                    <div>
                        <Link className="text-gray-100 font-semibold text-sm" to="/contact">Send Us A Message</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;