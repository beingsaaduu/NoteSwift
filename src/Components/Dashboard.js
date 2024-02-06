import React from "react";
// import NoteTab from "./NoteTab";
import NoteTabScreen from "../Screens/NoteTabScreen";
import AddNoteScreen from "../Screens/AddNoteScreen";
import ViewNoteScreen from "../Screens/ViewNoteScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = (props) => {
  return (
    <div className="container-fluid border">
      <div className="row ">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h4>NotePad Application</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-2 p-0 border" style={{ height: "95.3vh" }}>
          <NoteTabScreen
            addNoteFlag={props.addNoteFlag}
            openNoteFlag={props.openNoteFlag}
            setAddNoteFlag={props.setAddNoteFlag}
            setOpenNoteFlag={props.setOpenNoteFlag}
            setViewTitle={props.setViewTitle}
            setViewContent={props.setViewContent}
            updateViewContent={props.updateViewContent}
          />
        </div>
        <div className="col-10 border">
          {/* {console.log("Open Note Flag",props.openNoteFlag)} */}

          {props.openNoteFlag ? (
            <ViewNoteScreen setOpenNoteFlag={props.setOpenNoteFlag}
            viewTitle={props.viewTitle}
            viewContent={props.viewContent}
            viewId={props.viewId}
            />
          ) : props.addNoteFlag ? (
            <AddNoteScreen setAddNoteFlag={props.setAddNoteFlag}
              setOpenNoteFlag={props.setOpenNoteFlag}
            />
          ) : (
            <div className="row">
              <div
                className="col-12 d-flex justify-content-center align-items-center"
                style={{ height: "95vh" }}
              >
                <h4>
                  {props.addNoteFlag
                    ? "Click on Note to View"
                    : "Click on + to Add a Note"}
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
