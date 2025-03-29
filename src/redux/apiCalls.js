import axios from "axios";
import {
  fetchExtensionFailed,
  fetchExtensionSuccess,
  fetchFilteredExtensions,
  fethExtensionStart,
} from "./extensionSlice";

export const fetchAllExtensions = async (dispatch) => {
  dispatch(fethExtensionStart());

  try {
    const response = await axios("/api/fetch-extensions");

    dispatch(fetchExtensionSuccess(response.data.extensions));
  } catch (e) {
    dispatch(fetchExtensionFailed());
    console.log(e);
  }
};
export const filterExtensions = async (dispatch, data) => {
  try {
    const response = await axios.post("/api/fetch-filtered-extensions", {
      status: data.status,
    });

    if (response.data.success === true) {
      dispatch(fetchFilteredExtensions(response.data.filteredExtensions));
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateExtensionSlice = async (dispatch, data, currentStatus) => {
  try {
    const response = await axios.put(`/api/update-extension/${data._id}`, {
      data,
    });

    if (response.data.success === true) {
      filterExtensions(dispatch, currentStatus);
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteExtensions = async (dispatch, id, currentStatus) => {
  try {
    const response = await axios.delete(`/api/delete-extension/${id}`);

    if (response.data.success === true) {
      filterExtensions(dispatch, currentStatus);
    }
  } catch (e) {
    console.log(e);
  }
};
