"use client"

import { Icon } from "@iconify/react"
import { useState, useContext, useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "src/components/ui/alert"
import { Button } from "src/components/ui/button"
import { Input } from "src/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "src/components/ui/tooltip"
import { NotesContext } from "src/context/NotesContext"
import { notesType } from "src/types/apps/notes"

const Notelist = () => {
  const { notes, selectNote, deleteNote }: any = useContext(NotesContext)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [activeNoteId, setActiveNoteId] = useState<any | null>(null)

  useEffect(() => {
    if (notes.length > 0) {
      // Set the first note as active
      const firstNoteId = notes[0].id
      setActiveNoteId(firstNoteId)
    }
  }, [notes])

  const filterNotes = (notes: notesType[], nSearch: string) => {
    if (nSearch !== "")
      return notes.filter(
        (t: any) =>
          !t.deleted &&
          t.title
            .toLocaleLowerCase()
            .concat(" ")
            .includes(nSearch.toLocaleLowerCase())
      )

    return notes.filter((t) => !t.deleted)
  }

  const filteredNotes = filterNotes(notes, searchTerm)

  const handleNoteClick = (noteId: any) => {
    setActiveNoteId(noteId)
    selectNote(noteId)
  }

  return (
    <div>
      {/* Search input */}
      <Input
        id="search"
        value={searchTerm}
        placeholder="Search Notes"
        required
        className="form-control"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h6 className="text-base mt-6">All Notes</h6>

      <div className="flex flex-col gap-3 mt-4">
        {filteredNotes && filteredNotes.length ? (
          filteredNotes.map((note) => (
            <div key={note.id}>
              <div
                className={`cursor-pointer relative p-4 rounded-md bg-light${note.color} dark:bg-dark${note.color}
                ${activeNoteId === note.id ? "scale-100" : "scale-95"} transition-transform duration-200`}
                onClick={() => handleNoteClick(note.id)}
              >
                <h6 className={`text-base truncate text-${note.color}`}>
                  {note.title}
                </h6>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-ld">
                    {new Date(note.datef).toLocaleDateString()}
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          aria-label="delete"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-ld hover:text-dark dark:hover:text-white"
                          onClick={() => deleteNote(note.id)}
                        >
                          <Icon icon="tabler:trash" height={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Alert variant="destructive" className="flex items-center gap-2">
            <Icon
              icon="solar:info-circle-linear"
              className="h-5 w-5"
            />
            <AlertTitle>No Notes Found!</AlertTitle>
            <AlertDescription>
              Try adjusting your search.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}

export default Notelist
