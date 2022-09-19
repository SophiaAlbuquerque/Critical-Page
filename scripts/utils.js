function getInfo() {
  return {
    nome: document.getElementById("nome").value,
    player: document.getElementById("player").value,
    raca: document.getElementById("raca").value,
    classe: document.getElementById("classe").value,
    nivel: parseInt(document.getElementById("nivel").value),
    tendencia: document.getElementById("tendencia").value,
    sexo: document.getElementById("sexo").value,
    idade: parseInt(document.getElementById("idade").value),
    divindade: document.getElementById("divindade").value,
    tamanho: document.getElementById("tamanho").value,
    deslocamento: parseInt(document.getElementById("deslocamento").value),
  }
}

function getPericia(id) {
  return {
    treinada: document.getElementById(`pericia-${id}-treinada`).checked,
    total: parseInt(document.getElementById(`pericia-${id}-total`).value),
    graduacao: parseInt(document.getElementById(`pericia-${id}-graduacao`).value),
    modificador: parseInt(document.getElementById(`pericia-${id}-mod`).value),
    outros: parseInt(document.getElementById(`pericia-${id}-outros`).value)
  }
}

function getAll() {
  const all = {
    info: getInfo(),
    habilidades: {
      forca: {
        habilidade: parseInt(document.getElementById("hab-for").value),
        modificador: parseInt(document.getElementById("mod-for").value),
      },
      destreza: {
        habilidade: parseInt(document.getElementById("hab-des").value),
        modificador: parseInt(document.getElementById("mod-des").value),
      },
      constituicao: {
        habilidade: parseInt(document.getElementById("hab-con").value),
        modificador: parseInt(document.getElementById("mod-con").value),
      },
      inteligencia: {
        habilidade: parseInt(document.getElementById("hab-int").value),
        modificador: parseInt(document.getElementById("mod-int").value),
      },
      sabedoria: {
        habilidade: parseInt(document.getElementById("hab-sab").value),
        modificador: parseInt(document.getElementById("mod-sab").value),

      },
      carisma: {
        habilidade: parseInt(document.getElementById("hab-car").value),
        modificador: parseInt(document.getElementById("mod-car").value),
      }
    },
    pv_pa: {
      maximo: parseInt(document.getElementById("pv-max").value),
      atual: parseInt(document.getElementById("pv-atual").value),
      pa: parseInt(document.getElementById("pa").value),
    },
    ca: {
      total: parseInt(document.getElementById("ca-total").value),
      armadura: parseInt(document.getElementById("bonus-armadura").value),
      escudo: parseInt(document.getElementById("bonus-escudo").value),
      tamanho: parseInt(document.getElementById("ca-mod-tamanho").value),
      outros1: parseInt(document.getElementById("ca-outros1").value),
      outros2: parseInt(document.getElementById("ca-outros2").value),
    },
    resistencias: {
      fortitude: {
        total: parseInt(document.getElementById("res-fort-total").value),
        outros: parseInt(document.getElementById("res-fort-outros").value),
      },
      reflexo: {
        total: parseInt(document.getElementById("res-ref-total").value),
        outros: parseInt(document.getElementById("res-ref-outros").value),
      },
      vontade: {
        total: parseInt(document.getElementById("res-von-total").value),
        outros: parseInt(document.getElementById("res-von-outros").value),
      }
    },
    pericias: {},
    ataques: {
      corpoAcorpo: {
        total: parseInt(document.getElementById("ataques-c-total").value),
        bba: parseInt(document.getElementById("ataques-c-bonus").value),
        tamanho: parseInt(document.getElementById("ataques-c-tam").value),
        outros: parseInt(document.getElementById("ataques-c-outros").value),
      }, 
      aDistancia: {
        total: parseInt(document.getElementById("ataques-d-total").value),
        bba: parseInt(document.getElementById("ataques-d-bonus").value),
        tamanho: parseInt(document.getElementById("ataques-d-tam").value),
        outros: parseInt(document.getElementById("ataques-d-outros").value),
      }
    }
  }

  const pericias = {}
  Array.from(document.getElementById("pericias").children[1].children).forEach(tr => {
    const id = tr.getAttribute("pericia-id")
    if (id == null) return

    pericias[id] = getPericia(id)
  })
  all.pericias = pericias

  return all
}