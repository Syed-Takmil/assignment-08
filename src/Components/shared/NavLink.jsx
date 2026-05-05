


"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathname=usePathname();
    const isActive=pathname==href;
    return <Link className={`${isActive?"text-blue-500 border-b-2 border-b-blue-600":''}`}
     href={href}>{children}</Link>
};

export default NavLink;