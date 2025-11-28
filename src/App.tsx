import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import LoadingScreen from './components/ui/LoadingScreen'
import CustomCursor from './components/ui/CustomCursor'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 6 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen cursor-none">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <div className='scroll-smooth min-h-screen w-full bg-[rgb(0,17,28)]'>
            <Home />
            <About />
            <Projects />
          </div>
        )}
      </AnimatePresence>
      <CustomCursor />
    </div>
  )
}

export default App