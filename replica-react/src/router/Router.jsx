import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/Pages/Home/Home'
import Discover from '../components/Pages/Discover/Discover'
import Join from '../components/Pages/Join/Join'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/join" element={<Join/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router



//creamos las rutas para poder enlazar las paginas en el local host