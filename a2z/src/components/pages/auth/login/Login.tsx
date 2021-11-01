import "./login.css";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import logo from "../../../../assets/Logo/Logo.png";
import Image from "../../../../assets/Image/Login.png";
import Facebook from "../../../../assets/Icons/facebook.svg";
import Google from "../../../../assets/Icons/google.svg";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="purplecard">
          <div className="innercontent">
            <div className="logo">
              <img src={logo} alt="Company Logo" />
            </div>
            <div className="image">
              <img src={Image} alt="Login" />
            </div>
          </div>
        </div>
        <div className="whitecard">
          <div className="roundtitle">Welcome Back</div>
          <div className="innercontent">
            <div className="head">
              <h1>Login your account</h1>
            </div>
            <div className="form">
              <div className="email">
                <p>Username or Email</p>
                <InputText
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pass">
                <p>Password</p>
                <InputText
                  id="pass"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className="p-field-checkbox">
                <Checkbox
                  inputId="remember"
                  checked={checked}
                  onChange={(e) => setChecked(e.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>
            <div className="line-container">
              <div className="line"></div>
              <p>Or Direct Login With</p>
              <div className="icons">
                <a href="www.facebook.com">
                  <img src={Facebook} alt="facebook" />
                </a>
                <a href="www.google.com">
                  <img src={Google} alt="google" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
