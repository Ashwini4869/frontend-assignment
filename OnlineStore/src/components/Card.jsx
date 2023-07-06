import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    console.log(props.id);
    navigate("/details", { state: { id: props.id } });
  }
  return (
    <div
      onClick={() => handleClick()}
      className="w-60 rounded-md cursor-pointer border-2"
    >
      <div>
        <img src={props.image_url}></img>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
      </div>
    </div>
  );
};

export default Card;
