import React from "react";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Searchbar = ({ changeSearch }) => {
  let search = "";
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      console.log(values.query);
      search = values.query;
      changeSearch(search);
      formik.resetForm();
    },
  });

  return (
    <div>
      <div className="p-3">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="query">Search for Products:</label>
          <br />
          <input
            className="peer block min-h-[auto] w-1/4 rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
            type="text"
            id="query"
            placeholder="Enter product name"
            name="query"
            value={formik.values.query}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          <br />
          <input
            className="cursor-pointer bg-indigo-500 w-1/4 rounded-full hover:bg-indigo-400"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};
export default Searchbar;
