import React from "react";

function Card(props) {
    var card = (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img
                    src={props.imgURL}
                    alt="avatar_img"
                    className="circle-img"
                />
            </div>
            <div className="bottom">
                <p className="info">{props.phone}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>);
    return card;
}



export default Card;