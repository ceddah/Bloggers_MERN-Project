import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import { fetchAllBlogs } from "../../store/actions/adminActions";

const Blogs = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [search] = useDebounce(query, 1500);
  const {
    posts: { allPosts, totalItems },
    success,
    error,
  } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAllBlogs(currentPage, search));
  }, [dispatch, currentPage, search]);

  return (
    <div>
      <div className="flex justify-center mt-5 mb-16">
        <SearchBar
          value={query}
          handleChange={setQuery}
          placeholder="Search by full name"
          btnText="Search"
          isSearching
        />
      </div>
      {Math.ceil(totalItems / 5) > 1 && (
        <Pagination
          pageCount={Math.ceil(totalItems / 5)}
          handlePageChange={(e) => setCurrentPage(e.selected + 1)}
        />
      )}
    </div>
  );
};

export default Blogs;
