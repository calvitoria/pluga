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
            const isRepeted = list.some((itemTool) => itemTool.app_id === tool.app_id);
            if (!isRepeted) {
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
            className="flex justify-center items-center bg-slate-400 rounded-md m-5 
            uppercase w-48 h-48 cursor-pointer hover:drop-shadow-md border-2 border-slate-400 hover:border-slate-500">
            <div className=''>
                <img className="w-20 pb-2" alt={`imagem da ferramenta ${tool.name}`} src={tool.icon} />
                <h1 className="text-white text-center w-20"> {tool.name} </h1>
            </div>
        </div>
    );
}

export default ToolCard;