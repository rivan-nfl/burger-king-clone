import React from 'react'
import MainLayout from '../layout/MainLayout'
import promoImg from '../assets/img/promo.jpg'

const News = () => {
    return (
        <MainLayout>
            <div className='h-screen max-w-[50vw] mx-auto pt-9'>
                <a href='#'>
                    <img src={promoImg} alt='Promo' className='w-full' />
                </a>
            </div>
        </MainLayout>
    )
}

export default News