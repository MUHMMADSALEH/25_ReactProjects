import MenuList from "./menu-list";
import {useState} from "react"

export default function MenuItem({ item }) {
  const[displayCurrentChildren,setDisplayCurrentChildren]=useState({})
   
    function handleToggleChildren(getCurrentlabel){
setDisplayCurrentChildren({...displayCurrentChildren,[getCurrentlabel]:!displayCurrentChildren[getCurrentlabel]})
console.log(!displayCurrentChildren[getCurrentlabel])
}
    console.log(displayCurrentChildren)
  return (
    <li >
      <div   className="item-container">
      {
        item && item.children && item.children.length?<span onClick={()=>handleToggleChildren(item.label)}>{
          displayCurrentChildren[item.label]?"-":"+"
        }</span>:null
      }
      <p>{item.label}</p>
      </div>
      {item && item.children && item.children.length>0  && displayCurrentChildren[item.label]?   (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
