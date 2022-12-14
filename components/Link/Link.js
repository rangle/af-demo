import React from "react";
import "./Link.scss";

export const Link = ({ label, variant = "secondary", url }) => {
  return (
    <a href={url} data-variant={variant} className="af-link">
      {label}
    </a>
  );
};
