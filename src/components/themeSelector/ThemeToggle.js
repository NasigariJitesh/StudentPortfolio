import React, { useEffect, useState } from "react";
import {
  blueTheme,
  brownTheme,
  purpleTheme,
  yelGreenTheme,
  redTheme,
  blackTheme,
  pinkTheme,
  violetTheme,
  greenTheme,
  orangeTheme,
} from "../../theme";
import chroma from "chroma-js";
import "./ThemeToggler.css";
import Select from "react-select";
export const ThemeMode = () => {
  const [curtheme, setTheme] = useState(
    localStorage.getItem("portfolioTheme")
      ? JSON.parse(localStorage.getItem("portfolioTheme"))
      : blackTheme
  );
  const toggleTheme = (event) => {
    setTheme(event.value);
    localStorage.setItem("portfolioTheme", JSON.stringify(event.value));
  };
  return [curtheme, toggleTheme];
};

export const ThemeToggle = ({ getTheme }) => {
  const [curtheme, toggleTheme] = ThemeMode();
  useEffect(() => {
    getTheme(curtheme);
  }, [getTheme, curtheme]);

  const dot = (color = "#ccc") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: "color",
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  const colourStyles = {
    valueContainer: (styles) => ({ ...styles, padding: 0 }),
    control: (styles) => ({ ...styles, backgroundColor: curtheme.body }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.5).css()
          : null,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : "black",
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };
  const themeoptions = [
    { value: blackTheme, label: "Black", color: "#000000" },
    { value: blueTheme, label: "Blue", color: "#0000B3" },
    { value: brownTheme, label: "Brown", color: "#A52A2A" },
    { value: purpleTheme, label: "Purple", color: "#800080" },
    { value: yelGreenTheme, label: "Yellow", color: "#FFFF00" },
    { value: redTheme, label: "Red", color: "#e60000" },
    { value: pinkTheme, label: "Pink", color: "#FF69B4" },
    { value: violetTheme, label: "Violet", color: "#6600cc" },
    { value: greenTheme, label: "Green", color: "#008000" },
    { value: orangeTheme, label: "Orange", color: "#FFA500" },
  ];

  return (
    <Select
      className="themetoggler"
      label="Single select"
      placeholder={curtheme.name}
      menuPlacement="top"
      menuPortalTarget={document.body}
      onChange={toggleTheme}
      options={themeoptions}
      styles={colourStyles}
    />
  );
};
