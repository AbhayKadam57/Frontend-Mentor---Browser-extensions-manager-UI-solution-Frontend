import React, { useEffect, useRef, useState } from "react";
import "./ExtensionList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExtensions,
  fetchAllExtensions,
  updateExtensionSlice,
} from "../../redux/apiCalls";

const data = [
  {
    id: 0,
    logo: "/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    id: 1,
    logo: "/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    id: 2,
    logo: "/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    id: 3,
    logo: "/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    id: 4,
    logo: "/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    id: 5,
    logo: "/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    id: 6,
    logo: "/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    id: 7,
    logo: "/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    id: 8,
    logo: "/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    id: 9,
    logo: "/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    id: 10,
    logo: "/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    id: 11,
    logo: "/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

const ExtensionList = () => {
  const { theme, extensionData, currentStatus } = useSelector(
    (state) => state.extension
  );
  const toggleRef = useRef([]);
  const dispatch = useDispatch();

  const handleToggleChange = (data) => {
    let upadtedData = {};

    if (data.isActive === true) {
      upadtedData = { ...data, isActive: false };
    } else {
      upadtedData = { ...data, isActive: true };
    }
    updateExtensionSlice(dispatch, upadtedData, currentStatus);
  };

  const handleExtensionRemove = (id) => {
    deleteExtensions(dispatch, id, currentStatus);
  };

  useEffect(() => {
    fetchAllExtensions(dispatch);
  }, []);

  return (
    <div className="container extensionList">
      {extensionData?.map((item, id) => {
        return (
          <div
            key={item._id}
            className={`${
              theme === "light"
                ? "extensionCard"
                : "extensionCard darkExtensionCard"
            }`}
            ref={(el) => toggleRef.current == el}
          >
            <div className="top">
              <img className="extension-logo" src={`${item.logo}`} alt="" />
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="bottom">
              <div
                className={`${
                  theme === "dark" ? "remove-btn-dark" : "remove-btn"
                }`}
                onClick={() => handleExtensionRemove(item._id)}
              >
                Remove
              </div>
              <div
                onClick={() => handleToggleChange(item)}
                className={`toggle-btn ${
                  item.isActive === true && "toggle-active"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExtensionList;
