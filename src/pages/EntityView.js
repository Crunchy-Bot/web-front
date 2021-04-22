import React from 'react';
import Footer from "../components/Footer";

function EntityView(props) {
    let target = props.target;

    return (
        <>

            <Footer/>
        </>
    )
}

function MangaView(props) {
    let id = props.id;
    return (
        <EntityView target="manga" id={id}/>
    )

}

function AnimeView(props) {
    let id = props.id;
    return (
        <EntityView target="anime" id={id}/>
    )

}

export {MangaView, AnimeView};