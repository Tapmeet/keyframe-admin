import React from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import SidebarLeft from "./../../../Scenes/SidebarLeft/SidebarLeft";
import TextEditor from "./../../../Scenes/TextEditor/TextEditor";
import ChangeBg from "./../../../Scenes/ChangeBg";
import SceneTwo from "./Scene2";
import AddMedia from "./../../../Scenes/AddMedia/AddMedia";
import AddScenes from "./../../../Scenes/AddScenes/AddScenes";
import TopSection from "./../../../Scenes/TopSection/TopSection";
import BottomSection from "./../../../Scenes/BottomSection/BottomSection";
import AddMusic from "./../../../Scenes/AddMusic/AddMusic";
import {
  apigetTemplate,
  apiUpdateScene,
  apiGetScene,
  apiUpdateBlock,
  apigetAdminTemplate,
} from "./../../../../../Utility/Utility";
import Player from "../../Player";
const TemplateSceneTwo = (props) => {
  const [bottomData, setBottomData] = React.useState("");
  const [sceneOrder, setSceneOrder] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [blocks, setBlocks] = React.useState("");
  const match = useRouteMatch("/template/:templateId/2/:sceneId");
  const {
    params: { templateId },
  } = match;
  const {
    params: { sceneId },
  } = match;
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
  const [templateTitle, setTemplateTitle] = React.useState("");
  const [preview, setPreview] = React.useState("");
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
  const [titletextSize, setTitletextSize] = React.useState("");
  const [titletextColor, setTitletextColor] = React.useState("#333");
  const [textTransform, setTexttransform] = React.useState("");
  const [changeBg, setChangeBg] = React.useState(false);
  const [titleactive, setTitleactive] = React.useState(false);
  const [addMedia, setAddMedia] = React.useState(false);
  const [addScene, setAddScene] = React.useState(false);
  const [addMusic, setAddMusic] = React.useState(false);
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
    // console.log(fontfamily)
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
    setAddMusic(false);
  }
  function showMusic(media) {
    setAddMusic(media);
    setAddMedia(false);
  }
  function closeAddMedia(media, mediaFile) {
    setAddMedia(media);
  }

  function showAddScene(mediaactive, scene) {
    setAddMusic(false);
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
        textColor: textColor,
        textlineHeight: textlineHeight,
        textSize: textSize,
        textTransform: textTransform,
        media: newArr,
        time: 6.5,
        titletextSize: titletextSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        titleFontFamily: titleFontFamily,
        titleFontWeight: titleFontWeight,
      };
      updateData(data);
    }
    setAddMedia(media);
  }

  function getData() {
    axios
      .get(`${apigetAdminTemplate}` + "?templateId=" + templateId, {})
      .then(function (response) {
        if (response.data.data.length > 0) {
          if (typeof response.data.data[0] !== undefined) {
            setTemplateTitle(response.data.data[0].title);
            setBottomData(response.data.data[0]);
            setSceneOrder(response.data.data[0].sceneOrder);
            setSceneThumbnail(response.data.data[0].templateImage);
            setPreview(response.data.data[0].templatePreview)
            setSelectedCategory(response.data.data[0].templateCategory);
            if (response.data.data[0].blocks.length > 0) {
              setBlocks(response.data.data[0].blocks);
              response.data.data[0].blocks.map((block) => {
                if (block.sceneId == 2) {
                  setMediaArray(block.sceneData.media);
                  setTextSize(block.sceneData.textSize);
                  setTextlineHeight(block.sceneData.textlineHeight);
                  setTextColor(block.sceneData.textColor);
                  setTitletextColor(block.sceneData.titleColor);
                  setTitletextSize(block.sceneData.titletextSize);
                  setTexttransform(block.sceneData.textTransform);
                  setTextAligmnet(block.sceneData.textAligmnet);
                  setFontWeight(block.sceneData.fontWeight);
                  setFontFamily(block.sceneData.fontFamily);
                  setTitleFontWeight(block.sceneData.titleFontWeight);
                  setTitleFontFamily(block.sceneData.titleFontFamily);
                  if (titleactive) {
                    setFontfamilySet(block.sceneData.titleFontFamily);
                    setFontweightSet(block.sceneData.titleFontWeight);
                  } else {
                    setFontfamilySet(block.sceneData.fontFamily);
                    setFontweightSet(block.sceneData.fontWeight);
                  }

                  setContent(block.sceneData.content);
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
      setUserId(decoded.id);
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
            <AddMusic reFetchData={reFetchData} showMusic={showMusic} closeAddScene={closeAddScene}/>
        ) : data != "" && content != "" ? (
          playActive ? (
            <Player blocks={blocks} />
          ) : (
            <SceneTwo
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
          data != "" ? (
            <TextEditor
              getTextTransform={getTextTransform}
              getAlignment={getAlignment}
              getTextColor={getTextColor}
              textColor={texAreatextColor}
              getTextSize={getTextSize}
              textSize={textSize}
              textlineHeight={textlineHeight}
              id={2}
              thumbnails={sceneThumbnail}
              category={selectedCategory}
              template={true}
              templateId={templateId}
              getFontfamily={getFontfamily}
              getFontWeight={getFontWeight}
              fontFamily={fontfamilySet}
              fontWeight={fontweightSet}
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
export default TemplateSceneTwo;
