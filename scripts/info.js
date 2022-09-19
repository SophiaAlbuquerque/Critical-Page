const pageTitle = document.getElementById("page-title").textContent

function updateTitle() {
  const name = getAll().info.nome

  const suffix = name.length === 0 ? "" : " - " + name
  document.getElementById("page-title").textContent = pageTitle + suffix
}

function updateInfo() {
  const {deslocamento, nivel} = getAll().info

  if (deslocamento < 1.5)
    document.getElementById("deslocamento").value = 1.5
  if (nivel < 1)
    document.getElementById("nivel").value = 1

  updateTitle()
  updateCa()
  updateResistencias()
}