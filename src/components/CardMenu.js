import { Card } from 'antd'
import React from 'react'

const CardMenu = ({
    img = '',
    title = ''
}) => {
    return (
        <Card
            hoverable
            cover={img ? <img alt="menu" src={img} className='h-52' /> : null}
            className='shadow-lg shadow-gray-400 p-4 w-[350px] overflow-hidden mr-4 mb-4'
            bodyStyle={{ padding: 0, paddingTop: 20 }}
        >
            <div className="w-full font-['Flame-Regular']">
                <h3 className='text-[#502314] text-2xl'>{title}</h3>
                <div>
                    <span className='text-lg text-[#D72300]'>Rp. 15,455 </span>
                    <span className='text-[#9F816F] line-through'>28,636</span>
                </div>
            </div>
        </Card>
    )
}

export default CardMenu