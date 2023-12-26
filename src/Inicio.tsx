import Bienvenidos from './animaciones/Bienvenidos';
import Olas from './animaciones/OlasIzquierda';
import BotonNeon from './componentes/NeonButton';

interface IProps {

    MostrarPortafolio: () => void,

    MostrarContacto: () => void,

}

export default function Inicio({ MostrarPortafolio, MostrarContacto }: IProps) {

    return (

        <main className="h-screen w-screen absolute top-0 left-full text-white grid grid-cols-12 content-center" id="Pagina">

            <Olas />

            <section className="col-start-4 text-4xl z-0 grid gap-7">

                <Bienvenidos />

                <h1>Soy Lucas</h1>

                <p>Y este es mi universo 🚀</p>

                <div className="flex gap-5">

                    <BotonNeon onClick={MostrarPortafolio} primaryText="Portafolio" />

                    <BotonNeon onClick={MostrarContacto} primaryText="Contacto" />

                </div>

            </section>

        </main>

    )

}
