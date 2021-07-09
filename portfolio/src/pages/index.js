import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { easeCubicInOut } from "d3-ease";

export default function Home() {
  const ease = easeCubicInOut;
  return (
    <div className="bg-transparent flex justify-center align-center items-center h-screen">
      <Head>
        <title>Rob Sawyer</title>
        <meta
          name="description"
          content="Your future is not complete without me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        initial={{
          height: "0px",
        }}
        animate={{
          height: "auto",
        }}
        transition={{ delay: 0.25, ease, duration: 0.75 }}
        className="text-accent0 flex justify-center flex-col w-auto text-center h-auto bg-accent1 border-8 border-accent2"
        style={{
          padding: "2rem 6rem 2rem 6rem",
        }}
      >
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1.25, ease, duration: 0.75 }}
          className="cursor-pointer font-normal text-9xl font-rig-solid-bold-outline hover:font-rig-solid-bold-halftone"
        >
          Rob Sawyer
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 1.75, ease, duration: 0.75 }}
          className="text-5xl font-rig-solid-bold-inline-solo"
        >
          Fan s#*% coming soon.
        </motion.p>
      </motion.main>

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
