import React, { useState } from "react";

const Controlled = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [radioInput, setRadioInput] = useState("");
  const [selectInput, setSelectInput] = useState("");

  const usernameHandler = (event) => {
    const usernameInput = event.target.value;
    setUsername(usernameInput);
    if (usernameInput.length > 5) {
      showError();
    } else {
      setUsernameError(null);
    }
  };

  const showError = () => {
    setUsernameError("Username must be less than 5 characters");
  };

  const confirmPasswordHandler = (event) => {
    const confirmPasswordInput = event.target.value;
    setConfirmPassword(confirmPasswordInput);
    if (confirmPasswordInput !== password) {
      setUsernameError("Passwords do not match");
    } else {
      setUsernameError(null);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // Handle form submission logic here
  };

  return (
    <>
      <h1>Controlled Components</h1>
      <form className="form-horizontal" onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={username}
              style={{ border: usernameError ? "2px solid red" : "0" }}
              onChange={usernameHandler}
            />
            {usernameError && (
              <span style={{ color: "red" }}>{usernameError}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="pwd">
            Password:
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="confirmPwd">
            Confirm Password:
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="confirmPwd"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={confirmPasswordHandler}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="mobile">
            Mobile Number:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2">Gender:</label>
          <div className="col-sm-10">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={radioInput === "Male"}
                onChange={(e) => setRadioInput(e.target.value)}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={radioInput === "Female"}
                onChange={(e) => setRadioInput(e.target.value)}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="selectType">
            Select Type:
          </label>
          <div className="col-sm-10">
            <select
              id="selectType"
              className="form-control"
              value={selectInput}
              onChange={(e) => setSelectInput(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Type1">Type 1</option>
              <option value="Type2">Type 2</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Controlled;
