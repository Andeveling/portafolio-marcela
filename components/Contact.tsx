import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid"
const Contact = () => {
  return (
    <div className='h-52 bg-gradient-to-r from-pink-500 to-violet-500 relative flex justify-center' id='contact'>
      <div className='max-w-md  p-10 rounded-xl'>
        <p className='text-xl font-bold text-gray-50'>Información de Contacto</p>
        <div className='flex flex-col justify-center mt-4 space-y-2'>
          <div className='flex text-white'>
            <PhoneIcon className='w-5 h-5 text-white mr-4' />
            <p>+57 300 774 36 02</p>
          </div>
          <div className='flex text-white'>
            <EnvelopeIcon className='w-5 h-5 text-white mr-4' />
            <p>marcela@gmail.com</p>
          </div>
          <div className='flex text-white'>
            <MapIcon className='w-5 h-5 text-white mr-4' />
            <p>Buga, Valle del Cauca</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
