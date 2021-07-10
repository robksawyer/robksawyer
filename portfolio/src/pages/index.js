import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { easeCubicInOut } from "d3-ease";

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

      <div className="flex-col flex justify-center align-center items-center h-screen">
        <motion.main
          initial={{
            height: "0px",
          }}
          animate={{
            height: "auto",
          }}
          transition={{ delay: 0.25, ease, duration: 0.75 }}
          className="text-accent0 flex justify-center flex-col w-auto text-center bg-accent1 border-8 border-accent2"
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
            FOMOLOL
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
      </div>

      <footer className="relative p-24 bottom-0 w-full flex-none bg-black h-auto font-rig-solid-bold-inline-solo text-white">
        <div className="pb-24">
          <h1 className="text-6xl font-rig-solid-medium-halftone hover:font-rig-solid-medium-lines cursor-pointer text-pink-400">
            FOMOLOL Global
          </h1>
        </div>
        <div className="grid grid-cols-4 space-x-12 font-sans">
          <div>
            <p className="uppercase tracking-widest pb-8 text-xl">
              New Business
            </p>
            <p className="pb-2">Daene Lee</p>
            <a href="mailto:daene@fomolol.com">daene@fomolol.com</a>
          </div>
          <div>
            <p className="uppercase tracking-widest pb-8 text-xl">
              Public Relations
            </p>
            <p className="pb-2">Not Available</p>
            {/* <a src="mailto:daene@fomolol.com">daene@fomolol.com</a> */}
          </div>
          <div>
            <p className="uppercase tracking-widest pb-8 text-xl">
              Media Sales
            </p>
            <p className="pb-2">Not Available</p>
            {/* <a src="mailto:daene@fomolol.com">daene@fomolol.com</a> */}
          </div>
          <div>
            <p className="uppercase tracking-widest pb-8 text-xl">Production</p>
            <p className="pb-2">Not Available</p>
            {/* <a src="mailto:daene@fomolol.com">daene@fomolol.com</a> */}
          </div>
        </div>
        <div className="grid grid-cols-4 space-x-12 font-sans py-24">
          <div>
            <p className="uppercase tracking-widest pb-8 text-xl">Careers</p>
            <p className="pb-2">Full house ATM</p>
            {/* <a src="mailto:daene@fomolol.com">daene@fomolol.com</a> */}
          </div>
          <div>
            <p className="uppercase tracking-widest pb-8 text-xl">
              Our Address
            </p>
            <p className="pb-2">123 Tech St.</p>
            <p className="pb-2">Los Angeles, CA 90066</p>
            <a
              href=""
              target="_blank"
              className="text-sm"
              rel="noopener noreferrer"
            >
              View on map
            </a>
          </div>
        </div>
        <div className="flex space-x-12 w-full text-xl font-sans">
          <div className="space-x-12">
            <span>&copy;2021 FOMOLOL Global</span> — All Rights Reserved
            <a href="" title="Privacy">
              Privacy
            </a>
            <a href="" title="Terms">
              Terms
            </a>
          </div>

          <div className="absolute text-white right-24">
            <Image
              src="/vercel.svg"
              alt="FOMOLOL Logo"
              width={72}
              height={16}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
