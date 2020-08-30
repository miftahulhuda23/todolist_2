import React from "react";
import "./input.css";
import onClick from "./index.js";

function Input() {
  return (
    <div>
      <div className="judul">
        <h1>MY TO DO LIST</h1>
      </div>
      <div className="container">
        <div className="row">
          <form action="" id="addList" className="form">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Create Your List..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                id="inputList"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="button-addon2"
                  onClick={onClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;
