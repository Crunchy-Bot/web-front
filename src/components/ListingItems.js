import React from 'react';
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

let counter = 0;

function IconSelection(props) {
    let icon = props.icon;
    let link = props.url;
    let msg = props.msg;

    let id = counter++;

    return (
        <>
            <ReactTooltip id={`linking-button-${id}`}>
                <span>{msg}</span>
            </ReactTooltip>
            <Link data-tip data-for={`linking-button-${id}`} to={link} className="transform hover:-translate-y-1 transition duration-200 w-40 my-4" >
                <img className="w-32 object-contain rounded-lg shadow-small-sharp" src={icon} alt=""/>
            </Link>
        </>
    )
}

function ListItems(props) {
    let title = props.title;
    let entities = props.entities;

    let rendered = [];
    for (let entity of entities) {
        rendered.push(
            <IconSelection key={counter++} icon={entity.icon} msg={entity.msg} url={entity.url}/>
        )
    }

    return (
        <div className="flex flex-wrap space-x-2">
            { rendered }
        </div>
    )
}

export default ListItems;