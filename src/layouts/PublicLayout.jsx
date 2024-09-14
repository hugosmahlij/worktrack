import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivateLayout () {
    return (
        <div>
            <Navbar isPrivate={false} />
            <main>
                <Outlet />
            </main>
            <Footer isPrivate={false} />
        </div>
    )
}

export default PrivateLayout;