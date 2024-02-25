import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import StoryList from "../../components/StoryList";
import { setStoryData } from "../../redux/storySlice";
import { getStoriesList } from "../../utils/api";
import "./index.scss";
import Loader from "../../components/Loader";

const StoryPage = () => {
  let { searchQuery } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStoriesAPI = async () => {
      const data = await getStoriesList(searchQuery, 1, 10, "keyword");
      dispatch(setStoryData(data.results));
      setLoading(false);
    };

    getStoriesAPI();
  }, []);

  return (
    <div className="storypage">
      <h2>Results for {searchQuery}:</h2>
      {loading && <Loader />}
      {!loading && (
        <div className="storypage_content">
          <StoryList />
        </div>
      )}
    </div>
  );
};

export default StoryPage;
