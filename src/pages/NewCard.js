import React, {useState} from 'react';

function Card(props) {
    const [isHover, setHover] = useState(props.active);

    let cardSize;
    let imgTrans;
    if (!isHover) {
        cardSize = "card-small";
        imgTrans = "translate-x-0 translate-y-0"
    } else {
        cardSize = "card-big"
        imgTrans = "-translate-x-4 -translate-y-4"
    }

    return (
      <div onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}
          className={`flex bg-discord-dark shadow-small-sharp rounded-lg ${cardSize} slow-grow h-64`}>
          <img className={`w-40 h-64 rounded-lg shadow-small-sharp transition duration-200 transform ${imgTrans}`} src="https://cdn.crunchy.gg/thumbnails/anime/I0EmQCxSYChoZWE.jpg" alt=""/>
      </div>
    )
}


function NewCard() {
    return (
        <div className="flex flex-col space-y-40 px-16">
            <Card active={false}/>
            <Card active={true}/>

        </div>
    )
}

export default NewCard;