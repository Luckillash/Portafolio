import { FaReact } from "react-icons/fa"
import Login from "../assets/Login.png"
import { SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

export default function Card () {

    return (

        <a target="_blank" href="https://administration-page-ten.vercel.app/" className='flex flex-col relative bg-[#1F193D] text-[#CFB3E6] text-left'>

            <img src={Login} className="w-full" />

            <div className="relative p-4">

                <div className="flex items-center justify-between">

                    <h1 className="text-3xl font-bold">Acceso y administración</h1>

                    <ul className="flex gap-4 text-xl">

                        <li><FaReact /></li>

                        <li><TbBrandNextjs /></li>

                        <li><SiTailwindcss /></li>

                    </ul>

                </div>

                <p className="text-lg">Front-end de autenticación, mantenedor de usuarios y visualización de estadísticas. Ideal para sistemas de administación.</p>

                <div className="filter"></div>

                <svg className="absolute left-0 top-0 w-full h-full">

                    <filter id="test-filter">

                        <feTurbulence 

                        type='fractalNoise' 

                        baseFrequency='0.6' 

                        stitchTiles='stitch'/>

                    </filter>

                    <clipPath id="test-clip">

                        <rect x="0" y="0" width="100%" height="100%"/>

                    </clipPath>

                </svg>

            </div>
            
        </a>

    )
}