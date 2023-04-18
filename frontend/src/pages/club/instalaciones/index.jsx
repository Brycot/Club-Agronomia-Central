import Image from 'next/image';

import { Layout } from '@/components/Page';
import { useSlideInstalations } from '@/hooks';

import Entrada from '../../../../public/installations-img/Imagen1.jpg';
import Cocina from '../../../../public/installations-img/Imagen2.jpg';
import Mesas from '../../../../public/installations-img/Imagen3.jpg';
import Quincho from '../../../../public/installations-img/Imagen4.jpg';
import Salon from '../../../../public/installations-img/Imagen5.jpg';
import Cancha from '../../../../public/installations-img/Imagen7.jpg';
import Cancha2 from '../../../../public/installations-img/Imagen8.jpg';

export default function Instalations() {
    const {
        currentIndex,
        currentIndex2,
        images1,
        images2,
        prevSlide,
        nextSlide,
        prevSlide1,
        nextSlide1,
    } = useSlideInstalations(Entrada, Cocina, Mesas, Cancha, Cancha2);

    return (
        <Layout
            title={'Instalaciones'}
            image={
                'https://easycdn.es/12/i/como-se-construyen-las-pistas-de-futbol-sala-y-cuales-son-sus-caracteristicas-principales_5512.webp'
            }
        >
            <section className="py-10 px-5 w-full h-full">
                {/* ---------------------- BUFFET ----------------------- */}
                <div className="max-w-md  mx-auto bg-white  shadow-md lg:max-w-6xl">
                    <div className="lg:flex">
                        <div className="relative group">
                            <Image
                                src={images1[currentIndex]}
                                className=" h-full"
                            ></Image>

                            <button
                                onClick={prevSlide}
                                className="absolute left-1 top-[50%] rounded-full p-1 bg-slate-200 text-white hover:bg-slate-400"
                            >
                                <svg
                                    className="h-5 w-5 -rotate-180 "
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className=" absolute top-[50%] right-1 rounded-full  p-1 bg-slate-200 text-white hover:bg-slate-400"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-8 lg:w-[158%]">
                            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                                BUFFET
                            </div>
                            <p className="block mt-6 text-lg leading-tight font-medium text-black">
                                Económico, Familiar, con ambiente climatizado
                            </p>
                            <p className="mt-6 text-slate-500 text-justify">
                                Si estás buscando un lugar donde disfrutar de
                                deliciosas comidas en un ambiente acogedor y
                                familiar, nuestro buffet es la elección
                                perfecta. Abierto de lunes a sábado de 8 am a 12
                                am, ofrecemos una amplia variedad de opciones
                                para desayunos, almuerzos y cenas. Además,
                                nuestro espacio está completamente climatizado,
                                lo que lo convierte en el lugar ideal para
                                disfrutar de una comida en cualquier época del
                                año. ¡Te esperamos para que vengas a deleitarte!
                            </p>
                        </div>
                    </div>
                </div>

                {/* ---------------------- QUINCHO ----------------------- */}
                <div className="mt-6 max-w-md  mx-auto bg-blue-100 shadow-md overflow-hidden lg:max-w-6xl">
                    <div className="lg:flex">
                        <div>
                            <Image
                                className="h-full "
                                src={Quincho}
                                alt="Modern building architecture"
                            />
                        </div>
                        <div className="p-8 lg:w-[180%]">
                            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                                QUINCHO
                            </div>
                            <p className="block mt-6 text-lg leading-tight font-medium text-black">
                                Espacio equipado para eventos diversos.
                            </p>
                            <p className="mt-6 text-slate-500 text-justify">
                                Nuestra cede cuenta con un quincho cerrado de
                                casi 50m2, equipado con 3 parrillas, mesas y
                                sillas, TV, freezer, heladeras y cocina
                                industrial. Perfecto para reuniones familiares,
                                almuerzos empresariales, cumpleaños y mucho más.
                                Ven a conocer nuestras instalaciones en el Club
                                Social y Deportivo Agronomía Central en CABA o
                                contáctanos en clubagronomiacentral@gmail.com o
                                al 4524-2225.
                            </p>
                        </div>
                    </div>
                </div>
                {/* ---------------------- SALON DE FIESTAS ----------------------- */}
                <div className="mt-6 max-w-md  mx-auto bg-white shadow-md overflow-hidden lg:max-w-6xl">
                    <div className="lg:flex">
                        <div>
                            <Image
                                className="h-full"
                                src={Salon}
                                alt="Modern building architecture"
                            />
                        </div>
                        <div className="p-8 w-[100%]">
                            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                                SALON DE FIESTAS
                            </div>
                            <p className="block mt-6 text-lg leading-tight font-medium text-black">
                                Salón exclusivo para eventos memorables.
                            </p>
                            <p className="mt-6 text-slate-500 text-justify">
                                Celebra tu evento en Agronomía Central. Salón
                                único y distinguido en Parque Chas con más de 30
                                años de experiencia. Instalaciones adaptables
                                para eventos de hasta 120 personas, equipado con
                                barra de tragos, cocina industrial, cabina de DJ
                                y más. Eventos corporativos, bautismos,
                                cumpleaños, casamientos y más. Visítanos de
                                lunes a viernes de 18 a 20 hs en Bauness 958
                                CABA. Contáctanos en
                                clubagronomiacentral@gmail.com o al 4524-2225.
                            </p>
                        </div>
                    </div>
                </div>
                {/* ---------------------- CANCHAS ----------------------- */}
                <div className="my-6 max-w-md  mx-auto bg-blue-100 shadow-md  lg:max-w-6xl">
                    <div className="lg:flex">
                        <div className="relative group">
                            <Image
                                src={images2[currentIndex2]}
                                className="  h-full"
                            ></Image>
                            <button
                                onClick={prevSlide1}
                                className="absolute left-1 top-[50%] rounded-full p-1 bg-slate-200 text-white hover:bg-slate-400"
                            >
                                <svg
                                    className="h-5 w-5 -rotate-180 "
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide1}
                                className=" absolute top-[50%] right-1 rounded-full  p-1 bg-slate-200 text-white hover:bg-slate-400"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-8 w-[100%]">
                            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                                CANCHAS
                            </div>
                            <p className="block mt-6 text-lg leading-tight font-medium text-black">
                                Canchas en excelente estado listas para
                                disfrutar.
                            </p>
                            <p className="mt-6 text-slate-500 text-justify">
                                En el Club encontrarás dos canchas techadas
                                disponibles para que puedas disfrutar de tu
                                deporte favorito sin preocuparte por las
                                inclemencias del clima. La cancha principal es
                                de fútbol 5, mientras que la auxiliar es más
                                pequeña y se utiliza principalmente para
                                entrenamientos. Además, la cancha auxiliar se
                                encuentra disponible para alquiler junto con el
                                quincho para fiestas infantiles. ¡Ven y disfruta
                                de una experiencia deportiva única en nuestras
                                cómodas instalaciones!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}