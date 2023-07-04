import React from "react";

const Card = (props) => {
  return (
    <div className="w-60 rounded-md cursor-pointer border-2">
      <div>
        <img src={props.image_url}></img>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
      </div>
    </div>
  );
};

export default Card;
