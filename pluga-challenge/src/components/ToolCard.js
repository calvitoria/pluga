import React, { useContext } from 'react';
import toolsContext from '../context/toolsContext';


function ToolCard({ tool }) {

    const {
        functions: {
            setShowModal,
            setModalData,
        }
    } = useContext(toolsContext);

    const setItemLocalStorage = (data) => localStorage.setItem('visitedTools', JSON.stringify(data));

    const populateLocalStorage = (tool) => {
        const localStorageVisitedTool = localStorage.getItem('visitedTools');
        if (localStorageVisitedTool) {
            const list = JSON.parse(localStorage.getItem('visitedTools'));
            const isRepeated = list.some((itemTool) => itemTool.app_id === tool.app_id);
            if (!isRepeated) {
                if (list.length === 3) {
                    list.shift();
                    list.push(tool);
                    setItemLocalStorage(list);
                } else {
                    list.push(tool);
                    setItemLocalStorage(list);
                }
            }

        } else {
            setItemLocalStorage([tool]);
        }
    }

    const handleToolCardClick = () => {
        setModalData(tool);
        setShowModal(true);
        populateLocalStorage(tool);
    }

    return (
        <div onClick={handleToolCardClick}
            className="sm:w-60 sm:h-60  md:w-60 md:h-60 lg:w-60 lg:h-60 xl:w-72 xl:h-72  flex justify-center items-center bg-slate-400 rounded-md m-5 
            uppercase cursor-pointer hover:drop-shadow-md border-2 border-slate-400 hover:border-slate-500">
            
            <div className=''>
                <img className="sm:w-32 md:w-24 lg:w-24 xl:w-36 pb-2" alt={`imagem da ferramenta ${tool.name}`} src={tool.icon} />
                <h1 className="sm:w-32 sm:text-xl  md:w-24 md:text-lg lg:w-24 xl:w-36 lg:text-xl text-white text-center"> {tool.name} </h1>
            </div>
        
        </div>
    );
}

export default ToolCard;