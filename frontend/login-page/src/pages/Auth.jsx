import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();//learning

    formData.append("email", email);//learning
    formData.append("password", password); //learning

    try { //learning
      const response = await fetch( //learning
        "http://localhost:8080/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },

          body: formData.toString(),
        }
      );//learning

      const data = await response.json();//learning

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }//learning

      // Go to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.log(error.message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Welcome Back</h1>
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>

        </form>

        <p className="signup">
          Don't have an account? <a href="#">Sign Up</a>
        </p>

      </div>
    </div>
  );
}

export default Login;