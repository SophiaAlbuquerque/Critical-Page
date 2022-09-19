function updateResistencias() {
  const habilidades = getAll().habilidades
  const desMod = habilidades.destreza.modificador
  const conMod = habilidades.constituicao.modificador
  const sabMod = habilidades.sabedoria.modificador

  const halfLevel = parseInt(getAll().info.nivel / 2)

  document.getElementById("res-fort-mod").value = conMod
  document.getElementById("res-ref-mod").value = desMod
  document.getElementById("res-von-mod").value = sabMod;

  ["fort", "ref", "von"].forEach(r => {
    const mod       = parseInt(document.getElementById(`res-${r}-mod`).value)
    const outros    = parseInt(document.getElementById(`res-${r}-outros`).value)

    const total = halfLevel + mod + outros
    document.getElementById(`res-${r}-total`).value = total
    document.getElementById(`res-${r}-metade-nivel`).value = halfLevel
  })
}