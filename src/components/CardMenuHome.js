import { Card } from 'antd'
import React from 'react'

const CardMenuHome = ({
    img = '',
    title = '',
    onClick = () => { }
}) => {
    return (
        <Card
            hoverable
            cover={img ? <img alt="menu" src={img} className='h-48' /> : null}
            className='shadow-lg shadow-gray-400 p-4 w-[307px] overflow-hidden mr-4 mb-4'
            bodyStyle={{ padding: 0, paddingTop: 20 }}
            onClick={onClick}
        >
            <div className="font-bold flex w-full font-['Flame-Regular']">
                <h3 className='text-[#8b542f] text-xl w-[50%]'>{title}</h3>
                <button className='bg-[#ed7801] p-2 rounded grow h-max' onClick={onClick}>
                    <h5 className='text-white text-xl'>Order</h5>
                </button>
            </div>
        </Card>
    )
}

export default CardMenuHome