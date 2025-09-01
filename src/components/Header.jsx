import React from 'react';

const Header = () => {
    return (
        <div className="px-2 md:px-12 py-8 bg-[#F0EDED] bg-hero-pattern bg-[length:1400px]">

        <div className="min-h-screen min-w-screen font-sans">
            <div className="relative flex justify-between">
            <p className="font-semibold text-2xl text-[#E76F51]">Azlia Nisrina Afifah</p>
            <nav className="relative flex items-center">
                <ul className="relative flex gap-10 text-white text-lg font-semibold">
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Contact</a></li>
                </ul>
            </nav>
            </div>
        </div>
        </div>
    );
};

export default Header;