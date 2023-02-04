import { HeartIcon } from "@heroicons/react/24/solid"

const SatisfiedClients = () => {
  return (
    <div className='w-auto p-4 bg-pink-200 rounded-lg absolute -right-10 text-center'>
      <p className='text-xl text-violet-900 font-bold'>Clientes Satisfechos</p>
      <div className='flex justify-center items-center text-center'>
        <HeartIcon className='w-8 h-8 mr-2 mt-1 text-pink-500' />
        <span className='text-3xl text-violet-800 font-bold'>12</span>
      </div>
    </div>
  )
}
export default SatisfiedClients
