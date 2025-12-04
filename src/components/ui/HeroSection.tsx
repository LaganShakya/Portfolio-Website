import HeroImg from './HeroImg'
import { motion } from 'framer-motion'
import Exp from './exp'

const HeroSection = () => {
    return (
        <div id="herosection" className="text-white h-screen w-full flex flex-col items-center justify-around">
            <div id="herosection" className="text-white h-screen w-full flex items-center justify-around">
                <div className='flex flex-col lg:gap-0.5'>
                    <div className='flex items-baseline gap-1.5 w-fit lg:p-0 pl-4'><h1 className="lg:text-5xl text-4xl font-bold">Hi,</h1><h1 className="lg:text-4xl text-3xl font-bold">I'm</h1></div>
                    <div className='flex flex-col gap-4'>
                        <h1 className="lg:p-0 pl-4 lg:text-5xl text-4xl font-bold hover:drop-shadow-lg hover:drop-shadow-amber-500/40 hover:text-amber-300 hover:text-6xl cursor-pointer duration-200 transition-duration-400 lg:text-white text-amber-300 lg:drop-shadow-none drop-shadow-lg drop-shadow-amber-500/40">Lagan Shakya</h1>
                        <Exp />
                    </div>
                </div>
                <HeroImg />
            </div>
            <div className="flex flex-col items-center justify-center lg:pb-0 pb-4 gap-2 absolute bottom-8">
                <motion.div className="flex items-baseline justify-center gap-0.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6, ease: "easeInOut" }}>
                    <p className="text-2xl font-semibold mb-1">Kya Bolu Mai</p>
                    <motion.p className="text-4xl font-semibold mb-1 text-yellow-400" initial={{ scale: 1 }} animate={{ scale: 1.1 }} transition={{ duration: 0.4, delay: 2, repeat: Infinity, repeatType: 'mirror' }}>?</motion.p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6, ease: "easeInOut" }} className='hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center bg-amber-800 w-8 h-8 rounded-full p-1'>
                    <motion.button
                        onClick={() => window.scrollTo({ top: document.getElementById('about')?.offsetTop || 400, behavior: "smooth" })}
                        className="cursor-pointer w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center mb-3 active:mb-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e3e3e3"><path d="M480-80 200-360l46.67-47 200 200v-299.67h66.66V-207l200-199.67L760-360 480-80Zm-33.33-493.33v-133.34h66.66v133.34h-66.66Zm0-200V-880h66.66v106.67h-66.66Z" /></svg>
                    </motion.button>
                </motion.div>
            </div>

        </div>
    )
}

export default HeroSection