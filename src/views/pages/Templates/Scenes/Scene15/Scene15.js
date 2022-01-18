/* eslint-disable eqeqeq */
import React from "react";
import Scenes from "./../../../../../assets/images/templates/img11.png";
import Scene2 from "./../../../../../assets/images/templates/img12.png";
import Scene3 from "./../../../../../assets/images/templates/img13.png";
import Scene4 from "./../../../../../assets/images/templates/img14.png";

import trash from "./../../../../../assets/images/templates/trash.svg";
import add from "./../../../../../assets/images/templates/add.svg";
import Slider from "react-slick";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DragResizeContainer from "react-drag-resize";
import { CommentTwoTone } from "@material-ui/icons";
import { apiPath } from "../../../../../Utility/Utility";
const SceneFifteen = (props) => {
  const [mediaArray, setMediaArray] = React.useState(props.mediaArray);
  const [transformX, setTransformX] = React.useState(0);
  const [content, setContent] = React.useState(props.content);
  const [transformY, setTransformY] = React.useState(0);
  const [width, setWidth] = React.useState(350);
  const [height, setHeight] = React.useState(100);
  const layout = [
    {
      key: "test",
      x: transformX,
      y: transformY,
      width: width,
      height: height,
      zIndex: 1,
    },
  ];
  const canResizable = (isResize) => {
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
  const onLayoutChange = (e) => {
    //console.log(e[0])
    setTransformX(e[0].x);
    setTransformY(e[0].y);
    setWidth(e[0].width);
    setHeight(e[0].height);
    let newObj = {
      boxwidth: e[0].width,
      boxheight: e[0].height,
      x: e[0].x,
      y: e[0].y,
    };
    props.getTextAreaData(newObj);
  };
  function setshowbg(option, scene, type, titleColor, container) {
    console.log(scene);
    props.showBg(option, type, scene, false, container);
  }

  const settings = {
    dots: false,
    arrows: false,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  React.useEffect(() => {
    setMediaArray(props.mediaArray);
    if (props.data) {
      console.log(props.data.content);
      setWidth(props.data.boxwidth);
      setHeight(props.data.boxheight);
      setTransformX(props.data.x);
      setTransformY(props.data.y);
      setContent(props.data.content);
    }
  }, []);

  function getcontent(e) {
    setContent(e.target.value);
    props.getContent(e.target.value);
  }
  return (
    <section className="template-new-wrapper-scene1 slider-section">
      <div className="d-flex">
        <div className="img-section">
          <div className="bg-section">
            <Slider {...settings}>
              {mediaArray.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="slider-box">
                      <div
                        onClick={() =>
                          setshowbg(true, data.url, data.type, false, index)
                        }
                        className="bg box-1"
                        style={{
                          "background-image":
                            "url(" + apiPath + data.url + ") ",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SceneFifteen;
