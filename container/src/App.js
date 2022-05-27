import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import MFMarketing from './components/MFMarketing';

const generateClassName=createGenerateClassName({
    productionPrefix: 'mf-con',
});

export default ()=>{
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Header />
            <MFMarketing />
        </BrowserRouter>
    </StylesProvider>
};