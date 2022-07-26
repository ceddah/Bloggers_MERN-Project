import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ handleClose }) => {
  return ReactDOM.createPortal(
    <div className="absolute top-0 h-screen w-full opacity-95 z-50 bg-white">
      <button type="button" onClick={handleClose} className="absolute text-2xl top-5 right-5">
        <AiOutlineClose />
      </button>
      <div>MODAL MODAL MODAL</div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
