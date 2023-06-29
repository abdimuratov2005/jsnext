import React from 'react';

function Popup({children}) {
    return (
        <div className='popup'>
            {children}
        </div>
    );
}

export default Popup;