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
      <header className='bg-white shadow grid grid-cols-2 gap-10  min-h-screen items-center py-20 mt-12 text-violet-400 px-10 sm:px-20'>
        <div className='max-w-7xl self-center justify-self-center font-bold col-span-2 lg:col-span-1 '>
          <p className=' text-6xl sm:text-7xl'>¡Hola soy</p>
          <div className='flex '>
            <p className='w-fit  text-6xl sm:text-7xl flex-col font-extrabold text-white bg-violet-400 mt-4 p-2 rounded-md sm:text-center '>
              Marcela Salazar <span className=' text-6xl sm:text-7xlmt-4 pt-2'>!</span>
            </p>
          </div>
          <p className=' text-2xl sm:text-3xl text-violet-400'>Soy una enfermera apasionada por la salud.</p>
          <div className='flex justify-end mt-2'>
            <button className='flex bg-pink-500 text-white p-3 rounded-md hover:bg-violet-500'>Descargar CV</button>
          </div>
        </div>

        <div className='flex justify-center items-center col-span-2 lg:col-span-1 mt-10 lg:mt-0'>
          <div className='h-96 w-full rounded-lg border-4 border-dashed border-gray-500 relative flex items-center justify-start'>
            <Image width={500} height={500} alt='nurse' src={nurse} className='mt-10' />

            <SatisfiedClients />
          </div>
        </div>
      </header>
    </>
  )
}
