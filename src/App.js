import { useState } from "react";
import "./index.scss";

export default function App() {
  const [formStateMail, setFormStateMail] = useState("");
  const [formStatePassWord, setFormStatePassWord] = useState("");

  return (
    <div className="App">
      <div id="sign-up-form">
        <h1 className="title">Create an account</h1>
        <p className="details">
          Create an account to enjoy all the services without any ads for free!
        </p>

        <div className="form">
          <input
            type="mail"
            name="mail"
            className="input-mail"
            placeholder="Email Adress"
            value={formStateMail}
            onChange={(e) => setFormStateMail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="input-password"
            placeholder="Password"
            value={formStatePassWord}
            onChange={(e) => setFormStatePassWord(e.target.value)}
          />
          <input
            type="submit"
            name="submit"
            className="input-submit"
            value="Create Account"
          />

          <p className="more">
            Already Have An Account? <a href="#">Sign In</a>
          </p>
        </div>
      </div>
      <div className="box box-1"></div>
      <div className="box box-2"></div>
    </div>
  );
}
