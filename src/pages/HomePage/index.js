import SearchForm from "../../components/SearchForm";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage_container">
        <h1>News Letter</h1>
        <SearchForm />
      </div>
    </div>
  );
};

export default HomePage;
