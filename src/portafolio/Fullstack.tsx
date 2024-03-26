import { DiMysql, DiMsqlServer } from "react-icons/di"

import { FaHtml5, FaCss3, FaBootstrap, FaPhp, FaLaravel, FaReact, FaNodeJs, FaPython } from "react-icons/fa"

import { SiCsharp, SiTailwindcss } from "react-icons/si"

import { TbBrandNextjs } from "react-icons/tb"

export default function Fullstack () {

    const CLASSNAME_GRID = "card-large div" + 1

    const CLASSNAME_FILTER = "filter" + 1

    const ID_FILTER = "noise-filter" + 1

    const ID_CLIP = "rounded-clip" + 1

    return (

        <div className={CLASSNAME_GRID + " gap-2"}>

            {/* <div className="border"></div> */}

            <div className={CLASSNAME_FILTER}></div>

            <h2 className="text-3xl font-bold">Desarrollador Fullstack</h2>

            <p className="text-lg">¡Con 4 años de experiencia desarrollando <br/> con las siguientes herramientas!</p>

            <ul className="flex gap-2 w-80 flex-wrap justify-center text-3xl">

                <li><FaHtml5 /></li>

                <li><FaCss3  /></li>

                <li><SiTailwindcss /></li>

                <li><FaBootstrap /></li>

                <li><FaPhp  /></li>

                <li><FaLaravel /></li>

                <li><FaReact /></li>

                <li><TbBrandNextjs /></li>

                <li><FaPython /></li>

                <li><FaNodeJs  /></li>

                <li><SiCsharp /></li>

                <li><DiMysql /></li>

                <li><DiMsqlServer /></li>

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