import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

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

  if (status == "success") setEmail("");

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
      <button onClick={handleSubmit}>Subscribe</button>
      {status === "sending" && <p>sending...</p>}

      {status === "error" && <p>{message}</p>}

      {status === "success" && <p>{message}</p>}
    </div>
  );
};

export default EmailInput;
