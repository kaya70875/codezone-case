import Image from 'next/image'
import React from 'react'
import label1 from '@/public/label-1.svg';
import label2 from '@/public/label2.svg';
import man from '@/public/man.png';
import woman from '@/public/woman.png';

export default function CtaMain() {
    return (
        <section className='relative w-full h-[75%] bg-navbar'>
            <div className=' flex flex-col items-center justify-center w-full mt-24 container mx-auto'>
                <Image src={label1} width={548} height={548} alt='label1' />
                <Image src={label2} width={248} height={248} alt='label2' />
            </div>

            <div className='container mx-auto'>
                <Image src={man} width={420} height={437} alt='man' className='absolute left-1/12 top-24 z-10' />
                <Image src={woman} width={303} height={530} alt='woman' className='absolute right-1/12 top-24 z-10' />
                <div className='cta-bg' />
            </div>
            <div className='vector-img h-[350px]' />
        </section>
    )
}
