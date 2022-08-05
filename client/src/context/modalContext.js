import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportModal, setReportModal] = useState({
    isOpen: false,
    postId: null,
    title: "",
  });
  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, reportModal, setReportModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
