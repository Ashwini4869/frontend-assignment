import React from "react";
import Card from "../components/Card";
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

  return (
    <div>
      <h1>Homepage</h1>
      <Card />
    </div>
  );
};

export default Home;
