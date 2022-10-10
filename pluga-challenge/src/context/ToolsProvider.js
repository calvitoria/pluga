import toolsContext from "./toolsContext";
import React, { useState, useEffect } from 'react';



function ToolsProvider({ children }) {
    const [dataAPI, setDataAPI] = useState([]);
    const [searchedValues, setSearchedValues] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [toolsPerPage, setToolsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const getAPIdata = async () => {
          const response = await fetch('https://pluga.co/ferramentas_search.json');
          const dataAPI = await response.json();
          setDataAPI(dataAPI);
        };
        getAPIdata();
      }, []);

    const states = { 
        dataAPI,
        searchedValues,
        showModal,
        modalData,
        currentPage,
        toolsPerPage,
    };

    const functions = { 
        setSearchedValues,
        setShowModal,
        setModalData,
        setCurrentPage,
        setToolsPerPage
    };

    return (
        <toolsContext.Provider value={{states, functions}}>
            { children }
        </toolsContext.Provider>
    )
}

export default ToolsProvider;