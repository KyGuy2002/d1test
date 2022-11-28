const usersTable = document.querySelector('table#users-table');
const shopsTable = document.querySelector('table#shops-table');

fetch('/api/users')
  .then(response => {
    return response.json();
  })
  .then(json => {
    setupUsersTable(json);
    return;
  }
);

fetch('/api/shops')
  .then(response => {
    return response.json();
  })
  .then(json => {
    setupShopsTable(json);
    return;
  }
);

async function setupUsersTable(json) {
    for (let i = 0; i < json.length; i++) {

        let row = document.createElement('tr');

        let id = document.createElement('td');
        id.innerHTML = json[i]['UserId'];
        let usernameItem = document.createElement('td');
        usernameItem.innerHTML = json[i]['Username']
        let coinsItem = document.createElement('td');
        coinsItem.innerHTML = json[i]['Coins'];

        let deleteButton = document.createElement('td');
        deleteButton.innerHTML = "X"
        deleteButton.setAttribute('onClick', 'return deleteUser('+json[i]['UserId']+')')

        row.appendChild(id);
        row.appendChild(usernameItem);
        row.appendChild(coinsItem);
        row.appendChild(deleteButton);

        usersTable.appendChild(row);

    }
}

async function setupShopsTable(json) {
    for (let i = 0; i < json.length; i++) {

        let row = document.createElement('tr');

        let id = document.createElement('td');
        id.innerHTML = json[i]['ShopId'];
        let shopnameItem = document.createElement('td');
        shopnameItem.innerHTML = json[i]['ShopName']
        let usernameItem = document.createElement('td');
        usernameItem.innerHTML = json[i]['Username'];

        let deleteButton = document.createElement('td');
        deleteButton.innerHTML = "X"
        deleteButton.setAttribute('onClick', 'return deleteShop('+json[i]['ShopId']+')')

        row.appendChild(id);
        row.appendChild(shopnameItem);
        row.appendChild(usernameItem);

        row.appendChild(deleteButton);

        shopsTable.appendChild(row);

    }
}







async function deleteUser(id) {
  await fetch('/api/users?id='+id, {method: 'DELETE'})
  location.reload();
}

async function deleteShop(id) {
  await fetch('/api/shops?id='+id, {method: 'DELETE'})
  location.reload();
}