import React, { useContext } from 'react';
import toolsContext from '../context/toolsContext';

function DetailsCard() {

    const { context: {
        setShowModal,
        modalData,
    } } = useContext(toolsContext);

    return (
        <section className='modalContainer '>            
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3 sm:flex">
                        <p> {modalData.name} </p>
                        <p className='font-bold'> {modalData.name} </p>
                        <img width="50px" alt={`imagem da ferramenta ${modalData.name}`} src={modalData.icon} />
                            <div className="items-center gap-2 mt-3 sm:flex">
                                <button
                                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                    onClick={() =>
                                        setShowModal(false)
                                    }
                                >
                                    X
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailsCard;