import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "../../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [result, setResult] = useState("");

    const navigate = useNavigate();

    // api test
    const callApi = async () => {
        try {
            const response = await axios.get("hello-world");
            setResult(response.data);
        } catch (error) {
            console.error("api failed:", error);

            navigate("/error");
        }
    };

    return (
        <div>
            <Button onClick={callApi}>Call API</Button>
            {result && <p>{result}</p>}
        </div>
    );
};

export default Home;
