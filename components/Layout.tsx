import { useState } from 'react'
import useWindowSize from '../hooks/use-window-dimensions'

// components
import { Navbar, NavbarSm, Footer } from './'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const { width, height } = useWindowSize()

  const [menuLink, setMenuLink] = useState<{ menu: string; active: boolean }>({
    menu: 'home',
    active: true,
  })
  return (
    <>
      <header>
        {width > 800 ? (
          <Navbar menuLink={menuLink} setMenuLink={setMenuLink} />
        ) : (
          <NavbarSm menuLink={menuLink} setMenuLink={setMenuLink} />
        )}
      </header>

      {children}

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
