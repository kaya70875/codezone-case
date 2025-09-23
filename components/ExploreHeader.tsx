import React from 'react'
import SectionHeader from './SectionHeader'
import { CompassIcon, MenuIcon, SearchIcon, SquareMenu } from 'lucide-react'

export default function ExploreHeader() {
    return (
        <div className='flex items-center justify-between w-full'>
            <SectionHeader icon={<CompassIcon size={48} color='#F0E74D' />} name='Keşfet' />
            <div className="icons flex items-center gap-4">
                <SearchIcon color='white' strokeWidth='3' />
                <MenuIcon color='white' strokeWidth='3' />
                <SquareMenu color='white' strokeWidth='3' />
            </div>
        </div>
    )
}
