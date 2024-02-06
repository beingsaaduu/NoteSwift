// ViewNoteScreen.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewNote from "../Components/ViewNote";
import { updateNote } from "../Redux/reducer";

const ViewNoteScreen = (props) => {
  const dispatch = useDispatch();
  const storedNotes = useSelector((state) => state.notes);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    setTitle(props.viewTitle);
    setContent(props.viewContent);
    setId(props.viewId);
  }, [props.viewTitle, props.viewContent, props.viewId]);

  const handleNoteEditing = () => {
    if (storedNotes.length > 0) {
      dispatch(updateNote({ id, title, content }));
      props.setOpenNoteFlag(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <ViewNote
      id={id}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      handleNoteEditing={handleNoteEditing}
      handleTitleChange={handleTitleChange}
      handleContentChange={handleContentChange}
    />
  );
};

export default ViewNoteScreen;
