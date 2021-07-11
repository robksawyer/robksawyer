/**
 * @file next.config.js
 */
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(
  [
    "three",
    "three-stdlib",
    "three-mesh-bvh",
    "gsap",
    "@react-three/fiber",
    "@react-three/postprocessing",
    "@react-three/drei",
  ],
  { debug: false }
);

// @see https://codesandbox.io/s/bold-monad-dqfr3?file=/next.config.js:48-200
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// const withOffline = require('next-offline')

const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  distDir: "build",
  // Removes the [BABEL] Note: The code generator has deoptimised the styling of
  compact: true,
  webpack: (config, options) => {
    // Unshift polyfills in main entrypoint.
    // @see https://stackoverflow.com/questions/53304140/transpiling-nextjs-for-ie-10-11-weakset-undefined
    // const originalEntry = config.entry
    // config.entry = async () => {
    //   const entries = await originalEntry()
    //   if (entries['main.js']) {
    //     entries['main.js'].unshift('./polyfills.js') // <- polyfill here
    //   }
    //   return entries
    // }
    const { dev, isServer } = options;
    if (dev) {
      config.module.rules.push(
        {
          test: /\.(spec,test,stories)\.(js|jsx)$/,
          loader: "ignore-loader",
        },
        {
          test: /\.{js,jsx}$/,
          enforce: "pre",
          include: [path.resolve("components"), path.resolve("pages")],
          exclude: ["/node_modules/", "/_next/", "/build/", "/.next/", "/out/"],
          options: {
            // Compile, but with a warning
            emitWarning: true,
          },
          loader: "eslint-loader",
        }
      );
    }

    // audio support
    // config.module.rules.push({
    //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
    //   exclude: /node_modules/,
    //   use: [
    //     {
    //       loader: "url-loader",
    //       options: {
    //         limit: config.inlineImageLimit,
    //         fallback: require.resolve("file-loader"),
    //         publicPath: `${config.assetPrefix}/_next/static/images/`,
    //         outputPath: `${isServer ? "../" : ""}static/images/`,
    //         name: "[name]-[hash].[ext]",
    //         esModule: config.esModule || false,
    //       },
    //     },
    //   ],
    // });

    // Load GLSL Shaders
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    // Load GLTF/GLB files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      exclude: /node_modules/,
      use: ["file-loader"],
    });

    return config;
  },
  reactStrictMode: true,
};

module.exports = withPlugins(
  [
    // [
    //   withOffline,
    //   {
    //     workboxOpts: {
    //       swDest: process.env.NEXT_EXPORT
    //         ? 'service-worker.js'
    //         : 'static/service-worker.js',
    //       runtimeCaching: [
    //         {
    //           urlPattern: /^https?.*/,
    //           handler: 'NetworkFirst',
    //           options: {
    //             cacheName: 'offlineCache',
    //             expiration: {
    //               maxEntries: 200,
    //             },
    //           },
    //         },
    //       ],
    //     },
    //     async rewrites() {
    //       return [
    //         {
    //           source: '/service-worker.js',
    //           destination: '/_next/static/service-worker.js',
    //         },
    //       ]
    //     },
    //   },
    // ],
    // withBundleAnalyzer,
    withTM,
  ],
  nextConfig
);
