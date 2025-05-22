import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[300px_1fr] grid-rows-[56px_1fr] h-full bg-amber-200">
            <div className="col-span-2 bg-amber-800">appbar</div>
            <nav className="bg-red-600 h-full">sidebar</nav>
            <div className="">{children}</div>
        </div>
    )
}