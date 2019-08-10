import React from 'react';
const Container = props => {
    return (
        <div className='component'>
            {props.children}
        </div>
        );
}
export default Container;