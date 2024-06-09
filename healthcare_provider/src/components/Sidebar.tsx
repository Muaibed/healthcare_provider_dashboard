"use client"

import { ReactNode } from "react";

export function Sidebar({ children }: { children: ReactNode}) {
    return <div className="bg-dark-blue w-64 h-full p-4 ">{children}</div>   
}

export function SidebarItem({ children }: { children: ReactNode }) {
    return <div className="flex my-4 cursor-pointer text-white hover:bg-blue-200 p-2">{children}</div>
}