"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DialogContextModalDetail {
  open: boolean;
  id: string;
}

interface DialogContextType {
  openDialog: (id: string) => void;
  closeDialog: () => void;
  modal: DialogContextModalDetail;
}

const DeleteDialogContext = createContext<DialogContextType | undefined>(
  undefined
);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [deleteDialog, setDeleteDialog] = useState<DialogContextModalDetail>({
    open: false,
    id: "",
  });

  const openDialog = (id: string) => {
    setDeleteDialog({ ...deleteDialog, id: id, open: true });
  };
  const closeDialog = () => {
    setDeleteDialog({ ...deleteDialog, id: "", open: false });
  };

  return (
    <DeleteDialogContext.Provider
      value={{ openDialog, closeDialog, modal: deleteDialog }}
    >
      {children}
    </DeleteDialogContext.Provider>
  );
};

export const useDeleteDialogContext = () => {
  const context = useContext(DeleteDialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
};
