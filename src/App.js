import logo from './logo.svg';
import Login from "./Components/Views/Login";
import './App.css';
import { Route, Translator, Routes, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/translator" element={<Translator />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;