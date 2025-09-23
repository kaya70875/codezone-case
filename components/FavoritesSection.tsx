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
            <div className='container mx-auto flex items-center w-full justify-between'>
                <header className='uppercase w-full'>
                    <h2 className='text-5xl text-white font-bold w-12'>Ayın Favorileri</h2>
                </header>

                <div className='absolute w-screen right-0 max-w-2xl'>
                    <Swiper modules={[Scrollbar]} slidesPerView={2.2} spaceBetween={30} scrollbar={{ draggable: true, el: '.custom-scrollbar' }}>
                        {favoriteCards.map((card, idx) => (
                            <SwiperSlide key={idx}>
                                <FavoriteCard rank={card.rank} song={card.song} artist={card.artist} img={card.img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-scrollbar mt-8 h-[6px] bg-gray-700 rounded-full w-[90%]" />
                </div>
            </div>

        </section>
    )
}

function SocialsCard() {
    return (
        <div className="social-card flex items-center gap-8 w-2xl h-44 bg-white justify-center clip-section">
            <Image src={youtube} width={160} height={36} alt='youtube' className='mb-8' />
            <Image src={spotify} width={160} height={36} alt='spotify' className='mb-8 mr-12' />
        </div>
    )
}

function FavoriteCard({ rank, song, artist, img }: FavoriteCardProps) {
    return (
        <div className="relative flex items-center p-6 gap-6 bg-[#2A2A2A] text-white overflow-hidden group w-[274px] h-[264px]">
            <header className="flex flex-col items-center gap-4 w-full absolute left-12 group-hover:opacity-0 transition-all duration-400 ease-out">
                <div className="py-1 px-4 rounded-full text-lg bg-[#323232]">
                    Top 10 <span className="font-bold">({rank}. Sıra)</span>
                </div>

                <div className="flex flex-col text-xl w-full items-center">
                    <h3>{artist}</h3>
                    <h2 className="font-bold">{song}</h2>
                </div>
            </header>

            <Image
                src={img}
                alt="50 Cent Curtis"
                width={185}
                height={185}
                className="object-cover absolute -left-[40%] z-10 group-hover:left-12 top-1/2 -translate-y-1/2 w-[185px] h-[185px] rotate-[-12deg] group-hover:rotate-[0deg] transition-all duration-500 ease-out rounded-lg flex"
            />
        </div>
    )
}

