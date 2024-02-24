import { useSelector } from "react-redux";

const StoryList = (props) => {
  const storyList = useSelector((state) => state.story.storyList);

  return (
    <ul>
      {storyList.map((item) => (
        <li key={item.id}>{item.storyName}</li>
      ))}
    </ul>
  );
};

export default StoryList;
