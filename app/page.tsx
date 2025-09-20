'use client';

import HeroInfo from '@/components/hero/HeroInfo';
import MainWrapper from '@/components/hero/MainWrapper';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
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
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      src: 'bg-slide-2.png',
      name: 'Türkçe rap ve dünya müzik haberlerini takip et',
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  return (
    <div className='w-full h-screen'>
      <Swiper modules={[Navigation]} navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev'
      }} loop>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen w-full bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              <ArrowRight className='absolute right-1/18 top-1/2 custom-next cursor-pointer' strokeWidth={1} color='white' size={48} />
              <ArrowLeft className='absolute left-1/18 top-1/2 custom-prev cursor-pointer' strokeWidth={1} color='white' size={48} />
              <div className="vector-img h-[250px]" />
              <MainWrapper>
                <HeroInfo name={slide.name} desc={slide.desc} />
              </MainWrapper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <CtaMain />

      <section className='sections flex flex-col gap-24'>
        <TrendsSection />

        {/*<FavoritesSection />*/}

        <ExploreSection />
      </section>

    </div>

  );
}
