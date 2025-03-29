import React, { useState } from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { filterExtensions } from "../../redux/apiCalls";
import { setCurrentStatus } from "../../redux/extensionSlice";

const Filters = () => {
  const { theme, currentStatus } = useSelector((state) => state.extension);
  const dispatch = useDispatch();

  const filtersData = [
    {
      id: 0,
      status: "all",
    },
    {
      id: 1,
      status: "active",
    },
    {
      id: 2,
      status: "inactive",
    },
  ];

  const handleSetFilter = (filter) => {
    dispatch(setCurrentStatus(filter));
    filterExtensions(dispatch, filter);
  };

  return (
    <div className="container filters">
      <h1>Extensions List</h1>
      <div className="filter-list">
        {filtersData?.map((item, id) => (
          <div
            onClick={() => handleSetFilter(item)}
            className={`${
              theme === "light"
                ? item.id === currentStatus.id
                  ? "filter highlight"
                  : "filter"
                : item.id === currentStatus.id
                ? "dark-filter dark-highlight"
                : "dark-filter"
            } }`}
            key={id}
          >
            <p style={{ textTransform: "capitalize" }}>{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
