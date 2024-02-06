import React from "react";
import "../../Styles/NoteButton.css";

const NoteButton = (props) => {

  return (
    <>
      <div className="noteButton_Main" key={props.id} onClick={
        () => {
          props.setOpenNoteFlag(true);
          props.setAddNoteFlag(false);
          props.updateViewContent(props.title, props.content, props.id);
        }
      }>
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </div>
    </>
  );
};

export default NoteButton;
