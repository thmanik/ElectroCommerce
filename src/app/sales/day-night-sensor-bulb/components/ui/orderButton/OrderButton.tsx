"use client";
import Lottie from "lottie-react";
import React, { ReactNode, useEffect, useState } from "react";

type OrderButtonProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

const OrderButton = ({ children, style }: OrderButtonProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div
        style={{
          position: "relative",
          width: isSmallScreen ? "100%" : "450px",
          height: "85px",
          overflow: "hidden",
          ...style,
        }}
      >
        <Lottie
          animationData={require("../../../../../../../public/images/animations/button-Animation.json")}
          loop
          autoplay
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="#order-form"
            style={{ cursor: "pointer", width: "100%" }}
            aria-label="Order Button"
          >
            <div className="text-[#FFFF00]">
              <div className="!text-xl !md:text-2xl font-bold flex items-center justify-center">
                {children}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderButton;
