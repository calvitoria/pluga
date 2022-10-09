import toolsContext from '../context/toolsContext';
import React, { useContext } from 'react';

function Searchbar() {
    const { context: { setSearchedValues } } = useContext(toolsContext);

 
    const setsSearchedValues = ({ target: { value } }) => { // pega o que for digitado e manda para o context.
        setSearchedValues(value);
    } 

    return (
        <section>
        <div>
            <h1>search</h1>
            <input
                type="text"
                placeholder="Buscar +60 ferramentas"
                onChange={ setsSearchedValues }
            />
        </div>
    </section>
    );
}

export default Searchbar;