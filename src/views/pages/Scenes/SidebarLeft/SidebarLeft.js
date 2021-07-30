import React from "react";
import windowImage from "./../../../../assets/images/templates/window-of-four-rounded-squares.svg";
import style from "./../../../../assets/images/templates/color-picker.svg";
import edit from "./../../../../assets/images/templates/edit.svg";
import exportIcon from "./../../../../assets/images/templates/export.svg";
import { useRouteMatch, Link } from "react-router-dom";
const SidebarLeft = (props) => {
  const [addMusic, setAddMusic] = React.useState(props.addMusic);
  const match = useRouteMatch("/template/:templateId/:id/:sceneId");
  const {
    params: { templateId },
  } = match;
  
  function addScene() {
    props.showAddScene("true", props.scene);
    props.showMusic("false");
    setAddMusic(false);
  }
  function hideScene() {
    props.showAddScene(false, "");
    setAddMusic(false);
    props.showMusic(false);
  }
  function showMusic() {
    setAddMusic(true);
    props.showAddScene(false, "");
    props.showMusic(true);
  }
  return (
    <section className="template-new-wrapper-sidebar">
      <nav>
        <ul>
          <li className={props.addScene || props.addMedia ? "active" : ""}>
            <button onClick={addScene}>
              <img src={windowImage} alt="add" />
              <span>Add</span>
            </button>
          </li>
          <li className={addMusic ? "active" : ""}>
            <button onClick={showMusic}>
              {/* <img src={style} alt="Style" /> */}
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 10.17V3H6v10a3 3 0 1 1-2-2.83V0h12v13a3 3 0 1 1-2-2.83z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
              <span>Music</span>
            </button>
          </li>
          <li
            className={
              props.addScene || props.addMedia || props.addMusic ? "" : "active"
            }
          >
            <button onClick={hideScene}>
              <img src={edit} alt="Edit" />
              <span>Edit</span>
            </button>
          </li>
          <li>
            <button>
              <Link to={`/export-video/${templateId}/download/`}>
                <img src={exportIcon} alt="Export" />
                <span>Export</span>
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default SidebarLeft;
