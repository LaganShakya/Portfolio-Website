import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div id='about' className='min-h-screen w-full bg-[rgb(0,17,28)]'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-6xl font-bold text-white mt-24'>About</h1>
                <div className='flex flex-col items-center justify-center h-full'>
                    <div>
                        <h1 className='text-4xl font-bold text-white mt-8'>Hello, I'm</h1>
                        <p className='text-white mt-2'>One of the founding members of the <span className='text-cyan-400'><a href="https://weeklytechx.blogspot.com/" target='_blank'>Weekly TechX</a></span> Blogs.</p>
                        <p className='text-white'>I'm a passionate developer and designer, always eager to learn and share knowledge.</p>
                        <p className='text-white'>I'm currently working on a new project <span className='text-cyan-400'>Sanskari</span> a Student Hub.</p>
                        <p className='text-white'>I proudly able to say that I used A.I in many of my projects in building them.</p>
                    </div>
                    <div className='mt-2 flex flex-col items-center justify-center'>
                        <h1 className='text-white text-4xl font-bold mt-16'>My Favorite Persons</h1>
                        <div className='flex flex-wrap items-center justify-center gap-4 mt-4'>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="src/assets/images/Godlike_Jonathan_2024.jpeg" alt="Godlike Jonathan" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>Godlike Jonathan</h1>
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="src/assets/images/msd.jpg" alt="MS Dhoni" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>MS Dhoni</h1>
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="src/assets/images/Admino.jpg" alt="Godlike Admino" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>Godlike Admino</h1>
                            </motion.div>
                        </div>
                    </div>
                    <div className='mt-2 flex flex-col items-center justify-center'>
                        <h1 className='text-white text-4xl font-bold mt-16'>Where I Learnt From?</h1>
                        <div className='flex flex-wrap items-center justify-center gap-4 mt-4'>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="src/assets/images/sheriyans.jpg" alt="Sheriyans Coding School" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>Sheriyans Coding School</h1>
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="src/assets/images/codewithharry.jpg" alt="CodeWithHarry" className='w-70 h-80 rounded-xl object-cover' />
                                <h1 className='text-white text-2xl font-bold mt-0.5'>CodeWithHarry</h1>
                            </motion.div>
                            <motion.div
                                className='flex flex-col items-center justify-center gap-2'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src="src/assets/images/apnacollage.jpeg" alt="Apna Collage" className='w-70 h-80 rounded-xl object-cover' />
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