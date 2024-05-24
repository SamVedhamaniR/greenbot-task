import React from "react";
import Header from "../Header/index";
import Sidebar from "../Sidebar/index";
function Layout(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <div>{props?.children}</div>
        </div>
    );
}

export default Layout;
