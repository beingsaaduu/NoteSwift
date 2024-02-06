import React from "react";
import NoteButton from "./Common/NoteButton";
import plusLogo from "../Assets/plus.png";
import "../Styles/NoteTab.css";

const NoteTab = (props) => {

  return (
    <div className="container border">
      <div
        className="row p-0 d-flex align-items-center"
        style={{ height: "7vh" }}
      >
        <div className="noteTab_Search">
        {/* {console.log("Flags",props.addNoteFlag, props.openNoteFlag)} */}
          <input
            type="text"
            placeholder="Search..."
            value={props.searchTerm}
            onChange={(e) => props.setSearchTerm(e.target.value)}
          />
          <button type="button" onClick={() => {
            props.setAddNoteFlag(true)
            props.setOpenNoteFlag(false)
          }}
            >
            <img src={plusLogo} alt="plus" className="plus_Image" />
          </button>
        </div>
      </div>
      <div className="row p-0 noteTab_row" style={{ height: "88vh" }}>
        {props.errorMsg && <p className="errorMsg">{props.errorMsg}</p>}
        {props.filteredNotes.map((note) => (
          <NoteButton
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            setOpenNoteFlag={props.setOpenNoteFlag}
            setAddNoteFlag={props.setAddNoteFlag}
            setViewTitle={props.setViewTitle}
            setViewContent={props.setViewContent}
            updateViewContent={props.updateViewContent}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteTab;
