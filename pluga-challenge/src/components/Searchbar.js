import toolsContext from '../context/toolsContext';
import React, { useContext } from 'react';

function Searchbar() {
    const { functions: { setSearchedValues, setCurrentPage } } = useContext(toolsContext);


    const setsSearchedValues = ({ target: { value } }) => { // pega o que for digitado e manda para o context.
        setCurrentPage(1);
        setSearchedValues(value);
    }


    return (
        <div>
            <label htmlFor='searchField' className='relative block' >
                <span className="text-2xl text-slate-400 pt-1 material-symbols-outlined absolute inset-y-0 left-0 flex items-center pl-4">
                    search
                </span>
                <input
                    id='searchField'
                    className='border-2 border-slate-400 focus:ring-sky-500 py-2 w-full text-pluga focus:outline-none 
                focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md px-12 lg:py-3'
                    type='text'
                    placeholder='Buscar +60 ferramentas'
                    onChange={setsSearchedValues}
                />
            </label>
        </div>
    );
}

export default Searchbar;