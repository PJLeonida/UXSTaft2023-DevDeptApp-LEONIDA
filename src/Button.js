import React from 'react'

export function Button (props) {
    console.log(props.onClick)
    return (
        <button 
            onClick = {props.onClick}
            className='hover:text-tertiary'>
            {props.text && props.text.toString()}
        </button>
    )
}
