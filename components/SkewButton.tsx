import React from "react";

interface SkewButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'white';
    children: React.ReactNode;
    className?: string;
}

export default function SkewButton({ variant = 'default', children, className, ...props }: SkewButtonProps) {

    const variants = {
        default: 'before:bg-accent',
        white: 'before:bg-white'
    }

    return (
        <button className={`px-6 py-3 w-1/4 font-bold cursor-pointer clip-button ${className} ${variants[variant]}`} {...props}>
            {children}
        </button>
    )
}
