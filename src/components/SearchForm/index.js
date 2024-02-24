import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { ErrorMessages } from "../../constants/app-constants";
import "./index.scss";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = (event) => {
    event.preventDefault();

    if (searchValue === "") {
      setErrorMessage(ErrorMessages.INVALID_SEARCH_TEXT);
    }
  };

  const handleInputChange = (event) => {
    const val = event.target.value;
    setSearchValue(val);

    if (val === "") {
      setErrorMessage(ErrorMessages.INVALID_SEARCH_TEXT);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <form className="search-form">
      <Input
        label="Enter search text"
        value={searchValue}
        errorMessage={errorMessage}
        handleChange={handleInputChange}
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
