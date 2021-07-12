import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { easeCubicInOut } from "d3-ease";
import gsap from "gsap";

// import HamburgerMenu from "@/components/HamburgerMenu";
import MainScene from "@/components/MainScene";
import Footer from "@/components/Footer";
import Toggle from "@/components/Toggle";

export default function Home() {
  const ease = easeCubicInOut;
  const duration = 0.75;

  React.useEffect(() => {
    var tl = gsap.timeline({ repeat: 0 });
    tl.to("#first", { ease, opacity: 1, duration });
    tl.to("#first", { ease, opacity: 0, duration });
    tl.to("#second", { ease, opacity: 1, duration });
    tl.to("#second", { ease, opacity: 0, duration });
    tl.to("#third", { ease, opacity: 1, duration });
    tl.to("#third", { ease, opacity: 0, duration });
  }, []);

  return (
    <div className="bg-transparent">
      <Head>
        <title>Rob Sawyer</title>
        <meta
          name="description"
          content="Your future is not complete without me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex items-center bg-white text-black w-screen">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 10, ease, duration: 0.75 }}
          className="cursor-pointer font-normal text-6xl font-rig-solid-bold-outline hover:font-rig-solid-bold-halftone pl-24 py-12"
        >
          ROB SAWYER
        </motion.h1>
        {/* <HamburgerMenu /> */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 10, ease, duration: 0.75 }}
          className="absolute right-24"
        >
          <Toggle />
        </motion.div>
      </nav>
      <div className="h-full">
        <MainScene />
      </div>
      {/* <motion.main
        initial={{
          height: "0px",
        }}
        animate={{
          height: "auto",
        }}
        transition={{ delay: 0.25, ease, duration: 0.75 }}
        className="absolute text-black font-rig-solid-bold-halftone text-9xl flex justify-center align-center items-center w-screen h-screen text-center inset-0"
      >
        <div id="first" className="absolute opacity-0">
          Hi!
        </div>
        <div id="second" className="absolute opacity-0">
          I'm Rob!
        </div>
        <div id="third" className="absolute opacity-0">
          Third
        </div>
        <div id="fourth" className="absolute opacity-0">
          Fourth
        </div>
      </motion.main> */}
      <div className="bg-accent3 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="pl-24 text-4xl pr-24 font-rig-solid-bold-reverse hover:font-rig-solid-bold-halftone">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="pl-24 lg:pl-0 pr-24 pt-12 lg:pt-0 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tempor suscipit tortor non dapibus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            <a href="!#" title="Read More" className="font-bold">
              Read More
            </a>
          </p>
        </div>
      </div>
      <div className="bg-white py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="pl-24 text-4xl pr-24 font-rig-solid-medium-halftone hover:font-rig-solid-medium-outline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="pl-24 lg:pl-0 pt-12 lg:pt-0 pr-24 text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tempor suscipit tortor non dapibus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            <a href="!#" title="Read More" className="font-bold">
              Read More
            </a>
          </p>
        </div>
      </div>

      <Footer />
      <motion.div
        initial={{
          scaleY: 1,
          transformOrigin: "top right",
        }}
        animate={{
          scaleY: 0,
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{ ease, duration: 1 }}
        className="fixed h-screen w-screen bg-accent3 top-0 left-0"
      ></motion.div>
    </div>
  );
}
