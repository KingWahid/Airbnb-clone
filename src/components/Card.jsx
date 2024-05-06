import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpot === 0) {
        badgeText = "SOLD OUT"
    } else if (props.isOnline === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText&& <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} className="card--photo"/>
            <div className="card--stats">
                <img src="../images/star-rating.png" width={"12px"}/>
                <span className="gray">{props.stats.rating} {`(${props.stats.reviewCount})`} </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p>{props.desc} </p>
            <p className="bold"> From ${props.price} / person</p>
        </div>
    )
}