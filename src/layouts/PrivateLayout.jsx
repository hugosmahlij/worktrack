import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/layout.css'

function PublicLayout () {
    return (
        <div className="layout-container">
            <Navbar isPrivate={true} />
            <main className="layout-content">
                <Outlet />
            </main>
            <Footer isPrivate={true} />
        </div>
    )
}

export default PublicLayout;