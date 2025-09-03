"use client";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { TbCheck } from "react-icons/tb";

interface colorsType {
  lineColor: string;
  disp: string | any;
  id: any;
}

interface Note {
  id: any;
  title: string;
  content?: string;
  color: string;
}

interface NoteContentProps {
  note: any | any;
  updateNote: (id: any, title: string, color: string) => void;
}

const NoteContent: React.FC<NoteContentProps> = ({ note, updateNote }) => {
  const [initialTitle, setInitialTitle] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (note) {
      setInitialTitle(note.title);
      setUpdatedTitle(note.title);
    }
  }, [note]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedTitle(e.target.value);
    setIsEditing(true);
  };

  const handleColorChange = (color: string) => {
    if (!note) return;
    const titleToUse = isEditing ? updatedTitle : initialTitle;
    updateNote(note.id, titleToUse, color);
  };

  const handleBlur = () => {
    if (!note) return;
    setIsEditing(false);
    updateNote(note.id, updatedTitle, note.color);
  };

  const colorvariation: colorsType[] = [
    { id: 1, lineColor: "warning", disp: "warning" },
    { id: 2, lineColor: "primary", disp: "primary" },
    { id: 3, lineColor: "error", disp: "error" },
    { id: 4, lineColor: "success", disp: "success" },
    { id: 5, lineColor: "secondary", disp: "secondary" },
  ];

  if (!note) {
    return (
      <div className="text-center w-full py-6 text-2xl text-darklink">
        Select a Note
      </div>
    );
  }

  return (
    <div className="flex flex-grow p-6">
      <div className="w-full">
        <Textarea
          id="outlined-multiline-static"
          placeholder="Edit Note"
          rows={5}
          value={isEditing ? updatedTitle : initialTitle}
          onChange={handleTitleChange}
          className="w-full p-6 form-control-textarea"
          onBlur={handleBlur}
        />
        <br />
        <h6 className="text-base mb-3">Change Note Color</h6>
        <div className="flex gap-2 items-center">
          {colorvariation.map((color1) => (
            <div
              className={`h-7 w-7 flex justify-center items-center rounded-full cursor-pointer bg-${color1?.disp}`}
              key={color1.id}
              onClick={() => handleColorChange(color1.disp)}
            >
              {note.color === color1.disp ? (
                <TbCheck width="18" className="text-white" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteContent;
