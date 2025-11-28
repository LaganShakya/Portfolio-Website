import HeroImg from './HeroImg'
import { motion } from 'framer-motion'
import Exp from './exp'

const HeroSection = () => {
    return (
        <div id="herosection" className="text-white h-screen w-full flex flex-col items-center justify-around">
            <div id="herosection" className="text-white h-screen w-full flex items-center justify-around">
                <div className='flex flex-col gap-2'>
                    <div className='flex items-baseline gap-1.5'><h1 className="text-5xl font-bold">Hi,</h1><h1 className="text-4xl font-bold">I'm</h1></div>
                    <h1 className="text-5xl font-bold hover:drop-shadow-lg hover:drop-shadow-amber-500/40 hover:text-amber-300 hover:text-6xl cursor-pointer duration-200 transition-duration-400">Lagan Shakya</h1>
                    <Exp />
                </div>
                <HeroImg />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-baseline justify-center gap-0.5">
                    <p className="text-2xl font-semibold mb-2">Kya Bolu Mai</p>
                    <motion.p className="text-4xl font-semibold mb-2 text-yellow-400" initial={{ scale: 1 }} animate={{ scale: 1.4 }} transition={{ duration: 0.2, delay: 2, repeat: Infinity, repeatType: 'mirror' }}>?</motion.p>
                </div>
                <motion.button
                    onClick={() => window.scrollTo({ top: document.getElementById('about')?.offsetTop || 0, behavior: 'smooth' })}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeInOut" }}
                    className="mb-5 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e3e3e3"><path d="M480-80 200-360l46.67-47 200 200v-299.67h66.66V-207l200-199.67L760-360 480-80Zm-33.33-493.33v-133.34h66.66v133.34h-66.66Zm0-200V-880h66.66v106.67h-66.66Z" /></svg>
                </motion.button>
            </div>

        </div>
    )
}

export default HeroSection