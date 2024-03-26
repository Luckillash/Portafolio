import { useMediaQuery, useTheme } from '@mui/material';
import Bienvenidos from './Bienvenidos/index';

export default function Inicio () {

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up('sm')) ? { paddingLeft: "10%" } : { marginInline: "auto" } 

    const width = useMediaQuery(theme.breakpoints.up('sm')) ? "" : " max-w-[300px]"
    return (

        <section className='h-screen relative flex items-center'>

            {/* <Olas /> */}

            <div style={matches} className={"flex flex-col gap-5 text-white text-4xl" + width}>

                <Bienvenidos />

                <h1>Me llamo Lucas</h1>

                <p>Y este es mi universo 🚀</p>

            </div>

        </section>

    )

}
