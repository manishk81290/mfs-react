import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

//Define the mount function to render the HTML
const mount = (el) => {
    ReactDom.render(
        <App />,
        el
    );
}

//Check whether the app is running in development or in isolation then call the mount function
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}

//If the App is running from container export the mount function
export { mount };