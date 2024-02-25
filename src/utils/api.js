import axios from "axios";
import UrlConstants from "../constants/url-constants";

export const getStoriesList = async (searchTerm, page, pageSize, showtags) => {
  try {
    let url = `${UrlConstants.SEARCH}?api-key=test&show-fields=thumbnail,headline&q=${searchTerm}&show-tags=${showtags}&page=${page}&page-size=${pageSize}`;
    const response = await axios.get(url);
    return response.data.response;
  } catch (er) {
    console.log(er);
    return {
      currentPage: 1,
      pageSize: 10,
      pages: 1,
      results: [],
      total: 0,
      status: "error",
    };
  }
};
