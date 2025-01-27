import React, { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import { DialogProvider } from "./DeleteDialogProvider";
import ViewImageProvider from "./ViewImageProvider";
import DeleteImageModal from "@/components/DeleteImageModal";
import ViewImageModal from "@/components/ViewImageModal";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <ViewImageProvider>
        <DialogProvider>
          {children}
          <DeleteImageModal />
          <ViewImageModal />
        </DialogProvider>
      </ViewImageProvider>
    </QueryProvider>
  );
};

export default Providers;
