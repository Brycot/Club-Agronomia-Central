import React from "react";
import Image from "next/image";
import Entrada from "../../../../public/instalaciones-img/Imagen1.jpg";
// import Cocina from "../../../../public/instalaciones-img/Imagen2.jpg";
// import Mesas from "../../../../public/instalaciones-img/Imagen3.jpg";
import Quincho from "../../../../public/instalaciones-img/Imagen4.jpg";
import Salon from "../../../../public/instalaciones-img/Imagen5.jpg";
import Salon2 from "../../../../public/instalaciones-img/Imagen6.jpg";
import Cancha from "../../../../public/instalaciones-img/Imagen7.jpg";
// import Cancha2 from "../../../../public/instalaciones-img/Imagen8.jpg";
import { Navbar } from "@/components";
export default function Instalations() {
  return (
    <>
      <Navbar />
      <div className="my-8">
        <h1 className="text-center text-3xl font-bold ">Instalaciones</h1>
      </div>
      {/* ---------------------- BUFFET ----------------------- */}
      <div className="max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-6xl">
        <div className="lg:flex">
          <div className="lg:shrink-0">
            <Image
              className="h-full lg:w-64"
              src={Entrada}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
              BUFFET
            </div>
            <p className="block mt-6 text-lg leading-tight font-medium text-black">
              Económico, Familiar, con ambiente climatizado
            </p>
            <p className="mt-6 text-slate-500 text-justify">
              Si estás buscando un lugar donde disfrutar de deliciosas comidas
              en un ambiente acogedor y familiar, nuestro buffet es la elección
              perfecta. Abierto de lunes a sábado de 8 am a 12 am, ofrecemos una
              amplia variedad de opciones para desayunos, almuerzos y cenas.
              Además, nuestro espacio está completamente climatizado, lo que lo
              convierte en el lugar ideal para disfrutar de una comida en
              cualquier época del año. ¡Te esperamos para que vengas a
              deleitarte!
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- QUINCHO ----------------------- */}
      <div className="mt-6 max-w-md  mx-auto bg-blue-100 rounded-xl shadow-md overflow-hidden lg:max-w-6xl">
        <div className="lg:flex">
          <div className="lg:shrink-0">
            <Image
              className="h-full lg:w-64"
              src={Quincho}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
              QUINCHO
            </div>
            <p className="block mt-6 text-lg leading-tight font-medium text-black">
              Espacio equipado para eventos diversos.
            </p>
            <p className="mt-6 text-slate-500 text-justify">
              Nuestra cede cuenta con un quincho cerrado de casi 50m2, equipado
              con 3 parrillas, mesas y sillas, TV, freezer, heladeras y cocina
              industrial. Perfecto para reuniones familiares, almuerzos
              empresariales, cumpleaños y mucho más. Ven a conocer nuestras
              instalaciones en el Club Social y Deportivo Agronomía Central en
              CABA o contáctanos en clubagronomiacentral@gmail.com o al
              4524-2225.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- SALON DE FIESTAS ----------------------- */}
      <div className="mt-6 max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-6xl">
        <div className="lg:flex">
          <div className="lg:shrink-0">
            <Image
              className="h-full w-full lg:w-64"
              src={Salon}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
              SALON DE FIESTAS
            </div>
            <p className="block mt-6 text-lg leading-tight font-medium text-black">
              Salón exclusivo para eventos memorables.
            </p>
            <p className="mt-6 text-slate-500 text-justify">
              Celebra tu evento en Agronomía Central. Salón único y distinguido
              en Parque Chas con más de 30 años de experiencia. Instalaciones
              adaptables para eventos de hasta 120 personas, equipado con barra
              de tragos, cocina industrial, cabina de DJ y más. Eventos
              corporativos, bautismos, cumpleaños, casamientos y más. Visítanos
              de lunes a viernes de 18 a 20 hs en Bauness 958 CABA. Contáctanos
              en clubagronomiacentral@gmail.com o al 4524-2225.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------- CANCHAS ----------------------- */}
      <div className="mt-6 max-w-md  mx-auto bg-blue-100 rounded-xl shadow-md overflow-hidden lg:max-w-6xl">
        <div className="lg:flex">
          <div className="lg:shrink-0">
            <Image
              className="h-full w-full lg:w-64"
              src={Cancha}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
              CANCHAS
            </div>
            <p className="block mt-6 text-lg leading-tight font-medium text-black">
              Canchas en excelente estado listas para disfrutar.
            </p>
            <p className="mt-6 text-slate-500 text-justify">
              En el Club encontrarás dos canchas techadas disponibles para que
              puedas disfrutar de tu deporte favorito sin preocuparte por las
              inclemencias del clima. La cancha principal es de fútbol 5,
              mientras que la auxiliar es más pequeña y se utiliza
              principalmente para entrenamientos. Además, la cancha auxiliar se
              encuentra disponible para alquiler junto con el quincho para
              fiestas infantiles. ¡Ven y disfruta de una experiencia deportiva
              única en nuestras cómodas instalaciones!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
