function updateTodasPericias() {
  const {habilidades} = getAll();

  ["forca", "destreza", "inteligencia", "constituicao", "sabedoria", "carisma"].forEach(h => {

    Array.from(document.getElementsByClassName(`pericia-mod-${h}`)).forEach(u => {
      u.value = habilidades[h].modificador
    })

  })

  pericias.forEach(p => updatePericia(p.id))
}

function updatePericia(id) {
  const {nivel} = getInfo()
  const pericia = getPericia(id)

  const grad = pericia.treinada
    ? nivel + 3
    : parseInt(nivel / 2)

  document.getElementById(`pericia-${id}-graduacao`).value = grad
  document.getElementById(`pericia-${id}-total`).value = grad + pericia.modificador + pericia.outros
}