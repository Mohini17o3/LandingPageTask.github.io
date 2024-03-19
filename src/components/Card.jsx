import React from "react";

function Card(props) {
    return(
        <section className="card">
        <img src= {props.img} ></img>
        <h1> {props.heading}</h1>  
        </section>



    );
}

export default Card;