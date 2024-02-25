import { useSelector } from "react-redux";
import StoryCard from "./StoryCard";

const StoryList = () => {
  const storyList = useSelector((state) => state.story.storyList);

  return (
    <div className="story-list">
      {storyList.map((item) => (
        <StoryCard key={item.id} storyData={item} />
      ))}
    </div>
  );
};

export default StoryList;
