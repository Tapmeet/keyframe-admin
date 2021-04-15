/* eslint-disable eqeqeq */
import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
// import SiteHeader from "../../../Header/HeaderUser";
// import Footer from "../../../Footer";
import TopSection from "./../Scenes/TopSection/TopSection";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import trash from "./../../../../src/assets/images/templates/trash.svg";
import {
  apigetVideos,
  apiPath,
  apideleteVideos,
} from "../../../Utility/Utility";
import Loader from "../../../Utility/Loader/Loader";
import download from "downloadjs";
const MyVideos = (props) => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [media, setMedia] = React.useState("");
  const [data, setData] = React.useState([]);
  const [userToken, setUserToken] = React.useState("");
  const cookies = new Cookies();
  const [userId, setUserId] = React.useState("");
  const [loader, setLoader] = React.useState(true);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const { buttonLabel, className } = props;
  const [blockToDelete, setblockToDelete] = React.useState("");
  const [processing, setProcessing] = React.useState(true);
  React.useEffect(() => {
    if (cookies.get("token")) {
      setUserToken(cookies.get("token"));
      const token = cookies.get("token");
      const decoded = jwt_decode(token);
      // console.log(decoded.id)
      setUserId(decoded.id);
    }
    console.log(data);
    if (data.length <= 0 && data != undefined) {
      axios
        .get(`${apigetVideos}?userId=${userId}`, {})
        .then(function (response) {
          setProcessing(false);
          setData(response.data.data);
        });
    }
  }, [userId]);
  function confirmDelete(id, media) {
    setModal(!modal);
    setblockToDelete(id);
    setMedia(media);
   // console.log(id);
  }
  function deleteBlock() {
    setModal(!modal);
    setProcessing(true);
    let blockId = blockToDelete;
    axios
      .delete(`${apideleteVideos}`, {
        params: {
          mediaId: blockId,
          media: media,
        },
      })
      .then(function (response) {
        //console.log(response.data.message)
        if (response.data.message) {
          setProcessing(false);
        } else {
          setProcessing(false);
        }
        window.location.reload();
      });
  }
  function downloadVideo(videoUrl) {
    download(apiPath + videoUrl);
  }
  return (
    <section className="home-wrapper">
      <Loader open={processing} />
      <div className="inner-box-area ">
        <TopSection name="myvideos" />
        <div className=" container section my-template">
          {data != undefined && data.length > 0 ? (
            <div className="row">
              {data
                .sort((a, b) => a.order - b.order)
                .map((data, index) => {
                  return (
                    <div className="col-sm-4 col-12" key={index}>
                      <div key={data._id} className="box-template my-videos">
                        <video
                          className="video-container video-container-overlay"
                          controls={true}
                          loop=""
                          poster={data.templateImage}
                        >
                          <source type="video/mp4" src={apiPath + data.path} />
                        </video>
                        <div className="d-flex">
                          <h4>{data.videoTitle} </h4>
                          <div className="icon">
                            <div
                              className="download-buton"
                              onClick={() => downloadVideo(data.path)}
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
                            </div>
                            <div className="delete-icon">
                              <img
                                src={trash}
                                alt="Delete Section"
                                onClick={() =>
                                  confirmDelete(data._id, data.path)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="col-12">
              <div className="alert alert-primary"> No Videos in the List</div>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className + " modal-custom"}
      >
        <ModalHeader toggle={toggle}>Delete Video</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this video?</p>
        </ModalBody>
        <ModalFooter>
          <div className="container">
            <div className="row modal-block">
              <div className="col-12 col-sm-6">
                <Button color="primary" onClick={deleteBlock}>
                  confirm
                </Button>
              </div>
              <div className="col-12 col-sm-6">
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </ModalFooter>
      </Modal>
    </section>
  );
};
export default MyVideos;
