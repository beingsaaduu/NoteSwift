import React, { useState } from "react";
import AddNote from "../Components/AddNote";
import { addNote } from "../Redux/reducer";
import { useDispatch, useSelector } from "react-redux";

const AddNoteScreen = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const storedNotes = useSelector((state) => state.notes);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddNote = (title, content) => {
    if (title.length > 0 && content.length > 0) {
      const newNote = {
        id: storedNotes.length + 1,
        title: title,
        content: content,
      };
      dispatch(addNote(newNote));
      props.setAddNoteFlag(false);
    }
  };
  return (
    <AddNote
      handleAddNote={handleAddNote}
      title={title}
      content={content}
      handleTitleChange={handleTitleChange}
      handleContentChange={handleContentChange}
    />
  );
};

export default AddNoteScreen;
