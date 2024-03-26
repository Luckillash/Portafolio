import { FaLinkedin, FaLinux, FaTwitch } from "react-icons/fa"

import { SiKalilinux, SiWireshark } from "react-icons/si"

export default function Cibersecurity () {

    const CLASSNAME_GRID = "card div" + 4

    const CLASSNAME_FILTER = "filter" + 4

    const ID_FILTER = "noise-filter" + 4

    const ID_CLIP = "rounded-clip" + 4

    return (

        <div className={CLASSNAME_GRID + " gap-2"}>

            {/* <div className="border"></div> */}

            <div className={CLASSNAME_FILTER}></div>

            <h2 className="text-3xl font-bold">¡Sígueme en Twitch!</h2>

            <p className="text-lg">Y mis otras redes sociales.</p>

            <ul className="flex gap-2 w-80 flex-wrap justify-center text-3xl">

                <li><FaTwitch /></li>

                <li><FaLinkedin /></li>

            </ul>

            <div className="shadow"></div>

            <div className="backdrop"></div>

            <svg style={{ position: "absolute", width: "100%", height: "100%" }}>

                <filter id={ID_FILTER}>

                    <feTurbulence 

                    type='fractalNoise' 

                    baseFrequency='0.6' 

                    stitchTiles='stitch'/>

                </filter>

                <clipPath id={ID_CLIP}>

                    <rect x="0" y="0" width="100%" height="100%" rx="20" ry="20"/>

                </clipPath>

            </svg>

        </div>
        
    )

}