import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect, useRouteMatch } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import DataTable from "react-data-table-component";
import { Multiselect } from "multiselect-react-dropdown";
import { apigetTemplateStats, apiPath } from "../../../Utility/Utility";
import Moment from "react-moment";
const ViewStats = () => {
  const match = useRouteMatch("/view-template-stats/:templateId/");
  const {
    params: { templateId },
  } = match;
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "User",
      selector: "userName",
      sortable: true,
    },
    {
      name: "Title",
      selector: "videoTitle",
      sortable: true,
    },
    {
      name: "Created ",
      selector: "videoTitle",
      cell: (row) => <Moment format="DD/YYYY/MM">{row.createdAt}</Moment>,
    },
    {
      name: "Video",
      selector: "title",
      ignoreRowClick: true,
      cell: (row) => (
        <video style={{marginBottom: '10px'}}width="200" height="120" controls>
          <source src={apiPath + row.path} type="video/mp4" />
        </video>
      ),
    },
  ];
  React.useEffect(() => {
    axios
      .get(`${apigetTemplateStats}` + "?templateId=" + templateId, {})
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      });
  }, []);

  return (
    <div className="container catgeory-wrapper ">
      <div className="d-flex">
        <h2>Template Stats</h2>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ViewStats;
