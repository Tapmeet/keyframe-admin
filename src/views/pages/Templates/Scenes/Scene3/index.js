import React from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import SidebarLeft from "./../../../Scenes/SidebarLeft/SidebarLeft";

import TextEditor from "./../../../Scenes/TextEditor/TextEditor";
import ChangeBg from "./../../../Scenes/ChangeBg";
import SceneThree from "./Scene3";
import AddMedia from "./../../../Scenes/AddMedia/AddMedia";
import AddScenes from "./../../../Scenes/AddScenes/AddScenes";
import TopSection from "./../../../Scenes/TopSection/TopSection";
import BottomSection from "./../../../Scenes/BottomSection/BottomSection";
import {
  apigetAdminTemplate,
  apigetTemplate,
  apiUpdateBlock,
  apiGetScene,
} from "./../../../../../Utility/Utility";
import Scene from "./../../../../../assets/images/templates/img11.png";
import Scene2 from "./../../../../../assets/images/templates/img12.png";
import Player from "../../Player";
const TemplateSceneThree = (props) => {
  const [bottomData, setBottomData] = React.useState("");
  const [sceneOrder, setSceneOrder] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [blocks, setBlocks] = React.useState("");
  const match = useRouteMatch("/template/:templateId/3/:sceneId");
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
  const [container, setContainer] = React.useState("");
  const [showEditbutton, setShowEditbutton] = React.useState(false);
  const [playActive, setPlayActive] = React.useState(false);
  const [sceneThumbnail, setSceneThumbnail] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState('');
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

  function getAlignment(alignment) {
    setTextAligmnet(alignment);
    const data = {
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
    axios .get(`${apigetAdminTemplate}` + "?templateId=" + templateId, {})
      .then(function (response) {
        if (response.data.data.length > 0) {
          if (typeof response.data.data[0] !== undefined) {
            setTemplateTitle(response.data.data[0].title);
            setBottomData(response.data.data[0]);
            setSceneThumbnail(response.data.data[0].templateImage)
            setSelectedCategory(response.data.data[0].templateCategory)
            setSceneOrder(response.data.data[0].sceneOrder)
            if (response.data.data[0].blocks.length > 0) {
              setBlocks(response.data.data[0].blocks);
              response.data.data[0].blocks.map((block) => {
                if (block.sceneId == 3) {
                  setMediaArray(block.sceneData.media);
                  setTextSize(block.sceneData.textSize);
                  setTextlineHeight(block.sceneData.textlineHeight);
                  setTextColor(block.sceneData.textColor);
                  setTexttransform(block.sceneData.textTransform);
                  setTextAligmnet(block.sceneData.textAligmnet);
                  setData(block.sceneData);
                  setTransformX(block.sceneData.x);
                  setTransformY(block.sceneData.y);
                  setWidth(block.sceneData.boxwidth);
                  setHeight(block.sceneData.boxheight);
                  setContent(block.sceneData.content);
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
  function reFetchData(){
    getData();
  }
  return (
    <section className="template-new-wrapper">
     {templateTitle ? <TopSection templateTitle={templateTitle} template={true}
              templateId={templateId} /> : null}
      <div className="d-flex justify-content-between outervh">
     
        <SidebarLeft />
        {addMedia ? (
          <AddMedia closeAddMedia={closeAddMedia} />
        ) : addScene ? (
          <AddScenes sceneOrder={sceneOrder} closeAddScene={closeAddScene} />
        ) : data != "" ? (
          playActive ? (
            <Player blocks={blocks} />
          ) : (
            <SceneThree
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
              id={3}
              thumbnails={sceneThumbnail}
              category={selectedCategory}
              template={true}
              templateId={templateId}
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
export default TemplateSceneThree;
