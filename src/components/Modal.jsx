import React, { useContext } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Modal.css";
import { DataContext } from "../contexts/DataContext";

const Modal = () => {
  const { setIsModal, addReview, setAddReview,addRestReview} = useContext(DataContext);

  
  return (
    <div className="modal-main">
      <div className="modal-container">
        <div>
          <div onClick={() => setIsModal(false)}>
            <CancelIcon />
          </div>
          <h2>Add your review</h2>
        </div>
        <hr />
        <div className="review">
          <div>
            <label htmlFor="">
              Rating:
              <select
                onChange={(e) =>
                  setAddReview({ ...addReview, rating: e.target.value })
                }
              >
                <option value="0">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
          <div className="review-comment">
            <label htmlFor="">Comment:</label>
            <textarea
              value={addReview?.comment}
              cols="5"
              rows="5"
              onChange={(e) =>
                setAddReview({ ...addReview, comment: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <button onClick={addRestReview}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
