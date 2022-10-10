import React, { useContext } from 'react';
import toolsContext from '../context/toolsContext';
import ToolCard from './ToolCard';

function DetailsCard() {

    const { context: {
        setShowModal,
        modalData,
        searchedTools,
    } } = useContext(toolsContext);

    const uniqueLastVisited = [...new Set(searchedTools)];
    const listOfVisited = uniqueLastVisited.slice(-3);
        
    
    return (
        <main className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
            ></div>

            {/* container card  */}
            <section className="flex items-center min-h-screen px-4 py-8">

                {/* div abaixo: card detalhado */}
                <div className="bg-gray-300 relative min-w-[780px] max-w-lg p-4 mx-auto bg-slate-300 rounded-md shadow-lg px-12">

                    {/* container "conteúdo" */}
                    <div className="my-12 sm:flex-col md:flex-col justify-around flex-col">

                        <div className="md:flex items-center justify-around w-full">
                            <img className="w-36" alt={`imagem da ferramenta ${modalData.name}`} src={modalData.icon} />
                            <div className="md:flex flex-col">
                                <p className='text-4xl mb-8 text-pluga text-center'> {modalData.name} </p>
                                <a href={modalData.link} className='bg-pluga rounded-full text-white text-center px-6 py-2 mt-1 text-lg' >Acessar</a>
                            </div>
                        </div>

                        {/* últimos visualizados */}                        
                        <div className="md:flex-col items-center justify-center w-full">
                            <p className='text-xl text-pluga text-center mt-6' > últimas ferramentas visualizadas </p>
                            <section className='flex justify-between'>
                            { listOfVisited.map((tool, index) => <ToolCard key={index} tool={tool} /> )}
                            </section>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default DetailsCard;