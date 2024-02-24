import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setStoryData } from "../../redux/storySlice";
import StoryList from "../../components/StoryList";

const StoryPage = () => {
  let { searchQuery } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStoryData([{ id: 1, storyName: searchQuery }]));
  }, []);

  return (
    <div>
      <div>Results for {searchQuery}</div>
      <StoryList />
    </div>
  );
};

export default StoryPage;
