/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DragResizeContainer from "react-drag-resize";
import { apiPath } from "../../../../../Utility/Utility";
const SceneSeventyThree= (props) => {
  const [mediaArray, setMediaArray] = React.useState(props.mediaArray);
  var textArrays = props.textArray;
  function setshowbg(option, scene, type, titleColor, index, textIndex) {
    props.showBg(option, type, scene, titleColor, index, textIndex);
  }
  const settings = {
    arrows: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 5000,
    transitionTime: 2000,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    swipeable: true,
    stopOnHover: true,
    showThumbs: false,
  };
  const settings2 = {
    arrows: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 6500,
    transitionTime: 2000,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    swipeable: true,
    stopOnHover: true,
    showThumbs: false,
  };

  textArrays.map((data, index) => {
    window["layout" + index] = [
      {
        key: "test" + index,
        x: data.x,
        y: data.y,
        width: data.boxWidth,
        height: data.boxHeight,
        zIndex: 1,
      },
    ];
    window["canResizable" + index] = (isResize) => {
      return {
        top: isResize,
        right: isResize,
        bottom: isResize,
        left: isResize,
        topRight: isResize,
        bottomRight: isResize,
        bottomLeft: isResize,
        topLeft: isResize,
      };
    };
    window["onLayoutChange" + index] = (e, index) => {
      let newArr = [...textArrays]; // copying the old datas array
      newArr[index] = {
        text: newArr[index].text,
        fontSize: newArr[index].fontSize,
        fontFamily: newArr[index].fontFamily,
        fontWeight: newArr[index].fontWeight,
        fontLineHeight: newArr[index].fontLineHeight,
        fontAlignment: newArr[index].fontAlignment,
        fontColor: newArr[index].fontColor,
        fontCapitalize: newArr[index].fontCapitalize,
        x: e[0].x,
        y: e[0].y,
        boxWidth: e[0].width,
        boxHeight: e[0].height,
      };
      props.getContent(newArr);
      textArrays = newArr;
    };
  });
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
      x: newArr[index].x,
      y: newArr[index].y,
      boxWidth: newArr[index].boxWidth,
      boxHeight: newArr[index].boxHeight,
    };
    props.getContent(newArr);
  }
  return (
    <section className="template-new-wrapper-scene1 slider-section scene-47 scene-10 scene-67">
      <div className="d-flex">
        <div className="img-section d-flex">
          <div className="half-width">
            <div className="bg-section">
              <div>
                <div className="slider-box">
                  <div
                    onClick={() =>
                      setshowbg(
                        true,
                        mediaArray[2].url,
                        mediaArray[2].type,
                        false,
                        2
                      )
                    }
                    className="bg box-1"
                    style={{
                      "background-image":
                        "url(" + apiPath + mediaArray[2].url + ") ",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="half-width">
            {textArrays.map((data, index) => {
              return index == 0 ? (
                <textarea
                  key={index}
                  style={{
                    "font-size": data.fontSize + "px",
                    color: data.fontColor,
                    "line-height": data.fontLineHeight,
                    fontWeight: data.fontWeight,
                    fontFamily: data.fontFamily,
                  }}
                  className={
                    "child-container form-control border  size-auto " +
                    data.fontAlignment +
                    " " +
                    data.fontCapitalize
                  }
                  onChange={(e) => getcontent(e, index)}
                  value={data.text}
                ></textarea>


              ) : null;
            })}
            <div className="bg-section">
              <div>
                <div className="slider-box half-height">
                  <div
                    onClick={() =>
                      setshowbg(true, mediaArray[0].url, mediaArray[0].type, false, 0)
                    }
                    className="bg box-1"
                    style={{
                      "background-image": "url(" + apiPath + mediaArray[0].url + ") ",
                    }}
                  ></div>
                </div>
                <div className="slider-box half-height">
                  <div
                    onClick={() =>
                      setshowbg(true, mediaArray[1].url, mediaArray[1].type, false, 1)
                    }
                    className="bg box-1"
                    style={{
                      "background-image": "url(" + apiPath + mediaArray[1].url + ") ",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
export default SceneSeventyThree;
