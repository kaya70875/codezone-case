import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'default' | 'ghost';
    className?: string;
}

export default function Button({ children, variant = 'default', className, ...props }: ButtonProps) {

    const variants = {
        default: 'bg-white text-main uppercase font-[700]',
        ghost: 'text-white bg-main border border-gray-200'
    }

    return (
        <button className={`cursor-pointer px-7 py-2 flex items-center justify-center ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}
