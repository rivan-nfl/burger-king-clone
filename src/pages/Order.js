import React, { useMemo } from 'react'
import MainLayout from '../layout/MainLayout'

import orderImg from '../assets/img/order.jpg'
import orderBg from '../assets/img/order-bg.png'
import { DatePicker, Input, InputNumber, TimePicker } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const Order = () => {

    const orderData = useMemo(() => [
        '1pc Ayam Crispy + Nasi + Mineral Water',
        '1pc Ayam Spicy + Nasi + Mineral Water',
        '2pcs Ayam Crispy/ Spicy/ Mix + Nasi',
        '2pcs Ayam Crispy/ Spicy/ Mix + Nasi + Mineral Water',
        'Beef Burger + Mineral Water',
        'Chicken Burger + Mineral Water',
    ], [])

    const orderAddonData = useMemo(() => [
        'Sliced Cheese',
        'Fries Regular',
        'Fusion Cookies & Cream',
        'Choco Pie',
        'Sundae Chocolate',
        '1pc Ayam',
        'Beef Burger',
        'Chicken Burger',
    ], [])

    return (
        <MainLayout>
            <img src={orderImg} alt='Carousel' className='w-full h-[60vh]' />
            <div className='flex mx-auto max-w-[55vw] my-5 rounded overflow-hidden shadow'>
                <div className='grow text-[#502314]'>
                    <div className='bg-white py-7 px-4'>
                        <h2 className='text-3xl font-bold mb-5'>RAMEIN ACARAMU BARENG BK!</h2>
                        <h5 className='mb-3'>Pilih Paket (Minimum order 20 pax/Paket)</h5>

                        {orderData.map((item, index) => (
                            <div key={index} className='flex justify-between items-center p-2 pl-3 mb-3 bg-[#f9f4f2] rounded'>
                                <h5>{item}</h5>
                                <InputNumber placeholder='Jumlah' className='p-1' />
                            </div>
                        ))}

                        <h5 className='mb-3'>Add On (Optional)</h5>

                        {orderAddonData.map((item, index) => (
                            <div key={index} className='flex justify-between items-center p-2 pl-3 mb-3 bg-[#f9f4f2] rounded'>
                                <h5>{item}</h5>
                                <InputNumber placeholder='Jumlah' className='p-1' />
                            </div>
                        ))}
                    </div>
                    <div className='h-5 bg-[#f9f4f2] w-full' />
                    <div className='bg-white py-7 px-4'>
                        <h5 className='mb-3'>Lengkapi data diri kamu!</h5>
                        <div className='flex'>
                            <Input placeholder='Nama' className='mb-3 mr-3 p-2 grow' />
                            <Input placeholder='No Handphone' prefix="+62" className='mb-3 p-2 w-[50%]' />
                        </div>
                        <div className='flex'>
                            <Input placeholder='Email' className='mb-3 mr-3 p-2 grow' />
                            <DatePicker placeholder='Tanggal Lahir' className='mb-3 p-2 w-[50%]' />
                        </div>
                        <TextArea
                            placeholder="Alamat"
                            style={{ height: 120, resize: 'none' }}
                        />

                        <h5 className='my-3'>Detail Acara!</h5>
                        <Input placeholder='Jenis Acara' className='mb-3 mr-3 p-2' />
                        <div className='flex'>
                            <TimePicker placeholder='Waktu' className='mb-3 mr-3 p-2 grow' />
                            <DatePicker
                                placeholder='Tanggal Acara'
                                disabledDate={(currentDate) => new Date(currentDate).getTime() < new Date().getTime()}
                                className='mb-3 p-2 w-[33%]' />
                        </div>

                        <h5 className='mb-3'>Catatan</h5>
                        <TextArea
                            placeholder="Tulis request/order menu lain disini!"
                            style={{ height: 120, resize: 'none' }}
                        />
                    </div>
                </div>
                {/* Right Section */}
                <div className='bg-[#502314] w-[30%] flex flex-col'>
                    <div className='pt-20 px-5 text-white grow'>
                        <h5 className=''>Kamu juga bisa hubungi kami di:</h5>
                        <div className='border-b border-white border-dashed py-4 mt-3'>
                            <a href='#'>
                                <div className='flex items-center text-base'>
                                    <img src='https://bkdelivery.co.id/static/website/img/large_orders/mail.5bbb9691a842.svg' alt='mail' className='h-5 mr-3' />
                                    <span className='text-[#EC7A23]'>guestsevice@burgerking.co.id</span>
                                </div>
                            </a>
                        </div>
                        <div className='border-b border-white border-dashed py-4 mb-3'>
                            <a href='#'>
                                <div className='flex items-center font-bold text-lg'>
                                    <img src='https://bkdelivery.co.id/static/website/img/large_orders/phone.4d4233b3c54c.svg' alt='tel' className='h-5 mr-3' />
                                    <span className='text-[#EC7A23]'>15000 25</span>
                                </div>
                            </a>
                        </div>
                        <p className='text-xs'>Harga sebelum 10% PB.1 TM & C 2023 Burger King Company LLC. Used under license. All rights reserved.</p>
                    </div>
                    <img src={orderBg} alt='order BG' className='w-full' />
                </div>
            </div>
        </MainLayout>
    )
}

export default Order