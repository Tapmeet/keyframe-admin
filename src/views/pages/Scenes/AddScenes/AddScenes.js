/* eslint-disable eqeqeq */
import React from 'react';
import FilerobotImageEditor from 'filerobot-image-editor';
import img1 from '../../../../assets/images/templates/img11.png';
import img2 from '../../../../assets/images/templates/img12.png'
import img3 from '../../../../assets/images/templates/img13.png'
import img4 from '../../../../assets/images/templates/img14.png'
import backarrow from '../../../../assets/images/templates/back-arrow.svg'
const AddScene = (props) => {
    const [media, setMedia] = React.useState('');
    const setImage = (img) => {
        setMedia(img);
    }
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
    function closeSection (media){
        props.closeAddScene(false, media);
    }
    return (
        <section className="template-new-media d-flex">
            <div className="leftPanel">
                <h3>Type of scenes</h3>
                <ul>
                    <li><button className="btns" >Animations</button></li>
                    <li><button className="btns">Videos / Images</button></li>
                </ul>
            </div>
            <div className="rightPanel addscenes">
                <div className="button-section d-flex">
                    <div>
                    <h2>
                        Media Scenes
                    </h2>
                    </div>
                    <div onClick={() => closeSection(media)}>
                      <img src={backarrow} alt="back"  />  Back
                    </div>
                </div>
                <ul>
                    <li className={media == img1 ? 'active' : null}>
                        <img src={img1} alt="thumbnail"  />
                        <h4>Simple text (80)</h4>
                    </li>
                    <li className={media == img2 ? 'active' : null}>
                        <img src={img2} alt="thumbnail"  />
                        <h4>Diverse Workplace (60)</h4>
                    </li>
                    <li className={media == img3 ? 'active' : null}>
                        <img src={img3} alt="thumbnail"  />
                        <h4>Retail Services (30)</h4>
                    </li>
                    <li className={media == img4 ? 'active' : null}>
                        <img src={img4} alt="thumbnail"  />
                        <h4>Showcases (20)</h4>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default AddScene