import React from 'react'
import HomeCarousel from '../components/Carousel'

// Menu Images
import menu1 from '../assets/img/menus/1.jpg'
import menu2 from '../assets/img/menus/2.jpg'
import menu3 from '../assets/img/menus/3.jpg'
import menu4 from '../assets/img/menus/4.jpg'
import menu5 from '../assets/img/menus/5.jpg'
import menu6 from '../assets/img/menus/6.jpg'
import menu7 from '../assets/img/menus/7.jpg'
import menu8 from '../assets/img/menus/8.jpg'
import menu9 from '../assets/img/menus/9.jpg'
import MainLayout from '../layout/MainLayout'
import CardMenuHome from '../components/CardMenuHome'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <MainLayout>
            <HomeCarousel />
            <div className='b-white max-w-[51vw] mx-auto py-5'>
                <h3 className='text-[#8b542f] text-center font-bold text-3xl mb-4'>Our Menus</h3>
                <div className='flex w-full flex-wrap'>
                    <CardMenuHome
                        img={menu1}
                        title='BK APP EXCLUSIVE'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        title='Promo Hari Ini'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        img={menu2}
                        title='Heinz Mexican Whopper'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        img={menu3}
                        title='BK APP EXCLUSIVE'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        img={menu4}
                        title='BK APP EXCLUSIVE'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        img={menu5}
                        title='BK APP EXCLUSIVE'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        img={menu6}
                        title='BK APP EXCLUSIVE'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        img={menu7}
                        title='BK APP EXCLUSIVE'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        img={menu8}
                        title='BK APP EXCLUSIVE'
                        onClick={() => navigate('/menus')}
                    />
                    <CardMenuHome
                        img={menu9}
                        title='BK APP EXCLUSIVE'
                        onClick={() => navigate('/menus')}
                    />
                </div>
            </div>
        </MainLayout>
    )
}

export default Home