
import { Link } from "react-router-dom"

export default function Video({videoLink, title, description, buttonText, buttonLink}) {
    return(
        <div className="w-full flex flex-col">
            <h1>Video</h1>

            <section className="relative w-full h-screen overflow-hidden">
            <video src={videoLink} autoPlay loop muted></video>

{/* Overlay container */}
            <div className="absolute inset-0 top-0 left-0 z-10 bg-black/60 flex flex-col justify-center items-center text-white">
            <h1>
                {title}
            </h1>

            <p>
                {description}
            </p>

<Link to={buttonLink}>
            <button>
                {buttonText}
            </button>
</Link>
            
            </div>
            </section>

        </div>
    )
}