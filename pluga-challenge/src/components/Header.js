import React from 'react';

function Pagination({ toolsPerPage, totalTools, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTools / toolsPerPage); i += 1) {
        pageNumbers.push(i);
    }

    return (
        <header>
            <nav className='flex justify-between items-center w-full pt-4 px-16'>
                <a target='blank' href='https://pluga.co/'>
                    <img
                        alt='logo da pluga'
                        className='w-20'
                        src='https://user-images.githubusercontent.com/95686401/194949372-1ef11790-6496-4a60-b318-526283e4ad68.png'
                    />
                </a>
                <a
                    target='blank'
                    href='https://github.com/calvitoria/pluga'
                    className='font-semibold text-pluga/80 rounded-full hover:bg-pluga/60 hover:text-white px-4 py-1'>
                    GitHub
                </a>
            </nav>
        </header>
    );
}

export default Pagination;