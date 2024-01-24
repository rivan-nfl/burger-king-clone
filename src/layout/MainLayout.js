import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
    return (
        <div className="bg-[url('/src/assets/img/BK_bg.jpg')] bg-fixed bg-cover">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout