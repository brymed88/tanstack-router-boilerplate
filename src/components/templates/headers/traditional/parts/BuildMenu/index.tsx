import { MainMenuType } from '@/lib/types/menuTypes'
import { cn } from '@/utils/css'
import { useOnClickOutside } from '@/utils/helpers'
import { Link } from '@tanstack/react-router'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useRef, useState } from 'react'

type MenuItemProps = {
     menu: MainMenuType[]
     onClickCallback?: () => void
}

const BuildSubMenu = (item: MainMenuType, onClickCallback?: () => void) => {
     const [isOpen, setIsOpen] = useState(false)
     const ref = useRef<HTMLLIElement>(null)

     const onClickOutside = () => {
          if (isOpen) {
               setTimeout(() => {
                    setIsOpen(false)
               }, 500)
          }
     }
     useOnClickOutside(ref, onClickOutside)

     return (
          <li className="md:relative" ref={ref} key={item.title}>
               <span
                    className="flex cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:-mr-4 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    onClick={() => setIsOpen(!isOpen)}
               >
                    {item.title}
                    {isOpen ?
                         <ChevronUp size={16} />
                    :    <ChevronDown size={16} />}
               </span>
               <ul
                    className={cn(
                         'top-8 hidden min-w-40 flex-col gap-2 rounded-md p-2 md:absolute md:bg-slate-100',
                         isOpen && 'flex'
                    )}
                    onMouseLeave={() => setIsOpen(false)}
               >
                    {item.submenu?.map((subItem) => (
                         <li key={subItem.title}>
                              <Link
                                   key={subItem.link}
                                   to={subItem.link}
                                   onClick={onClickCallback}
                                   className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >
                                   {subItem.title}
                              </Link>
                         </li>
                    ))}
               </ul>
          </li>
     )
}

const BuildMenu = ({ menu, onClickCallback }: MenuItemProps) => {
     return (
          <ul className="mt-4 flex gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium max-md:flex-col md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
               {menu.map((item) =>
                    item.submenu ?
                         BuildSubMenu(item, onClickCallback)
                    :    <li key={item.title}>
                              <Link
                                   key={item.link}
                                   to={item.link}
                                   onClick={onClickCallback}
                                   className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                              >
                                   {item.title}
                              </Link>
                         </li>
               )}
          </ul>
     )
}

export default BuildMenu
