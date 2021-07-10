import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { easeCubicInOut } from "d3-ease";

// import HamburgerMenu from "@/components/HamburgerMenu";
import Footer from "@/components/Footer";

export default function Home() {
  const ease = easeCubicInOut;
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
      <nav className="flex bg-white text-black">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1.25, ease, duration: 0.75 }}
          className="cursor-pointer font-normal text-6xl font-rig-solid-bold-outline hover:font-rig-solid-bold-halftone pl-24 py-12"
        >
          ROB SAWYER
        </motion.h1>
        {/* <HamburgerMenu /> */}
      </nav>
      <div className="flex-col flex justify-center align-center items-center h-screen">
        <motion.main
          initial={{
            height: "0px",
          }}
          animate={{
            height: "auto",
          }}
          transition={{ delay: 0.25, ease, duration: 0.75 }}
          className="text-white flex justify-center flex-col w-auto text-center"
        ></motion.main>
      </div>
      <div className="bg-white py-32">
        <div className="grid grid-cols-2">
          <p className="pl-24 text-4xl pr-24 font-rig-solid-medium-halftone hover:font-rig-solid-medium-outline">
            I&apos;m crazy, don&apos;t hire me. I repeat, hire me please!
          </p>
          <p className="pr-24 text-2xl">
            I feel very blessed everyday to be apart of such a thriving
            industry. It&apos;s always humbling and making me mental.
            <a href="!#" title="Read More" className="font-bold">
              Read More
            </a>
          </p>
        </div>
      </div>

      <Footer />
      <motion.div
        initial={{
          scaleX: 1,
          transformOrigin: "top right",
        }}
        animate={{
          scaleX: 0,
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{ ease, duration: 1 }}
        className="fixed h-screen w-screen bg-white top-0 left-0"
      ></motion.div>
    </div>
  );
}
