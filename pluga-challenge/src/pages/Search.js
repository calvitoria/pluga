import React, { useContext } from 'react';
import toolsContext from '../context/toolsContext';
import Searchbar from '../components/Searchbar';
import ToolCard from '../components/ToolCard';
import DetailsCard from '../components/DetailsCard';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

function Search() {

    const {
        states: {
            dataAPI,
            searchedValues,
            showModal,
            currentPage,
            toolsPerPage },

        functions: { setCurrentPage } 
    } = useContext(toolsContext);

    const convertedSearch = searchedValues.toLowerCase();
    const filteredList = dataAPI.filter((tool) => tool.name.toLowerCase().includes(convertedSearch));

    const indexOfLastTool = currentPage * toolsPerPage;
    const indexOfFistTool = indexOfLastTool - toolsPerPage;
    const currentTools = filteredList.slice(indexOfFistTool, indexOfLastTool); // para achar o current, basta achar o intervalo entre o ultimo e o primeiro

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <main className='sm:px-6 md:px-14 lg:px-36'>
            <Header />
            <section className="">
                <Searchbar />
                {showModal ? (<DetailsCard />) : null}
                {
                    filteredList.length === 0 ? (
                        <p className='text-center mt-8 text-slate-600'>
                            Ops! Sua busca por {<span className='font-bold'> {searchedValues}  </span>} não encontrou nenhum resultado :(
                        </p>
                    )
                        : <>
                            <section className='flex flex-wrap justify-center'>
                                {currentTools.map((tool, index) => <ToolCard key={index} tool={tool} />)}
                            </section>

                            <Pagination toolsPerPage={toolsPerPage} totalTools={filteredList.length} paginate={paginate} />
                        </>
                }
            </section>
        </main>
    );
}

export default Search;