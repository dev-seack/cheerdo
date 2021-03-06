import React from "react";

const Facebookicon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={props.fill}
      width={props.size}
      height={props.size}
      {...props}
    >
      <path
        class="cls-1"
        d="M18.9,0H1.1A1.1,1.1,0,0,0,0,1.1V18.9A1.1,1.1,0,0,0,1.1,20h9.58V12.26H8.07v-3h2.61V7a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7h-1.6c-1.25,0-1.49.6-1.49,1.47V9.24h3l-.39,3H13.8V20h5.1A1.1,1.1,0,0,0,20,18.9V1.1A1.1,1.1,0,0,0,18.9,0"
      />
    </svg>
  );
};

export { Facebookicon };
