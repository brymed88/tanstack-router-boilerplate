import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/shared/ThemeProvider'
import { Button } from '@/components/ui/Button'
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

const ThemeToggle = () => {
     const { setTheme } = useTheme()

     return (
          <DropdownMenu>
               <DropdownMenuTrigger asChild>
                    <Button
                         variant="outline"
                         size="icon"
                         className="rounded-lg p-5"
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
                    </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end" data-testid="toggle-content">
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                         Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                         Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>
                         System
                    </DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu>
     )
}

export default ThemeToggle
