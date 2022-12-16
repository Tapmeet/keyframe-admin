/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DragResizeContainer from "react-drag-resize";
import { apiPath } from "../../../../../Utility/Utility";
const SceneFiftyOne = (props) => {
  const [mediaArray, setMediaArray] = React.useState(props.mediaArray);
  var textArrays = props.textArray;
  const [mediaArray1, setMediaArray1] = React.useState([]);
  const [mediaArray2, setMediaArray2] = React.useState([]);
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

  React.useEffect(() => {
    props.mediaArray.map((data, index) => {
      {
        index <= 1
          ? setMediaArray1((media) => [...media, data])
          : index >= 1 && index <= 3
          ? setMediaArray2((media) => [...media, data])
          : null;
      }
    });
    if (props.data) {
      props.mediaArray.map((data, index) => {
        {
          index <= 1
            ? setMediaArray1((media) => [...media, data])
            : index >= 1 && index <= 3
            ? setMediaArray2((media) => [...media, data])
            : null;
        }
      });
    }
  }, [textArrays]);
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
      text: e,
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
    <section className="template-new-wrapper-scene1 slider-section">
      <div className="d-flex">
        <div className="img-section d-flex">
          <div className="left-width-scene">
            <div className="logo-section">Logo</div>
            {textArrays.map((data, index) => {
              return index == 0 ? (
                <div
                  className="Heading-section"
                  style={{
                    "font-size": data.fontSize + "px",
                    color: data.fontColor,
                    fontWeight: data.fontWeight,
                    fontFamily: data.fontFamily,
                  }}
                  contenteditable="true"
                  onClick={() => setshowbg(false, "", "", false, 0, 0)}
                  onInput={(e) => getcontent(e.currentTarget.textContent, 0)}
                >
                  {data.text}
                </div>
              ) : null;
            })}
            <div
              className="bottom-text-section"
              contenteditable="true"
              onClick={() => setshowbg(false, "", "", false, 1, 1)}
              onInput={(e) => getcontent(e.currentTarget.textContent, 1)}
            >
              {textArrays[1].text}
            </div>
          </div>
          <div className="right-width-scene">
            <div className="row-1 row-right">
              {mediaArray.map((data, index) => {
                return index < 2 ? (
                  <div
                    key={index}
                    id={index}
                    onClick={() =>
                      setshowbg(true, data.url, data.type, false, index)
                    }
                    className="bg box-1"
                    style={{
                      "background-image": "url(" + apiPath + data.url + ") ",
                    }}
                  ></div>
                ) : null;
              })}
            </div>
            <div className="row-2 row-right">
              {mediaArray.map((data, index) => {
                return index > 1 && index <= 3 ? (
                  <div
                    key={index}
                    id={index}
                    onClick={() =>
                      setshowbg(true, data.url, data.type, false, index)
                    }
                    className="bg box-1"
                    style={{
                      "background-image": "url(" + apiPath + data.url + ") ",
                    }}
                  ></div>
                ) : null;
              })}
            </div>
            <div className="row-3 row-right">
              {mediaArray.map((data, index) => {
                return index > 3 && index <= 5 ? (
                  <div
                    key={index}
                    id={index}
                    onClick={() =>
                      setshowbg(true, data.url, data.type, false, index)
                    }
                    className="bg box-1"
                    style={{
                      "background-image": "url(" + apiPath + data.url + ") ",
                    }}
                  ></div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SceneFiftyOne;
