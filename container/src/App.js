import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MFMarketing from './components/MFMarketing';

export default ()=>{
    return <BrowserRouter>
        <Header />
        <MFMarketing />
    </BrowserRouter>
};