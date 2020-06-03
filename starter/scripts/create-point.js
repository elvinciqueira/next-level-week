const ufSelect = document.querySelector("select[name=uf]")
const citySelect = document.querySelector("[name=city]")
const stateInput = document.querySelector("[name=state]")
const itemsToCollect = document.querySelectorAll('.items-grid li')
const collectedItems = document.querySelector('input[name="items"]')

let selectedItems = []

ufSelect.addEventListener("change", getCities)


for (const item of itemsToCollect) {
  item.addEventListener('click', handleSelected)
}

populateUFs()

function handleSelected(event) {
  const itemLi = event.target

  itemLi.classList.toggle('selected')

  const itemId = itemLi.dataset.id

  const alreadySelected = selectedItems.findIndex(item => item === itemId)

  if (alreadySelected !== -1) {
    const filteredIndex = selectedItems.filter(item => item !== itemId)

    selectedItems = filteredIndex
  } else {
    selectedItems.push(itemId)
  }

  collectedItems.value = selectedItems
}

function populateUFs() {
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json()).then(states => {

      for (state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
    })
}

function getCities(event) {
  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
  citySelect.disabled = true

  fetch(url)
    .then(res => res.json())
    .then(cities => {
      for (city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }
      citySelect.disabled = false
    })
}
