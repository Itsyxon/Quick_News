'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const TitleBlock = () => {
    const pathName = usePathname()
    return (
        <div className='my-10 text-5xl border-b-4 border-[--secondary] text-[--secondary] font-bold'>
            {pathName[1].toUpperCase() + pathName.slice(2)}
        </div>
    );
};

export default TitleBlock;