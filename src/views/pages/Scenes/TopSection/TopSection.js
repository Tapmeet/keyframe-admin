import React from "react";
import {
  apiPath,
  apiUpdateScene,
  apiupdateAdminTemplate,
} from "./../../../../Utility/Utility";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import axios from "axios";
const TopSection = (props) => {
  const [templateId, setTemplateId] = React.useState(props.templateId);
  const [sceneId, setSceneId] = React.useState(props.id);
  const [templateTitle, setTemplateTitle] = React.useState(props.templateTitle);
  function updateCategory(e) {
    setTemplateTitle(e);
    if (e != "") {
      if (props.template) {
        axios
          .put(`${apiupdateAdminTemplate}${templateId}`, {
            id: templateId,
            title: e,
          })
          .then(function (response) {
            console.log(response);
          });
      } else {
        axios
          .put(`${apiUpdateScene}${sceneId}`, {
            id: sceneId,
            sceneTitle: e,
          })
          .then(function (response) {
            console.log(response);
          });
      }
    }
  }
  return (
    <section className="template-new-wrapper-top">
      <div className="d-flex">
        <div className="name-section">
          <input
            type="text"
            onChange={(e) => updateCategory(e.target.value)}
            value={templateTitle}
          />
        </div>
        <nav>
          <ul>
            <li>
              <span>Preview</span>
            </li>
            {templateId ? (
              <li>
                <Link to={`/edit-template/${templateId}`} style={{color: "#fff"}}>
                  <span>Settings</span>
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default TopSection;
