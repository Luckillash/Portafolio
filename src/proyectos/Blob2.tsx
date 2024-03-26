import { useEffect } from "react"

import anime from 'animejs';

export default function Blob2 () {

    useEffect(() => {

        const Forma1 = "M83 -152.9C99.3 -134.3 98.6 -95.4 100.7 -66.5C102.7 -37.7 107.6 -18.8 113.8 3.6C120 26 127.6 52 124.8 79.7C122.1 107.4 109 136.9 86.5 147C64 157.2 32 148.1 -2.2 152C-36.5 155.9 -73 172.8 -102.7 166.8C-132.5 160.8 -155.4 131.9 -174.7 100.3C-193.9 68.7 -209.5 34.3 -210.5 -0.6C-211.5 -35.5 -198 -71 -175.7 -97.4C-153.5 -123.8 -122.5 -141.2 -91.7 -151.4C-61 -161.7 -30.5 -164.8 1.4 -167.3C33.3 -169.7 66.7 -171.5 83 -152.9"
        
        const Forma2 = "M89.5 -149.7C112 -142 123.6 -110 139.3 -81C155.1 -52 175 -26 170.3 -2.8C165.5 20.5 136 41 113.8 58.8C91.5 76.5 76.5 91.5 58.8 117.3C41 143 20.5 179.5 -8.5 194.2C-37.5 209 -75 201.9 -96.9 178.6C-118.9 155.2 -125.3 115.6 -125.3 83.1C-125.3 50.7 -118.9 25.3 -120.2 -0.7C-121.5 -26.8 -130.5 -53.7 -127.1 -80.4C-123.8 -107.1 -108.1 -133.6 -84.9 -140.9C-61.7 -148.1 -30.8 -136.1 1.3 -138.4C33.5 -140.7 67 -157.4 89.5 -149.7"
       
        const Forma3 = "M102.1 -174.6C134.6 -158.2 164.7 -135.3 178.5 -105.2C192.2 -75 189.6 -37.5 173.4 -9.4C157.1 18.8 127.3 37.5 106.2 55C85.1 72.4 72.8 88.6 56.6 115.4C40.3 142.2 20.2 179.6 -1.2 181.8C-22.7 183.9 -45.3 150.9 -64.8 125.9C-84.3 101 -100.6 84.3 -110.8 64.6C-120.9 45 -125 22.5 -125.8 -0.5C-126.7 -23.5 -124.4 -47 -116.4 -70.4C-108.4 -93.8 -94.7 -117 -74.4 -140.4C-54 -163.9 -27 -187.4 3.9 -194.2C34.8 -201 69.7 -191 102.1 -174.6"
        
		const Forma4 = "M57.2 -108.2C73.5 -89.8 85.5 -73 107 -55.3C128.6 -37.5 159.8 -18.8 176 9.4C192.3 37.5 193.6 75 172.3 93.3C151.1 111.7 107.3 110.8 74.8 125.9C42.3 141 21.2 172 -3.9 178.8C-29 185.6 -58 168.1 -76.3 144.9C-94.7 121.6 -102.3 92.6 -108.3 67.4C-114.3 42.3 -118.7 21.2 -119.5 -0.5C-120.4 -22.2 -117.8 -44.3 -115.6 -76.1C-113.5 -107.8 -111.7 -149.2 -92.5 -165.9C-73.3 -182.7 -36.7 -174.8 -8.1 -160.8C20.5 -146.8 41 -126.7 57.2 -108.2"
        
        anime({

			targets: '#path2',

			easing: 'easeInOutQuad',

			duration: 3500,

			loop: true,

			d: [

				// { value: [Forma1,Forma2] },

				{ value: Forma4 },

				{ value: Forma3 },

				{ value: Forma2 },
                
				{ value: Forma1 },

			],

		});

	}, [])

    return (

        <div className="h-full flex items-center justify-center">

            <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">

                <g transform="translate(434.1245392138899 284.0734149363377)">
                
                    <path id="path2" d="M83 -152.9C99.3 -134.3 98.6 -95.4 100.7 -66.5C102.7 -37.7 107.6 -18.8 113.8 3.6C120 26 127.6 52 124.8 79.7C122.1 107.4 109 136.9 86.5 147C64 157.2 32 148.1 -2.2 152C-36.5 155.9 -73 172.8 -102.7 166.8C-132.5 160.8 -155.4 131.9 -174.7 100.3C-193.9 68.7 -209.5 34.3 -210.5 -0.6C-211.5 -35.5 -198 -71 -175.7 -97.4C-153.5 -123.8 -122.5 -141.2 -91.7 -151.4C-61 -161.7 -30.5 -164.8 1.4 -167.3C33.3 -169.7 66.7 -171.5 83 -152.9" fill="none" stroke="#6C6499" stroke-width="6">
                    
                    </path>
                    
                </g>
                
            </svg>

        </div>

    )

}