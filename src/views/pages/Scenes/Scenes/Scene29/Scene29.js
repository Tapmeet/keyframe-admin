/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DragResizeContainer from "react-drag-resize";
import { apiPath } from "../../../../../Utility/Utility";
const SceneTwentyNine = (props) => {
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
    <section className="template-new-wrapper-scene1 slider-section section-six section-29 section-seven">
      <div className="d-flex">
        <div className="img-section d-flex">
          <div className="half-width">
            <div className="bg-sections left-section">
              {mediaArray.length > 0
                ? mediaArray.map((data, index) => {
                    return index < 2 ? (
                      <div
                        key={index}
                        id={index}
                        className="slider-boxs topsection"
                      >
                        <div
                          onClick={() =>
                            setshowbg(true, data.url, data.type, false, index)
                          }
                          className="bg box-1"
                          // style={{
                          //   "background-image":
                          //     "url(" + apiPath + data.url + ") ",
                          // }}
                        >
                          <img
                            src={apiPath + data.url}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                    ) : null;
                  })
                : null}
            </div>
          </div>

          <div className="half-width">
            <div className="bg-sections right-section">
              {mediaArray.length > 0
                ? mediaArray.map((data, index) => {
                    return index > 1 ? (
                      <div key={index} id={index} className="slider-boxs">
                        <div
                          onClick={() =>
                            setshowbg(
                              true,
                              data.url,
                              data.type,
                              false,
                              index + 2
                            )
                          }
                          className="bg box-1"
                          // style={{
                          //   "background-image":
                          //     "url(" + apiPath + data.url + ") ",
                          // }}
                        >
                          <img
                            src={apiPath + data.url}
                            className="img-fluid"
                            alt="img"
                          />
                        </div>
                      </div>
                    ) : null;
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SceneTwentyNine;
