import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicLayout () {
    return (
        <div>
            <Navbar isPrivate={true} />
            <main>
                <Outlet />
            </main>
            <Footer isPrivate={true} />
        </div>
    )
}

export default PublicLayout;