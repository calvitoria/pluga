import React, { useContext } from 'react';
import toolsContext from '../context/toolsContext';


function ToolCard({ tool }) {

    const { context: {
        setShowModal,
        setModalData,
        // searchedTools,
        // setSearchedTools,
    } } = useContext(toolsContext);

    const handleToolCardClick = () => { // clicar - dar push no array que é mandado para o localStorage
        // const visitedT = searchedTools;
        const listOfVisitedTools = [];
        listOfVisitedTools.push(tool);
        setModalData(tool);
        setShowModal(true);
        // setSearchedTools(visitedT);
        localStorage.setItem('lastVisitedTools', JSON.stringify(listOfVisitedTools));
    }

    return (
        <div onClick={ handleToolCardClick } 
        className="flex justify-center items-center bg-slate-400 rounded-md m-5 
        w-48 h-48 cursor-pointer hover:drop-shadow-md border-2 border-slate-400 hover:border-slate-500">
                <div className='uppercase'>
                    <img className="w-20 pb-2" alt={`imagem da ferramenta ${tool.name}`} src={tool.icon} />
                    <h1 className="text-white text-center w-20"> {tool.name} </h1>
                </div>
        </div>
    );
}

export default ToolCard;