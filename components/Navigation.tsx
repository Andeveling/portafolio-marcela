import { Disclosure, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "./Logo"

const user = {
  name: "Marcela Salazar",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}
const navigation = [
  { name: "Inicio", href: "#", current: true },
  { name: "Servicios", href: "#", current: false },
  { name: "Sobre mí", href: "#", current: false },
  { name: "Contacto", href: "#", current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const Navigation = () => {
  return (
    <div className='h-16 mx-auto max-w-full px-4 sm:px-6 lg:px-8 bg-pink-300 fixed top-0 right-0 left-0 border-b-2 z-50'>
      <Disclosure as='nav'>
        {({ open }) => (
          <>
            <div>
              <div className='flex h-16 items-center justify-between'>
                <div className='flex items-center'>
                  <Logo />
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4 '>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-violet-500 text-white"
                              : "text-pink-500 hover:bg-violet-400 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='-mr-2 flex md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-violet-500 p-2 text-white font-bold hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-800'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Transition
              enter='transition duration-300 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-300 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'>
              <Disclosure.Panel className='md:hidden bg-pink-100 border-l-2 border-b-2 border-r-2 border-amber-800 rounded-b-lg'>
                <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-violet-400 text-pink-500 font-extrabold"
                          : "text-pink-500 hover:bg-violet-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}
export default Navigation
