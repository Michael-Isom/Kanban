import { useState, FormEvent, ChangeEvent } from "react";
import Auth from "../utils/auth"; // Assuming this utility exists
import { login } from "../api/authAPI"; // Ensure login is correctly imported

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility state

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before submission

    // Check for empty fields
    if (!loginData.username || !loginData.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      console.log("Submitting login data:", loginData); // Debugging the login data
      const data = await login(loginData); // Call login API

      console.log("Login response:", data); // Check what data is returned

      if (data?.token) {
        Auth.login(data.token); // Handle successful login
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      console.error("Login failed", err); // More detailed error message
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        {error && <p className="error-message">{error}</p>}

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            id="password"
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="password-toggle"
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;