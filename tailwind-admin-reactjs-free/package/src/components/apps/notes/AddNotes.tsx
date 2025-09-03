"use client"

import * as React from "react"
import { useContext, useState } from "react"
import { TbCheck } from "react-icons/tb"
import { Button } from "src/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "src/components/ui/dialog"
import { Textarea } from "src/components/ui/textarea"
import { NotesContext } from "src/context/NotesContext"

interface Props {
  colors: any[]
}

const AddNotes = ({ colors }: Props) => {
  const { addNote }: any = useContext(NotesContext)

  const [openNoteModal, setOpenNoteModal] = useState(false)
  const [scolor, setScolor] = React.useState<string>("primary")
  const [title, setTitle] = React.useState("")

  const setColor = (e: string) => {
    setScolor(e)
  }

  return (
    <>
      <Button
        onClick={() => setOpenNoteModal(true)}
        className="rounded-md"
      >
        Add Note
      </Button>

      <Dialog open={openNoteModal} onOpenChange={setOpenNoteModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add New Note</DialogTitle>
            <DialogDescription>
              Write your note and select a color.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <Textarea
              rows={5}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="description"
              className="w-full"
              placeholder="Type your note here..."
            />

            <div>
              <h6 className="text-base pb-2">Change Note Color</h6>
              <div className="flex gap-2 items-center">
                {colors?.map((color) => (
                  <div
                    key={color.disp}
                    className={`h-7 w-7 flex justify-center items-center rounded-full cursor-pointer bg-${color.disp}`}
                    onClick={() => setColor(color.disp)}
                  >
                    {scolor === color.disp ? (
                      <TbCheck size={18} className="text-white" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2 sm:justify-end">
            <Button
              onClick={(e) => {
                e.preventDefault()
                addNote({ title, color: scolor })
                setOpenNoteModal(false)
                setTitle("")
              }}
              disabled={title === ""}
              className="rounded-md"
            >
              Save
            </Button>
            <Button
              variant="destructive"
              onClick={() => setOpenNoteModal(false)}
              className="rounded-md"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddNotes
