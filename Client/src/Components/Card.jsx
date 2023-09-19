import React from "react";
import Detail from "./Detail";
import "../Styles/cards.css"
function Card(props)
{
    return(
        <div className="cardStyling">
        <div className="card">
        <div className="top">
            <div className="header">
                <h2>{props.name}</h2>
            </div>
        </div>
        <div className="bottom">
            <Detail detailInfo={props.tel}/>
            <Detail detailInfo={props.mail}/>
        </div>
</div>
</div>
    );

}
export default Card;