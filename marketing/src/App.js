import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName=createGenerateClassName({
    productionPrefix:'mf-mar',
})

export default ()=>{
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} />
                    <Route path='/' component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}