import React from 'react';
import './ForgetPassword.css';
import { TextField } from '@mui/material';

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {/* <div className="title">An OTP will be send to your Email Address!</div> */}
        <div className="body">
          <div className="emailContainer">
            <input type="text" placeholder="Enter email address" />
            <button>Send OTP</button>
          </div>
          <div className="otpContainer">
            <h3>Enter OTP</h3> 
            <div className="otpInputContainer">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>
        {/* <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
