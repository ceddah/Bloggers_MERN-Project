import React from "react";

const GalleryInput = ({ handleChange }) => {
  return (
    <div className="w-full flex flex-col">
      {[...new Array(5).fill(null)].map((_, i) => (
        <div key={i} className="flex items-center justify-between">
          <input
            className="my-2"
            key={i}
            type="file"
            onChange={(e) => handleChange(e, i)}
            accept=".jpg, .jpeg, .png, .bmp"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryInput;
