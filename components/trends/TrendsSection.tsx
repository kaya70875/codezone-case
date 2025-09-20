import { TrendingUpIcon } from 'lucide-react'
import React from 'react'
import TrendCard from './TrendCard'
import data from '@/data.json';
import SectionHeader from '../SectionHeader';

export default function TrendsSection() {

    const trends = data.filter((entry) => (
        entry.attributes.trends
    ))

    return (
        <section className='container mx-auto flex flex-col gap-8 w-full mb-12'>
            <SectionHeader icon={<TrendingUpIcon color='#F0E74D' size={48} />} name='Trending' />
            <div className="cards">
                {trends.map((trend, idx) => (
                    <div className='flex gap-4' key={idx}>
                        <span className='text-white text-4xl font-bold opacity-30'>0{idx + 1}</span>
                        <TrendCard author={{ name: trend.attributes.authors[0] }} desc={trend.attributes.desc} key={idx} />
                    </div>
                ))}
            </div>

        </section>
    )
}