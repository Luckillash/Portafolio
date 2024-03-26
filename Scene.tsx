import { useGLTF } from '@react-three/drei'

import { useRef } from 'react'

import { useFrame } from 'react-three-fiber'

export default function Model(props: any) {

    const ref = useRef(null)

    const { nodes, materials } = useGLTF('/scene.gltf')

	useFrame(() => {

        if (ref.current) {

            // ref.current.rotation.y += 0.005

        }

    })

    return (

		<group {...props} dispose={null}>

			<mesh 

				ref={ref}
			
				geometry={nodes.Object_2.geometry} 
				
				material={materials.material_0} 
				
				position={[1,0,0]} 
				
				rotation={[3.129, -0.082, -0.011]} 
				
				scale={0.02} 
				
				/>
		
		</group>

    )

}

useGLTF.preload('/scene.gltf')
