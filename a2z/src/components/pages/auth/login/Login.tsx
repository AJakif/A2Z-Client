import "./login.css";
import { InputText } from 'primereact/inputtext';
import logo from "../../../../assets/Logo/Logo.png";
import Image from "../../../../assets/Image/Login.png";
import Facebook from "../../../../assets/Icons/facebook.svg";
import Google from "../../../../assets/Icons/google.svg";

function Login() {
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
            <span className="p-float-label">
                    <InputText id="username"  />
                    <label htmlFor="username">Username</label>
                </span>

            <Form>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 0, span: 12 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary">Login</Button>
              </Form.Item>
            </Form>
            <Form>
              <Row>
                <Col span={12}>
                  {" "}
                  <a href="/">Forget Password?</a>
                </Col>
                <Col className="rightallign" span={12}>
                  <a href="/">Creat Account</a>
                </Col>
              </Row>
            </Form>
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
