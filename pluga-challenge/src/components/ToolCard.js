import React, { useContext } from 'react';
import toolsContext from '../context/toolsContext';


function ToolCard({ tool }) {

    const { context: {
        setShowModal,
        setModalData,
    } } = useContext(toolsContext);

    const buildModal = () => {
        setModalData(tool);
        setShowModal(true);
    }

    return (
        <div className="flex items-center justify-center h-60">
            <button
                className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md"
                type="button"
                onClick={ buildModal }
            >
                <div>
                    <img width="50px" alt={`imagem da ferramenta ${tool.name}`} src={tool.icon} />
                    <h1> {tool.name} </h1>
                </div>
            </button>
        </div>
    );
}

export default ToolCard;