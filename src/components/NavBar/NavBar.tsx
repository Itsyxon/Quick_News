'use client'
import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';

const NavBar = () => {
    const navLinks = [
        {
            name: 'News', href: '/news',
        },
        {
            name: 'About', href: '/about',
        },
        {
            name: 'Contact', href: '/contact',
        }
    ]

    return (
        <nav className='bg-[#111] text-white'>
            <Container>
                <ul className='flex gap-10 py-4'>
                    {navLinks.map((navLink) => {
                        return (
                            <Link href={navLink.href} key={navLink.name}>{navLink.name}</Link>
                        )
                    })}
                </ul>
            </Container>
        </nav>
    );
};

export default NavBar;