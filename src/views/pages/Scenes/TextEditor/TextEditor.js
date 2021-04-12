/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useRouteMatch } from "react-router-dom";
import FontPicker from "font-picker-react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import { SketchPicker } from "react-color";
import {
  apiUploadImage,
  apiPath,
  apiUpdateScene,
  apiGetSceneCategories,
  apiupdateAdminTemplate,
  apiGetTemplateCategories,
} from "./../../../../Utility/Utility";
const TextEditor = (props) => {
  // const match = useRouteMatch("/template/:templateId/:id/:sceneId");
  // const {
  //   params: { templateId },
  // } = match;
  const [categories, setCategories] = React.useState([]);
  const [userToken, setUserToken] = React.useState("");
  const [template, setTemplate] = React.useState(false);
  const cookies = new Cookies();
  const [userId, setUserId] = React.useState("");
  const [sceneId, setSceneId] = React.useState(props.id);
  const [templateId, setTemplateId] = React.useState(props.templateId);
  const [titleColor, setTitleColor] = React.useState(props.textColor);
  const [thumbnail, setThumbnail] = React.useState(props.thumbnails);
  //var thumbnail = props.thumbnail;
  const [selectedCategory, setSelectedCategory] = React.useState(
    props.category
  );
  const [processing, setProcessing] = React.useState(false);
  const [titleColorShow, setTitleColorShow] = React.useState(false);
  const [activeCapitalize, setactiveCapitalize] = React.useState(false);
  const [activeLeftAlign, setactiveLeftAlign] = React.useState(false);
  const [activeRightAlign, setactiveRightAlign] = React.useState(false);
  const [activeCenterAlign, setactiveCenterAlign] = React.useState(true);
  const [activeFontFamily, setState] = React.useState(props.fontFamily);
  const [fontWeight, setFontWeight] = React.useState("");
  const [activeFontlineHeight, setactiveFontlineHeight] = React.useState(
    props.textlineHeight
  );
  //const [activeFontSize, setactiveFontSize] = React.useState(props.textSize);
  var activeFontSize = props.textSize;
  const toggleTitle = () => setTitleColorShow((prevState) => !prevState);
  function setformImage(e) {
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
          setThumbnail(imageUrl);
          if (props.template) {
            axios
              .put(`${apiupdateAdminTemplate}${templateId}`, {
                id: templateId,
                templateImage: updatedImage,
              })
              .then(function (response) {
                console.log(response);
              });
          } else {
            axios
              .put(`${apiUpdateScene}${sceneId}`, {
                id: sceneId,
                sceneThumbnail: updatedImage,
              })
              .then(function (response) {
                console.log(response);
              });
          }
        })
        .catch((error) => {});
    }
  }
  function updateCategory(e) {
    setSelectedCategory(e.target.value);
    if (e.target.value != "") {
      if (props.template) {
        axios
        .put(`${apiupdateAdminTemplate}${templateId}`, {
          id: templateId,
          templateCategory: e.target.value,
        })
        .then(function (response) {
          console.log(response);
        });
      } else {
        axios
          .put(`${apiUpdateScene}${sceneId}`, {
            id: sceneId,
            sceneCategory: e.target.value,
          })
          .then(function (response) {
            console.log(response);
          });
      }
    }
  }
  React.useEffect(() => {
    console.log(props.thumbnails);
    if (props.setTexttransform === "text-uppercase") {
      setactiveCapitalize(true);
    } else {
      setactiveCapitalize(false);
    }
    //setactiveFontSize(props.textSize)
    activeFontSize = props.textSize;
    if (cookies.get("token")) {
      setUserToken(cookies.get("token"));
      const token = cookies.get("token");
      const decoded = jwt_decode(token);
      // console.log(decoded.id)
      setUserId(decoded.id);
      setSceneId(props.id);
      setState(props.fontFamily);
      setFontWeight(props.fontWeight)
     
    }
    if (props.thumbnails) {
      setThumbnail(props.thumbnails);
    }
    if (props.category) {
      setSelectedCategory(props.category);
    }

    if (props.template) {
      setTemplate(props.template);
      axios.get(`${apiGetTemplateCategories}`, {}).then(function (response) {
        console.log(response.data);
        setCategories(response.data.templates);
      });
    } else {
      axios.get(`${apiGetSceneCategories}`, {}).then(function (response) {
        setCategories(response.data.scenes);
      });
    }
    console.log(props.fontFamily)
  }, [props.thumbnails, props.category, userId]);
  function setcapitalize() {
    if (activeCapitalize === true) {
      props.getTextTransform("");
    } else {
      props.getTextTransform("text-uppercase");
    }
    setactiveCapitalize(!activeCapitalize);
  }
  function setAlignment(align) {
    if (align === "left") {
      setactiveLeftAlign(true);
      setactiveCenterAlign(false);
      setactiveRightAlign(false);
      props.getAlignment("text-left");
    } else if (align === "center") {
      setactiveLeftAlign(false);
      setactiveCenterAlign(true);
      setactiveRightAlign(false);
      props.getAlignment("text-center");
    } else {
      setactiveLeftAlign(false);
      setactiveCenterAlign(false);
      setactiveRightAlign(true);
      props.getAlignment("text-right");
    }
  }
  function handleChangeComplete(color) {
    setTitleColor(color.hex);
    props.getTextColor(color.hex);
  }
  function setFontsize(e) {
    //setactiveFontSize(e);
    activeFontSize = e;
    props.getTextSize(e);
  }
  function setFontlineHeight(e) {
    setactiveFontlineHeight(e);
    props.getTextlineHeight(e);
  }
  function setfontWeight(e) {
    console.log(e.target.value)
    props.getFontWeight(e.target.value);
    setFontWeight(e.target.value)
  }
  function setFontfamily(e) {
    setState(e);
    props.getFontfamily(e);
  }
  return (
    <section className="template-new-wrapper-text-editor">
      <div className="text-editor">
        <h4>Text Properties</h4>
        <div className="sectionOne">
        <FontPicker
            families={
              "Arimo, Lato, Montserrat, Noto Serif, Oswald, Roboto, Josefin Sans, Barlow, Open Sans"
            }
            apiKey="AIzaSyDaztQYmJQDMP2mVUtrHIq4XRBpLEr0dzk"
            activeFontFamily={activeFontFamily}
            onChange={(nextFont) => setFontfamily(nextFont.family)}
          />
          <input
            type="number"
            min="18"
            value={activeFontSize}
            onChange={(e) => setFontsize(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="sectionOne">
        <select name="fontweight" onChange={e => setfontWeight(e)} value={fontWeight}>
            <option value="">Set Fonts Weight</option>
            <option value="lighter">Light</option>
            <option value="normal">Regular</option>
            <option value="bold">Bold</option>
          </select>
          <input
            value={activeFontlineHeight}
            onChange={(e) => setFontlineHeight(e.target.value)}
            type="number"
            min="1"
            step="0.1"
            className="form-control"
          />
        </div>

        <div class="sectionTwo">
          <ul>
            <li>
              <div
                className={
                  activeCapitalize
                    ? "capitalise borders active"
                    : "capitalise borders "
                }
                onClick={setcapitalize}
              >
                <svg viewBox="0 0 16 16" width="16" height="16">
                  <path d="M6 1H0v3h1l1-1h3v11l-2 1v1h6v-1l-2-1V3h3l1 1h1V1z"></path>
                  <path d="M8 6v3h1l1-1h1v6l-1 1v1h4v-1l-1-1V8h1l1 1h1V6z"></path>
                </svg>
              </div>
            </li>
            <li>
              <div className="font-color" onClick={toggleTitle}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="__36674"
                >
                  <path
                    d="M4 18h6v2H4v-2zm9.05-14l4.67 14H20v2h-6v-2h1.61l-1-3H9.4l-1.44 4.32-1.9-.64L10.95 4h2.1zM12 7.16L10.05 13h3.9L12 7.16z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg viewBox="-1 -1 2 2" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="chequer"
                      x="0"
                      y="0"
                      width="0.25"
                      height="0.25"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="0.25"
                        height="0.25"
                        fill="#ffffff"
                      ></rect>
                      <rect
                        x="0.25"
                        y="0"
                        width="0.25"
                        height="0.25"
                        fill="#ccceda"
                      ></rect>
                      <rect
                        x="0.25"
                        y="0.25"
                        width="0.25"
                        height="0.25"
                        fill="#ffffff"
                      ></rect>
                      <rect
                        x="0"
                        y="0.25"
                        width="0.25"
                        height="0.25"
                        fill="#ccceda"
                      ></rect>
                    </pattern>
                  </defs>
                  <circle
                    class="base"
                    r="1"
                    cx="0"
                    cy="0"
                    fill="url(#chequer)"
                  ></circle>
                  <circle
                    id="segment-1"
                    r="1"
                    cx="0"
                    cy="0"
                    fill={titleColor}
                  ></circle>
                  <circle
                    class="outline"
                    r="0.95"
                    cx="0"
                    cy="0"
                    fill="none"
                    stroke="#ccceda"
                    stroke-width="0.05"
                  ></circle>
                </svg>
                {titleColorShow ? (
                  <SketchPicker
                    color={titleColor}
                    onChangeComplete={handleChangeComplete}
                  />
                ) : null}
              </div>
            </li>
            <li>
              <div
                className={
                  activeLeftAlign
                    ? "capitalise borders active "
                    : "capitalise borders "
                }
                onClick={() => setAlignment("left")}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <g fill="currentColor">
                    <path d="M23 4H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"></path>
                    <path d="M13 10H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                    <path d="M23 16H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"></path>
                    <path d="M13 22H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                  </g>
                </svg>
              </div>
            </li>
            <li>
              <div
                className={
                  activeCenterAlign
                    ? "capitalise borders active"
                    : "capitalise borders "
                }
                onClick={() => setAlignment("center")}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <g fill="currentColor">
                    <path d="M23 4H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"></path>
                    <path d="M18 10H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                    <path d="M23 16H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"></path>
                    <path d="M18 22H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                  </g>
                </svg>
              </div>
            </li>
            <li>
              <div
                className={
                  activeRightAlign
                    ? "capitalise borders active"
                    : "capitalise borders "
                }
                onClick={() => setAlignment("right")}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <g fill="currentColor">
                    <path d="M23 4H1a1 1 0 1 1 0-2h22a1 1 0 1 1 0 2z"></path>
                    <path d="M23 10H11a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2z"></path>
                    <path d="M23 16H1a1 1 0 1 1 0-2h22a1 1 0 1 1 0 2z"></path>
                    <path d="M23 22H11a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2z"></path>
                  </g>
                </svg>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="text-editor animation-section sectionTwo">
          <h4>Text Animations</h4>
          <select>
            <option value="">No Animations</option>
            <option value="1.2">Slide in with Reveal</option>
            <option value="1.4">Swipe from left</option>
            <option value="1.6">Scale Down</option>
            <option value="2">Simple fade</option>
          </select>
        </div> */}
        <div className="thumbnail-wrapper sectionTwo">
          <h4>{props.template ? "Template Thumbnail" : "Scene Thumbnail"} </h4>
          {thumbnail ? (
            <img
              className="img-fluid"
              src={apiPath + thumbnail}
              alt="Thumbnail"
            ></img>
          ) : null}

          <input type="file" onChange={(e) => setformImage(e)} />
        </div>
        <div className=" animation-section  category-section">
          <h4>{props.template ? "Template Category" : "Scene Category"}</h4>
          <select value={selectedCategory} onChange={updateCategory}>
            <option value="">Select Category</option>;
            {categories.map((data, index) => {
              return <option value={data._id} key={index}>{data.title}</option>;
            })}
          </select>
        </div>
      </div>
    </section>
  );
};
export default TextEditor;
