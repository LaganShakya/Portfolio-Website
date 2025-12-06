import BgAudio from "./bgaudio"
const Navbar = () => {
    return (
        <header className='flex justify-between p-2 bg-slate-900/40 text-white w-full rounded-sm fixed top-0 z-50 backdrop-blur-md drop-shadow-lg drop-shadow-slate-600'>
            <div className="flex items-center justify-center">
                <img src="/logo.png" alt="Lagan Shakya" className="h-12 w-auto object-contain" />
            </div>
            <div className="flex gap-6 items-center lg:w-[60%] justify-between">
                <div className="hidden gap-6 font-semibold items-center text-[1.1em] lg:flex">
                    <button onClick={() => window.scrollTo({ top: (document.getElementById('home')?.offsetTop ?? 500) - 100 || 400, behavior: 'smooth' })} className="scroll-smooth hover:text-blue-200 hover:border-b-2 hover:border-blue-500 transition-colors transform-transform: hover:scale-105 transition-duration-300 duration-300 flex items-center gap-0.5"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" /></svg>Home</button>
                    <button onClick={() => window.scrollTo({ top: document.getElementById('about')?.offsetTop || 400, behavior: 'smooth' })} className="scroll-smooth hover:text-blue-200 hover:border-b-2 hover:border-blue-500 transition-colors transform-transform: hover:scale-105 transition-duration-300 duration-300 flex items-center gap-0.5"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="M448.67-280h66.66v-240h-66.66v240Zm31.32-316q15.01 0 25.18-9.97 10.16-9.96 10.16-24.7 0-15.3-10.15-25.65-10.16-10.35-25.17-10.35-15.01 0-25.18 10.35-10.16 10.35-10.16 25.65 0 14.74 10.15 24.7 10.16 9.97 25.17 9.97Zm.19 516q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-97-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" /></svg>About</button>
                    <button onClick={() => window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 400, behavior: 'smooth' })} className="scroll-smooth hover:text-blue-200 hover:border-b-2 hover:border-blue-500 transition-colors transform-transform: hover:scale-105 transition-duration-300 duration-300 flex items-center gap-0.5"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="M106.67-120q-27.5 0-47.09-19.58Q40-159.17 40-186.67v-546.66h66.67v546.66h720V-120h-720ZM240-253.33q-27.5 0-47.08-19.59-19.59-19.58-19.59-47.08v-493.33q0-27.5 19.59-47.09Q212.5-880 240-880h226.67l80 80h306.66q27.5 0 47.09 19.58Q920-760.83 920-733.33V-320q0 27.5-19.58 47.08-19.59 19.59-47.09 19.59H240Zm0-66.67h613.33v-413.33H519l-80-80H240V-320Zm0 0v-493.33V-320Z" /></svg>Projects</button>
                </div>
                <BgAudio />
            </div>
        </header>
    )
}

export default Navbar