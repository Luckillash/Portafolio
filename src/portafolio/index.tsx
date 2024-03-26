
import Cibersecurity from "./Cibersecurity";
import Contact from "./Contact";

import Technologies from "./Fullstack";
import Hobby from "./Hobby";

export default function Portafolio() {

    return (

        <section className="bg-color ">

            <div className="max-w-5xl grid gap-4 mx-auto pt-5" >

                <Technologies />

                <Cibersecurity />

                <Hobby />

                <Contact />

            </div>

        </section>



    )

}
