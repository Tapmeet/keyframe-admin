import React from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import SidebarLeft from "../../../Scenes/SidebarLeft/SidebarLeft";

import TextEditor from "../../../Scenes/TextEditor/TextEditor";
import ChangeBg from "../../../Scenes/ChangeBg";
import SceneEleven from "./Scene11";
import AddMedia from "../../../Scenes/AddMedia/AddMedia";
import AddScenes from "../../../Scenes/AddScenes/AddScenes";
import TopSection from "../../../Scenes/TopSection/TopSection";
import BottomSection from "../../../Scenes/BottomSection/BottomSection";
import AddMusic from "../../../Scenes/AddMusic/AddMusic";
import {
  apigetAdminTemplate,
  apigetTemplate,
  apiUpdateBlock,
  apiGetScene,
} from "../../../../../Utility/Utility";
import Player from "../../Player";
const TemplateSceneEleven= (props) => {
  const [bottomData, setBottomData] = React.useState("");
  const [sceneOrder, setSceneOrder] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [blocks, setBlocks] = React.useState("");
  const match = useRouteMatch("/template/:templateId/11/:sceneId");
  const {
    params: { templateId },
  } = match;
  const {
    params: { sceneId },
  } = match;
  const [templateTitle, setTemplateTitle] = React.useState("");
  const [data, setData] = React.useState("");
  const [userToken, setUserToken] = React.useState("");
  const cookies = new Cookies();
  const [textAligmnet, setTextAligmnet] = React.useState("text-center");
  const [bgType, setBgType] = React.useState("");
  const [bgScene, setBgScene] = React.useState("");
  const [textColor, setTextColor] = React.useState("#333");
  const [content, setContent] = React.useState("");
  const [textlineHeight, setTextlineHeight] = React.useState("1.4");
  const [textSize, setTextSize] = React.useState("18");
  const [textTransform, setTexttransform] = React.useState("");
  const [changeBg, setChangeBg] = React.useState(false);
  const [addMedia, setAddMedia] = React.useState(false);
  const [addScene, setAddScene] = React.useState(false);
  const [addMusic, setAddMusic] = React.useState(false);
  const [container, setContainer] = React.useState("");
  const [showEditbutton, setShowEditbutton] = React.useState(false);
  const [playActive, setPlayActive] = React.useState(false);
  const [sceneThumbnail, setSceneThumbnail] = React.useState("");
  const [preview, setPreview] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  // const [mediaArray, setMediaArray] = React.useState([
  //   {
  //     url: Scene,
  //     type:'image/png'
  //   },
  //   {
  //     url: Scene2,
  //     type:'image/png'
  //   },
  //   {
  //     url: Scene3,
  //     type:'image/png'
  //   },
  //   {
  //     url: Scene4,
  //     type:'image/png'
  //   }
  // ]);
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
      time: 4,
      fontFamily: fontfamily,
      fontWeight: fontWeight,
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
      time: 4,
      fontFamily: fontFamily,
      fontWeight: fontweight,
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
      time: 4,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
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
      time: 4,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
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
      time: 4,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
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
      time: 4,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
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
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      time: 4,
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
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      time: 4,
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
    setAddMusic(false);
  }
  function showMusic(media) {
    setAddMusic(media);
    setAddMedia(false);
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
        time: 4,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
      };
      updateData(data);
    }
    setAddMedia(media);
  }
  function showAddScene(mediaactive, scene) {
    setAddScene(mediaactive);
    setAddMusic(false);
  }
  function closeAddScene(media) {
    setAddScene(media);
    setShowEditbutton(false);
  }
  function getData() {
    axios
      .get(`${apigetAdminTemplate}` + "?templateId=" + templateId, {})
      .then(function (response) {
        console.log(response.data);
        if (response.data.data.length > 0) {
          if (typeof response.data.data[0] !== undefined) {
            setTemplateTitle(response.data.data[0].title);
            setBottomData(response.data.data[0]);
            setSceneThumbnail(response.data.data[0].templateImage);
            setPreview(response.data.data[0].templatePreview);
            setSelectedCategory(response.data.data[0].templateCategory);
            setSceneOrder(response.data.data[0].sceneOrder);
            if (response.data.data[0].blocks.length > 0) {
              setBlocks(response.data.data[0].blocks);
              response.data.data[0].blocks.map((block) => {
                if (block.sceneId == 11) {
                  setMediaArray(block.sceneData.media);
                  setTextSize(block.sceneData.textSize);
                  setTextlineHeight(block.sceneData.textlineHeight);
                  setTextColor(block.sceneData.textColor);
                  setTexttransform(block.sceneData.textTransform);
                  setTextAligmnet(block.sceneData.textAligmnet);

                  setTransformX(block.sceneData.x);
                  setTransformY(block.sceneData.y);
                  setWidth(block.sceneData.boxwidth);
                  setHeight(block.sceneData.boxheight);
                  setContent(block.sceneData.content);
                  setFontWeight(block.sceneData.fontWeight);
                  setFontFamily(block.sceneData.fontFamily);
                  setData(block.sceneData);
                }
              });
            }
          }
        }
      });
  }
  React.useEffect(() => {
    if (cookies.get("token")) {
      setUserToken(cookies.get("token"));
      const token = cookies.get("token");
      const decoded = jwt_decode(token);
      //setUserId(decoded.id);
      setUserId("5fb23662f0b30f2d6c9ff48c");
      getData();
    }
  }, [userId]);

  function updateData(data) {
    axios
      .put(`${apiUpdateBlock}/${sceneId}`, {
        id: sceneId,
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
      time: 4,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
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
  function reFetchData() {
    getData();
  }
  return (
    <section className="template-new-wrapper">
      {templateTitle ? (
        <TopSection
          templateTitle={templateTitle}
          template={true}
          templateId={templateId}
        />
      ) : null}
      <div className="d-flex justify-content-between outervh">
        <SidebarLeft
          showAddScene={showAddScene}
          addScene={addScene}
          addMedia={addMedia}
          showMusic={showMusic}
          addMusic={addMusic}
        />
        {addMedia ? (
          <AddMedia closeAddMedia={closeAddMedia} />
        ) : addScene ? (
          <AddScenes sceneOrder={sceneOrder} closeAddScene={closeAddScene} />
        ) : addMusic ? (
          <AddMusic
            reFetchData={reFetchData}
            showMusic={showMusic}
            closeAddScene={closeAddScene}
          />
        ) : data != "" ? (
          playActive ? (
            <Player blocks={blocks} />
          ) : (
            <SceneEleven
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
              textSize={textSize}
              textlineHeight={textlineHeight}
              id={11}
              thumbnails={sceneThumbnail}
              category={selectedCategory}
              template={true}
              templateId={templateId}
              getFontfamily={getFontfamily}
              getFontWeight={getFontWeight}
              fontFamily={fontFamily}
              fontWeight={fontWeight}
              preview={preview}
            />
          ) : null
        ) : (
          <ChangeBg showAddMedia={showAddMedia} type={bgType} scene={bgScene} />
        )}
      </div>
      {bottomData ? (
        <BottomSection
          showEditbutton={showEditbutton}
          showAddScene={showAddScene}
          playVideo={playVideo}
          bottomData={bottomData}
          reFetchData={reFetchData}
        />
      ) : null}
    </section>
  );
};
export default TemplateSceneEleven;
