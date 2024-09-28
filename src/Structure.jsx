import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Structure({ children }) {
    return (
        <main>
            <Navbar />
            <div className='w-full min-h-[50vh] relative text-typography'>{children}</div>
            <Footer />
        </main>
    )
}
