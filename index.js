let data = []; // Масив для зберігання даних


// Функція для додавання пари в масив даних
function addPair() {
    let inputPair = document.querySelector('.input-pair').value;
    let pair = inputPair.trim();
    if (pair.includes('=')) {
      data.push(pair);
      updateList();
      inputPair.value = '';
    } else {
      // Обработка ошибки, если пара не содержит знака "="
      alert('The pair must be in the format of "<name>=<value>"');
    }
  }

// Функція для оновлення списку даних у HTML
function updateList() {
  let dataList = document.querySelector('.list');
  dataList.innerHTML = '';
  data.forEach(item => {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label'); 
    checkbox.type = 'checkbox';
    checkbox.value = item;

    label.innerHTML = item;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    dataList.appendChild(listItem);
  });
}

// Функція для сортування за іменем
function sortByName() {
    data.sort((a, b) => {
      let nameA = a.split('=')[0].trim().toLowerCase();
      let nameB = b.split('=')[0].trim().toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    updateList();
  }

  // Функція для сортування за значенням
  function sortByValue() {
    data.sort((a, b) => {
      let valueA = a.split('=')[1].trim().toLowerCase();
      let valueB = b.split('=')[1].trim().toLowerCase();
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    updateList();
  }

// Функція для видалення вибраних елементів
function deleteItem() {
  let checkData = document.querySelectorAll('input[type="checkbox"]:checked');
  let unCheckData = Array.from(checkData).map(e => e.value);
  data = data.filter(item => !unCheckData.includes(item));
  updateList();
}