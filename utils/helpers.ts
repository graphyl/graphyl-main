export const checkMenuClicked = (menuName: string, setMenuLink: any) => {
  switch (menuName) {
    case 'home':
      setMenuLink({
        menu: 'home',
        active: true,
      })
      break
    case 'about':
      setMenuLink({
        menu: 'about',
        active: true,
      })
      break
    case 'services':
      setMenuLink({
        menu: 'services',
        active: true,
      })
      break
    case 'portfolio':
      setMenuLink({
        menu: 'portfolio',
        active: true,
      })
      break
    case 'contact':
      setMenuLink({
        menu: 'contact',
        active: true,
      })
      break

    default:
      break
  }
}
