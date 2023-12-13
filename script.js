function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else {
  // html.classList.add('light')
  //}

  html.classList.toggle("light")

  //Alterar a imagem de acordo com o modo selecionado Dark/Light

  const avatar = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar-light.png")
  } else {
    avatar.setAttribute("src", "./assets/avatar.png")
  }
}
