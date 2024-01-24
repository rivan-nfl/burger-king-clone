import React from 'react'
import MainLayout from '../layout/MainLayout'
import { Card, Input } from 'antd'
import Button from '../components/Button'

const Login = () => {
    return (
        <MainLayout>
            <div className='h-screen bg-[#f9f4f2] pt-5'>
                <Card
                    className='mx-auto w-[25vw]'
                    bodyStyle={{ padding: 0 }}
                >
                    <div className='p-9 border-b border-[1px solid #e0e0e0]'>
                        <div className='text-center mb-8'>
                            <h3 className='text-[#8b542f] text-3xl font-["Flame-Regular"]'>Welcome!</h3>
                            <p className='text-sm text-[#404040]'>Enter your mobile number and password to login</p>
                        </div>

                        <div className='w-full'>
                            <Input prefix="+62" className='mb-3 p-2' />
                            <Input.Password placeholder="input password" className='p-2' />
                        </div>

                        <Button
                            bgColor='#ed7801'
                            title='Login'
                            className='font-["Flame-Regular"] w-full my-5'
                        />
                        <p className='text-sm text-[#ed7801] cursor-pointer'>Forgot Password?</p>
                    </div>
                    <div className='flex items-center p-9'>
                        <div>
                            <h3 className='text-[#8b542f] text-2xl font-["Flame-Regular"]'>Not A Member Yet?</h3>
                            <p className='text-sm text-[#404040]'>Register to get reward points and exclusive promotions.</p>
                        </div>
                        <Button
                            bgColor='#faaf18'
                            title='Register'
                            className='font-["Flame-Regular"] w-[30%]'
                        />
                    </div>
                </Card>
            </div>
        </MainLayout>
    )
}

export default Login