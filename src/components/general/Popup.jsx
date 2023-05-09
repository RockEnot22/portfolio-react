import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Popup = (props) => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup__container">
          <div className="popup__box">
            <button className="popup__button-close" onClick={handleClose}>
              <AiOutlineClose />
            </button>
            {props.content}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
