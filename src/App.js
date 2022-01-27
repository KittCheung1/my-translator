import logo from './logo.svg';
import Login from "./Components/Views/Login";
import Translator from "./Components/Views/Translator";

import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/translator" element={<Translator />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;