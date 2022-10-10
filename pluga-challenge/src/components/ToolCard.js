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
        <div onClick={ buildModal } 
        className="flex justify-center items-center bg-slate-400 rounded-md m-5 
        w-48 h-48 cursor-pointer hover:drop-shadow-md">
                <div className=''>
                    <img className="w-20 pb-2" alt={`imagem da ferramenta ${tool.name}`} src={tool.icon} />
                    <h1 className="text-white text-center w-20"> {tool.name} </h1>
                </div>
        </div>
    );
}

export default ToolCard;