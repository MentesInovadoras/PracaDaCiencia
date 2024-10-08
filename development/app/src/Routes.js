import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={
                    <Home></Home>
                }
            />
            <Route exact path="/home" element={<div>Home</div>} />
        </Routes>
    );
}
