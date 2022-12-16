/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DragResizeContainer from "react-drag-resize";
import { apiPath } from "../../../../../Utility/Utility";
import pentagon from "../../../../../assets/pentagon.png";
const SceneFiftyThree = (props) => {
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
          <div
            className="box-1 box-size"
            onClick={() =>
              setshowbg(true, mediaArray[0].url, mediaArray[0].type, false, 0 )
            }
            style={{
              "background-image": "url(" + apiPath + mediaArray[0].url + ") ",
            }}
          ></div>
          <div className="box-2">
            <img src={pentagon} alt="pentagon" className="img img-1" />
            <img src={pentagon} alt="pentagon" className="img img-2" />
            <img src={pentagon} alt="pentagon" className="img img-3" />
           
            {textArrays.map((data, index) => {
              return index == 0 ? (
                <div
                  contenteditable="true"
                  onClick={() => setshowbg(false, "", "", false, 0, 0)}
                  onInput={(e) => getcontent(e.currentTarget.textContent, 0)}
                >
                  {data.text}
                </div>
              ) : null;
            })}
          </div>
          <div
            className="box-3 box-size"
            onClick={() =>
              setshowbg(true, mediaArray[1].url, mediaArray[1].type, false, 1 )
            }
            style={{
              "background-image": "url(" + apiPath + mediaArray[1].url + ") ",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default SceneFiftyThree;
