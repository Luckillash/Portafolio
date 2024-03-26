export default function Filter () {

    return (

        <svg style={{ position: "absolute", width: "100%", height: "100%" }}>

            <filter id='noise-filter'>

                <feTurbulence 

                type='fractalNoise' 

                baseFrequency='0.6' 

                stitchTiles='stitch'/>

            </filter>

            <clipPath id="rounded-clip">

                <rect x="0" y="0" width="100%" height="100%" rx="20" ry="20"/>

            </clipPath>

        </svg>

    )
    
}