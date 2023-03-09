import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    // console.log(validationError)

    e.preventDefault();
    Navigate("/home");
  };
  return (
    <div className="box">
      <div className="container">
        <img src="./bg.jpg" alt="" />
        <form onSubmit={handleSubmit} noValidate>
          <div className="top-header">
            <span>Have an account?</span>
            <header>Login</header>
          </div>
          <div className="input-field">
            <input
              type="email"
              className="input"
              placeholder="Email Id"
              required
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-field">
            <input
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-field">
            <input type="submit" className="submit" value="login" />
          </div>
        </form>
        <div className="bottom">
          <div className="left">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
          <div className="right">
            <label>
              <a href="#">Forgot Password?</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
