import React from "react";

export const Logo = ({
  className = "w-6 h-6",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/logo.png"
    alt="Logo"
    className={className}
    {...props}
  />
);

export const BubblesLoading = ({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="0" cy="12" r="0" transform="translate(8 0)" fill="currentColor">
      <animate
        attributeName="r"
        begin="0"
        calcMode="spline"
        dur="1.2s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
        keyTimes="0;0.2;0.7;1"
        repeatCount="indefinite"
        values="0; 4; 0; 0"
      />
    </circle>
    <circle
      cx="0"
      cy="12"
      r="0"
      transform="translate(16 0)"
      fill="currentColor"
    >
      <animate
        attributeName="r"
        begin="0.3"
        calcMode="spline"
        dur="1.2s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
        keyTimes="0;0.2;0.7;1"
        repeatCount="indefinite"
        values="0; 4; 0; 0"
      />
    </circle>
    <circle
      cx="0"
      cy="12"
      r="0"
      transform="translate(24 0)"
      fill="currentColor"
    >
      <animate
        attributeName="r"
        begin="0.6"
        calcMode="spline"
        dur="1.2s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
        keyTimes="0;0.2;0.7;1"
        repeatCount="indefinite"
        values="0; 4; 0; 0"
      />
    </circle>
  </svg>
);
