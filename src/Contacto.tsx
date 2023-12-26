import AnimacionContacto from './animaciones/Contacto';
import BotonNeon from './componentes/NeonButton';
import Picos from './animaciones/PicosDerecha'

interface IProps {

    MostrarInicio: () => void,

    MostrarPortafolio: () => void,

}

export default function Contacto({ MostrarInicio, MostrarPortafolio }: IProps) {

    return (

        <main className="h-screen w-screen absolute top-0 -left-full text-white grid grid-cols-12 items-center justify-items-end" id="Pagina">

            <Picos />

            <section className="col-end-9 text-4xl grid gap-7">

            <AnimacionContacto />

                <h1>Tu nombre</h1>

                <input type="text" />

                <p>Tu correo</p>

                <input type="text" />

                <p>Mensaje</p>

                <input type="text" />

                <div className="flex gap-5">

                    <BotonNeon onClick={MostrarInicio} primaryText="Inicio" />

                    <BotonNeon onClick={MostrarPortafolio} primaryText="Portafolio" />

                </div>

            </section>

        </main>

    )

}
