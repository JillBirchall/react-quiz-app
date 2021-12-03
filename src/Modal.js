import React from "react";
import { Wrapper } from "./Modal.styles";

export const Modal = ({ toggleModal }) => {
  return (
    <Wrapper>
      <div className="modal-box">
        <span className="close-icon" onClick={toggleModal}>
          &times;
        </span>
        <h1>How to Play</h1>
        <p>
          There will be 20 multiple choice questions, based on your chosen
          category and difficulty. There will be 4 possible answers displayed
          for each question. You will have 15 seconds to select an answer. If
          you do not select an answer within the time limit, the next question
          will be displayed.
        </p>
        <h2>How is the score calculated?</h2>
        <p>The points awarded for each correct answer are as follows:</p>
        <table>
          <tr>
            <th>Seconds Remaining</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>11 to 15</td>
            <td>30 points</td>
          </tr>
          <tr>
            <td>6 to 10</td>
            <td>20 points</td>
          </tr>
          <tr>
            <td>0 to 5</td>
            <td>10 points</td>
          </tr>
        </table>
      </div>
    </Wrapper>
  );
};

export default Modal;
