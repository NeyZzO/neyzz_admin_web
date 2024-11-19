import React from "react";

interface MenuProps {
    children?: React.ReactNode;
}

export default function Menu(props: MenuProps) {
    return <div className="menu">
        <h1>Menu Admin</h1>
    </div>
}