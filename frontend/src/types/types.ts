export interface ViewImageModalDetail {
  open: boolean;
  imageSrc: string;
  imageId: string;
  imageName: string;
}

export interface ViewImageModal {
  onOpen: (src: string, id: string, name: string) => void;
  onClose: () => void;
  modal: ViewImageModalDetail;
}

export interface DialogContextModalDetail {
  open: boolean;
  id: string;
}

export interface DialogContextType {
  openDialog: (id: string) => void;
  closeDialog: () => void;
  modal: DialogContextModalDetail;
}
