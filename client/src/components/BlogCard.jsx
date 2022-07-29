import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryTag from "./CategoryTag";
import Avatar from "./Avatar";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { categoryColors } from "../constants/categoryColors";
import { BsFillBookmarkCheckFill, BsFillBookmarkDashFill } from "react-icons/bs";
import { bookmarkPost, clearBookmarkStatus } from "../store/actions/authActions";

const BlogCard = ({ post }) => {
  const dispatch = useDispatch();
  const { user, bookmarkSuccess, bookmarkError } = useSelector((state) => state.auth);
  const { thumbnail, title, content, category, createdAt, author, _id } = post;
  const color = categoryColors.find((color) => color.name === category).color;
  const didUserBookmarkThisPost = user && user.bookmarks.includes(post?._id);

  const handleBookmark = () => dispatch(bookmarkPost(post?._id));

  useEffect(() => {
    if (bookmarkSuccess) {
      // toast.success("Bookmark Success!", { theme: "colored" });
      dispatch(clearBookmarkStatus());
    }
    if (bookmarkError) {
      dispatch(clearBookmarkStatus());
    }
  }, [bookmarkSuccess, bookmarkError, dispatch]);

  if (!post) {
    return <div></div>;
  }

  return (
    <div className="w-full h-full pb-5 bg-white border-2 overflow-hidden border-gray-200 shadow-lg group relative">
      <img
        className="w-full md:h-2/4 h-2/4 object-cover bg-center bg-cover"
        src={thumbnail}
        alt="thumbnail"
      />
      <div className="flex flex-col items-start px-10 pt-3">
        <CategoryTag color={color} category={category} />
        <Link to={`/blog-read/${post?._id}`}>
          <h1 className="font-bold text-xl text-left mt-2 truncate whitespace-pre-line">{title}</h1>
        </Link>
        <p className="text-left mt-5 whitespace-pre-line">
          {content.substring(0, 60) + "... "}
          <Link className="text-blue-400" to={`/blog-read/${post?._id}`}>
            Read More
          </Link>
        </p>
        <Avatar
          img={author.image}
          name={author.fullName}
          createdAt={createdAt}
          userId={author._id}
        />
      </div>
      {user?._id && (
        <div className="group-hover:block hidden absolute top-5 right-5">
          <button
            className="text-3xl p-2 bg-gray-200 rounded-full"
            type="button"
            onClick={handleBookmark}
          >
            {didUserBookmarkThisPost ? (
              <BsFillBookmarkDashFill className="text-red-500" />
            ) : (
              <BsFillBookmarkCheckFill className="text-black-600" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
