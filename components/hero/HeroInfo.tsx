import React from 'react'
import SkewButton from '../SkewButton';

export type HeroTheme = 'main' | 'white';

interface HeroInfoProps {
    name: string;
    desc: string;
    color: HeroTheme
}

export default function HeroInfo({ name, desc, color = 'main' }: HeroInfoProps) {
    return (
        <div className='flex flex-col gap-8 w-full items-center md:items-end justify-center md:justify-end mt-4 md:mt-24'>
            <div className={`flex flex-col gap-6 text-${color} max-w-2xl items-center md:items-start text-center md:text-start`}>
                <h1 className='text-6xl font-bold uppercase'>{name}</h1>
                <p className='max-w-2xl w-full font-light text-lg'>{desc}</p>
                <SkewButton>Devamını Oku</SkewButton>
            </div>
        </div>
    )
}
