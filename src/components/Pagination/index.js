import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={handlePageChange}
      maxWidth={400}
    />
  );
};

export default Pagination;
