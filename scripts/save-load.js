function salvarPersonagem() {
  const person = getAll()

  const blob = new Blob(
    [JSON.stringify(person)],
    {type: "application/json"}
  )

  const a = document.createElement("a")
  a.href  = URL.createObjectURL(blob)
  a.download = `Tormenta Ficha - ${person.info.nome}`
  a.style.display = "none"

  document.body.append(a)
  a.click()
  a.remove()
}

function carregarPersonagem() {
  const file = document.getElementById("file-upload").files[0]

  if (file == undefined)
    return

  const fr = new FileReader()
  fr.readAsText(file)

  fr.onerror = () => { alert(fr.error) }
  fr.onload  = () => {
    const person = JSON.parse(fr.result)
    console.log(person);
  
    document.getElementById("nome").value         = person.info.nome
    document.getElementById("player").value       = person.info.player
    document.getElementById("raca").value         = person.info.raca
    document.getElementById("classe").value       = person.info.classe
    document.getElementById("nivel").value        = person.info.nivel
    document.getElementById("tendencia").value    = person.info.tendencia
    document.getElementById("sexo").value         = person.info.sexo
    document.getElementById("idade").value        = person.info.idade
    document.getElementById("divindade").value    = person.info.divindade
    document.getElementById("tamanho").value      = person.info.tamanho
    document.getElementById("deslocamento").value = person.info.deslocamento
  
    document.getElementById("hab-for").value = person.habilidades.forca.habilidade
    document.getElementById("hab-des").value = person.habilidades.destreza.habilidade
    document.getElementById("hab-con").value = person.habilidades.constituicao.habilidade
    document.getElementById("hab-int").value = person.habilidades.inteligencia.habilidade
    document.getElementById("hab-sab").value = person.habilidades.sabedoria.habilidade
    document.getElementById("hab-car").value = person.habilidades.carisma.habilidade
  
    document.getElementById("pv-max").value   = person.pv_pa.maximo
    document.getElementById("pv-atual").value = person.pv_pa.atual
    document.getElementById("pa").value       = person.pv_pa.pa
  
    document.getElementById("bonus-armadura").value = person.ca.armadura
    document.getElementById("bonus-escudo").value   = person.ca.escudo
    document.getElementById("ca-mod-tamanho").value = person.ca.tamanho
    document.getElementById("ca-outros1").value     = person.ca.outros1
    document.getElementById("ca-outros2").value     = person.ca.outros2
  
    document.getElementById("res-fort-outros").value = person.resistencias.fortitude.outros
    document.getElementById("res-ref-outros").value  = person.resistencias.reflexo.outros
    document.getElementById("res-von-outros").value  = person.resistencias.vontade.outros
  
    Object.keys(person.pericias).forEach(id => {
      const p = person.pericias[id]
  
      document.getElementById(`pericia-${id}-treinada`).checked = p.treinada
      document.getElementById(`pericia-${id}-outros`).value     = p.outros
    })
  
    document.getElementById("ataques-c-bonus").value  = person.ataques.corpoAcorpo.bba
    document.getElementById("ataques-c-tam").value    = person.ataques.corpoAcorpo.tamanho
    document.getElementById("ataques-c-outros").value = person.ataques.corpoAcorpo.outros
    document.getElementById("ataques-d-bonus").value  = person.ataques.aDistancia.bba
    document.getElementById("ataques-d-tam").value    = person.ataques.aDistancia.tamanho
    document.getElementById("ataques-d-outros").value = person.ataques.aDistancia.outros

    updateInfo();
    updateTodasHabilidades()
    updateTodasPericias()
    updateResistencias()
    updateCa()

    updateMaxPv()
    updatePa()
    updateAtaques()
  }
}