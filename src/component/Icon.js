import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1080 1080"
    className={`w-full h-auto ${className}`}
    xmlSpace="preserve"
    {...rest}
  >
    <path
      opacity={1}
      stroke="none"
      d=" M435.711029,851.343750  C435.131989,843.243652 434.596588,835.610168 433.986694,826.914368  C432.493713,829.028137 431.489288,830.380554 430.556854,831.781006  C419.587524,848.255737 408.475403,864.638794 397.773254,881.285400  C395.029053,885.553894 392.421173,887.455566 387.611603,885.045959  C386.332062,884.404907 384.844635,884.178833 383.095886,883.655457  C399.383545,859.034241 415.512543,834.652893 431.721191,810.151123  C435.804504,811.225220 439.638611,812.233765 443.840698,813.339111  C445.413513,836.373840 446.985199,859.392456 448.655670,883.857422  C456.281830,872.558838 463.117828,862.450867 469.932312,852.328491  C475.226471,844.464417 480.618134,836.661255 485.703430,828.663818  C487.408722,825.981995 489.168335,825.082825 492.098419,826.193665  C493.645935,826.780396 495.251984,827.359924 496.878540,827.558655  C499.715607,827.905396 500.704254,829.318787 500.859894,832.145935  C502.151123,855.597229 503.574646,879.041260 504.958069,902.487488  C505.221039,906.944580 505.483643,911.401611 505.786957,916.546570  C501.753998,915.544250 498.136932,914.645325 493.990204,913.614685  C492.586884,890.254089 491.181030,866.851135 489.707611,842.323242  C488.373291,844.114929 487.451385,845.259155 486.629089,846.471008  C475.233276,863.266235 463.627167,879.925964 452.615753,896.969788  C449.691467,901.496155 446.903412,900.882202 442.762939,900.016296  C438.509613,899.126770 438.341248,896.528625 438.166687,893.212708  C437.439911,879.407837 436.571259,865.610413 435.711029,851.343750  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M326.527283,335.465698  C313.377441,320.237152 300.467957,305.268829 287.296509,289.996765  C290.119110,287.585815 292.618805,285.450653 295.506927,282.983734  C297.525452,285.151672 299.479675,287.250519 301.529572,289.452179  C304.993439,270.273804 319.324280,257.682648 335.643585,259.257599  C352.971680,260.929901 366.725739,276.577911 366.225952,294.051208  C365.744934,310.868835 351.951111,323.096680 331.844727,324.060425  C338.822174,332.199188 345.581757,340.083862 352.584412,348.252045  C349.704529,350.733978 347.091644,352.985809 343.959961,355.684723  C338.165344,348.957642 332.466461,342.341766 326.527283,335.465698  M330.970093,314.916443  C331.799713,314.948364 332.630066,315.020416 333.458893,315.006134  C344.499146,314.815582 354.172913,305.995911 354.959656,295.416748  C355.805664,284.040710 346.859497,272.752533 335.415985,270.756714  C325.059082,268.950409 314.428223,275.907715 311.465820,286.430786  C308.115173,298.332977 316.160675,310.564087 330.970093,314.916443  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M403.982544,252.285706  C403.080719,252.258865 401.988281,251.942368 401.250610,252.319611  C393.433228,256.317352 385.672241,260.425415 377.359528,264.784241  C381.154846,271.010193 386.831421,273.920471 393.476532,273.825378  C405.544556,273.652740 414.215057,267.765594 419.002899,255.828857  C421.949677,256.954407 424.810364,258.047028 427.616821,259.118988  C425.845276,272.721863 406.035126,287.938538 386.142090,283.669769  C369.345001,280.065338 358.183502,261.347107 361.977173,244.007339  C364.859772,230.831787 377.660858,220.457352 391.949860,219.716492  C405.476654,219.015167 417.800568,227.580307 422.419495,241.124435  C416.145172,244.602234 409.818115,248.109283 403.707245,252.005203  C403.923462,252.394089 403.956696,252.318115 403.982544,252.285706  M388.937286,249.401672  C395.675934,245.914124 402.414551,242.426559 409.184998,238.922562  C402.810303,229.313232 391.963501,226.995071 382.011139,232.507812  C374.241974,236.811218 368.722015,247.766281 373.790070,257.209229  C378.628998,254.750793 383.474884,252.288864 388.937286,249.401672  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M711.195618,268.796356  C710.196228,269.547028 708.961487,270.127045 708.161499,271.074249  C700.396362,280.267822 690.472839,284.047546 678.783325,281.783081  C667.146912,279.528961 658.349854,273.281952 654.279907,260.140167  C651.826416,265.302948 649.767822,269.662018 647.684875,274.009460  C645.821838,277.897827 643.717346,281.687531 642.120850,285.681213  C640.811096,288.957581 639.136475,289.631439 636.162964,287.807770  C634.217285,286.614471 632.115845,285.675079 629.879272,284.515747  C642.418030,258.362305 654.804565,232.526459 667.295410,206.472992  C670.644348,208.095367 673.615112,209.534515 676.994507,211.171631  C675.923218,213.622131 674.902832,215.956268 673.717590,218.687073  C673.653625,219.271851 673.754456,219.459961 673.855286,219.648071  C673.868774,219.410889 673.882202,219.173706 673.895691,218.936508  C682.400635,216.983063 690.661743,216.655518 698.782471,220.942429  C715.328247,229.676895 721.105530,247.408340 712.545227,264.067230  C711.789062,265.538849 711.061279,267.025055 710.721924,268.677917  C711.123474,268.851318 711.161987,268.796082 711.195618,268.796356  M669.551270,267.042694  C679.510986,273.583740 689.132568,273.228271 696.899597,266.032318  C704.954041,258.570099 707.375366,246.506317 702.239929,237.925903  C697.442444,229.910034 690.063354,226.157227 680.848083,227.155991  C671.196228,228.202026 665.459900,234.522247 662.505615,243.294449  C659.453491,252.357346 661.528809,260.307983 669.551270,267.042694  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M577.708740,210.709259  C586.857239,197.790649 595.734436,185.119858 604.823059,172.602600  C605.716248,171.372375 608.162415,170.177200 609.445984,170.537903  C612.662964,171.441864 617.605713,169.799759 618.734070,174.408661  C625.686096,202.804626 632.371155,231.265976 639.136536,259.707611  C639.211487,260.022552 639.174561,260.364136 639.220093,261.345520  C635.752747,260.765472 632.346924,260.426025 629.101318,259.515472  C628.098145,259.234009 627.155884,257.496582 626.829468,256.256348  C625.435730,250.959717 624.506409,245.531342 622.908386,240.303665  C622.415771,238.692276 620.525940,236.691940 618.957092,236.355194  C606.764954,233.738358 594.480347,231.556534 582.259644,229.066605  C579.365845,228.477005 577.665344,229.320923 576.145691,231.746964  C573.674927,235.691452 570.718323,239.337936 568.342712,243.333710  C566.446106,246.523849 564.338806,247.795059 560.671509,246.376740  C558.599548,245.575424 556.284363,245.403152 553.487061,244.825302  C561.743591,233.193283 569.620056,222.096680 577.708740,210.709259  M602.534119,194.416245  C596.552795,202.728195 590.571472,211.040131 584.241272,219.836823  C596.536255,222.194138 608.032959,224.398376 620.007324,226.694214  C616.636963,211.932755 613.435608,197.911346 610.234192,183.889954  C609.808105,183.784470 609.382019,183.679001 608.955872,183.573532  C606.964539,187.424271 604.973206,191.274994 603.063599,195.082138  C603.063599,195.082138 603.106873,195.000168 602.534119,194.416245  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M743.475464,761.513062  C742.860779,743.131836 755.069519,729.648010 774.391479,727.573486  C766.321655,720.132080 758.577881,712.991394 750.773987,705.795227  C753.386292,702.935364 755.735657,700.363464 758.489075,697.349121  C779.738892,716.843018 800.871582,736.229492 822.337952,755.921997  C819.877869,758.632568 817.575317,761.169556 814.996826,764.010681  C812.752686,762.018616 810.703125,760.199219 807.983032,757.784607  C808.400513,765.380493 806.968567,771.959656 802.800537,777.752991  C794.711304,788.996521 781.986938,794.241455 769.787292,791.286621  C755.998962,787.946899 745.678040,776.405029 743.475464,761.513062  M798.096191,765.255798  C801.599060,752.249939 792.558716,738.887878 778.804749,736.742065  C767.342773,734.953857 755.874268,743.914185 754.857117,755.452332  C753.880127,766.535095 761.509338,777.164429 772.519775,780.060608  C783.190247,782.867371 792.561401,777.701294 798.096191,765.255798  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M725.836182,784.894287  C712.478821,782.327637 701.501831,789.707642 695.621582,805.257751  C692.884705,804.554321 690.079956,803.833496 686.524597,802.919739  C687.386353,800.063904 687.925110,797.366455 688.991089,794.896484  C695.039917,780.880859 713.097900,771.326660 728.009216,774.124756  C741.712463,776.696106 753.633972,791.129272 754.046387,805.647522  C754.429749,819.143494 746.531494,830.794250 733.371704,836.144653  C721.258118,841.069702 708.595032,838.103882 699.393494,828.048279  C697.397339,825.866882 695.746887,823.369141 693.527710,820.484985  C707.945679,810.695007 722.010193,801.145020 737.187073,790.839661  C733.046082,788.615540 729.642395,786.787476 725.836182,784.894287  M737.384094,800.730103  C727.422974,807.474121 717.461853,814.218079 707.397705,821.031921  C715.393982,829.109680 724.850891,830.579773 733.223816,825.497498  C741.869141,820.249695 745.542236,810.999756 742.681519,801.980530  C741.793213,799.179932 740.654480,797.798645 737.384094,800.730103  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M301.907410,791.632568  C301.697235,790.755127 301.299652,789.695679 300.752136,789.611450  C285.705811,787.298157 275.041168,777.436584 272.648041,762.776855  C270.487366,749.540955 276.354095,739.484375 286.616852,731.791687  C296.805359,724.154785 307.937561,722.649963 319.328857,728.806641  C330.521515,734.856018 337.141266,744.037598 336.652344,757.354675  C336.640442,757.678894 336.721680,758.006531 336.822327,758.874817  C339.222809,756.747375 341.391693,754.825134 343.750824,752.734314  C346.180542,755.336670 348.434540,757.750793 351.133423,760.641418  C329.670685,781.055542 308.300354,801.381775 286.952209,821.686890  C278.527069,813.905701 278.530823,813.909668 286.110168,806.708130  C291.296478,801.780396 296.470581,796.839844 301.907410,791.632568  M285.227539,768.000549  C285.899017,769.144287 286.463684,770.368958 287.259399,771.418518  C292.322601,778.096802 298.915802,782.128723 307.429169,780.747253  C317.034210,779.188538 323.686005,773.264404 326.875397,764.120056  C329.803284,755.725525 327.154083,748.422913 320.870819,742.399719  C313.644012,735.472046 303.315399,734.622986 294.771515,740.134827  C285.008240,746.433167 281.373749,756.504333 285.227539,768.000549  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M252.894897,696.948730  C238.133255,702.963257 223.737259,708.857056 208.078766,715.267639  C202.572144,699.476929 195.738098,684.222107 192.070267,668.240723  C187.682877,649.124146 198.452301,632.275696 217.050568,624.544678  C235.362625,616.932678 254.160126,622.009460 265.908264,637.830078  C267.685577,640.223389 269.472992,642.718933 270.648651,645.430420  C275.983612,657.735291 281.101044,670.134521 286.508484,683.003601  C275.212799,687.700317 264.236664,692.264099 252.894897,696.948730  M213.586136,640.027649  C206.103500,645.990540 202.054413,653.749756 202.078781,663.320007  C202.113037,676.774658 209.821136,687.705322 213.796448,700.053955  C233.765305,691.832520 253.001831,683.912598 272.315704,675.960815  C269.063751,668.149780 266.308838,660.851685 263.034332,653.794678  C253.091537,632.366760 233.961212,626.897400 213.586136,640.027649  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M888.364136,495.267334  C890.199280,494.423584 891.685852,493.738220 894.217285,492.571136  C894.217285,496.372009 894.495300,499.613678 894.075867,502.762482  C893.915588,503.966156 892.360046,505.375732 891.099243,505.980713  C877.792542,512.366028 864.415955,518.605652 851.061340,524.891235  C849.143433,525.793945 847.239746,526.726929 844.364624,528.110046  C854.823730,532.297180 864.377930,536.136292 873.943726,539.946167  C879.336304,542.093933 884.636902,544.572266 890.184631,546.201294  C895.072144,547.636414 896.901245,550.305664 896.063721,555.158447  C895.871033,556.275146 895.924927,557.434387 895.820251,559.437744  C891.772766,557.885803 888.131226,556.523315 884.514893,555.096985  C868.317749,548.709229 852.160767,542.217285 835.906616,535.978577  C832.768799,534.774231 831.404724,533.215149 831.769409,529.839844  C832.145386,526.360229 830.222778,522.828003 835.456177,520.473450  C853.150635,512.512329 870.521179,503.831451 888.364136,495.267334  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M251.738220,515.582764  C251.869659,519.533325 250.035477,521.040222 246.740997,522.138977  C227.846603,528.440369 209.040741,535.007141 190.199371,541.467896  C189.130386,541.834412 188.012955,542.059692 186.922623,542.349487  C184.698029,534.228882 186.148087,531.358154 193.332153,528.952087  C208.387009,523.910034 223.427353,518.824646 239.111832,513.542114  C225.162521,505.953400 211.762894,498.665619 198.365173,491.374390  C189.815521,486.721588 189.816772,486.719269 191.627563,476.225739  C202.258484,481.916351 212.766983,487.515808 223.250488,493.161682  C231.001953,497.336182 238.565826,501.899719 246.514832,505.650909  C250.992920,507.764160 253.000504,510.328522 251.738220,515.582764  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M747.167725,260.756104  C747.540955,261.022095 747.977173,261.577820 748.278442,261.512421  C762.221008,258.485046 777.547058,270.505951 781.723389,283.605255  C786.039368,297.142822 780.046631,312.051147 766.622620,321.104370  C766.070801,321.476471 765.491882,321.808319 764.878540,322.490967  C764.831482,322.823059 764.956177,322.871979 764.935303,322.806427  C755.275635,326.603973 745.643616,327.604126 736.132629,322.418732  C726.155884,316.979492 719.743042,309.032013 718.910522,296.266510  C711.753418,304.818665 705.114502,312.751678 698.080444,321.156799  C695.187195,318.725006 692.351624,316.341675 689.414917,313.873352  C690.164368,312.874573 690.625122,312.200928 691.144958,311.576447  C708.908936,290.237427 726.678589,268.903015 744.705505,247.258057  C747.545654,249.595856 750.198303,251.779343 753.116455,254.181351  C751.245178,256.420135 749.577332,258.415497 747.717163,260.815948  C747.628906,261.343811 747.732971,261.466614 747.837036,261.589417  C747.900818,261.377319 747.964539,261.165161 748.028320,260.953003  C747.741394,260.887360 747.454590,260.821747 747.167725,260.756104  M734.514465,309.005066  C744.999329,317.468658 756.849304,316.669250 765.459900,306.917450  C774.100403,297.131805 773.824707,284.482147 764.790222,276.194092  C756.063354,268.188110 743.655029,268.404449 735.180847,276.710327  C725.286682,286.408020 724.826172,298.635834 734.514465,309.005066  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M877.050659,622.172607  C867.097778,627.701904 858.685730,628.616150 849.325073,625.227295  C852.281555,608.648315 855.245850,592.025757 858.278076,575.022034  C849.953857,574.758057 843.988464,578.067993 839.797729,584.462341  C833.990967,593.322510 834.129395,603.145447 840.030212,613.912170  C837.340210,615.434998 834.648132,616.959106 832.018921,618.447510  C821.242676,604.804565 824.652344,580.896912 838.579041,570.097229  C852.128174,559.590576 874.117249,562.605042 884.695618,576.419434  C895.391602,590.387390 892.126038,610.682556 877.050659,622.172607  M862.064697,600.581726  C861.179626,605.743958 860.294617,610.906189 859.402771,616.108459  C871.098938,616.944275 880.227295,609.054749 881.013000,597.912048  C881.774841,587.107666 875.364441,578.058533 866.325806,577.263184  C864.950500,584.748474 863.574158,592.239746 862.064697,600.581726  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M822.330872,340.303253  C831.791138,335.052460 840.933960,329.988312 850.605835,324.631134  C851.932556,326.968018 853.250977,329.175507 854.460876,331.441010  C860.161743,342.115753 866.950928,352.371490 871.307739,363.571838  C885.075623,398.965912 854.657043,422.826874 829.424744,420.919434  C816.335205,419.929932 805.881592,413.357971 798.858765,402.575653  C791.103943,390.669373 784.483887,378.023987 777.185547,365.381714  C792.448853,356.906372 807.231140,348.698120 822.330872,340.303253  M818.615967,356.282654  C809.919861,361.000519 801.223694,365.718414 792.221375,370.602386  C795.874512,377.163452 799.215759,383.250488 802.648254,389.285553  C803.958862,391.589783 805.258667,393.961060 806.957153,395.968689  C809.197510,398.616791 811.602173,401.223785 814.327271,403.346283  C823.913635,410.812805 836.680359,411.165283 847.954651,404.548370  C859.427551,397.814911 864.958252,386.876251 863.310730,374.569946  C861.568115,361.552734 852.948181,351.819214 847.509949,339.994904  C837.730957,345.475830 828.346008,350.730194 818.986572,356.029663  C818.828552,356.119171 818.980042,356.755463 819.069031,357.089142  C819.069031,357.089142 819.116760,357.007324 818.615967,356.282654  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M333.873657,804.066833  C335.984406,798.698914 338.035034,793.746521 340.384705,788.072021  C348.622528,793.431030 355.663055,798.026794 362.719849,802.597412  C369.811554,807.190674 376.919525,811.758789 384.310059,816.524658  C387.951141,809.057129 387.271698,802.151062 382.868011,795.995483  C376.375671,786.920288 367.416382,782.735718 355.691589,784.716675  C355.318268,781.662354 354.960907,778.738770 354.505341,775.011353  C359.429230,775.011353 364.240814,774.285522 368.751221,775.143372  C384.133301,778.068848 396.395416,791.689514 397.507263,806.323425  C398.538757,819.900330 388.873413,834.823120 375.600098,839.487000  C363.894440,843.599976 353.210297,841.006714 343.973480,833.030579  C335.288239,825.530762 331.392609,816.064514 333.873657,804.066833  M371.068329,818.931885  C371.068329,818.931885 371.180786,818.855164 371.352661,818.148926  C362.951752,812.628967 354.550842,807.109070 346.156616,801.593506  C340.925598,809.519958 343.464447,822.238098 353.435089,828.104492  C362.752869,833.586792 373.583160,831.770691 379.719818,823.075623  C376.822815,821.637329 373.984741,820.228271 371.068329,818.931885  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M246.053070,601.015625  C234.296249,613.285522 215.793350,615.477783 202.579117,606.413147  C190.182983,597.909729 185.507050,580.252258 191.986771,566.413818  C197.075150,555.546753 209.355621,548.253235 221.301056,549.236389  C223.497833,565.901794 225.704865,582.644775 227.937164,599.579651  C236.309540,597.370850 241.124176,592.092163 242.884369,584.476440  C245.318680,573.943970 242.409058,564.812927 233.524857,557.191772  C235.559860,554.951355 237.601593,552.703552 239.582047,550.523254  C252.417053,555.957520 260.481873,584.313782 246.053070,601.015625  M205.509033,564.943420  C198.469589,572.377930 196.840698,581.688110 201.111755,590.077209  C204.612198,596.952820 211.968079,601.067993 219.648544,600.186218  C217.947647,587.105896 216.247635,574.032288 214.414246,559.933044  C211.159912,561.696106 208.611725,563.076538 205.509033,564.943420  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M219.769379,415.488190  C228.473221,412.379059 236.699753,412.699738 245.410553,416.376587  C240.487961,432.755585 235.609329,448.988312 230.602554,465.647461  C239.078247,466.725250 245.649078,464.130524 250.379120,457.891785  C257.022980,449.128754 258.085388,439.500336 253.317413,429.414886  C262.334381,424.209290 263.930176,424.772644 265.691956,434.585297  C269.015259,453.095306 256.847931,478.606903 231.307037,476.978638  C216.368958,476.026337 203.498001,465.217743 200.899292,451.242615  C198.134140,436.372437 205.711197,421.835815 219.769379,415.488190  M211.826447,436.537659  C207.732941,448.449463 211.553558,457.889893 222.751465,462.965424  C226.623734,450.150970 230.484039,437.376129 234.358612,424.554016  C224.114838,422.719269 217.037598,426.386963 211.826447,436.537659  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M855.693726,482.341675  C852.195618,468.642639 848.828064,455.337006 845.363770,441.649231  C837.574768,444.604401 833.747803,450.215729 832.336731,457.649109  C830.484558,467.406433 834.856201,476.844360 844.650818,484.446808  C842.983032,486.803772 841.302917,489.178192 839.239990,492.093628  C837.727295,491.163940 836.108459,490.433075 834.807434,489.328033  C823.757629,479.943787 820.227905,467.592590 822.473389,453.867157  C824.616638,440.767212 833.387573,433.028534 845.954041,429.487427  C864.335144,424.307892 881.885071,435.167145 885.794250,454.087311  C889.529663,472.166656 877.378601,488.693512 857.986450,491.178619  C857.280273,488.420898 856.552307,485.577972 855.693726,482.341675  M860.098755,466.400391  C861.165833,470.464050 862.232971,474.527710 863.312866,478.640259  C874.601318,474.060486 879.199158,463.974213 875.404053,452.905853  C872.085510,443.227509 862.515259,437.476898 853.521851,440.148010  C855.673035,448.610260 857.829956,457.094788 860.098755,466.400391  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M895.455261,669.404907  C868.082642,659.761414 841.056396,650.288513 813.596558,640.663635  C814.915405,636.954590 816.113770,633.584473 817.449158,629.828918  C845.433777,639.674500 873.192261,649.440491 901.176025,659.285828  C900.037476,662.560059 899.096130,665.543274 897.915527,668.428528  C897.680481,669.002930 896.529968,669.202820 895.455261,669.404907  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M681.833008,828.239990  C686.154419,838.313293 690.347656,848.027405 694.669678,858.039673  C691.256348,859.550537 688.274902,860.870300 684.791870,862.412048  C683.412720,859.449280 682.119080,856.670227 680.497620,853.186951  C678.428955,863.070312 672.201172,868.389587 663.684937,872.100647  C662.240051,868.789062 660.878540,865.668518 659.581726,862.696289  C659.841492,862.306702 659.901733,862.113525 660.030945,862.037415  C675.220337,853.097046 677.287292,846.453369 670.084656,830.098633  C666.351013,821.620789 662.737244,813.090088 659.003113,804.429688  C662.584351,802.892151 665.921875,801.459229 669.466858,799.937195  C673.604309,809.384338 677.654663,818.632568 681.833008,828.239990  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M855.964905,699.403687  C852.524109,706.018066 850.148376,713.116150 845.540710,718.185547  C834.669189,730.146423 817.583069,730.764160 803.924377,720.902405  C790.881775,711.485596 786.967896,694.711670 794.588684,680.052063  C800.541382,668.601135 809.770569,661.384949 822.959900,661.262329  C835.857788,661.142273 845.911682,667.169067 852.646240,678.241882  C856.528748,684.625305 857.121704,691.694031 855.964905,699.403687  M821.028992,715.982117  C825.239197,715.452881 829.772522,715.738586 833.592407,714.224548  C841.550476,711.070312 846.493225,701.955872 845.994080,693.288269  C845.494385,684.611389 839.236450,677.146729 829.746887,673.907959  C818.896057,670.204590 808.514771,674.495239 803.454224,684.774841  C798.732666,694.365845 801.633301,705.406616 810.787354,711.460938  C813.642212,713.349121 817.028564,714.433960 821.028992,715.982117  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M275.801208,402.146820  C278.192291,403.361267 280.234192,404.426636 282.680054,405.702789  C281.044769,409.139709 279.495880,412.395020 277.806915,415.944824  C251.088287,402.839020 224.648529,389.870026 198.008804,376.802917  C199.797836,373.269745 201.421082,370.063965 203.173721,366.602661  C227.520508,378.525421 251.486282,390.261566 275.801208,402.146820  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M246.087769,350.248352  C248.610901,332.329529 261.636139,318.852692 276.864777,318.002625  C291.104095,317.207733 304.798584,325.907440 310.004761,339.055450  C315.066803,351.839600 310.665039,367.423004 299.142487,376.772736  C289.071777,384.944397 277.772034,386.839569 265.998627,381.367554  C253.184250,375.411743 245.867416,365.354980 246.087769,350.248352  M277.014832,372.924774  C277.846344,372.969788 278.677582,373.046661 279.509460,373.054993  C291.503235,373.175049 301.212921,363.754486 301.373413,351.851715  C301.531464,340.127014 290.345978,329.136200 278.104645,328.988037  C266.822937,328.851471 256.939514,338.819244 256.829773,350.444519  C256.731262,360.881317 263.879028,369.142883 277.014832,372.924774  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M447.404297,263.436035  C445.912201,262.940002 444.047363,262.501251 443.760773,261.574432  C437.837799,242.420319 432.094269,223.210739 426.196930,203.619247  C429.738586,202.535599 433.008942,201.534958 436.587189,200.440125  C437.557404,203.461868 438.461731,206.278290 439.254730,208.748093  C441.796234,205.597351 444.065887,201.844452 447.227997,199.132004  C450.287140,196.507904 454.264984,194.954865 458.406281,192.610413  C459.680695,196.736526 460.719055,200.098343 461.758423,203.463425  C459.598511,204.317749 457.555206,205.001495 455.619202,205.913116  C447.105225,209.922150 443.122253,217.944168 445.593811,227.423538  C448.478943,238.489258 451.923279,249.409164 455.276520,260.912079  C452.714661,261.715057 450.240570,262.490509 447.404297,263.436035  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M516.373779,233.286530  C521.067444,233.235367 524.116028,234.987396 525.047852,239.447266  C525.828491,243.183563 525.006836,246.438995 521.540833,248.493500  C518.332275,250.395370 515.161011,249.944794 512.282227,247.688248  C507.657288,244.062912 508.424530,235.004990 516.373779,233.286530  z"
    />
    <path
      opacity={1}
      stroke="none"
      d=" M604.383118,837.636658  C600.287537,839.827454 596.132935,840.147827 593.931152,836.353760  C592.447693,833.797485 592.221985,829.741333 593.049438,826.812683  C594.037598,823.315674 597.712830,822.378906 601.309021,823.070618  C607.768311,824.313049 609.490601,831.703491 604.383118,837.636658  z"
    />
  </svg>
);
