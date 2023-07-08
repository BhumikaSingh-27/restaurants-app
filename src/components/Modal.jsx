import React, { useContext } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Modal.css";
import { DataContext } from "../contexts/DataContext";

const Modal = () => {
  const { setIsModal, addReview, setAddReview, addRestReview } =
    useContext(DataContext);

  return (
    <div className="modal-main">
      <div className="modal-container">
        <div class="modal-heading">
          <div onClick={() => setIsModal(false)}>
            <CancelIcon />
          </div>
          <h2>Add your review</h2>
        </div>

        <div className="review">
          <div className="label-content">
            <label htmlFor="">Rating:</label>
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
          </div>
          <div className="review-comment">
            <div className="label-content">
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
        </div>
        <button id="submit-btn" onClick={addRestReview}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
