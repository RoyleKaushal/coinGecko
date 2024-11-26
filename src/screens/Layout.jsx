import { Outlet } from "react-router-dom";
import NavBar from "../src/components/NavBar";

function MainLayout () {
    return(
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default MainLayout;