// components/PriceRangeSlider.tsx
"use client";
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 34;
const MAX = 805;

const PriceRangeSlider: React.FC = () => {
  const [values, setValues] = useState([MIN, MAX]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <input
          type="text"
          value={`$${values[0]}`}
          readOnly
          style={{
            width: "60px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px",
            marginRight: "10px",
          }}
        />
        <input
          type="text"
          value={`$${values[1]}`}
          readOnly
          style={{
            width: "60px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px",
            marginLeft: "10px",
          }}
        />
      </div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "80%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "24px",
              width: "24px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              border: isDragged ? "3px solid #548BF4" : "3px solid #CCC",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default PriceRangeSlider;
