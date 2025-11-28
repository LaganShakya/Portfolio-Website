import Navbar from '../ui/Navbar'
import HeroSection from '../ui/HeroSection'

const Home = () => {
    return (
        <div id='home' className="bg-[rgb(0,17,28)] min-h-screen w-full scroll-smooth">
            <Navbar />
            <HeroSection />
        </div>
    )
}

export default Home