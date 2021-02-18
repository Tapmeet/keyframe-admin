/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";

import { apiGetSceneCategories, apiPath } from "./../../../Utility/Utility";
const AllScenesCategories = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Poster Image",
      selector: "title",
      ignoreRowClick: true,
      cell: (row) => (
        <img
         src ={apiPath + row.categoryImage}
          alt="Poster"
          className="img-fluid"
        />
      ),
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Action ",
      left: true,
      ignoreRowClick: true,
      cell: (row) => (
        <a
          href={"/#/edit-category/" + row._id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {row.key}
        Edit Category
        </a>
      ),
    },
  ];
  useEffect(() => {
    axios.get(`${apiGetSceneCategories}`, {}).then(function (response) {
      console.log(response.data);
      setData(response.data.scenes);
    });
  }, []);
  return (
    <div className="container catgeory-wrapper ">
        <div className="d-flex">
            <h2>All Categories</h2>
            <Link to='/add-category' className="btn">Add Category</Link>
        </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AllScenesCategories;
