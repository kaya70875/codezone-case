import React from 'react'

export default function MainWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className='mt-[90px] container mx-auto w-full p-6'>
            {children}
        </main>
    )
}
