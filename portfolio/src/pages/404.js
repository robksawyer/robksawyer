/**
 * @file 404.js
 * @returns
 */
export default function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black  bg-fixed bg-cover bg-bottom bg-error">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
            <div className="relative ">
              <h1 className="relative text-9xl tracking-tighter-less text-shadow font-rig-solid-bold-halftone">
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
              {/* <span className="absolute top-0 -ml-12 text-gray-300 font-semibold">
                Oops!
              </span> */}
            </div>
            {/* <h5 className="text-gray-300 font-semibold -mr-10 -mt-3">
              Page not found
            </h5> */}
            <p className="text-gray-100 mt-2 mb-6 font-rig-solid-bold-inline-solo">
              Cool! You found a missing link.
            </p>
            <a
              className="uppercase bg-accent3 px-12 py-3 text-xl shadow-sm font-rig-solid-bold-inline-solo tracking-wider text-gray-50 rounded-full hover:shadow-lg"
              href="/"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
