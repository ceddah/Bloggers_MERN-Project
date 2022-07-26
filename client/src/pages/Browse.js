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

// maybe use skeleton while loading posts -- add ALL_POSTS_LOADING action which will change loading variable in store

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search] = useDebounce(searchTerm, 1500);
  const dispatch = useDispatch();
  const {
    allPosts: { posts, totalItems },
  } = useSelector((state) => state.posts);

  const handleCategoryChange = (pressedCategory) => {
    setCurrentPage(1);
    if (pressedCategory === "All") {
      setCategory("");
    } else {
      if (pressedCategory === category) {
        setCategory("");
      } else {
        setCategory(pressedCategory);
      }
    }
  };
  console.log(totalItems);
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
        {[{ name: "All", color: "black" }, ...categoryColors].map(({ name, color }) => (
          <CategoryTag
            key={name}
            category={name}
            color={color}
            isOnBrowsePage
            selectedCategory={category}
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
        {posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post?._id} post={post} />)
        ) : (
          <h1 className="w-full md:mt-10 font-semibold text-center text-2xl">
            No results found matching your criteria.
          </h1>
        )}
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
