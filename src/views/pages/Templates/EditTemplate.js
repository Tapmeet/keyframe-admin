import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { Redirect, useRouteMatch } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import DataTable from "react-data-table-component";
import { Multiselect } from "multiselect-react-dropdown";

import {
  apiPath,
  apiAddTemplateCategory,
  apiUploadImage,
  apiAllScene,
  apiGetTemplateCategories,
  apiaddAdminTemplate,
  apigetAdminTemplate,
  apiupdateAdminTemplate,
} from "../../../Utility/Utility";
const EditTemplate = () => {
  const match = useRouteMatch("/edit-template/:templateId/");
  const {
    params: { templateId },
  } = match;
  const [categories, setCategories] = React.useState([]);
  const [userToken, setUserToken] = React.useState("");
  const cookies = new Cookies();
  const [processing, setProcessing] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [checkTitle, setCheckTitle] = React.useState(false);
  const [checkScene, setCheckScene] = React.useState(false);
  const [templateImage, settemplateImage] = React.useState("");
  const [checktemplateImage, setChecktemplateImage] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [sceneOptions, setSceneOptions] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState();
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [templateDate, setTemplateData] = React.useState([]);
  /**
   * Submit handler
   * @param event use for prevent the default functionality of the event
   * @returns na
   */
  function handleSubmit(event) {
    event.preventDefault();
    console.log('here')
    console.log(title)
    if (title == "") {
      console.log('heres')
      setCheckTitle(false);
      return false;
    }
    console.log('heress')
    // if (checktemplateImage === false) {
    //   return false;
    // }
    //console.log("here");
    setSuccessMessage("");
    setErrorMessage("");
    setLoader(true);
    // API Call
    axios
      .put(`${apiupdateAdminTemplate}${templateId}`, {
        id: templateId,
        title: title,
        templateImage: templateImage,
        templateScenes: selectedValue,
        templateCategory: selectedCategory,
      })
      .then((response) => {
        console.log(response);
        setSuccessMessage(response.data.message);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
        setLoader(false);
      });
  }
  function setTemplateTitle(evt) {
    if (evt === "") {
      setCheckTitle(false);
    } else {
      setCheckTitle(true);
    }
    setTitle(evt);
  }
  function setformImage(e) {
    setChecktemplateImage(false);
    var parts = e.target.files[0].type.split("/");
    var result = parts[0];
    if (e.target.files[0] != "") {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("userId", userId);
      setProcessing(true);
      axios
        .post(`${apiUploadImage}`, data)
        .then((response) => {
          setProcessing(false);
          let fileUrl = response.data.message
            .replace(/\\/g, "/")
            .substring("public".length);
          let imageUrl = fileUrl.replace("sets/", "");
          let updatedImage = imageUrl;
          settemplateImage(imageUrl);
          setChecktemplateImage(true);
        })
        .catch((error) => {});
    }
  }
  React.useEffect(() => {
    if (cookies.get("token")) {
      setUserToken(cookies.get("token"));
      const token = cookies.get("token");
      const decoded = jwt_decode(token);
      // console.log(decoded.id)
      setUserId(decoded.id);
    }
    axios.get(`${apiGetTemplateCategories}`, {}).then(function (response) {
    //  console.log(response.data.templates);
      setCategories(response.data.templates);
    });
    axios.get(`${apiAllScene}`, {}).then(function (response) {
      var result = response.data.scenes;
      console.log(result);
      var scenes = [];
      response.data.scenes.map((data, index) => {
        scenes = [...scenes]; // copying the old datas array
        scenes[index] = {
          sceneTitle: data.sceneTitle,
          id: data._id,
        };
      });
      //console.log(scenes);
      setSceneOptions(scenes);
    });
    axios
      .get(`${apigetAdminTemplate}` + "?templateId=" + templateId, {})
      .then(function (response) {
         console.log(response)
        setTemplateData(response.data.data[0]);
        setTitle(response.data.data[0].title)
        setSelectedCategory(response.data.data[0].templateCategory);
        setThumbnail(response.data.data[0].templateImage);
        setSelectedValue(response.data.data[0].templateScenes);
        settemplateImage(response.data.data[0].templateImage);
      });
  }, [userId]);
  function onSelect(selectedList, selectedItem) {
    setSelectedValue(selectedList);
  }

  function onRemove(selectedList, removedItem) {
    setSelectedValue(selectedList);
  }
  function updateCategory(e) {
    setSelectedCategory(e.target.value);
  }
  return (
    <div className="container catgeory-wrapper ">
      <div className="d-flex">
        <h2>Edit Template</h2>
      </div>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            type="text"
            className="form-control"
            onChange={(e) => setTemplateTitle(e.currentTarget.value)}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label>Template Thumbnail</label>
          <br />
          {thumbnail ? (
            <img
              className="img-fluid"
              src={apiPath + thumbnail}
              alt="Thumbnail"
            ></img>
          ) : null}
          <br />
          <input
            type="file"
            className="form-control"
            onChange={(e) => setformImage(e)}
          />
        </div>
        <div className="form-group">
          <label>Template Scenes</label>
          <Multiselect
            options={sceneOptions} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="sceneTitle" // Property name to display in the dropdown options
          />
        </div>
        <div className="form-group">
          <h4>Scene Category</h4>
          <select
            className="form-control"
            value={selectedCategory}
            onChange={updateCategory}
          >
            <option value="">Select Category</option>;
            {categories.map((data, index) => {
              return <option value={data._id}>{data.title}</option>;
            })}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        {loader ? (
          <div>
            <br />
            <i className="fas fa-spinner fa-pulse"></i>
          </div>
        ) : null}
        <br />
        {successMessage ? (
          <div className="alert alert-success alert-messages" role="alert">
            {successMessage}
          </div>
        ) : null}
        {errorMessage ? (
          <div className="alert alert-danger alert-messages" role="alert">
            {errorMessage}
          </div>
        ) : null}
      </form>
      <br />
    </div>
  );
};

export default EditTemplate;
