/* eslint-disable eqeqeq */
import React from "react";
import { useRouteMatch } from "react-router-dom";
import FilerobotImageEditor from "filerobot-image-editor";
import axios from "axios";
import backarrow from "../../../../assets/images/templates/back-arrow.svg";
import {
  apiGetCategoryScenes,
  apiPath,
  apiupdateAdminTemplate,
} from "../../../../Utility/Utility";
import Loader from "./../../../../Utility/Loader/Loader";
const ScenesListings = (props) => {
  const [media, setMedia] = React.useState("");
  const [data, setData] = React.useState([]);
  const match = useRouteMatch("/template/:templateId/:id/:sceneId");
  const [loader, setLoader] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const {
    params: { templateId },
  } = match;
  const [sceneOrder, setSceneOrder] = React.useState(props.sceneOrder);
  const setImage = (img) => {
    setMedia(img);
  };
  const [show, toggle] = React.useState(false);
  const config = {
    tools: [
      "adjust",
      "effects",
      "filters",
      "rotate",
      "crop",
      "resize",
      "image",
      "text",
    ],
    theme: {
      colors: {
        primaryBg: "#00527E",
        primaryBgHover: "#637381",
        secondaryBg: "#0c6195",
        secondaryBgHover: "#C72928",
        text: "#F9FAFB",
        textHover: "#ffffff",
        textMute: "#aaaaaa",
        textWarn: "#f7931e",
        secondaryBgOpacity: "rgba(0, 0, 0, 0.75)",
        border: "#00527E",
        borderLight: "#637381",
        tagsBackground: "#fb3640",
        buttonBackground: "#fb3640",
        hoverButtonBackground: "#E04241",
      },
    },
  };
  const onComplete = function (newUrl) {
    let fileUrl = newUrl.message.replace(/\\/g, "/").substring("public".length);
    let imageUrl = fileUrl.replace("sets/", "");
    let updatedImage = imageUrl;
  };
  const ImageEditor = new FilerobotImageEditor(config, onComplete);
  function filterBtnClick() {
    toggle(true);
  }
  function closeSection(media) {
    props.closeAddScene(false, media);
  }
  function addScene(data) {
    setLoader(true);
    axios
      .put(apiupdateAdminTemplate + templateId, {
        id: templateId,
        data: data,
      })
      .then((response) => {
        console.log(response);
        setSuccessMessage(response.data.message);
        setLoader(false);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
        setLoader(false);
      });
  }
  React.useEffect(() => {
    axios
      .get(`${apiGetCategoryScenes}?categoryId=${props.categoryId}`, {})
      .then(function (response) {
        setData(response.data.scenes);
      });
  }, []);
  return (
    <div className="rightPanel addscenes">
      <Loader open={loader} />
      {data.length > 0 ? (
        <ul>
          {data.map((data, index) => {
            return (
              <li
                key={data._id}
                className={media == data.sceneThumbnail ? "active" : null}
              >
                <img src={apiPath + data.sceneThumbnail} alt="thumbnail" />
                <h4>{data.sceneTitle} </h4>
                <button onClick={() => addScene(data)}>Add Scene</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="col-12">
          {" "}
          <div className="alert alert-primary"> No scenes available</div>
        </div>
      )}
    </div>
  );
};
export default ScenesListings;
