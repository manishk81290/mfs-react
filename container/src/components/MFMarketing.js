import {mount} from 'marketing/MFMarketing';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const MFMarketing=()=>{
    const marketingRef=useRef(null);
    const history = useHistory();
    useEffect(()=>{
        const {onParentNavigate} = mount(marketingRef.current,{
            onNavigate:(location)=>{
                if(history.location.pathname!=location.pathname){
                    console.log('Route Changed!!');
                    history.push(location.pathname);
                }
            }
        });
        history.listen(onParentNavigate);
    },[]);
    return <div ref={marketingRef}></div>
};

export default MFMarketing;