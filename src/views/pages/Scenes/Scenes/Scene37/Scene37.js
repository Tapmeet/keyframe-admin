import React from "react";
import { useRouteMatch } from "react-router-dom";
import DragResizeContainer from "react-drag-resize";
import { apiPath } from "../../../../../Utility/Utility";
const Scene37 = (props) => {
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
    props.getTextAreaData(newObj)
  };
  function setshowbg(option, scene, type, titleColor, container) {
    props.showBg(option, type, scene, false, container);
  }
  React.useEffect(() => {
   
    setContent(props.content) 
    setMediaArray(props.mediaArray);
    if (props.data) {
      console.log(props.data.content)
      setWidth(props.data.boxwidth);
      setHeight(props.data.boxheight);
      setTransformX(props.data.x);
      setTransformY(props.data.y);
      setContent(props.data.content)  
    }
  }, []);

  function getcontent(e){
    setContent(e.target.value)
    props.getContent(e.target.value)
  }
  return (
    <section className="template-new-wrapper-scene1 scene1 scene37">
      <div className="d-flex">
        <div className="img-section" 
        height="1020" width="1920">
      
          <div className="bg-section">
            {mediaArray.map((data, index) => {
              return (
                index <=2 ?
                <div
                  onClick={() =>
                    setshowbg(true, data.url, data.type, false, index)
                  }
                  className="bg box-1"
                  style={{ "background-image": "url(" + apiPath + data.url + ") " }}
                >
                  
                </div>
                :     props.mediaArray ? (
                  <div
                  className="bg box-1"    
                    onClick={() => setshowbg(false, "", "", false)}
                  >
                    {layout.map((single) => {
                      return (
                        <textarea
                          key={single.key}
                          style={{
                            "font-size": props.settextSize + "px",
                            color: props.setColor,
                            "line-height": props.setTextLineHeight,
                            "fontFamily":props.data.fontFamily,
                            "fontWeight":props.data.fontWeight
                          }}
                          className={
                            "child-container form-control border  size-auto " +
                            props.setAlignment +
                            " " +
                            props.setTextTransform
                          }
                          onChange={getcontent}
                          value={content}
                        >
                          
                        </textarea>
                      );
                    })}
                  </div>
                ) : null
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Scene37;