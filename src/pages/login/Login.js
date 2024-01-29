import { useState, useRef, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { FormValidation } from "../../components/validate";
import logImg from "/assets/Login.png"

export default function Login() {
  const [errMessage, setErrMessage] = useState(null);
  const password = useRef(null);
  const email = useRef(null);

  const handleButton = () => {
    const message = FormValidation(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <img className="loginLogo" src={logImg} alt="" srcset="" />
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="loginInput"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <p className="ErrorMessage">{errMessage}</p>
            <button onClick={handleButton} className="loginButton">
              <Link className="Link" to={!errMessage ?"/login": "/"}>
                Login
              </Link>
            </button>
            <span className="loginForget">Forget Password?</span>
            <button className="loginNew">
              <Link className="Link" to="/register">
                Create a New Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
