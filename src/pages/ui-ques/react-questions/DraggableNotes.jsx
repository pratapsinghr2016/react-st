import { useState } from "react";
import jsonData from "./json/draggable-todo.json";
import "./styles/draggable-todo.css";

const statuses = ["todo", "in-progress", "completed"]

const ColumnList = ({status, data, onDragStartHandler, 
  onDragEndHandler, onDragOverHandler, onDropHandler})=>{

  return <div className="column">
    <div className="header">{status}</div>
    <div className="scrollable-list-container">
      {(data.filter((item)=>item.status === status)).map((item)=>{
        return <div 
            onDragStart={(e)=>onDragStartHandler(e, item)}
            onDragOver={onDragOverHandler}
            onDrop={(e)=>onDropHandler(e, item)}
            onDragEnd={onDragEndHandler} 
            key={item.id} 
            className="scrollable-list"
          >
          <div draggable className="card-item">
            <h2 className="task-title">{item.title}</h2>
            <p className="task description">{item.description}</p>
          </div>
        </div>
      })}
  </div> 
  </div>
}

const Notes = ()=>{

  // ! Events:=> START -> OVER -> DROP -> END
  const [data, setData] = useState(jsonData);
  const [draggedNote, setDraggedItem] = useState({})
  
  const onDragStartHandler = (e, note)=>{
    e.target.style.opacity = 0.5;

    setDraggedItem(note)
  }

  const onDragOverHandler = (e)=>{
    e.preventDefault()
  }

  const onDropHandler = (e, note)=>{
   e.preventDefault() // ! note
   
   console.log("target-note", note);
   console.log("dragged-note", draggedNote)

   if(note.id === draggedNote.id) return;


   setData((prev)=>{
    const filteredNotes = prev.filter((item)=>item.id !== draggedNote.id);
    
    const indexOfDroppedNote = prev.findIndex((item)=>item.id === note.id);
    
    const modifiedNoteState = {
      ...draggedNote,
      status: note.status
    }

    const newArr = [
      ...filteredNotes.slice(0, indexOfDroppedNote),
      modifiedNoteState,
      ...filteredNotes.slice(indexOfDroppedNote)
    ]

    return newArr;
   })
  }

  const onDragEndHandler = (e)=>{
    e.target.style.opacity = 1;
    setDraggedItem({});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const formValues = new FormData(e.target)
    const data = Object.fromEntries(formValues)
    setData((prev)=>{
      const newPrev = {
        id: Date.now(),
        ...data,
        priority: "high",
        status: "todo"
      }

      return [...prev, newPrev]
    })
  }

  return <div>
   <form style={{display: "flex", flexDirection:"column"}} onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input name="title" placeholder="enter title..." />
      <label htmlFor="description">description</label>
      <input name="description" placeholder="enter description..." />
      <button>Sumit</button>
    </form>
  <div className="container">
   
    {statuses.map((item)=> 
    <ColumnList 
      key={item} 
      data={data} 
      status={item} 
      onDropHandler={onDropHandler}
      onDragStartHandler={onDragStartHandler}
      onDragEndHandler={onDragEndHandler}
      onDragOverHandler={onDragOverHandler}
    />)}


   
  </div> 
  </div>
}

export default Notes