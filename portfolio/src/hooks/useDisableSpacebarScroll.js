import React from "react";

export const useDisableSpacebarScroll = () => {
  React.useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if ((e.code == 32 || e.code === "Space") && e.target == document.body) {
        e.preventDefault();
      }
    });
  }, []);
};
