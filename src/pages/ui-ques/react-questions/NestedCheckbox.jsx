import { useState } from "react";
import dataJson from "./json/checkbox-data.json";
import "./styles/nested-checkbox.css";

// Get all descendant IDs
const getAllChildren = (node) => {
  let children = [node];
  node.children?.forEach((child) => {
    children = [...children, ...getAllChildren(child)];
  });
  return children;
};

// Find ancestors of a node
/* const getAllAncesstors = (data, targetId, ancestors = []) => {
  for (const node of data) {
    if (node.id === targetId) return ancestors;
    if (node.children) {
      const currChildAncesstors = getAllAncesstors(node.children, targetId, [...ancestors, node]);
      if (currChildAncesstors) return currChildAncesstors;
    }
  }
  return null;
};
 */

// Check if all children are checked
const areAllChildrenChecked = (node, checkedNodes) => {
  if (!node.children) return checkedNodes[node.id] || false;
  
  return node.children.every((child) => areAllChildrenChecked(child, checkedNodes));
};

// Check if some (not all) children are checked
const areSomeChildrenChecked = (node, checkedNodes) => {
  if (!node.children) return checkedNodes[node.id] || false;

  const allChecked = areAllChildrenChecked(node, checkedNodes);
  const someChecked = node.children.some(
    (child) => areAllChildrenChecked(child, checkedNodes) || areSomeChildrenChecked(child, checkedNodes)
  );
  return someChecked && !allChecked;
};


const CheckboxItem = ({ node, checkedNodes, onToggle, data }) => {
  const hasChildren = node.children?.length > 0;
  const isChecked = hasChildren ? areAllChildrenChecked(node, checkedNodes) : checkedNodes[node.id];
  const isIndeterminate = hasChildren && areSomeChildrenChecked(node, checkedNodes);

  return (
    <div className="checkbox-container">
      <div className="checkbox-item">
        <input
          type="checkbox"
          checked={isChecked || false}
          ref={(el) => el && (el.indeterminate = isIndeterminate)} // ! its = here
          onChange={(e) => onToggle(node, e.target.checked)}
        />
        <label>{node.label}</label>
      </div>

      {hasChildren && (
        <div className="checkbox-children">
          {node.children.map((child) => (
            <CheckboxItem
              key={child.id}
              node={child}
              checkedNodes={checkedNodes}
              onToggle={onToggle}
              data={data}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedCheckbox = () => {
  const [data] = useState(dataJson);
  const [checkedNodes, setCheckedNodes] = useState({});

  const onToggle = (node, isChecked) => {
    setCheckedNodes((prev) => {
      const newChecked = { ...prev };

      // 1. Update this node + all descendants
      const children = getAllChildren(node) || [] 
      children.forEach((child) => {
        newChecked[child.id] = isChecked;
      });

      // 2. Update ancestors
     /*  const ancestors = getAllAncesstors(data, node.id) || [];
      ancestors.forEach((ancestor) => {
        newChecked[ancestor.id] = areAllChildrenChecked(ancestor, newChecked);
      }); */

      return newChecked;
    });
  };

  return (
    <div className="nested-checkbox-container">
      {data.map((node) => (
        <CheckboxItem
          key={node.id}
          node={node}
          checkedNodes={checkedNodes}
          onToggle={onToggle}
          data={data}
        />
      ))}
    </div>
  );
};

export default NestedCheckbox;