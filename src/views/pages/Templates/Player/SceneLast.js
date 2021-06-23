/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
import React from "react";
import HOC from "./HOC";
import { apiPath } from "../../../../Utility/Utility";
const PlayerSceneLast = (props) => {
  const [sceneIndex, setSceneIndex] = React.useState(props.index);
  const [sceneActive, setSceneActive] = React.useState(false);
  const [activeClass, setActiveClass] = React.useState(false);
  const [timer, setTimer] = React.useState(props.timer);
  const [sceneTime, setSceneTime] = React.useState(props.data.time);
  const [mediaArray, setMediaArray] = React.useState(props.data.media);
  var textArrays = props.data.textArray;
  function setshowbg(option, scene, type, titleColor, index, textIndex) {
    props.showBg(option, type, scene, titleColor, index, textIndex);
  }
  React.useEffect(() => {
    if (props.data.media) {
      setMediaArray(props.data.media);
    }
    var timeout, activeClassTimer;
    clearTimeout(timeout);
    clearTimeout(activeClassTimer);
    if (props.index == 0) {
      setSceneActive(true);
      activeClassTimer = setTimeout(function () {
        setActiveClass(true);
      }, 100);
      timeout = setTimeout(function () {
        setActiveClass(false);
        clearTimeout(timeout);
      }, parseFloat(props.time) * 1000);
    } else {
      timeout = setTimeout(function () {
        setSceneActive(true);
        activeClassTimer = setTimeout(function () {
          setActiveClass(true);
        }, 100);
        setTimeout(function () {
          setActiveClass(false);
          clearTimeout(timeout);
        }, parseFloat(props.time) * 1000 + 105);
      }, parseFloat(props.timer) * 1000);
    }
  }, [textArrays]);

  function getcontent(e, index) {
    let newArr = [...textArrays]; // copying the old datas array
    newArr[index] = {
      text: e.target.value,
      fontSize: newArr[index].fontSize,
      fontFamily: newArr[index].fontFamily,
      fontWeight: newArr[index].fontWeight,
      fontLineHeight: newArr[index].fontLineHeight,
      fontAlignment: newArr[index].fontAlignment,
      fontColor: newArr[index].fontColor,
      fontCapitalize: newArr[index].fontCapitalize,
    };
    props.getContent(newArr);
  }
  return (
    <HOC>
      {sceneActive ? (
        <section className={
          activeClass
            ? " playerui-wrapper  lastScene-section active "
            : " playerui-wrapper  lastScene-section  "
        }>
          <div className="d-flex">
            <div className="img-section d-flex bg-gray align-items-center">
              <div className="col-12 col-sm-6">
                <img
                  src={apiPath + mediaArray[0].url}
                  className="img-fluid userimg"
                  alt="userImg"
                />
              </div>
              <div className="col-12 col-sm-6">
                {textArrays.map((data, index) => {
                  return (
                    <div
                      className="text-content"
                      key={index}
                      onClick={() => setshowbg(false, "", "", false, "", index)}
                    >
                      <input
                        type="text"
                        style={{
                          "font-size": data.fontSize + "px",
                          color: data.fontColor,
                          "line-height": data.fontLineHeight,
                          "fontWeight":data.fontWeight,
                          "fontFamily":data.fontFamily
                        }}
                        className={
                          "child-container form-control border  size-auto " +
                          data.fontAlignment +
                          " " +
                          data.fontCapitalize
                        }
                        value={data.text}
                        readOnly
                        onChange={(e) => getcontent(e, index)}
                      ></input>
                    </div>
                  );
                })}
                <img
                  src={apiPath + mediaArray[1].url}
                  className="img-fluid "
                  alt="userImg"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </HOC>
  );
};
export default PlayerSceneLast;
