import { MainMenuType } from '@/lib/types/menuTypes'

export const MainMenu: MainMenuType[] = [
     { title: 'Home', link: '/' },
     {
          title: 'About',
          link: '/about',
          submenu: [
               { title: 'Team', link: '/about/team' },
               { title: 'Careers', link: '/about/careers' },
          ],
     },
     { title: 'Contact', link: '/contact' },
]

export const FooterMenu: MainMenuType[] = [
     { title: 'Privacy Policy', link: '/privacy-policy' },
     { title: 'Terms of Service', link: '/terms-of-service' },
]
