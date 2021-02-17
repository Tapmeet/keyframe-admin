/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";

import { apiGetTemplates, apiPath } from "./../../../Utility/Utility";
const AllTemplates = () => {
  const renderEditUrl = (val, row) => (
    <a href={`/${row["sceneId"]}`}>Edit Scene</a>
  );
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Poster Image",
      selector: "title",
      ignoreRowClick: true,
      cell: (row) => (
        <img
          src={apiPath + row.templateImage}
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
          href={
            "/#/template/" +
            row._id +
            "/" +
            row.sceneOrder[0].sceneId +
            "/" +
            row.sceneOrder[0].id
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {row.key}
          Edit Scene
        </a>
      ),
    },
  ];
  useEffect(() => {
    axios.get(`${apiGetTemplates}`, {}).then(function (response) {
      console.log(response.data);
      setData(response.data.template);
    });
  }, []);
  return (
    <div className="container catgeory-wrapper ">
      <div className="d-flex">
        <h2>All Templates</h2>
        <Link to="/add-template" className="btn">
          Add Template
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AllTemplates;
