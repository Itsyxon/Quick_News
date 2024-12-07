import React from 'react';

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='container mx-auto px-15 md:px-10'>
            {children}
        </div>
    );
};