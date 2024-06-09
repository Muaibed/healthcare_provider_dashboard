"use client"

import { ReactNode } from "react";

export function Sidebar({ children }: { children: ReactNode}) {
    return <div className="w-64 h-screen bg-gray-100 p-4">{children}</div>   
}

export function SidebarItem({ children }: { children: ReactNode }) {
    return <div className="my-4 cursor-pointer hover:bg-gray-200 p-2">{children}</div>
}