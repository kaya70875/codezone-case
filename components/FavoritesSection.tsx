import Image, { StaticImageData } from 'next/image'
import React from 'react'
import youtube from '@/public/youtube.svg';
import spotify from '@/public/spotify.svg';
import cent from '@/public/50-cent.png';
import dogg from '@/public/dogg.png';
import ceza from '@/public/ceza.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

interface FavoriteCardProps {
    rank: string;
    song: string;
    artist: string;
    img: StaticImageData;
}

export default function FavoritesSection() {

    const favoriteCards = [
        {
            rank: '2',
            song: 'CURTIS',
            artist: '50 Cent',
            img: cent
        },
        {
            rank: '3',
            song: 'ALGORITHM',
            artist: 'Snopp Dogg',
            img: dogg
        },
        {
            rank: '1',
            song: 'RÜZGAR',
            artist: 'Ceza',
            img: ceza
        }
    ] as FavoriteCardProps[];

    return (
        <section className='flex flex-col gap-12 relative'>
            <SocialsCard />
            <div className='container mx-auto flex flex-col md:flex-row gap-12 h-full items-center w-full justify-center'>
                <header className='uppercase w-full flex items-center md:items-start justify-center md:justify-start mb-64 md:mb-0'>
                    <h2 className='text-white w-1/2 md:w-12 text-center md:text-start'>Ayın Favorileri</h2>
                </header>

                <div className='w-full h-full'>
                    <div className='absolute w-screen right-0 top-1/2 max-w-2xl px-8'>
                        <Swiper modules={[Scrollbar]} slidesPerView={1.2} breakpoints={{
                            768: {
                                slidesPerView: 2.2,
                                spaceBetween: 30
                            }
                        }} spaceBetween={10} scrollbar={{ draggable: true, el: '.custom-scrollbar' }}>
                            {favoriteCards.map((card, idx) => (
                                <SwiperSlide key={idx}>
                                    <FavoriteCard rank={card.rank} song={card.song} artist={card.artist} img={card.img} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-scrollbar mt-8 h-[6px] bg-gray-700 rounded-full w-[90%]" />
                    </div>
                </div>

            </div>
        </section>
    )
}

function SocialsCard() {
    return (
        <div className="social-card flex items-center gap-0 md:gap-8 w-xs md:w-2xl h-20 md:h-44 bg-white justify-center clip-section">
            <Image src={youtube} alt='youtube' className='mb-4 md:mb-8 w-[160px] h-[22px] md:h-[36px]' />
            <Image src={spotify} alt='spotify' className='mb-4 md:mb-8 mr-12 w-[160px] h-[24px] md:h-[48px]' />
        </div>
    )
}

function FavoriteCard({ rank, song, artist, img }: FavoriteCardProps) {
    return (
        <div className="relative flex flex-col-reverse md:flex-row items-center py-6 gap-12 bg-[#2A2A2A] text-white overflow-hidden group w-[274px] h-full md:h-[264px]">
            <header className="flex flex-col items-center gap-4 w-full static md:absolute left-12 group-hover:opacity-0 transition-all duration-400 ease-out">
                <div className="py-1 px-4 rounded-full text-lg bg-[#323232]">
                    Top 10 <span className="font-bold">({rank}. Sıra)</span>
                </div>

                <div className="flex flex-row md:flex-col text-xl w-full items-center justify-center gap-4 md:gap-0 uppercase">
                    <p>{artist}</p>
                    <span className='font-bold'>{song}</span>
                </div>
            </header>

            <Image
                src={img}
                alt={artist}
                width={185}
                height={185}
                className="object-cover static md:absolute -left-[40%] z-10 group-hover:left-12 top-1/2 -translate-0 md:-translate-y-1/2 w-[140px] md:w-[185px] h-[140px] md:h-[185px] rotate-[-12deg] group-hover:rotate-[0deg] transition-all duration-500 ease-out rounded-lg flex"
            />
        </div>
    )
}

