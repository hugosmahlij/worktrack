import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import EmpleadosPage from '../pages/Empleados';
import PrivateRoute from "./PrivateRoute";

function AppRouter () {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<PublicLayout />}>
                    <Route index element={<LoginPage />} />
                </Route>
                <Route path="/" element={<PrivateRoute><PrivateLayout /></PrivateRoute>}>
                    <Route index element={<HomePage />} />
                    <Route path="empleados" element={<EmpleadosPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;