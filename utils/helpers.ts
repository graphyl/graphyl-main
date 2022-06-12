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

export const truncate = (
  string: string,
  length: number = 100,
  replaceText: string = '...'
): string => {
  let truncatedString = '';

  if (string.length <= 30) {
      return string;
  } else {
      truncatedString = `${string.substring(0, length)}${replaceText}`;
      return truncatedString;
  }
};
