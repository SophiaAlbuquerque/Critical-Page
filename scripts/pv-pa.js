function updatePv() {
  const max = parseInt(document.getElementById("pv-max").value)
  let atual = parseInt(document.getElementById("pv-atual").value)

  const min = -parseInt(Math.abs(max) / 2)

  if (atual > max) {
    document.getElementById("pv-atual").value = max
  } else if (atual < min) {
    document.getElementById("pv-atual").value = min
  }
}

function updateMaxPv() {
  const max = parseInt(document.getElementById("pv-max").value)
  if (max < 1) {
    document.getElementById("pv-max").value = 1
  }

  updatePv()
}

function updatePa() {
  const pa = document.getElementById("pa")
  if (parseInt(pa.value) < 0)
    pa.value = 0
}