import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  // initialState: intialNotes,
  reducers: {
    // storeNote: (state, action) => {
    //   localStorage.setItem("note", JSON.stringify(state));
    // },
    fetchNote: (state, action) => {
      // return action.payload;
      const storedNotes = JSON.parse(localStorage.getItem("note") || []);
      // console.log("Stored Notes", storedNotes);
      return storedNotes;
    },
    addNote: (state, action) => {
      // Save Note to localStorage
      const storedNotes = JSON.parse(localStorage.getItem("note") || []);
      console.log(storedNotes);
      console.log(action.payload);
      storedNotes.push(action.payload);
      localStorage.setItem("note", JSON.stringify(storedNotes));
    },
    removeNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      // console.log(id, title, content);

      const storedNotes = JSON.parse(localStorage.getItem("note") || []);
      const noteIndex = storedNotes.findIndex((note) => note.id === id);
      // console.log("Note Index", noteIndex);
      storedNotes[noteIndex].title = title;
      storedNotes[noteIndex].content = content;
      localStorage.setItem("note", JSON.stringify(storedNotes));
    },
  },
});

export const { storeNote, fetchNote, addNote, removeNote, updateNote } =
  noteSlice.actions;

export default noteSlice.reducer;
