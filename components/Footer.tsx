import Link from "next/link"
import Logo from "./Logo"
import { PropsWithChildren } from "react"

interface LinkNavigation {
  name: string
  href: string
  current: boolean
}

const navigation: LinkNavigation[] = [
  { name: "Inicio", href: "#", current: true },
  { name: "Sobre mí", href: "#", current: false },
  { name: "Servicios", href: "#", current: false },
  { name: "Contacto", href: "#", current: false },
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
    <footer className='grid grid-cols-3 justify-center items-center px-10 bg-pink-300 py-4'>
      <Logo />
      <div className='flex flex-col py-5 w-full'>
        <span className='text-lg text-pink-500  sm:text-center'>
          © {new Date().getFullYear().toString()}{" "}
          <ExternalLink href='https://arqustik.com'>Marcela Salazar™</ExternalLink> All Rights Reserved.
        </span>
      </div>

      <ul className='flex justify-between max-w-sm text-white font-bold'>
        {navigation.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
export default Footer
