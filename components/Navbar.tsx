import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg';
import { SearchIcon } from 'lucide-react';
import Button from './Button';

export default function Navbar() {

    const LINKS = ['Haberler', 'Etkinlikler', 'Müzikler', 'Videolar', 'İletişim'];

    return (
        <nav className='bg-navbar/60 backdrop-blur-xs text-white py-4 px-24 flex items-center w-full justify-between border-b border-[#2A2A2A] fixed top-0 z-10'>
            <div className='flex items-center gap-24'>
                <Image src={logo} width={224} height={224} alt='logo' />
                <div className="links flex items-center gap-8">
                    {LINKS.map((link, idx) => (
                        <p key={idx} className='cursor-pointer uppercase'>{link}</p>
                    ))}
                </div>
            </div>

            <div className='flex items-center gap-8'>
                <SearchIcon color='white' strokeWidth={3} />
                <Button className='max-w-2xl'>Giriş Yap</Button>
            </div>
        </nav>
    )
}
