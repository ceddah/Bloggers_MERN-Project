import React, { useState, useEffect } from "react";
import { fetchPosts } from "../store/actions/postsActions";
import { useDebounce } from "use-debounce";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../util/Layout";
import SearchBar from "../components/SearchBar";
import BlogCard from "../components/BlogCard";
import CategoryTag from "../components/CategoryTag";
import Pagination from "../components/Pagination";
import { categoryColors } from "../constants/categoryColors";
// use debounce for search
// when fetching by search or category set currentPage to 0
// show active link style on navbar
// maybe use skeleton while loading posts
// darkmode D:
// falback for no results found if totalItems = 0

// Active class for categories and also when clicking twice on the same category, set it back to empty
//or [{ name: "All", color: "test"}, ...categoryColors].map() => and if category === all setCategory("")
// add "Home" to mobile nav or add it in normal nav too.
// protected routes

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search] = useDebounce(searchTerm, 1500);
  const dispatch = useDispatch();
  const {
    allPosts: { posts, totalItems },
  } = useSelector((state) => state.posts);

  const handleCategoryChange = (category) => {};

  useEffect(() => {
    if (search || category) {
      setCurrentPage(0);
    }
    dispatch(fetchPosts(search, category, currentPage));
  }, [search, category, dispatch, currentPage]);
  return (
    <div className="xl:w-3/4 md:w-3/5 w-[90%] mx-auto mt-10 pb-10">
      <h1 className="text-3xl font-semibold mb-8 text-center dark:text-[#F7F7F7]">
        Browse All Blogs
      </h1>
      <div className="flex gap-2 flex-wrap">
        {categoryColors.map(({ name, color }) => (
          <CategoryTag
            key={name}
            category={name}
            color={color}
            handleCategoryChange={handleCategoryChange}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-16">
        <SearchBar
          value={searchTerm}
          handleChange={setSearchTerm}
          placeholder="Search by keyword"
          btnText="Search"
          isSearching
        />
      </div>
      <div className="flex flex-col xl:flex-row xl:h-[700px] h-full mb-10 gap-5">
        {posts.map((post) => (
          <BlogCard key={post?._id} post={post} />
        ))}
      </div>
      {Math.ceil(totalItems / 3) > 1 && (
        <Pagination
          pageCount={Math.ceil(totalItems / 3)}
          handlePageChange={(e) => setCurrentPage(e.selected + 1)}
        />
      )}
    </div>
  );
};

export default Layout(Browse);
