import ironman from "./../../Assets/ironman-marvel.gif"

import "./Loading.css";

const Loading=()=>{
    return <div className="loading-wrapper">
             <div className="image-wrapper"><img src={ironman} alt = "ironman gif"/></div>
    </div>
}

export default Loading;