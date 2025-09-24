import React, { SetStateAction, useEffect, useState } from 'react'
import data from '@/data.json';
import TrendCard from '../trends/TrendCard';
import Button from '../Button';
import Closing from '../Closing';
import ExploreHeader from '../ExploreHeader';

interface FiltersProps {
    activeFilter: string;
    setActiveFilter: React.Dispatch<SetStateAction<string>>;
    className?: string;
}

interface Card {
    _id: string;
    user_id: string;
    type: string;
    attributes: {
        trends: boolean;
        category: string[];
        tags: string[];
        authors: string[];
        title: string;
        slug: string;
        content: string;
        seo: {
            metaTitle: string;
            canonicalURL: string;
            metaDescription: string;
        };
        desc: string;
        img: string;
    };
    lang: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default function ExploreSection() {

    const [activeFilter, setActiveFilter] = useState('Türk Rap');
    const [cards, setCards] = useState<Card[]>(data);

    useEffect(() => {
        setCards(
            data.filter((card) => (
                card.attributes.tags.includes(activeFilter)
            ))
        )
    }, [activeFilter])

    return (
        <div className='container mx-auto flex flex-col gap-8 md:gap-0 xl:flex-row items-start w-full justify-between p-4'>
            <section className='flex flex-col gap-8'>
                <ExploreHeader />
                <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} className='block xl:hidden' />
                <div className='card flex flex-col gap-12'>
                    {cards.length > 0 ? (
                        cards.map((card, idx) => (
                            <TrendCard author={{ name: card.attributes.authors[0] }} img={card.attributes.img} desc={card.attributes.desc} date={card.createdAt} key={idx} />
                        ))
                    ) : (
                        <span className='text-2xl font-medium text-white'>İstediğiniz kategoriye uygun haber bulunamadı.</span>
                    )}
                </div>
            </section>

            <section className="flex flex-col gap-24 max-w-xl">
                <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} className='hidden xl:block' />
                <Closing />
            </section>

        </div>
    )
}

function Filters({ activeFilter, setActiveFilter, className }: FiltersProps) {

    const filterButtons = ['Türk Rap', 'Yabancı Rap', 'Rap Haberleri', 'Haftanın Videoları', 'Ayın Videoları', 'Rap Sohbetleri', 'Rap Müsabakaları'];

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <h3 className='uppercase text-white'>Ne Görmek İstersin ?</h3>
            <div className="button flex gap-2 max-w-full md:max-w-lg flex-wrap">
                {filterButtons.map((button, idx) => (
                    <Button className={`${button == activeFilter ? 'active' : ''}`} key={idx} variant='ghost' onClick={() => setActiveFilter(button)}>{button}</Button>
                ))}
            </div>
        </div>
    )
}
