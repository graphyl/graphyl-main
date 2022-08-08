export const checkMenuClicked = (
  from: string,
  menuName: string,
  setMenuLink: any,
  onClose: () => void
) => {
  switch (menuName) {
    case 'home':
      setMenuLink({
        menu: 'home',
        active: true,
      })
      if (from === 'sm') {
        onClose()
      }
      break
    case 'about':
      setMenuLink({
        menu: 'about',
        active: true,
      })
      if (from === 'sm') {
        onClose()
      }
      break
    case 'services':
      setMenuLink({
        menu: 'services',
        active: true,
      })
      if (from === 'sm') {
        onClose()
      }
      break
    case 'portfolio':
      setMenuLink({
        menu: 'portfolio',
        active: true,
      })
      if (from === 'sm') {
        onClose()
      }
      break
    case 'contact':
      setMenuLink({
        menu: 'contact',
        active: true,
      })
      if (from === 'sm') {
        onClose()
      }
      break

    default:
      break
  }
}

export const truncate = (
  string: string,
  length = 100,
  replaceText = '...'
): string => {
  let truncatedString = ''

  if (string.length <= 30) {
    return string
  } else {
    truncatedString = `${string.substring(0, length)}${replaceText}`
    return truncatedString
  }
}

export const toTop = () => {
  scrollTo({ top: 0, behavior: 'smooth' })
}
