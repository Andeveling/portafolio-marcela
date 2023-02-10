import Link from "next/link"

const Logo = () => {
  return (
    <div className='flex-shrink-0'>
      <Link href={"/"} className='flex items-center'>
        {/* <HeartIcon className='h-6 w-6 text-red-500' /> */}
        <span className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold'>
          Marcela Salazar
        </span>
      </Link>
    </div>
  )
}
export default Logo
