import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Button";
import SearchInput from "../SearchInput";
import PathContants from "../../constants/path-constants";
import { ErrorMessages } from "../../constants/app-constants";
import "./index.scss";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const redirectToStoryPage = (val) => {
    const path = PathContants.STORY_PAGE.replace(":searchQuery", val);
    navigate(path);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (searchValue === "") {
      setErrorMessage(ErrorMessages.INVALID_SEARCH_TEXT);
    } else {
      redirectToStoryPage(searchValue);
    }
  };

  const handleInputChange = (val) => {
    setSearchValue(val);

    if (val === "") {
      setErrorMessage(ErrorMessages.INVALID_SEARCH_TEXT);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <form className="search-form">
      <SearchInput
        label="Enter search text"
        value={searchValue}
        errorMessage={errorMessage}
        handleChange={handleInputChange}
        handleTagSelection={redirectToStoryPage}
      />
      <Button
        cssClassName="search-form_button"
        type="submit"
        handleClick={handleClick}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
