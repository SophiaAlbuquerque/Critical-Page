const tableElement = document.getElementById("pericias")

const pericias = [
  {
    nome: "Acrobacia",
    penalidade: true,
    treinamento: false,
    modificador: "destreza",
    id: "acrobacia"
  },
  {
    nome: "Adestrar Animais",
    penalidade: false,
    treinamento: true,
    modificador: "carisma",
    id: "adestrar-animais"
  },
  {
    nome: "Atletismo",
    penalidade: true,
    treinamento: false,
    modificador: "forca",
    id: "atletismo"
  },
  {
    nome: "Atuação (Dramaturgia)",
    penalidade: false,
    treinamento: false,
    modificador: "carisma",
    id: "atuar-dramaturgia"
  },
  {
    nome: "Atuação (Dança)",
    penalidade: false,
    treinamento: false,
    modificador: "carisma",
    id: "atuar-danca"
  },
  {
    nome: "Atuação (Música)",
    penalidade: false,
    treinamento: false,
    modificador: "carisma",
    id: "atuar-musica"
  },
  {
    nome: "Atuação (Oratória)",
    penalidade: false,
    treinamento: false,
    modificador: "carisma",
    id: "atuar-oratoria"
  },
  {
    nome: "Cavalgar",
    penalidade: false,
    treinamento: false,
    modificador: "destreza",
    id: "cavalgar"
  },
  {
    nome: "Conhecimento (Arcano)",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "conhecimento-arcano"
  },
  {
    nome: "Conhecimento (Engenharia)",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "conhecimento-engenharia"
  },
  {
    nome: "Conhecimento (Geografia)",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "conhecimento-geografia"
  },
  {
    nome: "Conhecimento (Historia)",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "conhecimento-historia"
  },
  {
    nome: "Conhecimento (Natureza)",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "conhecimento-natureza"
  },
  {
    nome: "Conhecimento (Nobreza)",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "conhecimento-nobreza"
  },
  {
    nome: "Conhecimento (Religião)",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "conhecimento-religiao"
  },
  {
    nome: "Conhecimento (Tormenta)",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "conhecimento-tormenta"
  },
  {
    nome: "Cura",
    penalidade: false,
    treinamento: false,
    modificador: "sabedoria",
    id: "cura"
  },
  {
    nome: "Diplomacia",
    penalidade: false,
    treinamento: false,
    modificador: "carisma",
    id: "diplomacia"
  },
  {
    nome: "Enganação",
    penalidade: false,
    treinamento: false,
    modificador: "carisma",
    id: "enganacao"
  },
  {
    nome: "Furtividade",
    penalidade: true,
    treinamento: false,
    modificador: "destreza",
    id: "furtividade"
  },
  {
    nome: "Identificar Magia",
    penalidade: false,
    treinamento: true,
    modificador: "inteligencia",
    id: "identificar-magia"
  },
  {
    nome: "Iniciativa",
    penalidade: false,
    treinamento: false,
    modificador: "destreza",
    id: "iniciativa"
  },
  {
    nome: "Intimidação",
    penalidade: false,
    treinamento: false,
    modificador: "carisma",
    id: "intimidacao"
  },
  {
    nome: "Intuição",
    penalidade: false,
    treinamento: false,
    modificador: "sabedoria",
    id: "intuicao"
  },
  {
    nome: "Ladinagem",
    penalidade: true,
    treinamento: true,
    modificador: "destreza",
    id: "ladinagem"
  },
  {
    nome: "Obter Informação",
    penalidade: false,
    treinamento: false,
    modificador: "carisma",
    id: "obter-informacao"
  },
  {
    nome: "Ofício (Alquimia)",
    penalidade: false,
    treinamento: false,
    modificador: "inteligencia",
    id: "oficio-alquimia"
  },
  {
    nome: "Ofício (Alvenaria)",
    penalidade: false,
    treinamento: false,
    modificador: "inteligencia",
    id: "oficio-alvenaria"
  },
  {
    nome: "Ofício (Carpintaria)",
    penalidade: false,
    treinamento: false,
    modificador: "inteligencia",
    id: "oficio-carpintaria"
  },
  {
    nome: "Ofício (Joalheria)",
    penalidade: false,
    treinamento: false,
    modificador: "inteligencia",
    id: "oficio-joalheria"
  },
  {
    nome: "Ofício (Metalurgia)",
    penalidade: false,
    treinamento: false,
    modificador: "inteligencia",
    id: "oficio-metalurgia"
  },
  {
    nome: "Ofício (Arte)",
    penalidade: false,
    treinamento: false,
    modificador: "inteligencia",
    id: "oficio-arte"
  },
  {
    nome: "Ofício (Profissão)",
    penalidade: false,
    treinamento: false,
    modificador: "inteligencia",
    id: "oficio-profissao"
  },
  {
    nome: "Percepção",
    penalidade: false,
    treinamento: false,
    modificador: "sabedoria",
    id: "percepcao"
  },
  {
    nome: "Sobrevivência",
    penalidade: false,
    treinamento: false,
    modificador: "sabedoria",
    id: "sobrevivencia"
  },
]

let html = ""
pericias.forEach(p => {
  const info = (p.treinamento ? "[t]" : "") + (p.penalidade ? "[a]" : "")
  const nome = p.nome + (info ? `<br>${info}` : "")

  html += `<tr pericia-id="${p.id}" pericia-modificador="${p.modificador}">
  <td><input type="checkbox" id="pericia-${p.id}-treinada" onchange="updatePericia('${p.id}')"></td>
  <td>${nome}</td>
  <td><input type="number" id="pericia-${p.id}-total" value="0" readonly></td>
  <td>=</td>
  <td><input type="number" id="pericia-${p.id}-graduacao" value="0" readonly></td>
  <td>+</td>
  <td><input type="number" id="pericia-${p.id}-mod" class="pericia-mod-${p.modificador}" value="0" readonly></td>
  <td>+</td>
  <td><input type="number" id="pericia-${p.id}-outros" value="0" onchange="updatePericia('${p.id}')"></td>
</tr>`
})
tableElement.innerHTML += html