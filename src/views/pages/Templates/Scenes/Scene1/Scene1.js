import React from "react";
import { useRouteMatch } from "react-router-dom";
import DragResizeContainer from "react-drag-resize";
import { apiPath } from "./../../../../../Utility/Utility";
const Scene1 = (props) => {
  const [mediaArray, setMediaArray] = React.useState(props.mediaArray);
  const [transformX, setTransformX] = React.useState(0);
  const [content, setContent] = React.useState(props.content);
  //console.log(props.content)
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
    console.log(isResize)
    // return {
    //   top: isResize,
    //   right: isResize,
    //   bottom: isResize,
    //   left: isResize,
    //   topRight: isResize,
    //   bottomRight: isResize,
    //   bottomLeft: isResize,
    //   topLeft: isResize,
    // };
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
    props.showBg(option, type, scene, false, container);
  }
  React.useEffect(() => {
    setContent(props.content);
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
    <section className="template-new-wrapper-scene1">
      <div className="d-flex">
        <div className="img-section" height="1020" width="1920">
          {props.mediaArray ? (
            <DragResizeContainer
              className="resize-container"
              resizeProps={{
                minWidth: 100,
                minHeight: 70,
                enable: canResizable(50),
              }}
              onClick={() => setshowbg(false, "", "", false)}
              layout={layout}
              onLayoutChange={onLayoutChange}
              dragProps={{ disabled: false }}
              scale={1}
            >
              {layout.map((single) => {
                return (
                  <textarea
                    key={single.key}
                    style={{
                      "font-size": props.settextSize + "px",
                      color: props.setColor,
                      "line-height": props.setTextLineHeight,
                    }}
                    className={
                      "child-container form-control border  size-auto " +
                      props.setAlignment +
                      " " +
                      props.setTextTransform
                    }
                    onChange={getcontent}
                    value={content}
                  ></textarea>
                );
              })}
            </DragResizeContainer>
          ) : null}
          <div className="bg-section">
            {mediaArray.map((data, index) => {
              return (
                <div
                  onClick={() =>
                    setshowbg(true, data.url, data.type, false, index)
                  }
                  className="bg box-1"
                  style={{
                    "background-image": "url(" + apiPath + data.url + ") ",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Scene1;
