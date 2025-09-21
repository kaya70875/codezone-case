import React from 'react'
import SkewButton from '../SkewButton';

interface HeroInfoProps {
    name: string;
    desc: string;
}

export default function HeroInfo({ name, desc }: HeroInfoProps) {
    return (
        <div className='flex flex-col gap-8 w-full items-end justify-end mt-24'>
            <div className='flex flex-col gap-4 text-main max-w-2xl'>
                <h1 className='text-6xl font-bold uppercase'>{name}</h1>
                <p className='max-w-2xl w-full font-light text-lg'>{desc}</p>
                <SkewButton>Devamını Oku</SkewButton>
            </div>
        </div>
    )
}
