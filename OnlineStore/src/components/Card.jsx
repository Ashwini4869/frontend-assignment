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
      className="w-60 h-96 rounded-md cursor-pointer border-2 border-slate-200 transition ease-in duration-75
      hover:transform hover:scale-105 hover:z-10 hover:shadow-lg"
    >
      <div className="flex flex-col">
        <img className="w-52 h-60 self-center p-2 " src={props.image_url}></img>
        <h1 className="mt-3 p-2 text-sm font-medium text-slate-700">
          {props.name}
        </h1>
        <h1 className="p-2 text-sm font-bold font-serif text-slate-600">
          Price: ${props.price}
        </h1>
      </div>
    </div>
  );
};

export default Card;
