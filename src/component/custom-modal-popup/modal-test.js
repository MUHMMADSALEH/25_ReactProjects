import { useState } from "react";
import "./modal.css"
import Modal from "./modal";


export default function ModalTest() {
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };
  function onClose(){
setShowPopup(false)
  }

  return (
    <div>
      <button onClick={handleTogglePopup}>open modal popup</button>
     {
      showPopup && <Modal id={"custom-id"} header={<h1>Customized header</h1>} footer={<h1>Customized footer</h1>} body={<div>Customized body</div>} onClose={onClose} />

     }
    </div>
  );
}
