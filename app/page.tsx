'use client';

import HeroInfo, { HeroTheme } from '@/components/hero/HeroInfo';
import MainWrapper from '@/components/hero/MainWrapper';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CtaMain from '@/components/cta/CtaMain';
import TrendsSection from '@/components/trends/TrendsSection';
import FavoritesSection from '@/components/FavoritesSection';
import ExploreSection from '@/components/explore/ExploreSection';

export default function Page() {
  const slides = [
    {
      src: 'bg-slide-1.png',
      name: 'Dünya rap trendlerini konuşuyoruz',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: 'main' as HeroTheme
    },
    {
      src: 'bg-slide-2.png',
      name: 'Türkçe rap ve dünya müzik haberlerini takip et',
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      color: 'white' as HeroTheme
    }
  ];

  return (
    <div className='w-full h-screen relative overflow-x-hidden'>
      <Swiper className='w-full' modules={[Navigation, Pagination]} navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev'
      }}
        loop
        pagination={{
          clickable: true, el: '.custom-pagination'
        }}
        slidesPerView={1}
        spaceBetween={50}>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen w-full bg-cover bg-no-repeat bg-center overflow-hidden"
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              <ArrowRight className='absolute right-1/18 top-1/2 custom-next cursor-pointer hidden md:block' strokeWidth={1} color='white' size={48} />
              <ArrowLeft className='absolute left-1/18 top-1/2 custom-prev cursor-pointer hidden md:block' strokeWidth={1} color='white' size={48} />
              <div className="vector-img h-[100px] md:h-[250px]" />
              <MainWrapper>
                <HeroInfo name={slide.name} desc={slide.desc} color={slide.color} />
              </MainWrapper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination hidden md:flex" />

      <CtaMain />

      <section className='sections flex flex-col gap-8'>
        <TrendsSection />

        <div className='mb-32'>
          <FavoritesSection />
        </div>

        <ExploreSection />
      </section>

    </div>

  );
}
