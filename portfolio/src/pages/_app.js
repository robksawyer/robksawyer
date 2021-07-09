// Import Font Styles
import "@/styles/fonts.scss";

// Import Tailwind Styles
import "@/styles/tailwind.css";
import "@/styles/tailwind-custom.css";

// Import global stuff
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
