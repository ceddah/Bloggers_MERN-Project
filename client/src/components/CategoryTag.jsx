import React from "react";

const CategoryTag = ({ category, color, handleCategoryChange = () => {} }) => {
  const renderShortName = (category) => {
    if (category === "Art and Design") {
      return "Design";
    } else if (category === "Health and fitness") {
      return "Fitness";
    } else {
      return category;
    }
  };
  return (
    <p
      className="text-white rounded-xl px-5 py-0.5 my-2 font-semibold cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => handleCategoryChange(category)}
    >
      {renderShortName(category)}
    </p>
  );
};

export default CategoryTag;
