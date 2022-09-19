function updateHabilidades(hab) {
  const value = parseInt(document.getElementById(`hab-${hab}`).value)
  let modNum = parseInt(value / 2) - 5

  let mod = modNum > 0 ? "+" + modNum : modNum

  document.getElementById(`mod-${hab}`).value = mod
}

function updateTodasHabilidades() {
  ["for", "des", "con", "int", "sab", "car"].forEach(h => {
    updateHabilidades(h)
  })
}