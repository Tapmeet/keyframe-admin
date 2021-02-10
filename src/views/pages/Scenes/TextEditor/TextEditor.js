/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import FontPicker from "font-picker-react";
import { SketchPicker } from "react-color";

const TextEditor = (props) => {
  const [titleColor, setTitleColor] = React.useState(props.textColor);
  const [titleColorShow, setTitleColorShow] = React.useState(false);
  const [activeCapitalize, setactiveCapitalize] = React.useState(false);
  const [activeLeftAlign, setactiveLeftAlign] = React.useState(false);
  const [activeRightAlign, setactiveRightAlign] = React.useState(false);
  const [activeCenterAlign, setactiveCenterAlign] = React.useState(true);
  const [activeFontFamily, setState] = React.useState("Open Sans");
  const [activeFontlineHeight, setactiveFontlineHeight] = React.useState(
    props.textlineHeight
  );
  //const [activeFontSize, setactiveFontSize] = React.useState(props.textSize);
  var activeFontSize = props.textSize;
  const toggleTitle = () => setTitleColorShow((prevState) => !prevState);

  React.useEffect(() => {
    //console.log(props.textSize)
    if (props.setTexttransform === "text-uppercase") {
      setactiveCapitalize(true);
    } else {
      setactiveCapitalize(false);
    }
    //setactiveFontSize(props.textSize)
    activeFontSize = props.textSize;
  }, []);
  function setcapitalize() {
    if (activeCapitalize === true) {
      props.getTextTransform("");
    } else {
      props.getTextTransform("text-uppercase");
    }
    setactiveCapitalize(!activeCapitalize);
  }
  function setAlignment(align) {
    if (align === "left") {
      setactiveLeftAlign(true);
      setactiveCenterAlign(false);
      setactiveRightAlign(false);
      props.getAlignment("text-left");
    } else if (align === "center") {
      setactiveLeftAlign(false);
      setactiveCenterAlign(true);
      setactiveRightAlign(false);
      props.getAlignment("text-center");
    } else {
      setactiveLeftAlign(false);
      setactiveCenterAlign(false);
      setactiveRightAlign(true);
      props.getAlignment("text-right");
    }
  }
  function handleChangeComplete(color) {
    setTitleColor(color.hex);
    props.getTextColor(color.hex);
  }
  function setFontsize(e) {
    //setactiveFontSize(e);
    activeFontSize = e
    props.getTextSize(e);
  }
  function setFontlineHeight(e) {
    setactiveFontlineHeight(e);
    props.getTextlineHeight(e);
  }
  return (
    <section className="template-new-wrapper-text-editor">
      <div className="text-editor">
        <h4>Text Properties</h4>
        <div className="sectionOne">
          <FontPicker
            apiKey="AIzaSyDaztQYmJQDMP2mVUtrHIq4XRBpLEr0dzk"
            activeFontFamily={activeFontFamily}
            onChange={(nextFont) => setState(nextFont.family)}
          />
          <input
            type="number"
            min="18"
            value={activeFontSize}
            onChange={(e) => setFontsize(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="sectionOne">
          <select>
            <option value="">Set Fonts Weight</option>
            <option value="Thin">Thin</option>
            <option value="Normal">Normal</option>
            <option value="Medium">Medium</option>
            <option value="Bold">Bold</option>
          </select>
          <input
            value={activeFontlineHeight}
            onChange={(e) => setFontlineHeight(e.target.value)}
            type="number"
            min="1"
            step="0.1"
            className="form-control"
          />
        </div>

        <div class="sectionTwo">
          <ul>
            <li>
              <div
                className={
                  activeCapitalize
                    ? "capitalise borders active"
                    : "capitalise borders "
                }
                onClick={setcapitalize}
              >
                <svg viewBox="0 0 16 16" width="16" height="16">
                  <path d="M6 1H0v3h1l1-1h3v11l-2 1v1h6v-1l-2-1V3h3l1 1h1V1z"></path>
                  <path d="M8 6v3h1l1-1h1v6l-1 1v1h4v-1l-1-1V8h1l1 1h1V6z"></path>
                </svg>
              </div>
            </li>
            <li>
              <div className="font-color" onClick={toggleTitle}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="__36674"
                >
                  <path
                    d="M4 18h6v2H4v-2zm9.05-14l4.67 14H20v2h-6v-2h1.61l-1-3H9.4l-1.44 4.32-1.9-.64L10.95 4h2.1zM12 7.16L10.05 13h3.9L12 7.16z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg viewBox="-1 -1 2 2" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id="chequer"
                      x="0"
                      y="0"
                      width="0.25"
                      height="0.25"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="0.25"
                        height="0.25"
                        fill="#ffffff"
                      ></rect>
                      <rect
                        x="0.25"
                        y="0"
                        width="0.25"
                        height="0.25"
                        fill="#ccceda"
                      ></rect>
                      <rect
                        x="0.25"
                        y="0.25"
                        width="0.25"
                        height="0.25"
                        fill="#ffffff"
                      ></rect>
                      <rect
                        x="0"
                        y="0.25"
                        width="0.25"
                        height="0.25"
                        fill="#ccceda"
                      ></rect>
                    </pattern>
                  </defs>
                  <circle
                    class="base"
                    r="1"
                    cx="0"
                    cy="0"
                    fill="url(#chequer)"
                  ></circle>
                  <circle
                    id="segment-1"
                    r="1"
                    cx="0"
                    cy="0"
                    fill={titleColor}
                  ></circle>
                  <circle
                    class="outline"
                    r="0.95"
                    cx="0"
                    cy="0"
                    fill="none"
                    stroke="#ccceda"
                    stroke-width="0.05"
                  ></circle>
                </svg>
                {titleColorShow ? (
                  <SketchPicker
                    color={titleColor}
                    onChangeComplete={handleChangeComplete}
                  />
                ) : null}
              </div>
            </li>
            <li>
              <div
                className={
                  activeLeftAlign
                    ? "capitalise borders active "
                    : "capitalise borders "
                }
                onClick={() => setAlignment("left")}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <g fill="currentColor">
                    <path d="M23 4H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"></path>
                    <path d="M13 10H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                    <path d="M23 16H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"></path>
                    <path d="M13 22H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                  </g>
                </svg>
              </div>
            </li>
            <li>
              <div
                className={
                  activeCenterAlign
                    ? "capitalise borders active"
                    : "capitalise borders "
                }
                onClick={() => setAlignment("center")}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <g fill="currentColor">
                    <path d="M23 4H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"></path>
                    <path d="M18 10H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                    <path d="M23 16H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z"></path>
                    <path d="M18 22H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
                  </g>
                </svg>
              </div>
            </li>
            <li>
              <div
                className={
                  activeRightAlign
                    ? "capitalise borders active"
                    : "capitalise borders "
                }
                onClick={() => setAlignment("right")}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <g fill="currentColor">
                    <path d="M23 4H1a1 1 0 1 1 0-2h22a1 1 0 1 1 0 2z"></path>
                    <path d="M23 10H11a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2z"></path>
                    <path d="M23 16H1a1 1 0 1 1 0-2h22a1 1 0 1 1 0 2z"></path>
                    <path d="M23 22H11a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2z"></path>
                  </g>
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-editor animation-section">
          <h4>Text Animations</h4>
          <select>
            <option value="">No Animations</option>
            <option value="1.2">Slide in with Reveal</option>
            <option value="1.4">Swipe from left</option>
            <option value="1.6">Scale Down</option>
            <option value="2">Simple fade</option>
          </select>
        </div>
      </div>
    </section>
  );
};
export default TextEditor;
