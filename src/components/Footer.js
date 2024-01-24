import React from 'react'
// Icons
import tele from '../assets/icons/tel.png'
import mail from '../assets/icons/mail.png'
import fb from '../assets/icons/fb.png'
import ig from '../assets/icons/ig.png'
import twt from '../assets/icons/twt.png'
import yt from '../assets/icons/yt.png'

const Footer = () => {
    return (
        <div className='p-3 bg-[#2d2d2d]'>
            <div className='h-full max-w-[65vw] mx-auto text-white'>
                <h6 className='font-bold text-lg'>BURGER KING® DELIVERY</h6>
                <div className='flex items-center my-3'>
                    <a href='#' className='mr-5'>
                        <div className='flex items-center font-bold text-lg'>
                            <img src={tele} alt='tel' className='h-4' />
                            <span>15000 25</span>
                        </div>
                    </a>
                    <a href='#' className='mr-5'>
                        <div className='flex items-center text-base'>
                            <img src={mail} alt='mail' className='h-4 mr-1' />
                            <span>guestsevice@burgerking.co.id</span>
                        </div>
                    </a>
                    <div className='flex items-center text-base mr-5'>
                        <a href='#' className='mr-2'>
                            <img src={fb} alt='fb' className='h-4' />
                        </a>
                        <a href='#' className='mr-2'>
                            <img src={ig} alt='ig' className='h-4' />
                        </a>
                        <a href='#' className='mr-2'>
                            <img src={twt} alt='twt' className='h-4' />
                        </a>
                        <a href='#' className='mr-2'>
                            <img src={yt} alt='yt' className='h-4' />
                        </a>
                    </div>
                </div>
                <div className='flex items-center'>
                    <a href='#' className='pr-3 mr-3 text-[#919191] text-xs hover:text-white border-r-[1px] border-[#919191]'>
                        About Us
                    </a>
                    <a href='#' className='pr-3 mr-3 text-[#919191] text-xs hover:text-white border-r-[1px] border-[#919191]'>
                        Kebijakan Privasi
                    </a>
                    <a href='#' className='pr-3 mr-3 text-[#919191] text-xs hover:text-white border-r-[1px] border-[#919191]'>
                        Syarat dan Ketentuan
                    </a>
                    <p className='text-[#919191] text-xs'>
                        TM & © 2024 Burger King Corporation. Used Under License. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer