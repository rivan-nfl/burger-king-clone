import React from 'react'
import { Dropdown } from 'antd'
import logoBK from '../assets/img/logo.png'
import logoCart from '../assets/logo/cart.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className='h-20 bg-[#2d2d2d]'>
            <div className='flex h-full items-center max-w-[65vw] mx-auto font-bold'>
                <div className='relative h-full w-24 pt-2'>
                    <a href='/'>
                        <img src={logoBK} className='w-24 absolute z-10' />
                    </a>
                </div>
                <div className='grow flex'>
                    <a href='/menus' className='ml-10'>
                        <h5 className='text-[#faaf18] text-xs'>Delivery</h5>
                        <h3 className='text-white text-2xl'>Order</h3>
                    </a>
                    <a href='/news' className='ml-10'>
                        <h5 className='text-[#faaf18] text-xs'>Get Fresh</h5>
                        <h3 className='text-white text-2xl'>Promotions</h3>
                    </a>
                    <a href='/large-orders' className='ml-10'>
                        <h5 className='text-[#faaf18] text-xs'>Exclusive</h5>
                        <h3 className='text-white text-2xl'>Large Order</h3>
                    </a>
                </div>
                <a href='/accounts/login'>
                    <h3 className='text-white text-xl font-light'>Login</h3>
                </a>
                <Dropdown
                    placement="bottomRight"
                    dropdownRender={() => (
                        <div className='bg-white rounded p-4 w-[20vw] font-bold'>
                            <p className='text-base mb-5'>Your cart is empty.</p>
                            <button className='bg-[#ed7801] p-2 rounded w-full' onClick={() => navigate('/menus')}>
                                <h5 className='text-white text-xl'>Order Now</h5>
                            </button>
                        </div>
                    )}
                >
                    <a href='/menus' className='h-full'>
                        <div className='bg-[#ed7801] h-full flex px-4 ml-10 items-center'>
                            <img src={logoCart} className='h-[30px]' />
                        </div>
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header