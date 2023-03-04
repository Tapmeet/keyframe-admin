import React from "react";
import axios from "axios";
import Scene from "./../../../../../assets/images/templates/img11.png";
import Scene2 from "./../../../../../assets/images/templates/img12.png";
import Scene3 from "./../../../../../assets/images/templates/img13.png";
import Scene4 from "./../../../../../assets/images/templates/img14.png";
import { useRouteMatch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import SidebarLeft from "../../SidebarLeft/SidebarLeft";
import TextEditor from "../../TextEditor/TextEditor";
import ChangeBg from "../../ChangeBg";
import SceneLast2 from "./Scenelast2";
import AddMedia from "../../AddMedia/AddMedia";
import AddScenes from "./../../AddScenes/AddScenes";
import {
  apigetTemplate,
  apiUpdateBlock,
  apiUpdateScene,
  apigetAdminTemplate,
  apiGetScene,
} from "./../../../../../Utility/Utility";
import TopSection from "./../../TopSection/TopSection";
import Player from "../../Player";
const TemplateScenelast2 = (props) => {
  const [userId, setUserId] = React.useState("");
  const match = useRouteMatch("/template/:templateId");
  const templateId = "6399ad1570446a16f20033e6";
  const [templateTitle, setTemplateTitle] = React.useState("");
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
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [mediaArray, setMediaArray] = React.useState([]);
  const [textArray, setTextArray] = React.useState([]);
  const [fontFamily, setFontFamily] = React.useState("");
  const [fontWeight, setFontWeight] = React.useState("");

  function getFontfamily(fontfamily) {
    setFontFamily(fontfamily)
    let newArr = [...textArray];
    newArr[arrayIndex] = {
      text: newArr[arrayIndex].text,
      fontSize: newArr[arrayIndex].fontSize,
      fontFamily: fontfamily,
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
    const data = {
      media: mediaArray,
      time: 6,
      textArray: newArr,
    };
    updateData(data);
  }
  function getFontWeight(fontweight) {
    setFontWeight(fontweight);
    let newArr = [...textArray]; // copying the old datas array
    newArr[arrayIndex] = {
      text: newArr[arrayIndex].text,
      fontSize: newArr[arrayIndex].fontSize,
      fontFamily: newArr[arrayIndex].fontFamily,
      fontWeight: fontweight,
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
    const data = {
      media: mediaArray,
      time: 6,
      textArray: newArr,
    };
    updateData(data);
  }

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
      setFontWeight(textArray[index].fontWeight);
      setFontFamily(textArray[index].fontFamily)
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
    console.log(data)
    axios
      .put(`${apiUpdateScene}last2`, {
        id: "last2",
        sceneData: data,
      })
      .then(function (response) {
        console.log(response);
       // getData();
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
    // console.log(textSize);
  }, [userId]);

  function getData() {
    axios
      .get(`${apigetAdminTemplate}` + "?templateId=" + templateId, {})
      .then(function (response) {
        if (response.data.data.length > 0) {
          setBlocks(response.data.data[0].blocks);
          if (typeof response.data.data[0] !== undefined) {
            setTemplateTitle(response.data.data[0].title);
            setSceneThumbnail(response.data.data[0].templateImage);
            setSelectedCategory(response.data.data[0].templateCategory);
            if (response.data.data[0].blocks.length > 0) {
              //setBlocks(response.data.data[0].blocks);
              response.data.data[0].blocks.map((block) => {
                if (block.sceneId == 'last2') {
                  console.log(block);

                  setMediaArray(block.sceneData.media);
                  setTextArray(block.sceneData.textArray);
                  setTextSize(block.sceneData.textArray[0].fontSize);
                  setFontFamily(block.sceneData.textArray[0].fontFamily);
                  setFontWeight(block.sceneData.textArray[0].fontWeight);
                  setData(block.sceneData);
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
  return (
    <section className="template-new-wrapper scene-warpper">
      {templateTitle ? (
        <TopSection
          templateTitle={templateTitle}
          id="51"
        />
      ) : null}
      <div className="d-flex justify-content-between outervh">
        {/* <SidebarLeft /> */}
        {addMedia ? (
          <AddMedia closeAddMedia={closeAddMedia} />
        ) : addScene ? (
          <AddScenes closeAddScene={closeAddScene} />
        ) : textArray != "" ? (
          playActive ? (
            <Player blocks={blocks} />
          ) : (
            <SceneLast2
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
            id={51}
            thumbnails={sceneThumbnail}
            category={selectedCategory}
            getFontfamily={getFontfamily}
            getFontWeight={getFontWeight}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
          />
        ) : (
          <ChangeBg showAddMedia={showAddMedia} type={bgType} scene={bgScene} />
        )}
      </div>
    </section>
  );
};
export default TemplateScenelast2;
