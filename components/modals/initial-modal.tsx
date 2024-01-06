"use-client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const IntialModal = () => {
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="p-6">
          <DialogTitle>Customize your server</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default IntialModal;
