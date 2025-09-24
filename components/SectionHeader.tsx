import React from 'react'

interface SectionHeaderProps {
    name: string;
    icon: React.ReactNode;
}

export default function SectionHeader({ name, icon }: SectionHeaderProps) {
    return (
        <header className='flex items-center gap-4 uppercase justify-center md:justify-start'>
            <h2 className=' text-white'>{name}</h2>
            {icon}
        </header>
    )
}
