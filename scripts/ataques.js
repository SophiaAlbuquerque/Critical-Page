function updateAtaques() {

  const { habilidades } = getAll()
  document.getElementById("ataques-c-hab-mod").value = habilidades.forca.modificador
  document.getElementById("ataques-d-hab-mod").value = habilidades.destreza.modificador;

  ["c", "d"].forEach(tipo => {
    const bonus = parseInt(document.getElementById(`ataques-${tipo}-bonus`).value)
    const habMod = parseInt(document.getElementById(`ataques-${tipo}-hab-mod`).value)
    const tam = parseInt(document.getElementById(`ataques-${tipo}-tam`).value)
    const outros = parseInt(document.getElementById(`ataques-${tipo}-outros`).value)

    document.getElementById(`ataques-${tipo}-total`).value = bonus + habMod + tam + outros
  })
}