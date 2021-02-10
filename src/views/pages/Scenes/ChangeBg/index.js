/* eslint-disable eqeqeq */

import React from 'react';
import FilerobotImageEditor from 'filerobot-image-editor';
const ChangeBg = (props) => {
  const [show, toggle] = React.useState(false);
  const config = {
    tools: ['adjust', 'effects', 'filters', 'rotate', 'crop', 'resize', 'image', 'text'],
    theme: {
      colors: {
        primaryBg: '#00527E',
        primaryBgHover: '#637381',
        secondaryBg: '#0c6195',
        secondaryBgHover: '#C72928',
        text: '#F9FAFB',
        textHover: '#ffffff',
        textMute: '#aaaaaa',
        textWarn: '#f7931e',
        secondaryBgOpacity: 'rgba(0, 0, 0, 0.75)',
        border: '#00527E',
        borderLight: '#637381',
        tagsBackground: '#fb3640',
        buttonBackground: '#fb3640',
        hoverButtonBackground: '#E04241',
      }
    }
  };
  const onComplete = function (newUrl) {
    let fileUrl = newUrl.message.replace(/\\/g, "/").substring("public".length);
    let imageUrl = fileUrl.replace('sets/', '');
    let updatedImage = imageUrl;
  };
  const ImageEditor = new FilerobotImageEditor(config, onComplete);
  function filterBtnClick() {
    toggle(true)
  }
  function changebgMedia(){
    props.showAddMedia('true', props.scene)
  }
  return (
    <section className="template-new-changebg template-new-wrapper-text-editor">
      <div className="change-wrapper">
        {props.type == 'image' ?
          (
            <div>
              <FilerobotImageEditor
                show={show}
                config={config}
                src={props.scene}
                 onClose={() => { toggle(false) }}
                onComplete={onComplete}
              />
              <img src={props.scene} className="img-fluid" alt="imagebg" />
            </div>
          ) :
          null}
        <div className="d-flex">
          <button className="btn " onClick={changebgMedia}>Change Background</button>
          <button className="btn " onClick={filterBtnClick}> Edit Background </button>
        </div>
      </div>
    </section>
  );
}
export default ChangeBg