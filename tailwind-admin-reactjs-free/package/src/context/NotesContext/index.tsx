import { createContext, useState, useEffect } from "react";
import React from "react";
import { notesType } from "src/types/apps/notes";
import { NotesData } from "src/api/notes/NotesData";

interface NotesContextType {
  notes: notesType[];
  loading: boolean;
  error: Error | null;
  selectedNoteId: number;
  selectNote: (id: number) => void;
  addNote: (newNote: notesType) => Promise<void>;
  updateNote: (id: number, title: string, color: string) => Promise<void>;
  deleteNote: (id: number) => Promise<void>;
}

const initialContext: NotesContextType = {
  notes: [],
  loading: true,
  error: null,
  selectedNoteId: 1,
  selectNote: () => {},
  addNote: async () => {},
  updateNote: async () => {},
  deleteNote: async () => {},
};

export const NotesContext = createContext<NotesContextType>(initialContext);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<notesType[]>(initialContext.notes);
  const [loading, setLoading] = useState<boolean>(initialContext.loading);
  const [error, setError] = useState<Error | null>(initialContext.error);
  const [selectedNoteId, setSelectedNoteId] = useState<number>(initialContext.selectedNoteId);


  const fetchNotes = async () => {
    try {
      setLoading(true);
      setNotes(NotesData);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const selectNote = (id: number) => {
    setSelectedNoteId(id);
  };

  const addNote = async (newNote: notesType) => {
    try {
      setNotes((prev) => [...prev, { ...newNote, id: Date.now() }]);
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  // Update a note
  const updateNote = async (id: number, title: string, color: string) => {
    try {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === id ? { ...note, title, color } : note
        )
      );
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  // Delete a note
  const deleteNote = async (id: number) => {
    try {
      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        loading,
        error,
        selectedNoteId,
        selectNote,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
