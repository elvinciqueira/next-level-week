(function populateUFs() {
  const ufSelect = document.querySelector('select[name="uf"]');

  fetchAPI("https://servicodados.ibge.gov.br/api/v1/localidades/estados", ufSelect);

  ufSelect.addEventListener('change', getCities);

  function fetchAPI(url, element) {
    fetch(url)
      .then(response => response.json())
      .then(data => {

        for (const key of data) {
          element.innerHTML += `<option value="${key.id}">${key.nome}</option>`
        }
      })
  }

  function getCities(event) {
    const citySelect = document.querySelector('select[name="city"]');
    const stateInput = document.querySelector('input[name="state"]');

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetchAPI(url, citySelect);

    citySelect.disabled = false;
  }
})();

