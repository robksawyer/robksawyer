/**
 * @file Toggle.js
 */
import * as React from "react";
import PropTypes from "prop-types";

import styles from "./Toggle.module.css";

const Toggle = (props) => {
  const {
    tagName: Tag = "div",
    className = "",
    variant = "default",
    children = "",
    on = false,
  } = props;

  const toggle = () => {
    var x = document.getElementById("id1");
    var y = document.getElementById("id2");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  };

  return (
    <Tag
      className={`${styles.toggle} ${
        styles[`toggle__${variant}`]
      } ${className}`}
    >
      <div
        id="id1"
        className="cursor-pointer"
        onClick={toggle}
        style={
          on
            ? {
                display: "none",
              }
            : {}
        }
      >
        <div className="w-16 h-8 rounded-full flex items-center justify-items-start my-1 bg-gray-300">
          <div className="absolute w-6 h-6 ml-1 rounded-full bg-white"></div>
        </div>
      </div>

      <div
        id="id2"
        className="cursor-pointer"
        onClick={toggle}
        style={
          !on
            ? {
                display: "none",
              }
            : {}
        }
      >
        <div className="w-16 h-8 rounded-full flex items-center my-1 bg-black">
          <div className="w-6 h-6 ml-auto mr-1 rounded-full bg-white"></div>
        </div>
      </div>
    </Tag>
  );
};

Toggle.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default"]),
  children: PropTypes.node,
};

export default Toggle;
