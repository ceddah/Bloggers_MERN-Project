import React from "react";

const CategoryTag = ({
  category,
  color,
  handleCategoryChange = () => {},
  isOnBrowsePage,
  selectedCategory,
}) => {
  const renderShortName = (category) => {
    if (category === "Art and Design") {
      return "Design";
    } else if (category === "Health and fitness") {
      return "Fitness";
    } else {
      return category;
    }
  };
  const isActive = isOnBrowsePage && selectedCategory === category;
  return (
    <p
      className="text-white rounded-xl px-5 py-0.5 my-2 font-semibold cursor-pointer"
      style={{ backgroundColor: isActive ? "#ccc" : color }}
      // style={{ backgroundColor: color, filter: isActive ? "grayscale(100%)" : "none" }}
      // style={{ backgroundColor: color, opacity: isActive ? "30%" : "100%" }}
      onClick={() => handleCategoryChange(category)}
    >
      {renderShortName(category)}
    </p>
  );
};

export default CategoryTag;
