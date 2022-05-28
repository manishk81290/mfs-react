import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

//Define the mount function to render the HTML
const mount = (el,{onNavigate, defaultHistory}) => {
    const history =defaultHistory||createMemoryHistory();
    if(onNavigate){
        history.listen(onNavigate);
    }
    ReactDom.render(
        <App history={history} />,
        el
    );
    return {
        onParentNavigate(location){
            if(history.location.pathname!=location.pathname){
                console.log('Navigation occured in Container', location);
                history.push(location.pathname);
            }
        }
    }
}

//Check whether the app is running in development or in isolation then call the mount function
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}

//If the App is running from container export the mount function
export { mount };