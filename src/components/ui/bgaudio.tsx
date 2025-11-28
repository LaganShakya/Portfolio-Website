import ambientAudio from "/assets/audio/autumn-ambient-420193.mp3"
const bgaudio = () => {
    return (
        <div className="flex items-center">
            <audio id="ambient-audio" className="hidden" loop>
                <source src={ambientAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button
                onClick={(e) => {
                    const audio = document.getElementById("ambient-audio") as HTMLAudioElement;
                    const btn = e.currentTarget;
                    if (audio) {
                        audio.volume = 0.04;
                        if (audio.paused) {
                            audio.play();
                            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M523.33-200v-560H760v560H523.33ZM200-200v-560h236.67v560H200Zm390-66.67h103.33v-426.66H590v426.66Zm-323.33 0H370v-426.66H266.67v426.66Zm0-426.66v426.66-426.66Zm323.33 0v426.66-426.66Z"/></svg>';
                        } else {
                            audio.pause();
                            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z"/></svg>';
                        }
                    }
                }}
                className="flex items-center justify-center w-12 h-12 cursor-pointer transition-transform transform-transform: hover:scale-110 transition-duration-300 duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z" /></svg>
            </button>
        </div>
    )
}

export default bgaudio