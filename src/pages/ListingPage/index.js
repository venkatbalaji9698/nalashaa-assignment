import { useParams } from "react-router";

const ListingPage = () => {
  let { query } = useParams();

  return (
    <div>
      <div>Results for {query}</div>
    </div>
  );
};

export default ListingPage;
