import { PropsWithChildren } from 'react'
import TraditionalHeader from '../../headers/traditional'

const RootLayout = ({ children }: PropsWithChildren) => {
     return (
          <>
               <TraditionalHeader />
               <hr />
               <main className="h-[calc(h-screen - 20)] mt-20 flex-col">
                    {children}
               </main>
          </>
     )
}

export default RootLayout
