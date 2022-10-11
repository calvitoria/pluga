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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <main className='sm:px-12 md:px-24 lg:px-36 xl:px-96'>
            <Header />
            <Searchbar />
            <section className="grid justify-items-center">
                {showModal ? (<DetailsCard />) : null}
                
                {
                    filteredList.length === 0 ? (
                        <div className='text-center'>
                            <p className='text-center mt-8 text-slate-600'>
                                Ops! Sua busca por {<span className='font-bold'> {searchedValues}  </span>} não encontrou nenhum resultado :(
                            </p>

                            <a
                                href='/'
                                className='cursor-pointer hover:text-pluga underline text-center text-normal mt-8 text-slate-600'>
                                Voltar para página inicial
                            </a>

                        </div>
                    )
                        : <>
                            <section className='sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-fit content-center my-8'>
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