import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
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
      <div className="p-10">
        <img className="w-40" src={data.image} />
        <h1>Product Name: {data.title}</h1>
        <h1>Price: ${data.price}</h1>
        <p>Description: {data.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
