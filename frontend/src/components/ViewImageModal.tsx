"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteDialogContext } from "@/provider/DeleteDialogProvider";
import { useViewImageDialogContext } from "@/provider/ViewImageProvider";
import { Download, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ViewImageModal = () => {
  const router = useRouter();

  const { modal, onClose } = useViewImageDialogContext();
  const { openDialog } = useDeleteDialogContext();

  return (
    <Dialog open={modal.open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{modal.imageName}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center">
          <Image
            src={modal.imageSrc}
            alt={modal.imageName}
            height={1000}
            width={1000}
            className="md:h-96 md:w-96 h-72 w-72 object-contain"
          />
        </div>
        <DialogFooter>
          <Button
            onClick={() => router.push(modal.imageSrc)}
            variant="secondary"
          >
            <Download />
          </Button>
          <Button
            onClick={() => openDialog(modal.imageId)}
            variant="destructive"
          >
            <Trash />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewImageModal;
