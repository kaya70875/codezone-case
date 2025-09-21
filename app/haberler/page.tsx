import MainWrapper from '@/components/hero/MainWrapper'
import Image from 'next/image'
import React from 'react'
import blogHero from '@/public/blog-hero.png';

export default function page() {
    return (
        <div className='relative h-screen bg-amber-300'>
            <MainWrapper className='flex flex-col gap-4'>
                <h2 className='text-main text-4xl font-bold'>BLOG</h2>
                <section className="hero flex items-start w-full gap-4">
                    <div className='hero-card flex flex-col gap-4 w-full max-w-2xl relative h-96'>
                        <Image src={blogHero} alt='hero' fill className='object-cover w-full' priority />
                        <div className=''>HEY</div>
                    </div>
                    <div className='other-cards flex flex-col gap-4'>

                    </div>
                </section>
            </MainWrapper>

            <div className='vector-img' />
        </div>
    )
}
