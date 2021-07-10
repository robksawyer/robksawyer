/**
 * @file Footer.js
 */
import * as React from "react";
import PropTypes from "prop-types";

import styles from "./Footer.module.css";

import IconLinkedIn from "@/components/IconLinkedIn";

const Footer = (props) => {
  const {
    tagName: Tag = "footer",
    className = "relative p-24 bottom-0 w-full flex-none bg-black h-auto font-rig-solid-bold-inline-solo text-white",
    variant = "default",
    children = "",
  } = props;

  return (
    <Tag
      className={`${styles.footer} ${
        styles[`footer__${variant}`]
      } ${className}`}
    >
      <div className="pb-24">
        <h1 className="text-6xl font-rig-solid-medium-halftone hover:font-rig-solid-medium-lines cursor-pointer text-white">
          That&apos;s all folks!
        </h1>
      </div>
      <div className="grid grid-cols-4 space-x-12 font-sans">
        <div>
          <p className="uppercase tracking-widest pb-8 text-xl">New Business</p>
          <p className="pb-2">Email Me</p>
          <p>robksawyer@gmail.com</p>
        </div>
        <div>
          <p className="uppercase tracking-widest pb-8 text-xl">Resume</p>
          {/* <p className="pb-2">Download</p> */}
          <a
            className="pb-2"
            href="https://www.linkedin.com/in/robksawyer/"
            target="_blank"
            rel="noreferer nofollow noreferrer"
          >
            <IconLinkedIn />
          </a>
        </div>
        <div>
          <p className="uppercase tracking-widest pb-8 text-xl">Technology</p>
          <p className="pb-2">
            React, Node, NextJS, ThreeJS, React Three Fiber, Framer Motion,
            GSAP, D3, Open Frameworks, Processing
          </p>
        </div>
        <div>
          <p className="uppercase tracking-widest pb-8 text-xl">Deployment</p>
          <p className="pb-2">Google Cloud Platform</p>
        </div>
      </div>
      <div className="grid grid-cols-2 space-x-12 font-sans py-24">
        <div>
          <p className="uppercase tracking-widest pb-8 text-xl">
            Current Location
          </p>
          <p className="pb-2">Tulum, MX</p>
          {/* <p className="pb-2">Los Angeles, CA 90066</p>
            <a
              href=""
              target="_blank"
              className="text-sm"
              rel="noopener noreferrer"
            >
              View on map
            </a> */}
        </div>
        <div>
          <p className="uppercase tracking-widest pb-8 text-xl"></p>
          <p className="pb-2"></p>
        </div>
      </div>
      <div className="flex space-x-12 w-full text-xl font-sans">
        <div className="space-x-12">
          <span>&copy; 2021 Rob Sawyer</span> — All Rights Reserved
          {/* <a href="" title="Privacy">
              Privacy
            </a>
            <a href="" title="Terms">
              Terms
            </a> */}
        </div>

        {/* <div className="absolute text-white right-24">
            <Image
              src="/vercel.svg"
              alt="FOMOLOL Logo"
              width={72}
              height={16}
            />
          </div> */}
      </div>
    </Tag>
  );
};

Footer.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default"]),
  children: PropTypes.node,
};

export default Footer;
