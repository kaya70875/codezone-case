import discord from '@/public/discord.svg'
import facebook from '@/public/facebook.svg';
import spotify from '@/public/spotify-2.svg';
import twitter from '@/public/twitter.svg';
import youtube from '@/public/youtube-2.svg';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function Closing() {

    const links = ['Haberler', 'Etkinlikler', 'Müzikler', 'Videolar', 'İletişim'];
    const images = [
        {
            name: 'facebook',
            src: facebook
        },
        {
            name: 'twitter',
            src: twitter
        },
        {
            name: 'discord',
            src: discord
        },
        {
            name: 'spotify',
            src: spotify
        },
        {
            name: 'youtube',
            src: youtube
        }
    ]

    return (
        <section className='flex flex-col gap-20'>
            <h3 className='uppercase text-white'>Gelişmelerden İlk Sen Haberdar Ol!</h3>
            <section className="email flex items-center px-4 w-full justify-between border-b border-b-[#3B3B3B] py-4 font-medium uppercase">
                <p className='text-white'>Email</p>
                <div className='flex items-center gap-2 text-[#F0E74D]'>
                    <p>Gönder</p>
                    <ArrowRight />
                </div>
            </section>

            <section className="socials flex items-center gap-6 text-[#F0E74D] cursor-pointer">
                {images.map((img, idx) => (
                    <Image src={img.src} alt={img.name} key={idx} />
                ))}
            </section>

            <section className='flex flex-col gap-8'>
                <div className="links grid grid-cols-3 gap-4">
                    {links.map((link, idx) => (
                        <p className='text-white opacity-90 uppercase font-light cursor-pointer' key={idx}>{link}</p>
                    ))}
                </div>
                <p className='text-white opacity-30'>© RAPKOLOGY All Rights Are Reserved 2022.</p>
            </section>
        </section>
    )
}
