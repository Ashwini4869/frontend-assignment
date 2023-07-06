import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.state.id;

  const fetchData = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response.data;
  };
  const { data, isLoading, error } = useQuery(["Product"], fetchData);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>An error has occured...+{error.message}</h1>;
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="ml-10  text-slate-700 font-bold font-serif text-2xl">
        Product Description:
      </div>
      <div className="p-10 w-1/2  border-black text-slate-700 font-mono">
        <img className="w-40" src={data.image} />
        <h1 className="p-1 mt-5">Product Name: {data.title}</h1>
        <h1 className="p-1">Price: ${data.price}</h1>
        <p className="p-1">Description: {data.description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-slate-700 px-4 py-2 ml-10 rounded-full text-gray-200 font-semibold hover:bg-slate-600 active:bg-slate-700"
      >
        Go Home
      </button>
    </div>
  );
};

export default ProductDetails;
