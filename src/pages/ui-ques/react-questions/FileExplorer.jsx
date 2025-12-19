import { useState } from 'react'
import data from './json/folder-structure-1.json'
import "./styles/folder-structure.css"
// https://claude.ai/chat/14a82762-48c3-4cf4-8252-633e30680cc7

const Folder = ({folderOpen, data, onFolderClick, onFileFolderAddClick, onFileFolderDeleteClick})=>{

  return <div className='folder-container'>
        <div className='folder-label-container'>
          <p onClick={()=>onFolderClick(data.id)} className='folder-name'>
          {folderOpen.includes(data.id) ? "📂":"📁"}  {data.name}
          </p>
          <p onClick={()=>onFileFolderAddClick(data.id, "folder")}>➕</p>
          <p onClick={()=>onFileFolderAddClick(data.id, "file")}>Fi+</p>
          <p onClick={()=>onFileFolderDeleteClick(data.id)}>❌</p>
        </div>
        {folderOpen.includes(data.id) &&
          <>
            {data?.children?.map((item)=>{
            if(item.type === "folder")
              return <Folder 
                  folderOpen={folderOpen} 
                  onFolderClick={onFolderClick} 
                  key={item.id} 
                  data={item}
                  onFileFolderAddClick={onFileFolderAddClick}
                  onFileFolderDeleteClick={onFileFolderDeleteClick}
              />
            else
              return <File key={item.id} data={item}/>
          })}
        </>}        
    </div>
}

const File = ({data, onFileFolderDeleteClick})=>{
return <div className='file-container'>
  <p className='file-name'>🗒️ {" "}{data.name}</p>
  <p onClick={()=>onFileFolderDeleteClick(data.id)}>❌</p>
</div>
}


const FileExplorer = ()=>{
  const [folderOpen, setFolderOpen] = useState([])
  const [dataJson, setDataJson] = useState([...data])

  const onFolderClick = (id)=>{
    setFolderOpen((prev)=>{
      if(prev.includes(id))
        return prev.filter((itemId)=>itemId !== id)
      else 
        return [...prev, id]
    })
  }

  const onFileFolderAddClick = (parentId, type)=>{
    
    const add = (prev)=>{
      return prev?.map((item)=>{
        if(item?.id == parentId){
         
          const payload = {
            id: Date.now(),
            name: Math.random(),
            type: type,
            children: []
          }
          if(type === "file"){
            payload.name += ".jsx" 
            delete payload.children
          }
                    
          // item.children = [...item.children, payload]
          return {...item, children: [...item.children, payload] }
         
        }else if(item.children){
          //  return add(item.children)
          return {...item, children: add(item.children)}
        }
        return item
      })
    }

    setDataJson(add)
    setFolderOpen((prev)=>[...prev, parentId])
  }

  const onFileFolderDeleteClick = (idToDelete)=>{
    const minus = (prev)=>{
      return prev
      ?.filter((item) => item.id !== idToDelete)  // Step 1: Remove matching item
      .map((item) => {                             // Step 2: Recurse into children
        if (item.children) {
          return { ...item, children: minus(item.children) }
        }
        return item
      })
    }
    setDataJson(minus)
  }

 console.log(dataJson)

  return <div >
    {dataJson.map((item)=>{

      if(item.type === "folder")
        return <Folder 
          folderOpen={folderOpen}
          onFolderClick={onFolderClick} 
          key={item.id} 
          data={item}
          onFileFolderAddClick={onFileFolderAddClick}
          onFileFolderDeleteClick={onFileFolderDeleteClick}
        />
      else
        return <File  onFileFolderDeleteClick={onFileFolderDeleteClick} key={item.id} data={item}/>
    })}
  </div>
}

export default FileExplorer