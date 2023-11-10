import React from "react";
import "./Filters.scss";

const Filters: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <div className="wrap-filter">
      <input
        type="checkbox"
        id={`collapsible-${title}`}
        className="toggle"
        defaultChecked={true}
      />
      <label htmlFor={`collapsible-${title}`} className="title-toggle">
        {title}
      </label>
      <div className="collapsible-cnt">
        <div className="content-inner">{children}</div>
      </div>
    </div>
  );
};

export default Filters;
