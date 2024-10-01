import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Structure({ children }) {
    const loc = useLocation()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [loc])
    return (
        <main>
            <Navbar />
            <div className='w-full min-h-[50vh] relative text-typography'>{children}</div>
            <Footer />
        </main>
    )
}
