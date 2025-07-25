import ThemeToggle from '@/components/shared/themeToggle'
import { Link } from '@tanstack/react-router'

const Header = () => {
     return (
          <header>
               <div className="flex items-center justify-between p-4">
                    <h1 className="text-xl font-bold">
                         Tanstack Router Boilerplate
                    </h1>
                    <nav className="flex items-center gap-4">
                         <ul className="flex space-x-4">
                              <li>
                                   <Link to="/" className="hover:underline">
                                        Home
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        to="/about"
                                        className="hover:underline"
                                   >
                                        About
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        to="/contact"
                                        className="hover:underline"
                                   >
                                        Contact
                                   </Link>
                              </li>
                         </ul>
                         <ThemeToggle />
                    </nav>
               </div>
          </header>
     )
}

export default Header
