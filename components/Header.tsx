"use client"
import Navigation from "./Navigation"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import SatisfiedClients from "./SatisfiedClients"
import Image from "next/image"
import nurse from "public/nurse.png"

export default function Header() {
  return (
    <>
      <Navigation />
      <header className='bg-white shadow grid grid-cols-2 min-h-max px-10 py-20 mt-12'>
        <div className='max-w-7xl self-center justify-self-center font-bold text-purple-900'>
          <p className='text-7xl'>¡Hola yo soy</p>
          <div className='flex '>
            <p className='w-fit text-7xl flex-col font-extrabold text-white bg-violet-500 mt-4 p-2 rounded-md'>
              Marcela Salazar
            </p>
            <span className='text-7xl mt-4 pt-2'>!</span>
          </div>
          <p className='text-3xl text-violet-400'>Soy una enfermera apasionada por la salud.</p>
          <div className='flex justify-end mt-2'>
            <button className='flex bg-violet-800 text-white p-3 rounded-md hover:bg-violet-900'>Descargar CV</button>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='h-96 w-full rounded-lg border-4 border-dashed border-gray-500 relative flex items-center'>
            <Image width={500} height={500} alt='nurse' src={nurse} />
            <SatisfiedClients />
          </div>
        </div>
      </header>
    </>
  )
}
