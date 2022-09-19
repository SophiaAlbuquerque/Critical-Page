function updateCa() {
  const all = getAll()
  let halfLevel = parseInt(all.info.nivel / 2)
  const desMod = all.habilidades.destreza.modificador

  const armorBonus = all.ca.armadura
  const shieldBonus = all.ca.escudo
  const sizeMod = all.ca.tamanho
  const others1 = all.ca.outros1
  const others2 = all.ca.outros2

  const total = 10 + halfLevel + desMod + armorBonus + shieldBonus + sizeMod + others1 + others2

  document.getElementById("ca-total").value = total
  document.getElementById("ca-mod-des").value = desMod
  document.getElementById("ca-metade-nivel").value = halfLevel
}