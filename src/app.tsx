import { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame,  } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import anime from 'animejs';

import Loader from './Loader';
import Inicio from './Inicio';
import Portafolio from './Portafolio';
import Contacto from './Contacto';

import Arco from './componentes/Arco';
import Estrellas from './componentes/Estrellas';
import Octahedro from './componentes/Octahedro';

export default function App() {

    let Posicion = 0

    const Camara = () => {

        const Inicio = new THREE.Vector3(0,3,20)

        const Portafolio = new THREE.Vector3(-50,100,20)

        const SobreMi =  new THREE.Vector3(-30,3,20)

        useFrame((state) => {

            if (Posicion === 0) {

                const Direccion = state.camera.position.lerp(Inicio, .01)
    
                state.camera.lookAt(Direccion)

            }

            else if (Posicion === 1) {

                const Direccion = state.camera.position.lerp(Portafolio, .01)
    
                state.camera.lookAt(Direccion)
            }

            else if (Posicion === 2) {

                const Direccion = state.camera.position.lerp(SobreMi, .01)

                state.camera.lookAt(Direccion)
                
            }

        });

        return <> </>

    }

    function MostrarPantallaCarga () {

        anime({

            targets: '#Pagina',

            translateX: "0%",

            translateY: "0%",

            easing: "easeInOutQuad",

            duration: 1500,

            direction: 'linear',

        });

    }

    function MostrarInicio () {

        MostrarPantallaCarga()

        Posicion = 0

        setTimeout(() => {


            anime({

                targets: '#Pagina',
    
                translateX: "-100%",
    
                easing: "linear",
    
                duration: 1500,
    
                direction: 'linear',
    
            });


        }, 2500)

    }

    function MostrarPortafolio () {

        MostrarPantallaCarga()

        Posicion = 1

        setTimeout(() => {

            anime({

                targets: '#Pagina',
    
                translateY: "100%",
    
                easing: "linear",
    
                duration: 1500,
    
                direction: 'linear',
    
            });


        }, 2500)

    }

    function MostrarContacto () {

        MostrarPantallaCarga()

        Posicion = 2

        setTimeout(() => {

            anime({

                targets: '#Pagina',
    
                translateX: "100%",
    
                easing: "easeInOutQuad",
    
                duration: 1500,
    
                direction: 'linear',
    
            });

        }, 2500)

    }

    useEffect(() => {

        setTimeout(() => {

            anime({

                targets: '#Pagina',

                translateX: "-100%",

                easing: "easeInOutQuad",

                duration: 1500,

                direction: 'linear',

            });

        }, 2000)

    }, [])

    return (

        <div className="h-screen w-screen">

            <Canvas
            
            camera={{

                position: [0, -100, 0]

            }}
            
            >

                <Camara />

                <OrbitControls />

                <ambientLight intensity={1} />

                <directionalLight color="none" position={[0, 0, 5]} />

                <Arco />

                <Octahedro />

                { Estrellas.map((Estrella, Index) => {

                    const { x, y, z } = Estrella.position

                    return <mesh key={Index} args={[Estrella.geometry, Estrella.material]} position={[x,y,z]} />

                })}

                <color attach="background" args={['#000']} />

            </Canvas>

            <Loader />

            <Inicio MostrarPortafolio={MostrarPortafolio} MostrarContacto={MostrarContacto} />

            <Portafolio MostrarInicio={MostrarInicio} MostrarContacto={MostrarContacto} />

            <Contacto MostrarInicio={MostrarInicio} MostrarPortafolio={MostrarPortafolio} />

        </div>

    )

}