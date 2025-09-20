import React from 'react'

interface SectionHeaderProps {
    name: string;
    icon: React.ReactNode;
}

export default function SectionHeader({ name, icon }: SectionHeaderProps) {
    return (
        <header className='flex items-center gap-4 uppercase'>
            <h2 className='text-5xl font-bold text-white'>{name}</h2>
            {icon}
        </header>
    )
}
