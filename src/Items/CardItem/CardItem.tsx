import React from "react";
import "./CardItem.css";

interface ComicCardPorps{
    image: string;
    title: string;
    id:string
}

const ComicItem=(porps:ComicCardPorps)=>{
    const {image, id} = porps;
    let title = porps.title.length > 40 ? porps.title.slice(0,36) + "..." : porps.title;
    return <div className="comic-card-container">
        <div className="cover-image">
            <img src={image} alt ="comic-cover"/>
        </div>
        <div className="comic-title">
            <span className="comic-title" title={porps.title} data-testid="card-title">{title}</span>
            <span className="comic-id">{id}</span>
        </div>
    </div>
}

export default ComicItem;