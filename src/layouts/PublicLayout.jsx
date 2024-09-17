import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/layout.css'

function PublicLayout ({ isSignUpPage }) {
    return (
        <div className="layout-container">
            <Navbar isSignUpPage={isSignUpPage} isPrivate={false} />
            <main className="layout-content">
                <Outlet />
            </main>
            <Footer isPrivate={false} />
        </div>
    )
}

export default PublicLayout;