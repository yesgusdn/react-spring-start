import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8080/api/login",
                { username, password }
            );
            const { token } = response.data;

            localStorage.setItem("authToken", token);
            navigate("/home");
        } catch (error) {
            console.error("Login failed:", error);
            setError(error);
        }
    };

    return (
        <div>
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
