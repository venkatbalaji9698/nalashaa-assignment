import axios from "axios";
import UrlConstants from "../constants/url-constants";

export const getStoriesList = async (searchTerm, page, pageSize, showtags) => {
  try {
    const url = `${UrlConstants.SEARCH}?api-key=test&show-fields=thumbnail,headline&q=${searchTerm}&show-tags=${showtags}&page=${page}&page-size=${pageSize}`;
    const res = await axios.get(url);
    return res.data.response;
  } catch (er) {
    console.log(er);
    return {
      status: "error",
    };
  }
};

export const getSuggestionList = async (searchTerm) => {
  try {
    const url = `${UrlConstants.TAGS}?show-references=all&api-key=test&q=${searchTerm}`;
    const res = await axios.get(url);

    if (res?.data?.response?.results) {
      return res.data.response.results.filter((a) => a.type === "keyword");
    }

    return [];
  } catch (er) {
    console.log(er);
    return [];
  }
};
