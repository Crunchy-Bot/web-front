import React from 'react';
import { Link, useLocation } from "react-router-dom";

import {CommandItem, CommandDefaultItem, CommandNotFound} from "../components/CommandItem";
import { categories, commandsInfo } from "../data/CommandInfo";
import Footer from "../components/Footer";

const final = [];
let count = 0

for (let cat of categories) {
    count++
    let renderedCommands = [];

    let subCount = 0;
    for (let command of cat.commands) {
        subCount++

        let linker = `?target=${command.toLowerCase().replaceAll(" ", "-")}`;
        renderedCommands.push(
            <div key={ subCount } className="text-white font-semibold hover:underline transition duration-200 px-2">
                <Link to={ linker }>{ command }</Link>
            </div>
        );
    }

    final.push(
        <div key={ count } className="px-2">
            <div className="flex">
                <h1 className="text-crunchy font-bold text-lg cursor-default">{cat.name}</h1>
            </div>
            { renderedCommands }
        </div>
    )
}

function Commands() {
    const loc = useLocation();
    const maybeTarget = new URLSearchParams(loc.search).get('target');

    let render;
    if (maybeTarget === null  || maybeTarget === "help") {
        render = <CommandDefaultItem/>
    } else {
        let details = commandsInfo[maybeTarget];
        if (details === null) {
            render = <CommandNotFound/>
        } else {
            render = <CommandItem info={ details } target={ maybeTarget }/>
        }
    }

    return (
        <>
            <div className="commands flex justify-center">
                <div className="flex flex-col-reverse xl:flex-row justify-center items-center xl:items-start xl:justify-start w-11/12 pb-4">
                    <div className="flex flex-wrap xl:flex-no-wrap flex-row xl:flex-col space-y-3 py-3 pr-8 border-r-2 border-crunchy">
                        { final }
                    </div>
                    <div className="w-4/5">
                        { render }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Commands;
