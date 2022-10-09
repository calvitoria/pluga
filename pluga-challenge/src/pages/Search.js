import React, { useContext } from 'react';
import toolsContext from '../context/toolsContext';
import Searchbar from '../components/Searchbar';
import ToolCard from '../components/ToolCard';
import DetailsCard from '../components/DetailsCard';


function Search() {

    const { context: {
        dataAPI,
        searchedValues,
        showModal,
    } } = useContext(toolsContext);

    const convertedSearch = searchedValues.toLowerCase();

    const filteredList = dataAPI.filter((tool) => tool.name.toLowerCase().includes(convertedSearch));

    return (
        <main>
            <section>
                <Searchbar />
                { showModal ? ( <DetailsCard /> ) : null }
                {
                    filteredList.length === 0 ? (
                        <p>Ops, não encontramos nenhuma ferramenta com este nome!</p>
                    )
                        : <section>
                            {
                                filteredList.map((tool, index) => <ToolCard key={index} tool={tool} />)
                            }
                        </section>
                }
            </section>
        </main>
    );
}

export default Search;