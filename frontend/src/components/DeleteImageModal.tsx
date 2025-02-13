"use client";

import { ApiInstance } from "@/apis/request";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useDeleteDialogContext } from "@/provider/DeleteDialogProvider";
import { useViewImageDialogContext } from "@/provider/ViewImageProvider";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

const deleteImage = async (id: string) => {
  const data = await ApiInstance.delete(`/image/deleteImage/${id}`);
  console.log(data);
};

const DeleteImageModal = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { modal, closeDialog } = useDeleteDialogContext();
  const { onClose } = useViewImageDialogContext();

  const mutation = useMutation({
    mutationFn: deleteImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["image"] });
      toast({
        title: "Image deleted successfully",
      });
      closeDialog();
      onClose();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem while deleting image.",
      });
    },
  });

  const handleDelete = useCallback(
    (id: string) => mutation.mutate(id),
    [mutation]
  );

  return (
    <Dialog open={modal.open} onOpenChange={closeDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Image</DialogTitle>
          <DialogDescription>
            Are you sure to delete this image, this process is undo!!!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={() => handleDelete(modal.id)}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteImageModal;
