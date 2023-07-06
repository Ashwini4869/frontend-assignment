import React from "react";
import { useFormik } from "formik";

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
      <div className="p-4">
        <form onSubmit={formik.handleSubmit}>
          <label
            className="font-bold ml-2 text-xl text-slate-700 font-serif"
            htmlFor="query"
          >
            Search for Products:
          </label>
          <br />
          <input
            className="w-1/4 p-2 pl-4 mt-4 box-border border-2 border-slate-100 focus:outline-none transition duration-500 focus:border-2 focus:border-[#555] rounded-full"
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
            className="cursor-pointer bg-indigo-500 w-1/4 rounded-full hover:bg-indigo-400 active:bg-indigo-500 mt-4 py-2 font-bold text-slate-100"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};
export default Searchbar;
