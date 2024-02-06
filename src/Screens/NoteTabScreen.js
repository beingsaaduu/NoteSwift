import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteTab from "../Components/NoteTab";
import { fetchNote } from "../Redux/reducer";

const NoteTabScreen = (props) => {
  const dispatch = useDispatch();
  const listOfNotes = useSelector((state) => state.notes);

  const [errorMsg, setErrorMsg] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleGetNotes();
  }, [props.addNoteFlag, props.openNoteFlag]);

  const handleGetNotes = () => {
    const storedNotes = listOfNotes ? listOfNotes : [];
    dispatch(fetchNote(storedNotes));
  };

  const filteredNotes = listOfNotes
    ? listOfNotes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <NoteTab
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      filteredNotes={filteredNotes}
      errorMsg={errorMsg}
      setAddNoteFlag={props.setAddNoteFlag}
      setOpenNoteFlag={props.setOpenNoteFlag}
      setViewTitle={props.setViewTitle}
      setViewContent={props.setViewContent}
      updateViewContent={props.updateViewContent}
    />
  );
};

export default NoteTabScreen;
