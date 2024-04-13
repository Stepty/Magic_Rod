// icon:fish-hook | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconFishHook(props) {
  return (
    <svg
        className="text-white hover:text-teal-500 transition-colors duration-200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.2em"
      width="1.2em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M16 9v6a5 5 0 01-10 0v-4l3 3" />
      <path d="M18 7 A2 2 0 0 1 16 9 A2 2 0 0 1 14 7 A2 2 0 0 1 18 7 z" />
      <path d="M16 5V3" />
    </svg>
  );
}

export default IconFishHook;
