/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import { apiPath } from "./../../../../Utility/Utility";

import HOC from "./../Player/HOC";
import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable,
} from "react-reorder";
const BottomSection = (props) => {
  //console.log( props.bottomData.sceneOrder)
  const [showStop, setShowStop] = React.useState(false);
  const [sceneOrder, setSceneOrder] = React.useState(
    props.bottomData.sceneOrder
  );
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
  }
  const handleStop = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };
  React.useEffect(() => {
    setSceneOrder(props.bottomData.sceneOrder);
    setSceneData(props.bottomData.blocks);
    var time = 0;
    sceneData.map((scene) => {
      time = parseFloat(time) + parseFloat(scene.sceneData.time);
    });
    setPlayerTime(time);
  }, []);
  function onReorder(event, previousIndex, nextIndex, fromId, toId) {
    console.log(event);
    setSceneOrder(reorder(sceneOrder, previousIndex, nextIndex));
  }
  return (
    <section className="template-new-wrapper-bottom">
       
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
                  class="__ef6b9__StopIcon"
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
        </div>
        <div className="scene-section" id="scene-section">
          <div className="progressBar" id="progressBar">
            <div className="time-internals">
              {rows.map((data, index) => {
                return <div className="time-intervals">{index}</div>;
              })}
            </div>
          </div>
          <div className="timebars">
            <div className="time-internals">
              {rows.map((data, index) => {
                return <div className="time-intervals">{index}</div>;
              })}
            </div>
          </div>
          <div className="inner-section">
            <div className="player-thumb" id="player-thumb">
              {sceneOrder.map((block) => {
                return (
                  <HOC>
                    {sceneData.map((scene) => {
                      return block.id == scene._id ? (
                        <div
                          className="thumb-section"
                          key={scene._id}
                          style={{
                            "background-image":
                              "url(" + apiPath + scene.sceneThumbnail + ") ",
                            width: parseFloat(scene.sceneData.time) * 80 + "px",
                            minWidth:
                              parseFloat(scene.sceneData.time) * 80 + "px",
                          }}
                        >
                          <Link
                            to={
                              "/template/" +
                              props.bottomData._id +
                              "/" +
                              scene.sceneId +
                              "/" +
                              scene._id
                            }
                          />
                        </div>
                      ) : null;
                    })}
                  </HOC>
                );
              })}
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
    </section>
  );
};
export default BottomSection;
