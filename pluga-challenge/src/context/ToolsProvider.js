import toolsContext from "./toolsContext";
import React, { useState, useEffect } from 'react';



function ToolsProvider({ children }) {
    const [dataAPI, setDataAPI] = useState([]);
    const [searchedValues, setSearchedValues] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [searchedTools, setSearchedTools] = useState([]);
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

    const context = { 
        dataAPI,
        setSearchedValues,
        searchedValues,
        showModal,
        setShowModal,
        modalData,
        setModalData,
        searchedTools,
        setSearchedTools,
        currentPage,
        setCurrentPage,
        toolsPerPage,
        setToolsPerPage
    };

    return (
        <toolsContext.Provider value={{context}}>
            { children }
        </toolsContext.Provider>
    )
}

export default ToolsProvider;