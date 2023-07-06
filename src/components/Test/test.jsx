'use client'
import React from 'react';

function Test({data}) {
    return (
        <>
            <div onClick={() => console.log(data)}>
                21321321312
            </div>
            <div onClick={() => console.log(data)}>
                21321321312
            </div>
            <div onClick={() => console.log(data)}>
                21321321312
            </div>
            <div onClick={() => console.log(data)}>
                21321321312
            </div>
        </>


    );
}

export default Test;