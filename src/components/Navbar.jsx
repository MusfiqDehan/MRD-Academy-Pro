import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed w-full top-0 z-50">
            <div className="navbar bg-base-100 shadow-xl">
                <a className="btn btn-ghost normal-case text-2xl mx-auto text-blue-600">
                    MRD Academy
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
