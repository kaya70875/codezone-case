import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'default' | 'ghost';
}

export default function Button({ children, variant = 'default', ...props }: ButtonProps) {

    const variants = {
        default: 'bg-white text-navbar uppercase font-[700]',
        ghost: 'border-white text-white bg-navbar'
    }

    return (
        <button className={`cursor-pointer px-7 py-2 flex items-center justify-center ${variants[variant]}`} {...props}>
            {children}
        </button>
    )
}
