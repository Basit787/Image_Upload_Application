"use client";
import { ViewImageModal, ViewImageModalDetail } from "@/types/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

const ViewImageModalContext = createContext<ViewImageModal | undefined>(
  undefined
);

const ViewImageProvider = ({ children }: { children: ReactNode }) => {
  const [imageModalData, setImageModalData] = useState<ViewImageModalDetail>({
    open: false,
    imageSrc: "",
    imageId: "",
    imageName: "",
  });

  const onOpen = (src: string, id: string, name: string) => {
    setImageModalData({
      ...imageModalData,
      open: true,
      imageSrc: src,
      imageId: id,
      imageName: name,
    });
  };

  const onClose = () => {
    setImageModalData({
      ...imageModalData,
      open: false,
      imageSrc: "",
      imageId: "",
      imageName: "",
    });
  };
  return (
    <ViewImageModalContext.Provider
      value={{ modal: imageModalData, onOpen, onClose }}
    >
      {children}
    </ViewImageModalContext.Provider>
  );
};

export default ViewImageProvider;

export const useViewImageDialogContext = () => {
  const context = useContext(ViewImageModalContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
};
