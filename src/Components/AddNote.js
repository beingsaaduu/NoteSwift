import React from "react";
import "../Styles/AddNote.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddNote = (props) => {
  
  return (
    <div className="container-fluid border" style={{ height: "94vh" }}>
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h4 className="main_heading">Add Note</h4>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-1">
            <p>Title: </p>
          </div>
          <div className="col-11">
            <input type="text" className="add_Title" value={props.title} onChange={props.handleTitleChange} />
          </div>
        </div>
        <div
          className="row d-flex justify-content-center"
          style={{ height: "78vh" }}
        >
          <div className="col-1">
            <p>Content: </p>
          </div>
          <div className="col-11">
            <textarea className="add_Content" value={props.content} onChange={props.handleContentChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex align-items-center addButton">
            <button  onClick={() => props.handleAddNote(props.title, props.content)} className="addNote_Button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
