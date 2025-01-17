import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const changeSearch = (search) => {
    setSearch(search);
  };

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  };
  const { data, isLoading, error } = useQuery(["Data"], fetchData);
  if (isLoading)
    return (
      <h1 className="text-center p-4 mt-16 text-4xl font-extrabold font-mono">
        Loading...
      </h1>
    );
  if (error)
    return (
      <h1 className="text-center p-4 mt-16 text-4xl font-extrabold font-mono">
        An error has occured...+{error.message}
      </h1>
    );
  console.log(data);

  const searchElements = data
    .filter(function (product) {
      if (search === "") {
        return null;
      } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }
    })
    .map(function (element) {
      return (
        <Card
          key={element.id}
          id={element.id}
          name={element.title}
          price={element.price}
          image_url={element.image}
        />
      );
    });

  return (
    <div>
      <Navbar />
      <Searchbar changeSearch={changeSearch} />
      <div className="mt-6 grid place-items-center grid-cols-4 gap-6">
        {searchElements}
      </div>
    </div>
  );
};

export default Search;
