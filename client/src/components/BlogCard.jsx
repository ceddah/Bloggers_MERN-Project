import React from "react";
import { Link } from "react-router-dom";
import CategoryTag from "./CategoryTag";
import Avatar from "./Avatar";
import { categoryColors } from "../constants/categoryColors";

const BlogCard = ({ post }) => {
  const { thumbnail, title, content, category, createdAt, author, _id } = post;
  const color = categoryColors.find((color) => color.name === category).color;

  return (
    <div className="w-full h-full pb-5 bg-white border-2 overflow-hidden border-gray-200 shadow-lg">
      <img
        className="w-full md:h-2/4 h-2/4 object-cover bg-center bg-cover"
        src={thumbnail}
        alt="thumbnail"
      />
      <div className="flex flex-col items-start px-10 pt-3">
        <CategoryTag color={color} category={category} />
        <Link to={`/blog-read/${_id}`}>
          <h1 className="font-bold text-xl text-left mt-2 truncate whitespace-pre-line">{title}</h1>
        </Link>
        <p className="text-left mt-5 whitespace-pre-line">
          {content.substring(0, 60) + "... "}
          <Link className="text-blue-400" to={`/blog-read/${_id}`}>
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
    </div>
  );
};

export default BlogCard;
