import { useState } from "react"
import jsonData from "./json/checkbox-data.json"
import "./styles/nested-checkbox.css"

const getNodesChildren = (node)=>{
  let children = [node]
  node.children?.forEach((child)=>{
    children = [...children, ...getNodesChildren(child)]
  })
  return children
}

const allChildrenAreChecked = (node, checkedItems)=>{
  if(!node.children)
    return checkedItems[node.id] || false;

  return node.children.every((child)=>allChildrenAreChecked(child, checkedItems))
}

const someChildremAreChecked = (node, checkedItems)=>{
  if(!node.children) return checkedItems[node.id] || false;

  const areAllChildrenChecked = allChildrenAreChecked(node, checkedItems);
  const areSomeChildrenChecked = node.children.some((child)=>
    allChildrenAreChecked(child, checkedItems) || someChildremAreChecked(child, checkedItems)
  )
  return areSomeChildrenChecked && !areAllChildrenChecked
}


const CheckBoxItem = ({node, onToggle, checkedItems})=>{
  const hasChildren = node?.children?.length > 0
  const isChecked = hasChildren ? allChildrenAreChecked(node, checkedItems) : checkedItems[node.id]
  const isIndeterminate = hasChildren && someChildremAreChecked(node, checkedItems)

  return <div className="checkbox-container">
    <div className="checkbox-item">
      <input 
        type="checkbox"
        checked={isChecked}
        name={node.label}
        id={node.label}
        ref={(el)=>el && (el.indeterminate = isIndeterminate)}
        onChange={(e)=>onToggle(node, e.target.checked)}
      />
      <label htmlFor={node.label}>{node.label}</label>
    </div>
    
    {hasChildren && 
    <div className="checkbox-children">
      {node.children.map((child)=>
    <CheckBoxItem 
      key={child.id} 
      node={child}
      onToggle={onToggle}
      checkedItems={checkedItems}
    />)}
    </div>}
  </div>
}

const NestedCheckBox = ()=>{
  const [data] = useState(jsonData);
  const [checkedItems, setCheckedItems] = useState({});

  const onToggle = (node, isChecked)=>{

    setCheckedItems((prev)=>{
      const newCheckObj = {...prev};

      const children = getNodesChildren(node) || []
      children.forEach((child)=>{
        newCheckObj[child.id] = isChecked
      })

      return newCheckObj

    })
  }

  return <div className="nested-checkbox-container">
      {data.map((item)=>
      <CheckBoxItem 
        key={item.id} 
        node={item}
        onToggle={onToggle} 
        checkedItems={checkedItems}
    />)}
  </div>
}

export default NestedCheckBox