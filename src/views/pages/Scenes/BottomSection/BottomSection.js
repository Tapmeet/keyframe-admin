/* eslint-disable array-callback-return */
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiPath } from "./../../../../Utility/Utility";
import trash from "./../../../../assets/images/templates/trash.svg";
import HOC from "./../Player/HOC";
import MediaUpload from "./MediaUpload";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Loader from "./../../../../Utility/Loader/Loader";
import Box from "./Box";

import {
  apideleteBlock,
  apiUpdateBlock,
  apiGetLastScene,
} from "./../../../../Utility/Utility";
import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable,
} from "react-reorder";
const BottomSection = (props) => {
  const match = useRouteMatch("/template/:templateId/:id/:sceneId");
  const {
    params: { templateId },
  } = match;
  const {
    params: { sceneId },
  } = match;
  const [activeTab, setActiveTab] = React.useState("1");

  const toggles = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [showStop, setShowStop] = React.useState(false);
  const [lastScenetime, setLastScenetime] = React.useState("");
  const [lastSceneData, setLastSceneData] = React.useState([]);
  const [processing, setProcessing] = React.useState(false);
  const [dragId, setDragId] = React.useState();
  const [blockCount, setblockCount] = React.useState("1");
  const [blockIndex, setBlockIndex] = React.useState("");
  const [blockToDelete, setblockToDelete] = React.useState("");
  const { buttonLabel, className } = props;

  const [modal, setModal] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const [playerTime, setPlayerTime] = React.useState();
  const [sceneData, setSceneData] = React.useState(props.bottomData.blocks);

  function addScene() {
    props.showAddScene("true", props.scene);
  }
  function hideScene() {
    props.showAddScene(false, "");
  }
  var rows = [];
  for (var i = 0; i < playerTime; i++) {
    rows.push(i);
  }

  var i, elmnt, widthElement;
  var elem = document.getElementById("progress");
  var bar = document.getElementById("progressBar");

  var width = 0;
  var id;
  function move() {
    elmnt = document.getElementById("scene-section");
    widthElement = elmnt.offsetWidth;
    if (i == 0) {
      i = 1;
      window.myVar = setInterval(frame, 500);
      elem.classList.add("isPlaying");
      bar.classList.add("isPlayings");
    }
  }
  function frame() {
    if (width >= playerTime * 80) {
      elem.classList.remove("isPlaying");
      bar.classList.remove("isPlayings");
      width = 0;
      elem.style.width = width + "px";
      bar.style.width = width + "px";
      clearInterval(window.myVar);
      i = 0;
      setShowStop(false);
      props.playVideo(false);
      if (props.bottomData.musicFile) {
        let audiox = document.getElementById("playerAudio");
        pauseAudio(audiox);
      }
    } else {
      if (width >= widthElement) {
        elmnt.scrollLeft += widthElement;
        widthElement = 2 * widthElement;
      }
      width = width + 40;
      elem.style.width = width + "px";
      bar.style.width = width + "px";
    }
  }

  function playScene() {
    props.playVideo(true);
    i = 0;
    setShowStop(true);
    if (props.bottomData.musicFile) {
      let audiox = document.getElementById("playerAudio");
      playAudio(audiox);
    }
    move();
  }
  function stopScene() {
    props.playVideo(false);
    clearInterval(window.myVar);
    elem.classList.remove("isPlaying");
    bar.classList.remove("isPlayings");
    width = 0;
    elem.style.width = width + "px";
    bar.style.width = width + "px";
    setShowStop(false);
    if (props.bottomData.musicFile) {
      let audiox = document.getElementById("playerAudio");
      pauseAudio(audiox);
    }
  }
  const handleStop = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };
  React.useEffect(() => {
    // setSceneOrder(props.bottomData.sceneOrder);
    // setSceneData(props.bottomData.blocks);
    var time = 0;
    sceneData.map((scene) => {
      time = parseFloat(time) + parseFloat(scene.sceneData.time);
    });

    axios
      .get(`${apiGetLastScene}` + "?id=" + templateId, {})
      .then(function (response) {
      //  console.log(response.data.scene.sceneData.time);
        setPlayerTime(parseFloat(time) + response.data.scene.sceneData.time);
        setLastScenetime(response.data.scene.sceneData.time);
        setLastSceneData(response.data.scene);
      });
    setPlayerTime(time);
  }, []);

  function confirmDelete(id) {
    setModal(!modal);
    setblockToDelete(id);
    console.log(id);
  }
  function deleteBlock() {
    setModal(!modal);
    setProcessing(true);
    let blockId = blockToDelete;
    axios
      .delete(`${apideleteBlock}`, {
        params: {
          blockId: blockId,
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

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = async (ev) => {
    const dragBox = sceneData.find((box) => box._id === dragId);
    const dropBox = sceneData.find((box) => box._id === ev.currentTarget.id);
    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = sceneData.map((box, index) => {
      if (box._id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box._id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });
    setSceneData(newBoxState);
    //console.log(newBoxState)
    await newBoxState.map((box, index) => {
      axios
        .put(`${apiUpdateBlock}/${box._id}`, {
          id: box._id,
          order: box.order,
        })
        .then(function (response) {
          console.log(response);
          props.reFetchData();
        });
    });
  };
  const showMedia = () => {
    setModal2(!modal2);
  };
  const saveMedia = () => {
    props.reFetchData();
  };
  function playAudio(audioToplay) {
    audioToplay.play();
  }
  function pauseAudio(audioTopause) {
    if (props.bottomData.musicFile) {
      audioTopause.currentTime = 0;
      audioTopause.pause();
    }
  }
  return (
    <section className="template-new-wrapper-bottom">
      <Loader open={processing} />
      <div className="d-flex">
        <div className="play-button-section">
          <div className="duration-view">Length: {playerTime}s</div>
          <div className="section-btn">
            {showStop ? (
              <div className="button" onClick={stopScene}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="__ef6b9__StopIcon"
                >
                  <path fill="currentColor" d="M6 6h12v12H6z"></path>
                </svg>
              </div>
            ) : (
              <div className="button" onClick={playScene}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="__ef6b9__PlayIcon"
                >
                  <path
                    fill="currentColor"
                    d="M20.555 11.168l-15-10A1 1 0 0 0 4 2v20a1 1 0 0 0 1.555.832l15-10a1.001 1.001 0 0 0 0-1.664z"
                  ></path>
                </svg>
              </div>
            )}
            <span>{showStop ? "Stop" : "Play"}</span>
          </div>
          <div className="media-section">
            <div className="link" onClick={showMedia}>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 10.17V3H6v10a3 3 0 1 1-2-2.83V0h12v13a3 3 0 1 1-2-2.83z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="scene-section" id="scene-section">
          <div className="progressBar" id="progressBar">
            <div className="time-internals">
              {rows.map((data, index) => {
                return <div key={index} className="time-intervals">{index}</div>;
              })}
            </div>
          </div>
          <div className="timebars">
            <div className="time-internals">
              {rows.map((data, index) => {
                return <div key={index}  className="time-intervals">{index}</div>;
              })}
            </div>
          </div>
          <div
            className="inner-section"
            style={{ width: playerTime * 80 + "px" }}
          >
            <div
              className="player-thumb"
              id="player-thumb"
              style={{ width: playerTime * 80 + "px" }}
            >
              <HOC>
                {sceneData
                  .sort((a, b) => a.order - b.order)
                  .map((scene) => {
                    return (
                      <Box
                        key={scene._id}
                        boxBg={apiPath + scene.sceneThumbnail}
                        boxWidth={parseFloat(scene.sceneData.time) * 80}
                        handleDrag={handleDrag}
                        handleDrop={handleDrop}
                        confirmDelete={confirmDelete}
                        boxLink={
                          "/template/" +
                          props.bottomData._id +
                          "/" +
                          scene.sceneId +
                          "/" +
                          scene._id
                        }
                        length={sceneData.length}
                        boxId={scene._id}
                        sceneId={sceneId}
                      ></Box>
                    );
                  })}
                {
                  <div
                    className="thumb-section"
                    style={{
                      "backgroundImage":
                        "url(" + apiPath + lastSceneData.sceneThumbnail + ") ",
                      width: parseFloat(lastScenetime) * 80 + "px",
                      minWidth: parseFloat(lastScenetime) * 80 + "px",
                    }}
                  >
                    <Link
                      to={
                        "/template/" +
                        props.bottomData._id +
                        "/" +
                        lastSceneData.sceneId +
                        "/" +
                        lastSceneData._id
                      }
                    />
                  </div>
                }
              </HOC>
            </div>
          </div>
          <div
            className="__cf020 ember-view"
            style={{ width: playerTime * 80 + "px" }}
          >
            <div className="__cf020__EmptyAudio"></div>
            <div className="__cf020__Progress " id="progress"></div>
          </div>
        </div>
        <div className="add-scene button-section">
          <div className="section-btn" onClick={addScene}>
            <div className="button">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0h2v24h-2z"></path>
                <path d="M24 11v2H0v-2z"></path>
              </svg>
            </div>
            <span>Add Scene</span>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={className + " modal-custom"}
        >
          <ModalHeader toggle={toggle}>Delete Block</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this block?</p>
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

        <MediaUpload
          toggles={toggles}
          modal2={modal2}
          toggle2={toggle2}
          activeTab={activeTab}
          musicfile={props.bottomData.musicFile}
          saveMedia={saveMedia}
        />
        {props.bottomData.musicFile ? (
          <audio
            id="playerAudio"
            src={apiPath + props.bottomData.musicFile}
          ></audio>
        ) : null}
      </div>
    </section>
  );
};
export default BottomSection;
