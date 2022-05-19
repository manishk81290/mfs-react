import {mount} from 'marketing/MFMarketing';
import React, {useRef, useEffect} from 'react';

const MFMarketing=()=>{
    const marketingRef=useRef(null);
    useEffect(()=>{
        mount(marketingRef.current);
    },[]);
    return <div ref={marketingRef}></div>
};

export default MFMarketing;