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
  confirmDelete,
  deleteFalse,
  length
}) => {
  return (
    <div
      id={boxId}
      className="thumb-section"
      draggable={deleteFalse != false ? true : false}
      id={boxId}
      onDragOver={deleteFalse == false ? null : (ev) => ev.preventDefault()}
      onDragStart={deleteFalse == false ? null : handleDrag}
      onDrop={deleteFalse == false ? null : handleDrop}
      style={{
        "background-image": "url(" + boxBg + ") ",
        width: boxWidth + "px",
        minWidth: boxWidth + "px",
      }}
    >
      {boxId != sceneId  && length > 1 ? (
        deleteFalse != false ? (
          <img
            src={trash}
            alt="Delete Section"
            onClick={() => confirmDelete(boxId)}
          />
        ) : null
      ) : null}
      <Link to={boxLink} />
    </div>
  );
};

export default Box;
