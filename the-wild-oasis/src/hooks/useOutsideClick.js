import { useRef, useEffect } from "react";

export function useOutsideClick(handler, listencapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside");
          handler();
        }
      }
      document.addEventListener("click", handleClick, listencapturing);

      return () =>
        document.removeEventListener("click", handleClick, listencapturing);
    },
    [handler, listencapturing]
  );
  return;
}
