import React, { useState } from "react";

const EmailInput = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: "firstName",
        MERGE2: "lastName",
      });
  };

  if (status == "error") console.log(message);

  return (
    <div className="button-in">
      <input
        id="demoTextBox"
        type="text"
        value={email}
        className="inputDataText"
        placeholder="Enter e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Subscribe</button>
      {status === "sending" && <p>sending...</p>}

      {status === "error" && <p>{"Something went wrong"}</p>}

      {status === "success" && <p>{message}</p>}
    </div>
  );
};

export default EmailInput;
