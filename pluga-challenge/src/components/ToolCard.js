import React, { useContext } from 'react';
import toolsContext from '../context/toolsContext';


function ToolCard({ tool }) {

    const { context: {
        setShowModal,
        setModalData,
        searchedTools,
        setSearchedTools,
    } } = useContext(toolsContext);

    const buildModal = () => {
        const visitedT = searchedTools;
        visitedT.push(tool);
        setModalData(tool);
        setShowModal(true);
        setSearchedTools(visitedT);
    }

    return (
            <button
                className="bg-slate-400 rounded-md w-48 flex-col justify-center items-center m-4 px-8 pt-8 pb-8 min-h-[220px]"
                type="button"
                onClick={ buildModal }
            > 
                <div className='flex-col justify-center'>
                    <img className="w-20 mt-4" alt={`imagem da ferramenta ${tool.name}`} src={tool.icon} />
                    <h1 className="w-20 text-center text-white text-lg pt-2"> {tool.name} </h1>
                </div>
            </button>
    );
}

export default ToolCard;