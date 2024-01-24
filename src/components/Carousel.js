import React from 'react'
import { Carousel } from 'antd'
// Carousel Images
import carousel1 from '../assets/img/carousel/1.jpg'
import carousel2 from '../assets/img/carousel/2.jpg'
import carousel3 from '../assets/img/carousel/3.jpg'
import carousel4 from '../assets/img/carousel/4.jpg'
import carousel5 from '../assets/img/carousel/5.jpg'
import carousel6 from '../assets/img/carousel/6.jpg'
import carousel7 from '../assets/img/carousel/7.jpg'

const HomeCarousel = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img src={carousel1} alt='Carousel' className='w-full h-[60vh]' />
                </div>
                <div>
                    <img src={carousel2} alt='Carousel' className='w-full h-[60vh]' />
                </div>
                <div>
                    <img src={carousel3} alt='Carousel' className='w-full h-[60vh]' />
                </div>
                <div>
                    <img src={carousel4} alt='Carousel' className='w-full h-[60vh]' />
                </div>
                <div>
                    <img src={carousel5} alt='Carousel' className='w-full h-[60vh]' />
                </div>
                <div>
                    <img src={carousel6} alt='Carousel' className='w-full h-[60vh]' />
                </div>
                <div>
                    <img src={carousel7} alt='Carousel' className='w-full h-[60vh]' />
                </div>
            </Carousel>
        </div>
    )
}

export default HomeCarousel