"use client";
import * as React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Textarea } from "flowbite-react";
import { useState } from "react";
import { TbCheck } from "react-icons/tb";

interface Props {
  colors: any[];
  addNote: (note: { title: string; color: string }) => void;
}

const AddNotes = ({ colors, addNote }: Props) => {  
  const [openNoteModal, setOpenNoteModal] = useState(false);
  const [scolor, setScolor] = useState<string>("primary");
  const [title, setTitle] = useState("");

  const setColor = (e: string) => setScolor(e);

  return (
    <>
      <Button onClick={() => setOpenNoteModal(true)} color={"primary"} className="rounded-md">
        Add Note
      </Button>
      <Modal show={openNoteModal} size="lg" onClose={() => setOpenNoteModal(false)}>
        <ModalHeader>Add New Note</ModalHeader>
        <ModalBody className="pt-0">
          <div className="space-y-2">
            <Textarea
              rows={5}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="description"
              className="w-full form-control-textarea"
            />
            <h6 className="text-base pt-4">Change Note Color</h6>

            <div className="flex gap-2 items-center">
              {colors.map((color) => (
                <div
                  className={`h-7 w-7 flex justify-center items-center rounded-full cursor-pointer bg-${color.disp}`}
                  key={color.id}
                  onClick={() => setColor(color.disp)}
                >
                  {scolor === color.disp && (
                    <TbCheck width="18" className="text-white" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color={"primary"}
            disabled={title === ""}
            onClick={(e) => {
              e.preventDefault();
              addNote({ title, color: scolor });
              setOpenNoteModal(false);
              setTitle("");
            }}
            className="rounded-md"
          >
            Save
          </Button>
          <Button
            color={"lighterror"}
            className="rounded-md"
            onClick={() => setOpenNoteModal(false)}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};


export default AddNotes;
