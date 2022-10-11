import React from 'react';

function Pagination() {
    
    return (
        <header>
            <nav className='flex justify-between items-center w-full py-6'>
                <a target='blank' href='https://pluga.co/'>
                    <img
                        alt='logo da pluga'
                        className='w-20'
                        src='https://user-images.githubusercontent.com/95686401/194949372-1ef11790-6496-4a60-b318-526283e4ad68.png'
                    />
                </a>
                <a
                    target='blank'
                    href='https://github.com/calvitoria/pluga-challenge'
                    className='font-semibold text-pluga/80 rounded-full hover:bg-pluga/60 hover:text-white px-4 py-1'>
                    {'>'}_CODE
                </a>
            </nav>
        </header>
    );
}

export default Pagination;