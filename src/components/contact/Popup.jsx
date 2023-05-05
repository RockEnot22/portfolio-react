import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const Popup = props => {
  return (
    <div className="popup__container">
      <div className="popup__box">
        <button className="popup__button-close" onClick={props.handleClose}><AiOutlineClose/></button>
        {props.content}
      </div>
    </div>
  )
}

export default Popup