"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddHouse } from "../FormAddHouse";

export function ButtonAddHouse() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Add new house
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormAddHouse />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
