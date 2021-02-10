/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";

import { apiAllScene } from "./../../../../Utility/Utility";
const AllScenes = () => {
  const renderEditUrl = (val, row) => (
    <a href={`/${row["sceneId"]}`}>Edit Scene</a>
  );
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Scene Id",
      selector: "sceneId",
      sortable: true,
    },
    {
      name: "Scene Title",
      selector: "sceneTitle",
      sortable: true,
    },
    {
      name: "Action ",
      left: true,
      ignoreRowClick: true,
      cell: (row) => (
        <a
          href={"/#/edit-scene/" + row.sceneId}
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
    axios.get(`${apiAllScene}`, {}).then(function (response) {
      console.log(response.data.scenes);
      setData(response.data.scenes);
    });
  }, []);
  return (
    <div className="c-app c-default-layout flex-row ">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AllScenes;
