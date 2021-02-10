import React from "react";
import windowImage from "./../../../../assets/images/templates/window-of-four-rounded-squares.svg";
import style from "./../../../../assets/images/templates/color-picker.svg";
import edit from "./../../../../assets/images/templates/edit.svg";
import exportIcon from "./../../../../assets/images/templates/export.svg";
const SidebarLeft = () => {
  return (
    <section className="template-new-wrapper-sidebar">
      <nav>
        <ul>
          <li>
            <button>
              <img src={windowImage} alt="add" />
              <span>Add</span>
            </button>
          </li>
          <li>
            <button>
              <img src={style} alt="Style" />
              <span>Style</span>
            </button>
          </li>
          <li className="active">
            <button>
              <img src={edit} alt="Edit" />
              <span>Edit</span>
            </button>
          </li>
          <li>
            <button>
              <img src={exportIcon} alt="Export" />
              <span>Export</span>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default SidebarLeft;
