import React from 'react'

interface MainWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export default function MainWrapper({ children, className }: MainWrapperProps) {
    return (
        <main className={`mt-[90px] container mx-auto w-full p-6 ${className}`}>
            {children}
        </main>
    )
}
