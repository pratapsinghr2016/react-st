import { useState } from "react";
import "./styles/todo-list.css";

const initialValue = {
  id: Date.now(),
  task: "initialValue",
  completed: true
}

const TodoList = ()=>{

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([initialValue])
  const [isEdit, setIsEdit] = useState(false);
  const [editedTask, setEditedTask] = useState("")

  const onAddTask = ()=>{
    // ! empty input is not allowed
    if(!inputValue.trim().length) return;

    const payload = {
      id: Date.now(),
      task: inputValue.trim(),
      completed: false
    }

    setTodoList((prev)=>[...prev, payload])
    setInputValue("")
  }

  const isTaskCompletedHandler = (item)=>{
    setTodoList((prev)=>{
      let res = [];
      let idx = 0
      for(let prevItem of prev){
       
        if(prevItem?.id === item?.id){
          res[idx] = {...prevItem, completed: !prevItem.completed}
        }else{

          res[idx] = {...prevItem}
        }
        idx+=1
      }
      console.log(res)
      return res
    })
  }

  const onDeleteClick = (item)=>{
    setTodoList((prev)=>prev.filter((itemVal)=>itemVal.id !== item.id))
  }

  const onEditSave = (itemToEdit)=>{
    setTodoList((prev)=>{
      return prev.map((item)=>{
        if(item.id === itemToEdit.id){
          return {...item, task: editedTask}
        }
        return {...item}
      })
    })
    setIsEdit(false)
  }



  return <div className="todo-container">
    <input id="todo-input" value={inputValue} placeholder="enter todo value" onChange={(e)=>setInputValue(e.target.value)} />
    <button onClick={onAddTask}>Add task</button>
    <div className="task-list">
      <ul>
        {todoList.map((item)=>
        <ol key={item.id} className="task-item">
          <input id={item.id} onChange={()=>isTaskCompletedHandler(item)} type="checkbox" checked={item.completed}/>
          {isEdit ? <input  onChange={(e)=>setEditedTask(e.target.value)} defaultValue={item.task}/> : 
          
          <p style={{textDecoration: item.completed ? "line-through" :""}}>{item.task}</p>
          }
          <button onClick={()=>onDeleteClick(item)}>Delete</button>
          {!isEdit ? <button onClick={()=>setIsEdit((prev)=>!prev)}>Edit</button>:
          <button onClick={()=>onEditSave(item)}>Save</button>}
        </ol>
      )}
        
      </ul>
    </div>
  </div>
}

export default TodoList