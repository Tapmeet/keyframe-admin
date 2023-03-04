import React from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import SidebarLeft from "./../../SidebarLeft/SidebarLeft";
import TextEditor from "./../../TextEditor/TextEditor";
import ChangeBg from "./../../ChangeBg";
import SceneFourtyEight from "./Scene48";
import AddMedia from "./../../AddMedia/AddMedia";
import AddScenes from "./../../AddScenes/AddScenes";
import TopSection from "./../../TopSection/TopSection";
import {
  apigetTemplate,
  apiUpdateScene,
  apiGetScene,
} from "./../../../../../Utility/Utility";
import Player from "../../Player";
const TemplateScene48 = (props) => {
  const [userId, setUserId] = React.useState("");
  const [templateTitle, setTemplateTitle] = React.useState("");
  const [blocks, setBlocks] = React.useState("");
  const match = useRouteMatch("/template/:templateId");
  const templateId = "5f4a7da816b5091d38dd97a1";
  // const [content, setContent] = React.useState([
  //   {
  //     title: 'Square Feet',
  //     text: '35,000'
  //   },
  //   {
  //     title: 'Acer',
  //     text: '4'
  //   },
  //   {
  //     title: 'Bedroom',
  //     text: '5'
  //   }
  // ]);
  const [content, setContent] = React.useState([]);
  const [data, setData] = React.useState("");
  const [userToken, setUserToken] = React.useState("");
  const cookies = new Cookies();
  const [textAligmnet, setTextAligmnet] = React.useState("text-left");
  const [bgType, setBgType] = React.useState("");
  const [bgScene, setBgScene] = React.useState("");
  const [textSize, setTextSize] = React.useState("18");
  const [container, setContainer] = React.useState("");
  const [textlineHeight, setTextlineHeight] = React.useState("1.4");
  const [textColor, setTextColor] = React.useState("#333");
  const [texAreatextColor, setTexAreatextColor] = React.useState("#333");
  const [titletextColor, setTitletextColor] = React.useState("#333");
  const [titletextSize, setTitletextSize] = React.useState("");
  const [textTransform, setTexttransform] = React.useState("");
  const [changeBg, setChangeBg] = React.useState(false);
  const [titleactive, setTitleactive] = React.useState(false);
  const [addMedia, setAddMedia] = React.useState(false);
  const [addScene, setAddScene] = React.useState(false);
  const [showEditbutton, setShowEditbutton] = React.useState(false);
  const [mediaArray, setMediaArray] = React.useState([]);
  const [playActive, setPlayActive] = React.useState(false);
  const [sceneThumbnail, setSceneThumbnail] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [fontFamily, setFontFamily] = React.useState("");
  const [fontWeight, setFontWeight] = React.useState("");

  const [titleFontFamily, setTitleFontFamily] = React.useState("");
  const [titleFontWeight, setTitleFontWeight] = React.useState("");
  const [fontfamilySet, setFontfamilySet] = React.useState("");
  const [fontweightSet, setFontweightSet] = React.useState("");

  function getFontfamily(fontfamily) {
    setFontfamilySet(fontfamily);
    if (titleactive) {
      setTitleFontFamily(fontfamily);

      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: textColor,
        textlineHeight: textlineHeight,
        textSize: textSize,
        titleColor: titletextColor,
        titletextSize: titletextSize,
        textTransform: textTransform,
        media: mediaArray,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        titleFontFamily: fontfamily,
        titleFontWeight: titleFontWeight,
        time: 6.5,
      };
      updateData(data);
    } else {
      setFontFamily(fontfamily);
      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: textColor,
        textlineHeight: textlineHeight,
        textSize: textSize,
        titleColor: titletextColor,
        titletextSize: titletextSize,
        textTransform: textTransform,
        media: mediaArray,
        fontFamily: fontfamily,
        fontWeight: fontWeight,
        titleFontFamily: titleFontFamily,
        titleFontWeight: titleFontWeight,
        time: 6.5,
      };
      updateData(data);
    }
  }
  function getFontWeight(fontweight) {
    setFontweightSet(fontweight);
    if (titleactive) {
      setTitleFontWeight(fontweight);

      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: textColor,
        textlineHeight: textlineHeight,
        textSize: textSize,
        titleColor: titletextColor,
        titletextSize: titletextSize,
        textTransform: textTransform,
        media: mediaArray,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        titleFontFamily: titleFontFamily,
        titleFontWeight: fontweight,
        time: 6.5,
      };
      updateData(data);
    } else {
      setFontWeight(fontweight);
      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: textColor,
        textlineHeight: textlineHeight,
        textSize: textSize,
        titleColor: titletextColor,
        titletextSize: titletextSize,
        textTransform: textTransform,
        media: mediaArray,
        fontFamily: fontFamily,
        fontWeight: fontweight,
        titleFontFamily: titleFontFamily,
        titleFontWeight: titleFontWeight,
        time: 6.5,
      };
      updateData(data);
    }
  }

  function getAlignment(alignment) {
    setTextAligmnet(alignment);
    const data = {
      content: content,
      textAligmnet: alignment,
      textColor: textColor,
      textlineHeight: textlineHeight,
      textSize: textSize,
      titleColor: titletextColor,
      titletextSize: titletextSize,
      textTransform: textTransform,
      media: mediaArray,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      titleFontFamily: titleFontFamily,
      titleFontWeight: titleFontWeight,
      time: 6.5,
    };
    updateData(data);
  }
  function getTextTransform(texttransform) {
    setTexttransform(texttransform);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      titleColor: titletextColor,
      titletextSize: titletextSize,
      textlineHeight: textlineHeight,
      textSize: textSize,
      textTransform: texttransform,
      media: mediaArray,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      titleFontFamily: titleFontFamily,
      titleFontWeight: titleFontWeight,
      time: 6.5,
    };
    updateData(data);
  }
  function getTextColor(color) {
    if (titleactive) {
      setTitletextColor(color);
      setTexAreatextColor(color);
      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: textColor,
        titleColor: color,
        titletextSize: titletextSize,
        textlineHeight: textlineHeight,
        textSize: textSize,
        textTransform: textTransform,
        media: mediaArray,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        time: 6.5,
      };
      updateData(data);
    } else {
      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: color,
        titleColor: titletextColor,
        titletextSize: titletextSize,
        textlineHeight: textlineHeight,
        textSize: textSize,
        textTransform: textTransform,
        media: mediaArray,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        time: 6.5,
      };
      updateData(data);
      setTextColor(color);
      setTexAreatextColor(color);
    }
  }

  function getContent(content) {
    setContent(content);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      titleColor: titletextColor,
      titletextSize: titletextSize,
      textlineHeight: textlineHeight,
      textSize: textSize,
      textTransform: textTransform,
      media: mediaArray,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      titleFontFamily: titleFontFamily,
      titleFontWeight: titleFontWeight,
      time: 6.5,
    };
    updateData(data);
  }

  function getTextlineHeight(lineHeight) {
    setTextlineHeight(lineHeight);
    const data = {
      content: content,
      textAligmnet: textAligmnet,
      textColor: textColor,
      titleColor: titletextColor,
      titletextSize: titletextSize,
      textlineHeight: textlineHeight,
      textSize: textSize,
      textTransform: textTransform,
      media: mediaArray,
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      titleFontFamily: titleFontFamily,
      titleFontWeight: titleFontWeight,
      time: 6.5,
    };
    updateData(data);
  }
  function getTextSize(size) {
    if (titleactive) {
      setTitletextSize(size);
      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: textColor,
        titleColor: titletextColor,
        titletextSize: size,
        textlineHeight: textlineHeight,
        textSize: textSize,
        textTransform: textTransform,
        media: mediaArray,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        titleFontFamily: titleFontFamily,
        titleFontWeight: titleFontWeight,
        time: 6.5,
      };
      updateData(data);
    } else {
      setTextSize(size);
      const data = {
        content: content,
        textAligmnet: textAligmnet,
        textColor: textColor,
        titleColor: titletextColor,
        titletextSize: titletextSize,
        textlineHeight: textlineHeight,
        textSize: size,
        textTransform: textTransform,
        media: mediaArray,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        titleFontFamily: titleFontFamily,
        titleFontWeight: titleFontWeight,
        time: 6.5,
      };
      updateData(data);
    }
  }
  function showBg(changeBg, type, scene, titleColor, container) {
    setChangeBg(changeBg);
    setBgType(type);
    setBgScene(scene);
    setTitleactive(titleColor);
    setContainer(container);
    if (titleColor) {
      setTexAreatextColor(titletextColor);
    } else {
      setTexAreatextColor(textColor);
    }
  }
  function showAddMedia(media, mediaFile) {
    setAddMedia(media);
  }
  function closeAddMedia(media, mediaFile) {
    setAddMedia(media);
  }

  function showAddScene(mediaactive, scene) {
    console.log(mediaactive);
    setAddScene(mediaactive);
  }
  function closeAddScene(media) {
    setAddScene(media);
    setShowEditbutton(false);
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
        titleColor: titletextColor,
        textColor: textColor,
        textlineHeight: textlineHeight,
        textSize: textSize,
        textTransform: textTransform,
        media: newArr,
        time: 6.5,
        titletextSize: titletextSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        titleFontFamily: fontFamily,
        titleFontWeight: titleFontWeight,
      };
      updateData(data);
    }
    setAddMedia(media);
  }

  function getData() {
    axios.get(`${apiGetScene}?id=48`, {}).then(function (response) {
      if (response.data.scene) {
        setBlocks(response.data.scene);
        setTemplateTitle(response.data.scene.sceneTitle);
        setMediaArray(response.data.scene.sceneData.media);
        setTextSize(response.data.scene.sceneData.textSize);
        setTextlineHeight(response.data.scene.sceneData.textlineHeight);
        setTextColor(response.data.scene.sceneData.textColor);
        setTitletextSize(response.data.scene.sceneData.titletextSize);
        setTitletextColor(response.data.scene.sceneData.titleColor);
        setTexttransform(response.data.scene.sceneData.textTransform);
        setTextAligmnet(response.data.scene.sceneData.textAligmnet);
        setFontWeight(response.data.scene.sceneData.fontWeight);
        setFontFamily(response.data.scene.sceneData.fontFamily);
        setTitleFontWeight(response.data.scene.sceneData.titleFontWeight);
        setTitleFontFamily(response.data.scene.sceneData.titleFontFamily);
        setFontfamilySet(response.data.scene.sceneData.fontFamily);
        setFontweightSet(response.data.scene.sceneData.fontWeight);
        setData(response.data.scene.sceneData);
        setContent(response.data.scene.sceneData.content);
        setSceneThumbnail(response.data.scene.sceneThumbnail);
        setSelectedCategory(response.data.scene.sceneCategory);
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
      .put(`${apiUpdateScene}48`, {
        id: "48",
        sceneData: data,
      })
      .then(function (response) {
        console.log(response);
        getData();
      });
  }
  function playVideo(click) {
    setPlayActive(click);
  }
  return (
    <section className="template-new-wrapper scene-warpper scene-48">
      {templateTitle ? (
        <TopSection templateTitle={templateTitle} id="48" />
      ) : null}
      <div className="d-flex justify-content-between outervh">
        {addMedia ? (
          <AddMedia closeAddMedia={closeAddMedia} />
        ) : addScene ? (
          <AddScenes closeAddScene={closeAddScene} />
        ) : data != "" && content != "" ? (
          playActive ? (
            <Player blocks={blocks} />
          ) : (
            <SceneFourtyEight
              setColor={textColor}
              setTitleColor={titletextColor}
              setAlignment={textAligmnet}
              setTextTransform={textTransform}
              showBg={showBg}
              changeBg={changeBg}
              bgType={bgType}
              bgScene={bgScene}
              container={container}
              mediaArray={mediaArray}
              data={data}
              getContent={getContent}
              content={content}
            />
          )
        ) : null}
        {addMedia ? null : addScene ? null : changeBg === false ? (
          <TextEditor
            getTextTransform={getTextTransform}
            getAlignment={getAlignment}
            getTextColor={getTextColor}
            textColor={texAreatextColor}
            getTextSize={getTextSize}
            textSize={textSize}
            textlineHeight={textlineHeight}
            id={48}
            thumbnails={sceneThumbnail}
            category={selectedCategory}
            getFontfamily={getFontfamily}
            getFontWeight={getFontWeight}
            fontFamily={fontfamilySet}
            fontWeight={fontweightSet}
          />
        ) : (
          <ChangeBg showAddMedia={showAddMedia} type={bgType} scene={bgScene} />
        )}
      </div>
    </section>
  );
};
export default TemplateScene48;
