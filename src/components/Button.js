import React from 'react'

const Button = ({
    bgColor = '#ed7801',
    title = '',
    className = '',
    onClick = () => { }
}) => {
    return (
        <button
            onClick={onClick}
            className={`bg-[${bgColor}] p-2 rounded grow h-max ${className}`}
        >
            <h5 className='text-white text-xl'>{title}</h5>
        </button>
    )
}

export default Button