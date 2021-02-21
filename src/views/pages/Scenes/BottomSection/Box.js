import React from "react";
import { Link } from "react-router-dom";
import trash from "./../../../../assets/images/templates/trash.svg";
import { useRouteMatch } from "react-router-dom";
const Box = ({
  boxWidth,
  boxBg,
  boxId,
  sceneId,
  boxLink,
  handleDrag,
  handleDrop,
  confirmDelete
}) => {

  return (
    <div
      id={boxId}
      className="thumb-section"
      draggable={true}
      id={boxId}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      style={{
        "background-image": "url(" + boxBg + ") ",
        width: boxWidth + "px",
        minWidth: boxWidth + "px",
      }}
    >
      {boxId != sceneId ? (
        <img
          src={trash}
          alt="Delete Section"
           onClick={() => confirmDelete(boxId)}
        />
      ) : null}
      <Link to={boxLink} />
    </div>
  );
};

export default Box;
