import Image from "next/image"
import Marcela from "public/marcela.jpg"

const About = () => {
  return (
    <section className='bg-white min-h-screen flex items-center' id='about'>
      <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 '>
        <div className='text-center flex-col justify-center w-full mb-8'>
          <p className='text-5xl font-bold text-center text-violet-500'>Sobre mí</p>
          <div className='flex justify-center'>
            <p className='text-3xl font-bold text-center text-white bg-violet-500 w-fit px-2 -rotate-2'>
              Marcela Salazar
            </p>
          </div>
        </div>
        <div className='px-4 py-6 sm:px-0 grid grid-cols-2 gap-12'>
          <div className='px-2 text-xl text-gray-600 h-full max-w-sm col-span-2 sm:col-span-1'>
            <p>
              Mi nombre es <b>Marcela Salazar</b>, soy una enfermera con 1 año de experiencia en cuidado de pacientes
              postrados con gastrostomía, traqueostomía, adminisrando medicamentos, controlando síntomas y organizando
              historiales clínicos de los pacientes. Durante mi carrera he desarrollado una actitud metódica y una
              escucha activa, ayudando a resolver los problemas de los pacientes de manera eficiente. Ganando la
              confianza de mis clientes mediante un servicio profesional y preciso según las necesidades del paciente.
            </p>
          </div>
          <div className=' w-fit  col-span-2 sm:col-span-1 flex items-center'>
            <div className='max-h-fit border-4 border-dashed border-gray-400 rounded-lg'>
              <Image
                width={400}
                height={400}
                src={Marcela}
                alt='foto'
                className='rotate-6 rounded-lg border-4 border-dashed border-pink-500'
              />
            </div>
          </div>
        </div>
        {/* /End replace */}
      </div>
    </section>
  )
}
export default About
