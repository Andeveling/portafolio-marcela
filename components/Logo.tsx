import Link from "next/link"
import { HeartIcon } from "@heroicons/react/24/solid"

const Logo = () => {
  return (
    <div className='flex-shrink-0'>
      <Link href={"/"} className='flex'>
        {/*  <HeartIcon className='h-8 w-8 text-red-500' /> */}
        <span className='text-3xl text-violet-500 font-extrabold'>Marcela Salazar</span>
      </Link>
    </div>
  )
}
export default Logo
