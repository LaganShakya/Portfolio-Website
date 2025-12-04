

const HeroImg = () => {
    return (
        <div
            className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-90 md:h-90 rounded-full p-[5px] hover:scale-110 duration-200 transition-duration-800"
            style={{
                background:
                    "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
                backgroundSize: "300% 300%",
                animation: "borderFlow 8s linear infinite"
            }}
        >
            {/* Subtle glow */}
            <div
                className="absolute inset-0 rounded-full blur-xl opacity-30"
                style={{
                    background:
                        "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
                    backgroundSize: "300% 300%",
                    animation: "borderFlow 8s linear infinite"
                }}
            ></div>

            {/* Image/Video */}
            {/* <img
                src="/assets/images/hero2.png"
                alt=""
                className="w-[calc(100%-4px)] h-[calc(100%-4px)] object-cover rounded-full relative z-10"
            /> */}
            <video
                src="/assets/videos/herovideo.mp4"
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover rounded-full relative z-10 bg-black"
            />

            <style>
                {`
      @keyframes borderFlow {
        0% { background-position: 0% 0%; }
        25% { background-position: 100% 0%; }
        50% { background-position: 100% 100%; }
        75% { background-position: 0% 100%; }
        100% { background-position: 0% 0%; }
      }
    `}
            </style>
        </div>
    )
}

export default HeroImg