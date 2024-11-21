import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

// page
import Home from "../pages/Home/Home";
import Counter from "../pages/Counter/Counter";
import Login from "../pages/Auth/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/counter"
                    element={
                        <ProtectedRoute>
                            <Counter />
                        </ProtectedRoute>
                    }
                />
                <Route path="/error" element={<ErrorPage />} />
            </RouterRoutes>
        </BrowserRouter>
    );
};

export default Routes;
