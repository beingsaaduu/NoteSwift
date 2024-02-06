import React, {useState} from 'react'
import Dashboard from '../Components/Dashboard'

const DashboardScreen = () => {
  const [addNoteFlag, setAddNoteFlag] = useState(false)
  const [openNoteFlag, setOpenNoteFlag] = useState(false)
  const [viewTitle, setViewTitle] = useState("")
  const [viewContent, setViewContent] = useState("")
  const [viewId, setViewId] = useState(0)

  const updateViewContent = (title, content, id) => {
    setViewTitle(title)
    setViewContent(content)
    setViewId(id)
  }

  return (
    <Dashboard
    addNoteFlag={addNoteFlag}
    openNoteFlag={openNoteFlag}
    setOpenNoteFlag={setOpenNoteFlag}
    setAddNoteFlag={setAddNoteFlag}
    viewTitle={viewTitle}
    viewContent={viewContent}
    setViewTitle={setViewTitle}
    setViewContent={setViewContent}
    viewId={viewId}
    updateViewContent={updateViewContent}
    />
  )
}

export default DashboardScreen