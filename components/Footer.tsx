import Link from "next/link"
import Logo from "./Logo"
import { PropsWithChildren } from "react"
import { HeartIcon } from "@heroicons/react/24/solid"

interface LinkNavigation {
  name: string
  href: string
  current: boolean
}

const navigation: LinkNavigation[] = [
  { name: "Inicio", href: "#", current: true },
  { name: "Sobre mí", href: "#about", current: false },
  { name: "Servicios", href: "#services", current: false },
  { name: "Contacto", href: "#contact", current: false },
]

interface ExternalLinkProps extends PropsWithChildren {
  href: string
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a
    className='text-violet-400 hover:text-gray-600 font-bold transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}>
    {children}
  </a>
)

const Footer = () => {
  return (
    <footer className='grid md:grid-cols-3 grid-cols-1 justify-center items-center px-10 bg-pink-300 py-4'>
      <div className='flex justify-center'>
        <Logo />
      </div>
      <div className='flex flex-col py-5 w-full'>
        <span className='text-base text-pink-500  text-center '>
          © {new Date().getFullYear().toString()} <ExternalLink href='https://arqustik.com'></ExternalLink> All Rights
          Reserved.
        </span>
      </div>

      <div className='flex justify-center'>
        <ul className='flex justify-between max-w-sm text-white font-bold text-center space-x-4'>
          {navigation.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='col-span-full flex justify-center text-center'>
        <p className='flex text-gray-500 text-lg'>
          Hecho con el&ensp;
          <span className='flex items-center'>
            <HeartIcon className='w-6 h-6 text-red-500' />
          </span>
          &ensp;por&ensp;
          <a href='https://andeveling.netlify.app/' className='text-blue-500' target='_blank' rel='noreferrer'>
            Andres Parra
          </a>
        </p>
      </div>
    </footer>
  )
}
export default Footer
