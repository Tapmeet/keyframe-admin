/* eslint-disable eqeqeq */
import React from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import SidebarLeft from "./../../SidebarLeft/SidebarLeft";
import TextEditor from "./../../TextEditor/TextEditor";
import ChangeBg from "./../../ChangeBg";
import Scene1 from "./Scene1";
import AddMedia from "./../../AddMedia/AddMedia";
import AddScenes from "./../../AddScenes/AddScenes";
import TopSection from "./../../TopSection/TopSection";
import { apiGetScene, apiUpdateScene } from "./../../../../../Utility/Utility";
import Player from "../../Player";
// import Scene from "./../../../../../assets/images/templates/img11.png";
// import Scene2 from "./../../../../../assets/images/templates/img12.png";
// import Scene3 from "./../../../../../assets/images/templates/img13.png";
// import Scene4 from "./../../../../../assets/images/templates/img14.png";
const TemplateNew1 = (props) => {
  const [userId, setUserId] = React.useState("");
  //const match = useRouteMatch("/template/:templateId");
  const [templateTitle, setTemplateTitle] = React.useState("");
  const [data, setData] = React.useState("");
  const [blocks, setBlocks] = React.useState("");
  const [userToken, setUserToken] = React.useState("");
  const cookies = new Cookies();
  const [textAligmnet, setTextAligmnet] = React.useState("text-center");
  const [bgType, setBgType] = React.useState("");
  const [sceneThumbnail, setSceneThumbnail] = React.useState("");
  const [bgScene, setBgScene] = React.useState("");
  const [textColor, setTextColor] = React.useState("#333");
  const [content, setContent] = React.useState("");
  const [textlineHeight, setTextlineHeight] = React.useState("1.4");
  const [textSize, setTextSize] = React.useState("18");
  const [textTransform, setTexttransform] = React.useState("");
  const [changeBg, setChangeBg] = React.useState(false);
  const [addMedia, setAddMedia] = React.useState(false);
  const [addScene, setAddScene] = React.useState(false);
  const [container, setContainer] = React.useState("");
  const [showEditbutton, setShowEditbutton] = React.useState(false);
  const [playActive, setPlayActive] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [mediaArray, setMediaArray] = React.useState([]);
  const [transformX, setTransformX] = React.useState(0);
  const [transformY, setTransformY] = React.useState(0);
  const [width, setWidth] = React.useState(350);
  const [height, setHeight] = React.useState(100);
  const [fontFamily, setFontFamily] = React.useState("");
  const [fontWeight, setFontWeight] = React.useState("");

  function getFontfamily(fontfamily) {
    setFontFamily(fontfamily);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      textlineHeight: textlineHeight,
      textSize: textSize,
      x: transformX,
      y: transformY,
      boxwidth: width,
      boxheight: height,
      textTransform: textTransform,
      media: mediaArray,
      fontFamily: fontfamily,
      fontWeight: fontWeight,
      time: 5.5,
    };
    updateData(data);
  }
  function getFontWeight(fontweight) {
    setFontWeight(fontweight);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      textlineHeight: textlineHeight,
      textSize: textSize,
      x: transformX,
      y: transformY,
      boxwidth: width,
      boxheight: height,
      textTransform: textTransform,
      media: mediaArray,
      fontFamily: fontFamily,
      fontWeight: fontweight,
      time: 5.5,
    };
    updateData(data);
  }

  function getAlignment(alignment) {
    setTextAligmnet(alignment);
    const data = {
      content: content,
      textAligmnet: alignment,
      textColor: textColor,
      textlineHeight: textlineHeight,
      textSize: textSize,
      x: transformX,
      y: transformY,
      boxwidth: width,
      boxheight: height,
      textTransform: textTransform,
      media: mediaArray,
      time: 5.5,
      fontFamily:fontFamily,
      fontWeight:fontWeight,
    };
    updateData(data);
  }
  function getContent(content) {
    setContent(content);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      textlineHeight: textlineHeight,
      textSize: textSize,
      x: transformX,
      y: transformY,
      boxwidth: width,
      boxheight: height,
      textTransform: textTransform,
      media: mediaArray,
      time: 5.5,
      fontFamily:fontFamily,
      fontWeight:fontWeight,
    };
    updateData(data);
  }
  function getTextTransform(texttransform) {
    // console.log(texttransform);
    setTexttransform(texttransform);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      textlineHeight: textlineHeight,
      textSize: textSize,
      x: transformX,
      y: transformY,
      boxwidth: width,
      boxheight: height,
      textTransform: texttransform,
      media: mediaArray,
      time: 5.5,
      fontFamily:fontFamily,
      fontWeight:fontWeight,
    };
    updateData(data);
  }
  function getTextColor(color) {
    setTextColor(color);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: color,
      textlineHeight: textlineHeight,
      textSize: textSize,
      x: transformX,
      y: transformY,
      boxwidth: width,
      boxheight: height,
      textTransform: textTransform,
      media: mediaArray,
      time: 5.5,
      fontFamily:fontFamily,
      fontWeight:fontWeight,
    };
    updateData(data);
  }

  function getTextlineHeight(lineHeight) {
    setTextlineHeight(lineHeight);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      textlineHeight: lineHeight,
      textSize: textSize,
      x: transformX,
      y: transformY,
      boxwidth: width,
      boxheight: height,
      textTransform: textTransform,
      media: mediaArray,
      time: 5.5,
      fontFamily:fontFamily,
      fontWeight:fontWeight,
    };
    updateData(data);
  }
  function getTextSize(size) {
    setTextSize(size);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      textlineHeight: textlineHeight,
      textSize: size,
      x: transformX,
      y: transformY,
      boxwidth: width,
      boxheight: height,
      textTransform: textTransform,
      media: mediaArray,
      time: 5.5,
      fontFamily:fontFamily,
      fontWeight:fontWeight,
    };
    updateData(data);
  }
  function showBg(changeBg, type, scene, titleColor, container) {
    setChangeBg(changeBg);
    setBgType(type);
    setBgScene(scene);
    setContainer(container);
  }
  function showAddMedia(media, mediaFile) {
    setAddMedia(media);
  }
  function closeAddMedia(media, mediaFile, mediaType) {
    if (mediaFile) {
      setBgType(mediaType);
      setBgScene(mediaFile);
      let newArr = [...mediaArray]; // copying the old datas array
      newArr[container] = {
        type: mediaType,
        url: mediaFile,
      };
      setMediaArray(newArr);
      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: textColor,
        textlineHeight: textlineHeight,
        textSize: textSize,
        x: transformX,
        y: transformY,
        boxwidth: width,
        boxheight: height,
        textTransform: textTransform,
        media: newArr,
        time: 5.5,
        fontFamily:fontFamily,
        fontWeight:fontWeight,
      };
      updateData(data);
    }
    setAddMedia(media);
  }
  function showAddScene(mediaactive, scene) {
    setAddScene(mediaactive);
  }
  function closeAddScene(media) {
    setAddScene(media);
    setShowEditbutton(false);
  }
  function getData() {
    axios.get(`${apiGetScene}?id=1`, {}).then(function (response) {
      //console.log(response);
      if (response.data.scene) {
        setBlocks(response.data.scene);
        setTemplateTitle(response.data.scene.sceneTitle);
        setMediaArray(response.data.scene.sceneData.media);
        setTextSize(response.data.scene.sceneData.textSize);
        setTextlineHeight(response.data.scene.sceneData.textlineHeight);
        setTextColor(response.data.scene.sceneData.textColor);
        setTexttransform(response.data.scene.sceneData.textTransform);
        setTextAligmnet(response.data.scene.sceneData.textAligmnet);
        setTransformX(response.data.scene.sceneData.x);
        setTransformY(response.data.scene.sceneData.y);
        setWidth(response.data.scene.sceneData.boxwidth);
        setHeight(response.data.scene.sceneData.boxheight);
        setContent(response.data.scene.sceneData.content);
        setSceneThumbnail(response.data.scene.sceneThumbnail);
        setSelectedCategory(response.data.scene.sceneCategory);
        setFontWeight(response.data.scene.sceneData.fontWeight);
        setFontFamily(response.data.scene.sceneData.fontFamily)
        setData(response.data.scene.sceneData);
      }
    });
  }
  React.useEffect(() => {
    if (cookies.get("token")) {
      setUserToken(cookies.get("token"));
      const token = cookies.get("token");
      const decoded = jwt_decode(token);
      setUserId(decoded.id);
      //console.log(decoded.id)
      getData();
    }
    // getData();
  }, [userId]);

  function updateData(data) {
    axios
      .put(`${apiUpdateScene}1`, {
        id: "1",
        sceneData: data,
      })
      .then(function (response) {
        console.log(response);
        getData();
      });
  }

  function getTextAreaData(obj) {
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      textlineHeight: textlineHeight,
      textSize: textSize,
      x: obj.x,
      y: obj.y,
      boxwidth: obj.boxwidth,
      boxheight: obj.boxheight,
      textTransform: textTransform,
      media: mediaArray,
      time: 5.5,
      fontFamily:fontFamily,
      fontWeight:fontWeight,
    };
    setTransformX(obj.x);
    setTransformY(obj.y);
    setWidth(obj.boxwidth);
    setHeight(obj.boxheight);
    updateData(data);
  }

  function playVideo(click) {
    setPlayActive(click);
  }
  return (
    <section className="template-new-wrapper scene-warpper">
      {templateTitle ? (
        <TopSection templateTitle={templateTitle} id="1" />
      ) : null}
      <div className="d-flex justify-content-between outervh">
        {addMedia ? (
          <AddMedia closeAddMedia={closeAddMedia} />
        ) : addScene ? (
          <AddScenes closeAddScene={closeAddScene} />
        ) : data != "" ? (
          playActive ? (
            <Player blocks={blocks} />
          ) : (
            <Scene1
              setColor={textColor}
              setAlignment={textAligmnet}
              setTextTransform={textTransform}
              setTextLineHeight={textlineHeight}
              settextSize={textSize}
              showBg={showBg}
              changeBg={changeBg}
              bgType={bgType}
              bgScene={bgScene}
              container={container}
              mediaArray={mediaArray}
              data={data}
              getTextAreaData={getTextAreaData}
              getContent={getContent}
              content={content}
            />
          )
        ) : null}
        {addMedia ? null : addScene ? null : changeBg === false ? (
          data != "" ? (
            <TextEditor
              getTextTransform={getTextTransform}
              getAlignment={getAlignment}
              getTextColor={getTextColor}
              getTextlineHeight={getTextlineHeight}
              getTextSize={getTextSize}
              getFontfamily={getFontfamily}
              getFontWeight={getFontWeight}
              textSize={textSize}
              textlineHeight={textlineHeight}
              id={1}
              thumbnails={sceneThumbnail}
              category={selectedCategory}
              fontFamily={fontFamily}
              fontWeight={fontWeight}
            />
          ) : null
        ) : (
          <ChangeBg showAddMedia={showAddMedia} type={bgType} scene={bgScene} />
        )}
      </div>
    </section>
  );
};
export default TemplateNew1;
