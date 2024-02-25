import { useId, useState } from "react";
import { getSuggestionList } from "../../utils/api";
import "./index.scss";

let timer;

const SearchInput = (props) => {
  const { label, value, errorMessage, handleChange, handleTagSelection } =
    props;
  const searchInputId = useId();
  const [suggestionList, setSuggestionList] = useState([]);
  const [isShowSuggestion, setShowSuggestion] = useState(false);

  const getSuggestionListAPI = async (val) => {
    if (val) {
      const data = await getSuggestionList(val);
      setSuggestionList(data);
      setShowSuggestion(true);
    } else {
      setSuggestionList([]);
      setShowSuggestion(false);
    }
  };

  const onChange = (event) => {
    const val = event.target.value;
    handleChange(val);

    // debouncing concept used
    clearTimeout(timer);
    timer = setTimeout(() => {
      getSuggestionListAPI(val);
    }, 300);
  };

  const onFocus = () => {
    setShowSuggestion(true);
  };

  const onBlur = () => {
    setShowSuggestion(false);
  };

  const onTagSelection = (tag) => () => {
    handleTagSelection(tag.webTitle);
  };

  return (
    <>
      <label className="search-input_label" htmlFor={searchInputId}>
        {label}:
      </label>
      <div className="search-input_container">
        <input
          id={searchInputId}
          type="text"
          autoComplete="off"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {isShowSuggestion && (
          <ul className="search-input_suggestion-list">
            {suggestionList.map((item) => {
              return (
                <li key={item.id} onMouseDown={onTagSelection(item)}>
                  {item.webTitle}
                </li>
              );
            })}
          </ul>
        )}
        {errorMessage !== "" && (
          <p className="search-input_error-message">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default SearchInput;
