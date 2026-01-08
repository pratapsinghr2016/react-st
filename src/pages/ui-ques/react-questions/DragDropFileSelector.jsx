import { useState } from "react";
import "./styles/drag-drop-file-selector.css";

const DragDropFileSelector = ()=>{
  const [files, setFiles] = useState([]);
  const [isDragging, setDragging] = useState(false)

  const onFileSelectorChange = (e)=>{
    // ! e.target.files
    setFiles((prev)=>[...prev, ...e.target.files])
  }

  const onDeleteFile = (idx)=>{
   
   setFiles(prev => prev.filter((_, i) => i !== idx));

  }

  const onDragEnterHandler = (e)=>{
    e.preventDefault()
    setDragging(true)
  }

  const onDragOverHandler = (e)=>{
    e.preventDefault();
    setDragging(true)
  }

  const onDropHandler = (e)=>{
    console.log(e)
    e.preventDefault();
    // ! e.dataTransfer.files
    setFiles((prev)=>[...prev, ...e.dataTransfer.files])
    setDragging(false);
  }

  const onDragLeaveHandler = (e)=>{
    e.preventDefault();
    setDragging(false);
  }

  return <div style={{marginTop: 45, padding:15}} className="container">
    <div 
      onDragEnter={onDragEnterHandler}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
      onDragLeave={onDragLeaveHandler}
      className="folder-selector-container"
      style={{border: isDragging ? "2px dashed green" : "2px dashed gray"}}
    >
      <input multiple className="file-select-input" id="file-upload" name="file-upload" type="file" onChange={onFileSelectorChange}/>
      <label className="file-select-title" htmlFor="file-upload">Browse Files</label>
    </div>
    <div className="files-preview">
      {files.map((item, idx)=>
      <div key={item.lastModified} className="file-item">
        <img 
          className="file-img" 
          src={URL.createObjectURL(item)} // ! file to URL
          alt={item.name} 
        />
        <div className="file-detail">
          <p className="file-detail-name">{item.name}</p>
          <p className="file-detail-size">{(item.size/1024).toFixed(2)} KB</p>
        </div>
        <button className="delete-file-btn" onClick={()=>onDeleteFile(idx)}>X</button>
      </div>)}
    </div>
  </div>
}

export default DragDropFileSelector