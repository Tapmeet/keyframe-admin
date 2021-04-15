import React from "react";
import axios from "axios";
import { useRouteMatch, Link } from "react-router-dom";
import download from "downloadjs";
import {
  apiPreviewVideo,
  apiMergeVideo,
  apigetAdminTemplate,
  apiPath,
} from "./../../../Utility/Utility";
const ExportVideo = (props) => {
  const [templateData, setTemplateData] = React.useState("");
  const [loaderCheck, setLoaderCheck] = React.useState(true);
  const [videoSuccess, setVideoSuccess] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState("");
  const match = useRouteMatch("/export-video/:templateId/download");
  const {
    params: { templateId },
  } = match;
  function videosMerged(data) {
    axios
      .post(apiMergeVideo, {
        videos: data,
        templateId: templateId,
      })
      .then((response) => {
        console.log(response);
        setLoaderCheck(false);
        if (response.data.message == "successfull") {
          setVideoUrl(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function videoExport() {
    axios
      .post(apiPreviewVideo, {
        templateId: templateId,
      })
      .then((response) => {
        console.log(response);
        if (response.data.message == "successfull") {
          videosMerged(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  var i = 1;
  React.useEffect(() => {
    if (templateData == "") {
      axios
        .get(`${apigetAdminTemplate}` + "?templateId=" + templateId, {})
        .then(function (response) {
          console.log(response.data.data[0].templateImage);
          setTemplateData(response.data.data);
          if (i == 1) {
            videoExport();
            i++;
          }
        });
    }
  }, [templateData]);
  function downloadVideo() {
    download(apiPath + videoUrl);
  }
  return (
    <section className="home-wrapper">
      
      <div className="inner-box-area">
        <div className="container">
          <div className="row export-video">
            <div className="col-sm-6 col-12">
              <div className="section">
                {videoUrl ? (
                  <video
                    key={videoUrl}
                    className="video-container video-container-overlay"
                    autoPlay={true}
                    controls={true}
                    loop=""
                    muted={true}
                  >
                    <source type="video/mp4" src={apiPath + videoUrl} />
                  </video>
                ) : templateData != "" ? (
                  <img
                    className="img-fluid"
                    src={apiPath + templateData[0].templateImage}
                    alt="Template Preview"
                  />
                ) : null}
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="section ">
                {loaderCheck ? (
                  <div className=" text-center">
                    <h3>Your Video is Rendering...</h3>
                    <div className="loader-wrapper">
                      <div>Please Wait</div>
                      <div className="loader">Loading...</div>
                    </div>
                  </div>
                ) : (
                  <div className="loader-wrapper text-left">
                    <h3>Download your video</h3>
                    <p>
                      Free exports can be downloaded and shared as often as you
                      like.
                    </p>
                    <button
                      class="exportbtn"
                      // href={apiPath + videoUrl}
                      // target="_blank"
                      // download
                      onClick={downloadVideo}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                      >
                        <path
                          fill="currentColor"
                          d="M14 14v-4h2v6H0v-6h2v4h12zM3 7h4V1c0-.552.448-1 1-1s1 .448 1 1v6h4l-5 5-5-5z"
                        ></path>
                      </svg>
                      <span>Download video</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExportVideo;
