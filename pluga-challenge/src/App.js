import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToolsProvider from './context/ToolsProvider';
import Search from './pages/Search';



function App() {
  return (
    <ToolsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ToolsProvider>
  );
}

export default App;
