import { useTheme } from '@/context/ThemeProvider'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
     const context = useTheme()
     const { setTheme, theme } = context

     return (
          <div className="relative">
               <button
                    className="flex items-center justify-center rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() =>
                         setTheme(theme === 'light' ? 'dark' : 'light')
                    }
               >
                    <Sun
                         className="absolute size-5 stroke-black transition-all dark:hidden"
                         data-testid="toggle-sun"
                    />
                    <Moon
                         className="absolute hidden size-5 transition-all dark:block"
                         data-testid="toggle-moon"
                    />
                    <span className="sr-only">Toggle theme</span>
               </button>
          </div>
     )
}

export default ThemeToggle
