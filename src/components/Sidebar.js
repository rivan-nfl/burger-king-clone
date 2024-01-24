import React from 'react'
// Icons
import search from '../assets/icons/search.png'

const Sidebar = ({
    selectedMenu = 0,
    menuData = [],
    onClick
}) => {
    return (
        <div className='w-52'>
            {/* Input Search */}
            <div className='shadow-lg shadow-gray-400 rounded overflow-hidden h-12 w-full flex mb-10'>
                <input type='text' placeholder='Search menu...' className='px-3 w-[80%] outline-none' />
                <button className='bg-[#ed7801] grow'>
                    <img src={search} alt='search' className='h-4 mx-auto' />
                </button>
            </div>
            {/* Menus */}
            <div className='w-full text-[#502314] text-lg'>
                {menuData.map((item, index) => (
                    <button
                        key={index}
                        className={`p-3 rounded mb-2 w-full ${selectedMenu === index ? 'bg-[#faaf18]' : 'bg-[#fbe6d6]'}`}
                        onClick={() => onClick(index)}
                    >
                        <h4 className='text-left'>{item.label}</h4>
                    </button>
                ))}
            </div>
            <p className="text-xs text-[#919191] font-['Arial']">* Harga belum termasuk pajak</p>
        </div>
    )
}

export default Sidebar