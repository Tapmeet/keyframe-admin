/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DragResizeContainer from "react-drag-resize";
import { apiPath } from "./../../../../../Utility/Utility";
const SceneFour = (props) => {
  const [mediaArray, setMediaArray] = React.useState(props.mediaArray);
  var textArrays = props.textArray
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
    showThumbs:false
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
    showThumbs:false
  };

  React.useEffect(() => {
   props.mediaArray.map((data, index) => {
    {
      index <= 1
        ? setMediaArray1((media) => [...media, data])
        : setMediaArray2((media) => [...media, data]);
    }
  });
    if (props.data) {
      props.mediaArray.map((data, index) => {
        {
          index <= 1
            ? setMediaArray1((media) => [...media, data])
            : setMediaArray2((media) => [...media, data]);
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
        textArrays = newArr
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
    <section className="template-new-wrapper-scene1 slider-section">
      <div className="d-flex">
        <div className="img-section d-flex">
          <div className="half-width">
            {textArrays.map((data, index) => {
              return index == 0 ? (
                <DragResizeContainer
                  className="resize-container"
                  resizeProps={{
                    minWidth: 100,
                    minHeight: 70,
                    enable: global.canResizable0(50),
                  }}
                  onClick={() => setshowbg(false, "", "", false, index, index)}
                  layout={global.layout0}
                  onLayoutChange={(e) => global.onLayoutChange0(e, 0)}
                  dragProps={{ disabled: false }}
                  scale={1}
                >
                  {global.layout0.map((single) => {
                    return (
                      <textarea
                        key={single.key}
                        style={{
                          "font-size": data.fontSize + "px",
                          color: data.fontColor,
                          "line-height": data.fontLineHeight,
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
                    );
                  })}
                </DragResizeContainer>
              ) : null;
            })}
            <div className="bg-section">
              {mediaArray1.length > 0 ? (
                <Carousel axis="vertical" {...settings}>
                  {mediaArray1.map((data, index) => {
                    return (
                      <div key={index} id={index}>
                        <div className="slider-box">
                          <div
                            onClick={() =>
                              setshowbg(
                                true,
                                data.url,
                                data.type,
                                false,
                                index
                              )
                            }
                            className="bg box-1"
                            style={{
                              "background-image": "url(" + apiPath + data.url + ") ",
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              ) : null}
            </div>
          </div>

          <div className="half-width">
            {textArrays.map((data, index) => {
              return index == 1 ? (
                <DragResizeContainer
                  className="resize-container"
                  resizeProps={{
                    minWidth: 100,
                    minHeight: 70,
                    enable: global.canResizable1(50),
                  }}
                  onClick={() => setshowbg(false, "", "", false, index, index)}
                  layout={global.layout1}
                  onLayoutChange={(e) => global.onLayoutChange1(e, 1)}
                  dragProps={{ disabled: false }}
                  scale={1}
                >
                  {global.layout1.map((single) => {
                    return (
                      <textarea
                        key={single.key}
                        style={{
                          "font-size": data.fontSize + "px",
                          color: data.fontColor,
                          "line-height": data.fontLineHeight,
                        }}
                        className={
                          "child-container form-control border  size-auto " +
                          data.fontAlignment +
                          " " +
                          data.fontCapitalize
                        }
                        value={data.text}
                        onChange={(e) => getcontent(e, index)}
                      ></textarea>
                    );
                  })}
                </DragResizeContainer>
              ) : null;
            })}
            <div className="bg-section">
              {mediaArray2.length > 0 ? (
                <Carousel axis="vertical" {...settings}>
                  {mediaArray2.map((data, index) => {
                    return (
                      <div key={index} id={index}>
                        <div className="slider-box">
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
                            style={{
                              "background-image": "url(" + apiPath + data.url + ") ",
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SceneFour;
