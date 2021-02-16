/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  apiAddTemplateCategory,
  apiUploadImage,
  apiGetTemplateCategory,
  apiUpdateTemplateCategory,
  apiPath
} from "./../../../Utility/Utility";
const EditTemplateCategory = ({ match }) => {
  const [userToken, setUserToken] = React.useState("");
  const cookies = new Cookies();
  const [processing, setProcessing] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [checkTitle, setCheckTitle] = React.useState(true);
  const [categoryImage, setCategoryImage] = React.useState("");
  const [checkCategoryImage, setCheckCategoryImage] = React.useState(true);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  /**
   * Submit handler
   * @param event use for prevent the default functionality of the event
   * @returns na
   */
  function handleSubmit(event) {
    event.preventDefault();
    if (checkTitle === false) {
      return false;
    }
    if (checkCategoryImage === false) {
      return false;
    }
    setSuccessMessage("");
    setErrorMessage("");
    setLoader(true);
    // API Call
    axios
      .put(apiUpdateTemplateCategory + match.params.id, {
        title: title,
        categoryImage: categoryImage,
        id:match.params.id
      })
      .then((response) => {
        setSuccessMessage(response.data.message);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
        setLoader(false);
      });
  }
  function setCategoryTitle(evt) {
    if (evt === "") {
      setCheckTitle(false);
    } else {
      setCheckTitle(true);
    }
    setTitle(evt);
  }
  function setformImage(e) {
    setCheckCategoryImage(false);
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
          setCategoryImage(imageUrl);
          setCheckCategoryImage(true);
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
    axios
      .get(`${apiGetTemplateCategory + "?id=" + match.params.id}`, {})
      .then(function (response) {
        console.log(response.data)
        setTitle(response.data.template.title);
        setCategoryImage(response.data.template.categoryImage);
        // console.log(response.data.scene);
      });
  }, [userId]);
  return (
    <div className="container catgeory-wrapper ">
      <div className="d-flex">
        <h2>Add Category</h2>
      </div>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            className="form-control"
            onChange={(e) => setCategoryTitle(e.currentTarget.value)}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          {categoryImage ? (
            <img src={apiPath +categoryImage} alt="Category Image" className="img-fluid" />
          ) : null}
        </div>
        <div className="form-group">
          <label>Change Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setformImage(e)}
          />
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
    </div>
  );
};

export default EditTemplateCategory;
