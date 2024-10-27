import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-secondary shadow-md p-4">
            <div className="flex items-center justify-between">
                {/* Title */}
                <Link to="/" className="text-lg font-bold text-white">
                <h1 className="text-4xl font-bold text-textLight text-center tracking-wide font-fun">
                    YChat
                </h1>
                </Link>

                <Link to="/about" className="text-textLight hover:underline text-lg font-semibold">
                    About
                </Link>
            </div>
        </header>
    );
}
