import { useState } from 'react';

// import Escaleras from './animaciones/EscalerasAbajo';

import Rainbow from './componentes/Rainbow'

import BotonNeon from './componentes/NeonButton';

import NeonText from './componentes/NeonText';

import Blob from "./assets/Blob.png"

import Waves from "./assets/Waves.png"

import Field from "./assets/Field.png"

import ShinyBall from "./assets/ShinyBall.png"

import Login from "./assets/Login.png"

interface IProps {

    MostrarInicio: () => void,

    MostrarContacto: () => void,

}

interface IProyectos {

    nombre: string,

    imagen: string,

    pagina: string,

}

interface IPaginador {

    TotalItems: IProyectos[],

    Items: IProyectos[],

    Total: number,

    TamañoPagina: number,

    PaginaActual: number,

    Paginas: number

}

const Proyectos: IProyectos[] = [

    { nombre: "Login", imagen: Login, pagina: "https://luckillash.github.io/Login-Tropical/" },

]

const ThreeJS: IProyectos[] = [

    { nombre: "Blob", imagen: Blob, pagina: "https://luckillash.github.io/Blob/" },

    { nombre: "Heat map", imagen: Field, pagina: "https://luckillash.github.io/Suaron-Eye/" },

    { nombre: "Shiny ball", imagen: ShinyBall, pagina: "https://luckillash.github.io/Shiny-Ball/" },

    { nombre: "Sin/Cos waves", imagen: Waves, pagina: "https://luckillash.github.io/Wavy/" },

]

// const AnimeJS: IProyectos[] = []

export default function Portafolio({ MostrarInicio, MostrarContacto }: IProps) {

    const [Menu, SetMenu] = useState("Proyectos")

    const [Paginador, SetPaginas] = useState<IPaginador>({

        TotalItems: Proyectos,

        Items: Proyectos,

        Total: 0,

        TamañoPagina: 3,

        PaginaActual: 0,

        Paginas: Math.ceil(Proyectos.length / 3)

    })

    function OnClick (Menu: string, Proyectos: IProyectos[]) {

        SetMenu(Menu)

        const PrimerosItems = Proyectos.slice(0,3)

        SetPaginas({

            TotalItems: Proyectos,

            Items: PrimerosItems, // ->

            Total: Proyectos.length,

            TamañoPagina: 3,

            PaginaActual: 0, // -> 2

            Paginas: Math.ceil(Proyectos.length / 3)

        })

    }

    function CambiarPagina (Index: number) {

        const Inicio = Index * Paginador.TamañoPagina

        const Fin = Inicio + 3

        const NuevosItems = Paginador.TotalItems.slice(Inicio, Fin)

        SetPaginas({

            ...Paginador,

            PaginaActual: Index,

            Items: NuevosItems

        })

    }

    return (

        <main className="h-screen w-screen absolute -top-full text-white grid grid-cols-12" id="Pagina">

            {/* <Escaleras /> */}

            <section className="col-start-2 col-span-10 flex flex-col justify-center gap-5">

                <div className="h-14 flex gap-5 justify-start">

                    <BotonNeon onClick={MostrarInicio} primaryText="Inicio" />

                    <BotonNeon onClick={MostrarContacto} primaryText="Contacto" />

                </div>

                <nav className='w-full flex justify-center gap-x-4'>

                    <NeonText 
                    
                    selected={Menu === "Proyectos"} 
                    
                    onClick={() => OnClick("Proyectos", Proyectos)}

                    primaryText='Proyectos'
                    
                    />

                    <NeonText 
                    
                    selected={Menu === "ThreeJS"} 
                    
                    onClick={() => OnClick("ThreeJS", ThreeJS)}
                    
                    primaryText='Three JS'

                    />

                    {/* <NeonText 
                    
                    selected={Menu === "AnimeJS"} 
                    
                    onClick={() => OnClick("AnimeJS", AnimeJS)}

                    primaryText='Anime JS'
                    
                    /> */}
                    
                </nav>

                <div className="gap-10 flex place-content-evenly">

                    { Paginador.Items.map(({ imagen, pagina }, index) => {

                        return (

                            <Rainbow src={imagen} key={index} page={pagina} />

                        )

                    })}

                </div>

                <div className={"w-full flex justify-center items-center"}>

                    { [...Array(Paginador.Paginas)].map((Pagina, Index) => {

                        return <label 
                        
                            key={Index}
                            
                            onClick={() => CambiarPagina(Index)} 
                            
                            className={`bg-white w-3.5 h-3.5 mx-2 my-3 rounded-full opacity-30 hover:opacity-75 cursor-pointer ${Paginador.PaginaActual === Index ? 'opacity-75' : ''}`}>

                            </label>

                    })}
			
                </div>
                
            </section>

        </main>

    )

}
