import React, { useEffect, useMemo, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import Sidebar from '../components/Sidebar'
import CardMenu from '../components/CardMenu'
import menuImg from '../assets/img/menus/1.jpg'

const Menus = () => {
    const [selectedMenu, setSelectedMenu] = useState(0)

    const menuData = useMemo(() => [
        {
            label: 'BK App Exclusive',
            data: 7
        },
        {
            label: 'Promo Hari Ini',
            data: 10
        },
        {
            label: 'New! Cheese Dunk [Limited Time Offer]',
            data: 5
        },
        {
            label: 'New! King Fusion Nutella® [Limited Time Offer]',
            data: 5
        },
        {
            label: 'Heinz® Mexican Whopper',
            data: 5
        },
        {
            label: 'Gold Collection',
            data: 5
        },
        {
            label: 'Cheese Whopper®',
            data: 5
        },
        {
            label: 'Cheeseburger Favorite',
            data: 5
        },
        {
            label: "King's Chicken [Rasa Baru]",
            data: 5
        },
        {
            label: 'Kids Meal',
            data: 5
        },
        {
            label: 'Side & Dessert',
            data: 5
        },
        {
            label: 'Beverages',
            data: 5
        },
        {
            label: 'King Deals',
            data: 5
        },
    ], [])

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <MainLayout>
            <div className='flex max-w-[55vw] mx-auto my-5'>
                {/* SideBar */}
                <div>
                    <Sidebar
                        selectedMenu={selectedMenu}
                        menuData={menuData}
                        onClick={(index) => setSelectedMenu(index)}
                    />
                </div>
                {/* Content */}
                <div className='ml-7 grow flex flex-wrap'>
                    {Array.from(Array(menuData[selectedMenu].data)).map((_, index) => (
                        <CardMenu
                            key={index}
                            img={menuImg}
                            title={'App Exc 1pc Ayam + Nasi'}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default Menus