/* eslint-disable eqeqeq */
import React from "react";

import trash from "./../../../../../assets/images/templates/trash.svg";
import add from "./../../../../../assets/images/templates/add.svg";
import Slider from "react-slick";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DragResizeContainer from "react-drag-resize";
import { CommentTwoTone } from "@material-ui/icons";
import { apiPath } from "./../../../../../Utility/Utility";
const SceneTwo = (props) => {
  const [mediaArray, setMediaArray] = React.useState(props.mediaArray);
  const [transformX, setTransformX] = React.useState(0);
  const [transformY, setTransformY] = React.useState(0);

  const [content, setContent] = React.useState([]);
  const [counter, setCounter] = React.useState(content.length);
  function setshowbg(option, scene, type, titleColor, container) {
    console.log(scene);
    props.showBg(option, type, scene, false, container);
  }

  const settings = {
    dots: false,
    speed: 1500,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
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
  const addSection = () => {
    setCounter(counter + 1);
    let newArr = [...content]; // copying the old datas array
    newArr[counter] = {
      title: "Enter Title",
      text: "Enter Value",
    };

    props.getContent(newArr);
    setContent(newArr);
  };
  const deleteSection = (e) => {
    setCounter(counter - 1);
    content.splice(e, 1);
  };

  const updateFieldChanged = (index) => (e) => {
    let newArr = [...content]; // copying the old datas array
    newArr[index] = {
      title: newArr[index].title,
      text: e.target.value,
    };
    setContent(newArr);
    props.getContent(newArr);
  };
  const updateTile = (index) => (e) => {
    let newArr = [...content]; // copying the old datas array
    newArr[index] = {
      title: e.target.value,
      text: newArr[index].text,
    };
    props.getContent(newArr);
    setContent(newArr); // ??
  };
  React.useEffect(() => {
    console.log(props.content);
    setContent(props.content);
    setMediaArray(props.mediaArray);
    setCounter(props.content.length);
    if (props.data) {
      setContent(props.content);
      setCounter(props.content.length);
    }
  }, []);
  return (
    <section className="template-new-wrapper-scene1 slider-section scene-2">
      <div className="d-flex">
        <div className="img-section">
          <div className="bg-section">
            <div class="text-wrapper  left-section-text">
              {typeof content != undefined && content.length
                ? content.map((data, index) => {
                    return (
                      <div class="listing-box" key={index}>
                        <div className="close-add-buttons">
                          {counter < 5 ? (
                            <img
                              src={add}
                              alt="Add Section"
                              onClick={addSection}
                            />
                          ) : null}
                          {counter > 1 ? (
                            <img
                              src={trash}
                              alt="Delete Section"
                              onClick={() => deleteSection(index)}
                            />
                          ) : null}
                        </div>
                        <h3 onClick={() => setshowbg(false, "", "", "true")}>
                          <input
                            type="text"
                            onChange={updateTile(index)}
                            value={data.title}
                            style={{ color: props.setTitleColor }}
                            className={
                              "child-container form-control border  size-auto " +
                              props.setAlignment +
                              " " +
                              props.setTextTransform
                            }
                          />
                        </h3>
                        <div
                          class="title"
                          onClick={() => setshowbg(false, "", "", false)}
                        >
                          <input
                            type="text"
                            onChange={updateFieldChanged(index)}
                            value={data.text}
                            style={{ color: props.setColor }}
                            className={
                              "child-container form-control border  size-auto " +
                              props.setAlignment +
                              " " +
                              props.setTextTransform
                            }
                          />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
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
export default SceneTwo;
