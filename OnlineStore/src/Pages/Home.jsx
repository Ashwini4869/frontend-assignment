import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  };
  const { data, isLoading, error } = useQuery(["Data"], fetchData);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>An error has occured...+{error.message}</h1>;
  console.log(data);

  const productElements = data.map(function (element) {
    return (
      <Card
        name={element.title}
        price={element.price}
        image_url={element.image}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-4">{productElements}</div>
    </div>
  );
};

export default Home;
