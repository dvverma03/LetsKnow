import { Link } from "react-router-dom";
import "./register.css";
import { FormValidation } from "../../components/validatereg";
import { useState,useRef } from "react";
export default function Register() {
  const [errMessage, setErrMessage] = useState(null);
  const password = useRef(null);
  const email = useRef(null);
  const name = useRef(null);
  const handleButton = () => {
    const message = FormValidation(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
    if (message) return;
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <img className="loginLogo" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg" alt="" srcset="" />
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              ref={name}
              type="text"
              placeholder="Username"
              className="loginInput"
            />
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="loginInput"
            />
            <input
              ref={password}
              type="password"
              placeholder="Create Password"
              className="loginInput"
            />
            <input
              ref={password}
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
            />
            <p className="ErrorMessage">{errMessage}</p>
            
              <button onClick={handleButton} className="loginButton">
                <Link className="signupButton" to={!errMessage ?"/register": "/login"}>sign up</Link>
              </button>
            <button className="loginNew">
              <Link className="loginLink" to="/login">
                Login into Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
