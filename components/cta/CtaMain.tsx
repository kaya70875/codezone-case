import Image from 'next/image'
import React from 'react'
import label1 from '@/public/label-1.svg';
import label2 from '@/public/label2.svg';
import man from '@/public/man.png';
import woman from '@/public/woman.png';

export default function CtaMain() {
    return (
        <section className='relative w-full h-[75%] bg-main'>
            <div className=' flex flex-col items-center justify-center w-full mt-24'>
                <Image src={label1} width={548} height={548} alt='label1' />
                <Image src={label2} width={248} height={248} alt='label2' />
            </div>

            <div className=''>
                <Image src={man} alt='man' className='absolute -left-20 md:left-0 lg:left-1/12 top-52 md:top-24 z-10 w-[281px] md:w-[420px] h-[293px] md:h-[437px]' />
                <Image src={woman} alt='woman' className='absolute -right-20 md:right-0 lg:right-1/12 top-52 md:top-24 z-10 w-[221px] md:w-[303px] h-[387px] md:h-[530px]' />
                <div className='cta-bg' />
            </div>
            <div className='vector-img h-[250px] md:h-[350px]' />
        </section>
    )
}
