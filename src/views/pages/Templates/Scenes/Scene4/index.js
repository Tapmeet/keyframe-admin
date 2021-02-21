import React from "react";
import axios from "axios";
import Scene from "./../../../../../assets/images/templates/img11.png";
import Scene2 from "./../../../../../assets/images/templates/img12.png";
import Scene3 from "./../../../../../assets/images/templates/img13.png";
import Scene4 from "./../../../../../assets/images/templates/img14.png";
import { useRouteMatch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import SidebarLeft from "../../../Scenes/SidebarLeft/SidebarLeft";
import TextEditor from "../../../Scenes/TextEditor/TextEditor";
import ChangeBg from "../../../Scenes/ChangeBg";
import SceneFour from "./Scene4";
import AddMedia from "../../../Scenes/AddMedia/AddMedia";
import AddScenes from "../../../Scenes/AddScenes/AddScenes";
import TopSection from "./../../../Scenes/TopSection/TopSection";
import BottomSection from "./../../../Scenes/BottomSection/BottomSection";
import {
  apigetAdminTemplate,
  apiUpdateBlock,
  apiUpdateScene,
  apiGetScene,
} from "./../../../../../Utility/Utility";
import Player from "../../Player";
const TemplateSceneFour = (props) => {
  const [sceneOrder, setSceneOrder] = React.useState("");
  const [bottomData, setBottomData] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const match = useRouteMatch("/template/:templateId/4/:sceneId");
  const {
    params: { templateId },
  } = match;
  const {
    params: { sceneId },
  } = match;

  const [data, setData] = React.useState("");
  const [blocks, setBlocks] = React.useState("");
  const [userToken, setUserToken] = React.useState("");
  const cookies = new Cookies();
  // const [textAligmnet, setTextAligmnet] = React.useState("text-center");
  const [bgType, setBgType] = React.useState("");
  const [bgScene, setBgScene] = React.useState("");
  // const [textColor, setTextColor] = React.useState("#333");
  const [content, setContent] = React.useState("");
  const [textlineHeight, setTextlineHeight] = React.useState("1.4");
  const [textSize, setTextSize] = React.useState("");
  // const [textTransform, setTexttransform] = React.useState("");
  const [changeBg, setChangeBg] = React.useState(false);
  const [addMedia, setAddMedia] = React.useState(false);
  const [addScene, setAddScene] = React.useState(false);
  const [container, setContainer] = React.useState("");
  const [arrayIndex, setArrayIndex] = React.useState(0);
  const [showEditbutton, setShowEditbutton] = React.useState(false);
  const [playActive, setPlayActive] = React.useState(false);
  const [sceneThumbnail, setSceneThumbnail] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  // const [mediaArray, setMediaArray] = React.useState([
  //   {
  //     url: Scene,
  //     type: "image/png",
  //   },
  //   {
  //     url: Scene2,
  //     type: "image/png",
  //   },
  //   {
  //     url: Scene3,
  //     type: "image/png",
  //   },
  //   {
  //     url: Scene4,
  //     type: "image/png",
  //   },
  // ]);
  // const [textArray, setTextArray] = React.useState([
  //   {
  //     text: "Main Street Two story living room with open kitchen",
  //     fontSize: "18",
  //     fontFamily: "",
  //     fontWeight: "500",
  //     fontLineHeight: "1.4",
  //     fontAlignment: "text-center",
  //     fontColor: "#333",
  //     fontCapitalize: "",
  //     x: 0,
  //     y: 350,
  //     boxWidth: 300,
  //     boxHeight: 80,
  //   },
  //   {
  //     text: "54322 Main Street Two story living room with open kitchen",
  //     fontSize: "18",
  //     fontFamily: "",
  //     fontWeight: "500",
  //     fontLineHeight: "1.4",
  //     fontAlignment: "text-center",
  //     fontColor: "#333",
  //     fontCapitalize: "",
  //     x: 0,
  //     y: 350,
  //     boxWidth: 300,
  //     boxHeight: 80,
  //   },
  // ]);
  const [mediaArray, setMediaArray] = React.useState([]);
  const [textArray, setTextArray] = React.useState([]);
  function getAlignment(alignment) {
    let newArr = [...textArray]; // copying the old datas array
    newArr[arrayIndex] = {
      text: newArr[arrayIndex].text,
      fontSize: newArr[arrayIndex].fontSize,
      fontFamily: newArr[arrayIndex].fontFamily,
      fontWeight: newArr[arrayIndex].fontWeight,
      fontLineHeight: newArr[arrayIndex].fontLineHeight,
      fontAlignment: alignment,
      fontColor: newArr[arrayIndex].fontColor,
      fontCapitalize: newArr[arrayIndex].texttransform,
      x: newArr[arrayIndex].x,
      y: newArr[arrayIndex].y,
      boxWidth: newArr[arrayIndex].boxWidth,
      boxHeight: newArr[arrayIndex].boxHeight,
    };
    setTextArray(newArr);
    const data = {
      media: mediaArray,
      time: 6,
      textArray: newArr,
    };
    updateData(data);
  }
  function getTextTransform(texttransform) {
    let newArr = [...textArray]; // copying the old datas array
    newArr[arrayIndex] = {
      text: newArr[arrayIndex].text,
      fontSize: newArr[arrayIndex].fontSize,
      fontFamily: newArr[arrayIndex].fontFamily,
      fontWeight: newArr[arrayIndex].fontWeight,
      fontLineHeight: newArr[arrayIndex].fontLineHeight,
      fontAlignment: newArr[arrayIndex].fontAlignment,
      fontColor: newArr[arrayIndex].fontColor,
      fontCapitalize: texttransform,
      x: newArr[arrayIndex].x,
      y: newArr[arrayIndex].y,
      boxWidth: newArr[arrayIndex].boxWidth,
      boxHeight: newArr[arrayIndex].boxHeight,
    };
    setTextArray(newArr);
    const data = {
      media: mediaArray,
      time: 6,
      textArray: newArr,
    };
    updateData(data);
  }
  function getTextColor(color) {
    let newArr = [...textArray]; // copying the old datas array
    newArr[arrayIndex] = {
      text: newArr[arrayIndex].text,
      fontSize: newArr[arrayIndex].fontSize,
      fontFamily: newArr[arrayIndex].fontFamily,
      fontWeight: newArr[arrayIndex].fontWeight,
      fontLineHeight: newArr[arrayIndex].fontLineHeight,
      fontAlignment: newArr[arrayIndex].fontAlignment,
      fontColor: color,
      fontCapitalize: newArr[arrayIndex].fontCapitalize,
      x: newArr[arrayIndex].x,
      y: newArr[arrayIndex].y,
      boxWidth: newArr[arrayIndex].boxWidth,
      boxHeight: newArr[arrayIndex].boxHeight,
    };
    setTextArray(newArr);
    const data = {
      media: mediaArray,
      time: 6,
      textArray: newArr,
    };
    updateData(data);
  }
  function getTextlineHeight(lineHeight) {
    setTextlineHeight(lineHeight);
    let newArr = [...textArray]; // copying the old datas array
    newArr[arrayIndex] = {
      text: newArr[arrayIndex].text,
      fontSize: newArr[arrayIndex].fontSize,
      fontFamily: newArr[arrayIndex].fontFamily,
      fontWeight: newArr[arrayIndex].fontWeight,
      fontLineHeight: lineHeight,
      fontAlignment: newArr[arrayIndex].fontAlignment,
      fontColor: newArr[arrayIndex].fontColor,
      fontCapitalize: newArr[arrayIndex].fontCapitalize,
      x: newArr[arrayIndex].x,
      y: newArr[arrayIndex].y,
      boxWidth: newArr[arrayIndex].boxWidth,
      boxHeight: newArr[arrayIndex].boxHeight,
    };
    setTextArray(newArr);
    const data = {
      media: mediaArray,
      time: 6,
      textArray: newArr,
    };
    updateData(data);
  }
  function getTextSize(size) {
    setTextSize(size);
    console.log(arrayIndex);
    let newArr = [...textArray]; // copying the old datas array
    newArr[arrayIndex] = {
      text: newArr[arrayIndex].text,
      fontSize: size,
      fontFamily: newArr[arrayIndex].fontFamily,
      fontWeight: newArr[arrayIndex].fontWeight,
      fontLineHeight: newArr[arrayIndex].fontLineHeight,
      fontAlignment: newArr[arrayIndex].fontAlignment,
      fontColor: newArr[arrayIndex].fontColor,
      fontCapitalize: newArr[arrayIndex].fontCapitalize,
      x: newArr[arrayIndex].x,
      y: newArr[arrayIndex].y,
      boxWidth: newArr[arrayIndex].boxWidth,
      boxHeight: newArr[arrayIndex].boxHeight,
    };
    setTextArray(newArr);
    //console.log(newArr)
    const data = {
      media: mediaArray,
      time: 6,
      textArray: newArr,
    };
    updateData(data);
  }
  function showBg(changeBg, type, scene, titleColor, container, index) {
    console.log(scene);
    if (index) {
      setTextSize(textArray[index].fontSize);
    }
    setArrayIndex(index);
    setChangeBg(changeBg);
    setBgType(type);
    setBgScene(scene);
    setContainer(container);

    //console.log(textArray[index].fontSize)
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
        media: newArr,
        time: 6,
        textArray: textArray,
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
  function getContent(content) {
    setTextArray(content);
    const data = {
      textArray: content,
      time: 6,
      media: mediaArray,
    };
    updateData(data);
  }
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

  React.useEffect(() => {
    if (cookies.get("token")) {
      setUserToken(cookies.get("token"));
      const token = cookies.get("token");
      const decoded = jwt_decode(token);
      setUserId("5fb23662f0b30f2d6c9ff48c");
      //console.log(decoded.id)
      getData();
    }
    // console.log(textSize);
  }, [userId]);

  
  function getData() {
    axios .get(`${apigetAdminTemplate}` + "?templateId=" + templateId, {})
      .then(function (response) {
        if (response.data.data.length > 0) {
          setBlocks(response.data.data[0].blocks);
          if (typeof response.data.data[0] !== undefined) {
            setBottomData(response.data.data[0]);
            setSceneOrder(response.data.data[0].sceneOrder)
            setSceneThumbnail(response.data.data[0].templateImage)
            setSelectedCategory(response.data.data[0].templateCategory)
            if (response.data.data[0].blocks.length > 0) {
              //setBlocks(response.data.data[0].blocks);
              response.data.data[0].blocks.map((block) => {
                if (block.sceneId == 4) {
                  console.log(block);
                  setData(block.sceneData);
                  setMediaArray(block.sceneData.media);
                  setTextArray(block.sceneData.textArray);
                  setTextSize(block.sceneData.textArray[0].fontSize);
                  // console.log(block.sceneData.textArray[0].fontSize);
                }
              });
            }
          }
        }
      });
  }
  function playVideo(click) {
    setPlayActive(click);
  }
  function reFetchData(){
    getData();
  }
  return (
    <section className="template-new-wrapper">
       <TopSection />
      <div className="d-flex justify-content-between outervh">
       
        <SidebarLeft />
        {addMedia ? (
          <AddMedia closeAddMedia={closeAddMedia} />
        ) : addScene ? (
          <AddScenes closeAddScene={closeAddScene} sceneOrder={sceneOrder} />
        ) : textArray != "" ? (
          playActive ? (
            <Player blocks={blocks} />
          ) : (
            <SceneFour
              showBg={showBg}
              changeBg={changeBg}
              container={container}
              mediaArray={mediaArray}
              textArray={textArray}
              settextArray={textArray}
              data={data}
              getContent={getContent}
              textSize={textSize}
            />
          )
        ) : null}

        {addMedia ? null : addScene ? null : changeBg === false ? (
          <TextEditor
            getTextTransform={getTextTransform}
            getAlignment={getAlignment}
            getTextColor={getTextColor}
            getTextlineHeight={getTextlineHeight}
            getTextSize={getTextSize}
            textSize={textSize}
            textlineHeight={textlineHeight}
            id={4}
            thumbnails={sceneThumbnail}
            category={selectedCategory}
            template={true}
            templateId={templateId}
          />
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
export default TemplateSceneFour;