import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import StoryList from "../../components/StoryList";
import Pagination from "../../components/Pagination";
import { setStoryData } from "../../redux/storySlice";
import { getStoriesList } from "../../utils/api";
import "./index.scss";

const StoryPage = () => {
  let { searchQuery } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getStoriesAPI = async (currentPage) => {
    const data = await getStoriesList(searchQuery, currentPage, 10, "keyword");

    if (data.status === "ok") {
      dispatch(setStoryData(data.results));
      setTotalPages(data.pages);
      setError(false);
    } else {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getStoriesAPI(currentPage);
  }, []);

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
    getStoriesAPI(pageNo);
  };

  const getContent = () => {
    if (loading) {
      return <Loader />;
    }

    if (isError) {
      return <ErrorMessage message="No stories found." />;
    }

    return <StoryList />;
  };

  return (
    <div className="storypage">
      <h2>Results for {searchQuery}:</h2>
      <div className="storypage_content">
        <div className="storypage_pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
        {getContent()}
      </div>
    </div>
  );
};

export default StoryPage;
