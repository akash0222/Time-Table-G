import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

type LoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    orgId: string;
  };
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post<LoginResponse>("/auth/login", { email, password });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}