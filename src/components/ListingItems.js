import React from 'react';


function IconSelection(props) {
    let icon = props.icon;
    let link = props.url;
    let msg = props.msg;

    return (
        <div className="w-40">
            <img className="" src={icon} alt=""/>
        </div>
    )
}

function ListItems(props) {
    let title = props.title;
    let entities = props.entities;

    return (
        <div className="flex flex-col w-full">
             <div className="flex">
                <h1 className="text-white text-xl font-bold border-b-2 border-crunchy">
                    { title }
                </h1>
            </div>
            <div className="flex justify-evenly">
                { entities }
            </div>
        </div>
    )
}

export default ListItems;