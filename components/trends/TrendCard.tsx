import Image from 'next/image';
import React from 'react'

interface TrendCardProps {
    author: {
        name: string;
    }
    desc: string;
    img?: string;
    date?: string;
}

export default function TrendCard({ author, desc, img, date }: TrendCardProps) {
    const formattedDate = date
        ? new Date(date).toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
        : "";

    return (
        <div className='flex flex-col md:flex-row gap-4 items-start w-full'>
            {img && (
                <div className='flex flex-col gap-4 w-full'>
                    <Image src={img} width={258} height={258} alt='image' className='w-full object-cover' />
                    <p className='text-gray-400 text-sm'>{formattedDate}</p>
                </div>
            )}
            <div className='flex flex-col gap-4 text-white max-w-sm'>
                <header className='flex items-center gap-4'>
                    <p className='text-sm opacity-90'>{author.name}</p>
                </header>

                <p className='text-xl font-semibold'>{desc}</p>

                <div className="w-full h-[1px] bg-white opacity-40" />
                <p className='text-sm opacity-90 cursor-pointer'>Daha Fazla Oku</p>
            </div>
        </div>
    )
}
