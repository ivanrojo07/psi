import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function SidebarLink({ href, active, children }) {
    return(<Link href={href} className={
        active
            ? 'w-full flex items-center text-blue-400 h-10 pl-4 bg-gray-200 hover:bg-gray-200 rounded-lg cursor-pointer'
            :
            'w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer'
    }>
        {children}
    </Link>)
}