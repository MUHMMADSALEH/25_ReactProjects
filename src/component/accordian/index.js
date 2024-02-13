import { useState } from "react";
import data from "./data";
import './style.css'
export default function Accordian() {
  const [selected, setSelected] = useState();
  const [enableMultiSelection,setEnableMultiSelectio]=useState(false)
const[multiple,setMultiple]=useState([])



  function handleSingleSelection(getSelectedId) {
      setSelected(selected===getSelectedId?null:getSelectedId);
    }
   

    function handleMultipleSelection(getSelectedId){
        let cpyMultiple=[...multiple]
        const findIndexCurrentId=cpyMultiple.indexOf(getSelectedId)
        // console.log(findIndexCurrentId)
        if(findIndexCurrentId===-1) cpyMultiple.push(getSelectedId)
        else cpyMultiple.splice(findIndexCurrentId,1);
    setMultiple(cpyMultiple)

    }
    console.log(selected,multiple);
  return (
    <div className="wrapper">
        <button onClick={()=>setEnableMultiSelectio(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitemes,index) => (
            <div key={index} className="items">
              <div
                onClick={enableMultiSelection?()=>handleMultipleSelection(dataitemes.id):() => handleSingleSelection(dataitemes.id)}
                className="title"
              >
                <h1>{dataitemes.question}</h1>
                <span>+</span>
              </div>



              {
                enableMultiSelection?multiple.indexOf(dataitemes.id)!==-1 &&( <div className="content">{dataitemes.answer}</div>): selected===dataitemes.id &&( <div className="content">{dataitemes.answer}</div>
              )}
             {/* selected===data.itemes  ||     multiple.indexOf(data.itemes)!==-1  ? ( <div className="content">{dataitemes.answer}</div>
              ):null */}
            </div>
          ))
        ) : (
          <div>data is not present</div>
        )}
      </div>
    </div>
  );
}
