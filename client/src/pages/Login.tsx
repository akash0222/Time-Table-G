// src/pages/Login.tsx
import { useState, useContext } from "react";
import { TextField, Button, Container } from "@mui/material";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await API.post("/auth/login", { email, password });
    login(res.data.token);
    navigate("/");
  };

  return (
    <Container>
      <h2>Login</h2>
      <TextField fullWidth label="Email" onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Container>
  );
}