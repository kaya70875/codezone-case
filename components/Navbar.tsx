import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg';
import { SearchIcon } from 'lucide-react';
import Button from './Button';
import hamburgerMenu from '@/public/hamburger.svg';

export default function Navbar() {

    const LINKS = ['Haberler', 'Etkinlikler', 'Müzikler', 'Videolar', 'İletişim'];

    return (
        <nav className='bg-main/60 backdrop-blur-xs text-white py-4 px-8 xl:px-24 flex items-center w-full justify-between border-b border-[#2A2A2A] fixed top-0 z-50'>
            <div className='flex items-center gap-8 xl:gap-24'>
                <Image src={logo} width={224} height={224} alt='logo' />
                <div className="links items-center gap-8 hidden xl:flex">
                    {LINKS.map((link, idx) => (
                        <p key={idx} className='cursor-pointer uppercase'>{link}</p>
                    ))}
                </div>
            </div>

            <div className='flex items-center gap-8 relative'>
                <SearchIcon color='white' strokeWidth={3} className='hidden xl:block' />
                <Button className='max-w-2xl hidden xl:block'>Giriş Yap</Button>
                <Image src={hamburgerMenu} alt='hamburger' className='flex xl:hidden' />
            </div>
        </nav>
    )
}
