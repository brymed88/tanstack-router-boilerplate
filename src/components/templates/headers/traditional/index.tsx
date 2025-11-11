import ThemeToggle from '@/components/atoms/themeToggle'
import { SITE_CONFIG } from '@/config'
import { MainMenu } from '@/config/menu'
import { cn } from '@/utils/css'
import { useOnClickOutside } from '@/utils/helpers'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useRef, useState } from 'react'
import BuildMenu from './parts/BuildMenu'

const TraditionalHeader = () => {
     const [isOpen, setIsOpen] = useState(false)

     const clickRef = useRef<HTMLElement>(null)

     const handleClickOutside = () => (isOpen ? setIsOpen(false) : null)

     useOnClickOutside(clickRef, handleClickOutside)

     return (
          <nav
               ref={clickRef}
               className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white transition-all ease-in-out max-md:overflow-hidden dark:border-gray-600 dark:bg-gray-900"
               data-testid="traditional-header"
          >
               <div className="mx-auto flex flex-wrap items-center justify-between p-4">
                    <Link
                         to="/"
                         className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                         <img src="/vite.svg" alt="logo" className="size-12" />

                         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                              {SITE_CONFIG.siteName}
                         </span>
                    </Link>
                    <div className="flex gap-2 space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                         <button
                              type="button"
                              aria-label="menuBtn"
                              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              onClick={() => setIsOpen(!isOpen)}
                         >
                              {isOpen ?
                                   <X />
                              :    <Menu />}
                         </button>
                         <ThemeToggle />
                    </div>
                    <div
                         className={cn(
                              'h-0 w-full items-center justify-between opacity-0 md:order-1 md:flex md:h-auto md:w-min md:opacity-100',
                              isOpen &&
                                   'h-auto opacity-100 transition-opacity delay-150 duration-300 ease-in-out'
                         )}
                    >
                         <ul className="mt-4 flex rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium max-md:flex-col md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
                              {BuildMenu({
                                   menu: MainMenu,
                                   onClickCallback: () => setIsOpen(false),
                              })}
                         </ul>
                    </div>
               </div>
          </nav>
     )
}

export default TraditionalHeader
