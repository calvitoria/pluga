import React from 'react';

function Pagination({ toolsPerPage, totalTools, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTools / toolsPerPage); i += 1) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='flex justify-center'>
               { pageNumbers.map((pageNumber, index) => 
               (
               <li key={index} onClick={() => paginate(pageNumber)} className='hover:bg-slate-200 text-slate-600 font-semibold px-4  py-2 my-4 hover:text-pluga cursor-pointer active:bg-pluga/50 active:text-white hover:underline focus:underline'>
                    <a href='#!' className='active:bg-pluga/50'>
                        {pageNumber}
                    </a>
                </li>
               )
                )}
            </ul>
        </nav>
    );
}

export default Pagination;