import React from "react";

const TopSection = (props) => {
  const [templateTitle, setTemplateTitle] = React.useState(props.templateTitle);
  return (
    <section className="template-new-wrapper-top">
      <div className="d-flex">
        <div className="name-section">
          <input type="text"  value={templateTitle} />
        </div>
      <nav>
        <ul>
          <li>
            <span>Preview</span>
          </li>
        </ul>
      </nav>
      </div>
    </section>
  );
};
export default TopSection;
