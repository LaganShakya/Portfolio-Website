import { motion } from 'framer-motion'

const About = () => {
    return (
        <div id='about' className='min-h-screen w-full bg-[rgb(0,17,28)]'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-6xl font-bold text-white mt-24'>About</h1>
                <div className='flex flex-col items-center justify-center h-full'>
                    <div>
                        <h1 className='pl-6 text-4xl font-bold text-white mt-6'>Hello, <span className='text-gray-300 text-3xl'>I'm</span></h1>
                        <p className='text-white max-w-3xl px-4 mt-1.5 text-clip'>Lagan, a developer and creator who likes building things that feel useful, fast, and smooth. I work across full-stack development, with a growing focus on backend architecture and small, practical products that a single person can run. I enjoy experimenting with ideas, especially ones that can turn into micro-SaaS tools or personal websites with real value. Outside of code, I spend a lot of time editing videos and photos, which keeps me connected to design, pacing, and storytelling. That mix of technical and creative thinking shapes how I approach projects. I care about clean interfaces, solid performance, and making products that feel pleasant to use. Right now I’m focused on improving my skills, building things that solve everyday problems, and preparing myself for the long-term goal of starting my own product studio. I like keeping things simple, friendly, and approachable, both in my work and how I collaborate.</p>
                    </div>
                    <div className='mt-2 flex flex-col items-center justify-center'>
                        <h1 className='text-white text-4xl font-bold mt-12'>My Favorite Persons</h1>
                        <div className='flex flex-wrap items-center justify-center gap-4 mt-4'>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="/assets/images/Godlike_Jonathan_2024.jpeg" alt="Godlike Jonathan" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>Godlike Jonathan</h1>
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="/assets/images/msd.jpg" alt="MS Dhoni" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>MS Dhoni</h1>
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="/assets/images/Admino.jpg" alt="Godlike Admino" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>Godlike Admino</h1>
                            </motion.div>
                        </div>
                    </div>
                    <div className='mt-2 flex flex-col items-center justify-center'>
                        <h1 className='text-white text-4xl font-bold mt-12'>Where I Learnt From?</h1>
                        <div className='flex flex-wrap items-center justify-center gap-4 mt-4'>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="/assets/images/Sheriyans.jpg" alt="Sheriyans Coding School" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>Sheriyans Coding School</h1>
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="/assets/images/codewithharry.jpg" alt="CodeWithHarry" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>CodeWithHarry</h1>
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="/assets/images/apnacollage.jpeg" alt="Apna Collage" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>Apna Collage</h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About