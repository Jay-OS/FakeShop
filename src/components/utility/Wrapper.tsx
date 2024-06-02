import React from 'react';

export default function Wrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`max-w-5xl my-0 mx-auto px-8 xl:px-0 ${className}`}>
            {children}
        </div>
    );
}
