import PathContants from "../../../constants/path-constants";
import DefaultImage from "../../../assets/default_image.png";
import "./index.scss";

const StoryCard = ({ storyData }) => {
  const handleStoryOpen = (webUrl) => {
    window.open(webUrl, "_blank");
  };

  const handleTagClick = (searchQuery) => (event) => {
    event.stopPropagation();

    const path = PathContants.STORY_PAGE.replace(":searchQuery", searchQuery);
    window.location.href = path;
  };

  return (
    <div
      className="story-card"
      onClick={() => {
        handleStoryOpen(storyData.webUrl);
      }}
    >
      {storyData.fields.thumbnail ? (
        <img src={storyData.fields.thumbnail} alt="thumbnail" />
      ) : (
        <img src={DefaultImage} alt="defaultImage" />
      )}
      <div className="story-card_right">
        <p>{storyData.fields.headline}</p>
        {storyData.tags && storyData.tags.length > 0 && (
          <ul className="story-card_taglist">
            {storyData.tags.map((tagItem) => (
              <li key={tagItem.id} onClick={handleTagClick(tagItem.webTitle)}>
                {tagItem.webTitle}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
