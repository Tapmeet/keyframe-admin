/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";

import { apiGetTemplateCategories, apiPath } from "./../../../Utility/Utility";
const AllTemplateCategories = () => {
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
          href={"/#/edit-template-category/" + row._id}
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
    axios.get(`${apiGetTemplateCategories}`, {}).then(function (response) {
      console.log(response.data.templates);
      setData(response.data.templates);
    });
  }, []);
  return (
    <div className="container catgeory-wrapper ">
        <div className="d-flex">
            <h2>All Categories</h2>
            <Link to='/add-template-category' className="btn">Add Category</Link>
        </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AllTemplateCategories;
