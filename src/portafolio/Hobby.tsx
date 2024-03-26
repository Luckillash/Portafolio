import { FaLinux } from "react-icons/fa"

import { SiKalilinux, SiWireshark } from "react-icons/si"

import Phil from "../assets/phil.png"

export default function Hobby () {

    const CLASSNAME_GRID = "card-large div" + 3

    const CLASSNAME_FILTER = "filter" + 3

    const ID_FILTER = "noise-filter" + 3

    const ID_CLIP = "rounded-clip" + 3

    return (

        <div className={CLASSNAME_GRID + " gap-2"}>

            {/* <div className="border"></div> */}

            <div className={CLASSNAME_FILTER}></div>

            <h2 className="text-3xl font-bold">¡Un poco sobre mí!</h2>

            <p className="text-lg">
                
                Disfruto del Karate Kyokushin,<br/>
                
                entrenar arduamente, tocar unas<br/>

                buenas rolitas en guitarra y ver<br/>

                 Dr. House y Law & Order
                
            </p>

            <img className="phil" src={Phil} width={100} height={100} />

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